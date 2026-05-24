import express from "express";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.RESEND_FROM_EMAIL || "Nettekspertene <booking@nettekspertene.com>";

// Health check (Render)
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, company, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        error: "Missing required fields",
      });
    }

    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_RECEIVER_EMAIL) {
      return res.status(500).json({
        error: "Missing Resend email configuration",
      });
    }

    const result = await resend.emails.send({
      from: fromEmail,
      to: [process.env.CONTACT_RECEIVER_EMAIL],
      replyTo: email,
      subject: `Ny henvendelse fra ${name}`,
      text: `
Navn: ${name}
Email: ${email}
Telefon: ${phone || "N/A"}
Bedrift: ${company || "N/A"}

Melding:
${message}
      `,
    });

    console.log("EMAIL SENT:", result);

    return res.json({
      success: true,
    });

  } catch (error: any) {
    console.error("RESEND ERROR:", error);

    return res.status(500).json({
      error: "Failed to send email",
      details: error.message,
    });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});

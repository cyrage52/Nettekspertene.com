# Distribusjons- og integrasjonsguide (Uniweb + Render)

Denne guiden hjelper deg med å enkelt separere og distribuere applikasjonen din:
1. **Frontend (Statisk nettsted)** på **Uniweb**
2. **Backend (E-post API)** på **Render** (`https://nettekspertene-com.onrender.com`)

---

## 📁 Hvilke filer går hvor?

### 🌐 Frontend (Uniweb)
Når du bruker Uniweb som frontend-host, trenger du bare å laste opp de ferdigbygde statiske filene.

1. **Hvordan bygge frontenden:**
   Åpne terminalen i dette prosjektet og kjør:
   ```bash
   npm run build
   ```
2. **Hvor havner filene?**
   Dette oppretter en mappe som heter `dist/` i prosjektets rot.
3. **Opplasting:**
   Last opp alt **innholdet** i `dist/`-mappen direkte til roten av ditt webhotell eller FTP-server hos Uniweb. Innholdet inkluderer:
   - `index.html`
   - `assets/` (med Javascript-filer, CSS, og logo.png)

*Merk: Kontaktskjemaet er konfigurert til å automatisk sende henvendelser til din Render-backend på `https://nettekspertene-com.onrender.com/api/contact`.*

---

### ⚙️ Backend (Render)
For Express/Node.js-serveren på Render, trenger du kun backend-relaterte filer.

#### Filer som Render trenger:
- **`server.ts`** (Hovedserver-filen som vi nettopp har lagt til CORS-støtte på)
- **`package.json`** & **`package-lock.json`** (Inneholder avhengigheter som `express`, `nodemailer`, `cors`, `dotenv`)
- **`tsconfig.json`** (For TypeScript-støtte)

#### Slik konfigurerer du Render Web Service:
1. Opprett en ny **Web Service** på Render og koble til GitHub-repositoriet som inneholder serverfilene.
2. Angi følgende innstillinger:
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npx tsx server.ts`
3. Gå til **Environment**-fanen på Render-dashbordet og legg til dine konfidensielle innstillinger (miljøvariabler):

| Nøkkel | Verdi | Beskrivelse |
| :--- | :--- | :--- |
| `NODE_ENV` | `production` | Setter serveren i produksjonsmodus |
| `GMAIL_USER` | `realcyrage@gmail.com` | Gmail-kontoen som sender ut e-postene |
| `GMAIL_APP_PASSWORD` | `xxxx xxxx xxxx xxxx` | Ditt 16-tegns Google App-passord (fjern mellomrom hvis ønskelig, koden håndterer det) |
| `CONTACT_RECEIVER_EMAIL` | `realcyrage@gmail.com` | E-posten som skal motta henvendelsene (mottaker) |

---

## 🔒 Hvordan generere Gmail App-passord
For at Render skal kunne sende e-post sikkert via din Gmail-konto, må du opprette et unikt "App-passord":
1. Logg inn på din Google-konto og gå til **Sikkerhet**.
2. Slå på **2-trinns bekreftelse** hvis det ikke allerede er aktivt.
3. Søk etter **App-passord** (App passwords) i søkefeltet øverst eller under 2-trinns bekreftelse-siden.
4. Skriv inn et navn (f.eks. `Render Nettekspertene`) og klikk på **Opprett**.
5. Du får oppgitt et 16-tegns passord (f.eks. `abcd efgh ijkl mnop`). Kopier dette passordet og lim det direkte inn som verdien for din `GMAIL_APP_PASSWORD` miljøvariabel på Render dashboards.

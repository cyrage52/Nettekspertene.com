# Distribusjons- og integrasjonsguide (Uniweb + Render + Resend)

Denne guiden forklarer hvordan prosjektet distribueres:

1. Frontend som statisk nettsted hos Uniweb.
2. Backend som e-post-API hos Render.
3. E-postsending via Resend.

## Frontend (Uniweb)

Når du bruker Uniweb som frontend-host, laster du opp de ferdigbygde statiske filene.

1. Bygg frontenden:
   ```bash
   npm run build
   ```
2. Bygget havner i `dist/`.
3. Last opp innholdet i `dist/` til roten av webhotellet eller FTP-serveren hos Uniweb.

Kontaktskjemaet sender henvendelser til Render-backenden på:

```text
https://nettekspertene-com.onrender.com/api/contact
```

## Backend (Render)

Render trenger disse filene fra repoet:

- `server.ts`
- `package.json`
- `package-lock.json`
- `tsconfig.json`

## Render Web Service

1. Opprett en ny Web Service på Render og koble den til GitHub-repositoriet.
2. Bruk disse innstillingene:

| Felt | Verdi |
| :--- | :--- |
| Environment | `Node` |
| Build Command | `npm install && npm run build` |
| Start Command | `npm start` |

3. Legg inn disse miljøvariablene i Render:

| Nøkkel | Eksempel | Beskrivelse |
| :--- | :--- | :--- |
| `NODE_ENV` | `production` | Kjører serveren i produksjonsmodus. |
| `RESEND_API_KEY` | `re_xxxxxxxxx` | API-nøkkelen fra Resend. |
| `RESEND_FROM_EMAIL` | `Nettekspertene <booking@nettekspertene.com>` | Verifisert avsender i Resend. |
| `CONTACT_RECEIVER_EMAIL` | `booking@nettekspertene.com` | E-posten som mottar kontaktskjemaet. |

## Resend

Bekreft domenet eller avsenderadressen i Resend før Render settes i produksjon. Serveren bruker Resend som eneste e-postleverandør.

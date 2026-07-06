# Festival Donne fra le Stelle — sito web

Sito one-page per il Festival Donne fra le Stelle (Padova, 16–17 Ottobre 2026), realizzato con **Astro.js**, **CSS puro** (scoped styles per componente) e **GSAP**. Tutti i testi e le immagini derivano dal PDF sponsorship fornito.

## Requisiti

- Node.js 18.20.8+ o 20.3+ (consigliato Node 20/22)
- npm

## Comandi

```bash
npm install       # installa le dipendenze
npm run dev       # avvia il server di sviluppo (http://localhost:4321)
npm run build     # build statica di produzione in dist/
npm run preview   # anteprima locale della build di produzione
```

## Struttura

```
src/
  components/   componenti riutilizzabili (Navbar, TierCard, ComparisonTable, ContactForm, ...)
  sections/     sezioni della pagina (Hero, Festival, WhySponsor, Sponsorship, Venue, Publication, Contact)
  data/         content.ts — tutti i testi del sito in un unico file, tratti dal PDF
  layouts/      BaseLayout.astro — head/meta/font
  pages/        index.astro — composizione finale della pagina
  styles/       global.css — variabili CSS (colori, font), reset di base, stelle di sfondo, marquee
public/
  images/       asset estratti/ottimizzati dal PDF (logo, foto sede, loghi patrocinatori, copertina libro)
```

## Da fare prima del lancio

1. **Formspree**: creare un form su [formspree.io](https://formspree.io) collegato alla casella `donnefralestelle@gmail.com` e sostituire `REPLACE_WITH_FORM_ID` in `src/data/content.ts` (campo `contact.formEndpoint`) con l'endpoint reale.
2. **Dominio/hosting**: il sito è pronto per il deploy su Netlify (build command `npm run build`, publish directory `dist`).
3. Verificare che i loghi dei patrocinatori nella sezione hero (marquee) e i relativi testi alternativi siano corretti; alcuni sono stati identificati visivamente dal PDF e possono essere rinominati in `src/data/content.ts` → `sponsorLogos` se necessario.

## Note di design

- Font: **Playfair Display** (titoli) + **Inter** (testo)
- Palette: blu/indaco spaziale, oro come accento, sfondo chiaro per le sezioni di contenuto
- Animazioni GSAP con `ScrollTrigger` per reveal allo scroll, entrance della hero e parallax leggero; rispettano `prefers-reduced-motion`
- Tabella comparativa sponsor: tabella completa su desktop, accordion per tier su mobile
# dfls

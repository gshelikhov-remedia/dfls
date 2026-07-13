// Contenuti testuali della pagina "/premio", tratti integralmente dalla pagina live
// https://www.donnefralestelle.com/premio/ (bando del Premio Nazionale "Rossella Panarese").
// Nessun testo qui è stato inventato: ogni stringa deriva dal testo pubblicato sul bando.

export const premioMeta = {
  title: "Premio Nazionale “Rossella Panarese” | Donne fra le Stelle",
  description:
    "Un appuntamento nazionale per raccontare lo spazio, la ricerca e l'innovazione attraverso le voci delle donne. Terza edizione del Premio Nazionale “Rossella Panarese” per la divulgazione scientifica.",
};

export const premioHero = {
  eyebrow: "III Edizione",
  titleLine1: "Premio Nazionale",
  titleLine2: "Rossella Panarese",
  tagline:
    "Un appuntamento nazionale per raccontare lo spazio, la ricerca e l'innovazione attraverso le voci delle donne.",
  intro:
    "L'Associazione ODV Donne fra le Stelle bandisce la terza edizione del Premio Nazionale “Rossella Panarese” per la divulgazione scientifica sui temi legati allo spazio.",
  deadlineLabel: "Scadenza candidature",
  deadline: "13 Settembre 2026",
  ctaPrimary: { label: "Scarica il Bando", href: "https://www.donnefralestelle.com/wp-content/uploads/2026/03/Bando-2026.pdf" },
  ctaSecondary: { label: "Modalità di partecipazione", href: "#modalita" },
};

export const premioScopo = {
  heading: "Il Premio",
  paragraphs: [
    "Scopo del Premio è mantenere vivo il ricordo della giornalista Rossella Panarese, ideatrice e curatrice di Radio3 Scienza, e la sua costante attenzione verso l'astrofisica, l'astronautica e le attività aerospaziali, attribuendo alla cultura scientifica un ruolo centrale nella società contemporanea.",
    "Il Premio, patrocinato da Confindustria Veneto Est, è aperto alla partecipazione di persone fisiche maggiorenni di qualsiasi nazionalità che abbiano contribuito, contribuiscano o intendano contribuire alla divulgazione delle scienze e delle attività riguardanti lo spazio, rendendole accessibili, fruibili e di interesse comune.",
    "La partecipazione al bando è riservata esclusivamente a persone che abbiano compiuto il 18° anno di età alla data di presentazione della candidatura.",
    "Non sono ammesse candidature da parte di soggetti giuridici diversi dalle persone fisiche.",
  ],
  requisitiHeading: "Il Premio è rivolto a chi:",
  requisiti: [
    "Ha contribuito, contribuisce o intende contribuire alla divulgazione scientifica",
    "Opera nel racconto delle scienze e delle attività riguardanti lo spazio",
    "Promuove una cultura scientifica accessibile, fruibile e di interesse comune",
  ],
};

export const premioCategorie = {
  heading: "Il Premio prevede due sezioni di concorso",
  sezioni: [
    {
      key: "video",
      name: "Sezione Video",
      moduloLabel: "Modulo partecipazione SEZIONE VIDEO",
      moduloHref: "https://www.donnefralestelle.com/wp-content/uploads/2026/01/Modulo-Iscrizione-2025_Categoria-Video.pdf",
    },
    {
      key: "podcast",
      name: "Sezione Podcast",
      moduloLabel: "Modulo partecipazione SEZIONE PODCAST",
      moduloHref: "https://www.donnefralestelle.com/wp-content/uploads/2026/01/Modulo-Iscrizione-2025_Categoria-Podcast.pdf",
    },
  ],
};

export const premioModalita = {
  heading: "Modalità di partecipazione",
  intro: "I contributi dovranno essere inviati entro la scadenza indicata, seguendo le modalità riportate di seguito.",
  steps: [
    {
      key: "scadenza",
      title: "Scadenza",
      text: "Le candidature dovranno pervenire entro e non oltre la mezzanotte di domenica 13 settembre 2026.",
    },
    {
      key: "invio",
      title: "Invio dei materiali",
      text: "I video e i podcast dovranno essere inviati alla segreteria dell'Associazione Donne fra le Stelle all'indirizzo email: donnefralestelle@gmail.com",
    },
    {
      key: "documentazione",
      title: "Documentazione richiesta",
      text: "Ogni candidatura dovrà includere:",
      list: [
        "il modulo di partecipazione compilato in ogni sua parte",
        "i dati anagrafici del/della partecipante",
        "un breve profilo biografico",
        "una presentazione del lavoro proposto",
      ],
    },
    {
      key: "requisiti",
      title: "Requisiti richiesti",
      text: "I lavori in concorso dovranno:",
      list: [
        "riguardare qualsiasi aspetto inerente alle ricerche e alle attività in ambito spaziale;",
        "essere inediti e originali, appositamente realizzati per il concorso, pena esclusione;",
        "avere una durata massima di 15 minuti.",
      ],
      note: "Non è consentita la partecipazione della medesima persona ad entrambe le categorie.",
    },
  ],
};

export const premioPremi = {
  heading: "I Premi",
  paragraphs: [
    "I lavori pervenuti saranno valutati da una Giuria composta da esponenti del mondo scientifico, accademico, della ricerca e della comunicazione.",
    "La Giuria, a proprio insindacabile giudizio, designerà i vincitori delle due categorie.",
    "La cerimonia di premiazione si terrà nel pomeriggio di sabato 17 ottobre 2026 presso il Centro Culturale Altinate San Gaetano di Padova, al termine della 5ª edizione del Festival “Donne fra le Stelle” (16–17 ottobre 2026).",
    "I vincitori saranno invitati a partecipare in presenza o, qualora necessario, in collegamento da remoto.",
  ],
  perCategoriaLabel: "Per ciascuna categoria (Podcast e Video) è previsto:",
  premi: [
    {
      key: "trofeo",
      title: "Un trofeo",
      text: "appositamente realizzato per il Premio “Rossella Panarese”",
    },
  ],
  noteHeading: "Note importanti",
  note: [
    "I premi sono assegnati singolarmente per ciascuna categoria.",
    "Qualora l'opera vincitrice sia stata realizzata da un gruppo, il premio resterà unico e consisterà in un solo trofeo e un solo viaggio.",
    "Non è prevista l'assegnazione di premi multipli né la suddivisione del premio tra più componenti del gruppo.",
  ],
  closing:
    "Le modalità organizzative del viaggio saranno concordate con il vincitore nel rispetto delle disponibilità del Centro EAC ESA e delle condizioni previste dal presente Bando.",
};

export const premioModulistica = {
  heading: "Modulistica",
  documenti: [
    {
      key: "bando",
      label: "Bando",
      description: "Il regolamento completo del Premio Nazionale “Rossella Panarese” 2026.",
      href: "https://www.donnefralestelle.com/wp-content/uploads/2026/03/Bando-2026.pdf",
    },
    {
      key: "video",
      label: "Modulo partecipazione SEZIONE VIDEO",
      description: "Modulo di iscrizione per la sezione video.",
      href: "https://www.donnefralestelle.com/wp-content/uploads/2026/01/Modulo-Iscrizione-2025_Categoria-Video.pdf",
    },
    {
      key: "podcast",
      label: "Modulo partecipazione SEZIONE PODCAST",
      description: "Modulo di iscrizione per la sezione podcast.",
      href: "https://www.donnefralestelle.com/wp-content/uploads/2026/01/Modulo-Iscrizione-2025_Categoria-Podcast.pdf",
    },
  ],
};

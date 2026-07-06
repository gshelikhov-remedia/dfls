// Contenuti testuali del sito, tratti integralmente dal PDF
// "Festival DFS 2026 Sponsorship" fornito dal cliente.
// Nessun testo qui è stato inventato: ogni stringa deriva da una delle 10 pagine del PDF.

export const site = {
  title: "Festival Donne fra le Stelle 2026 | Padova, 16–17 Ottobre",
  description:
    "Percorrere ambienti estremi come chiave di conoscenza e di nuove sfide. Il Festival Donne fra le Stelle, Padova 16–17 Ottobre 2026, Centro Culturale Altinate San Gaetano.",
};

export const nav = [
  { label: "Il Festival", href: "#festival" },
  { label: "Perché Sponsorizzare", href: "#perche-sponsorizzare" },
  { label: "Pacchetti Sponsor", href: "#pacchetti" },
  { label: "La Sede", href: "#sede" },
  { label: "Contatti", href: "#contatti" },
];

export const hero = {
  eyebrow: "Festival",
  title: "Donne fra le Stelle",
  tagline:
    "Percorrere ambienti estremi come chiave di conoscenza e di nuove sfide",
  location: "Padova, 16–17 Ottobre 2026",
  venue: "Centro Culturale Altinate San Gaetano",
  ctaPrimary: { label: "Scopri i pacchetti sponsor", href: "#pacchetti" },
  ctaSecondary: { label: "Contattaci", href: "#contatti" },
  patrociniLabel: "Evento patrocinato e sostenuto da:",
};

export const sponsorLogos = [
  { src: "/images/sponsors/stemma-padova.jpg", alt: "Comune di Padova" },
  { src: "/images/sponsors/mur.svg", alt: "Ministero dell'Università e della Ricerca" },
  { src: "/images/sponsors/asi.webp", alt: "Agenzia Spaziale Italiana" },
  { src: "/images/sponsors/esa.svg", alt: "ESA — Sotto l'alto patrocinio del Parlamento europeo" },
  { src: "/images/sponsors/inaf.jpg", alt: "INAF — Istituto Nazionale di Astrofisica" },
  { src: "/images/sponsors/sait.webp", alt: "Società Astronomica Italiana" },
  { src: "/images/sponsors/aipas.webp", alt: "AIPAS — Associazione delle Imprese per le Attività Spaziali" },
  { src: "/images/sponsors/universita-padova.webp", alt: "Università degli Studi di Padova" },
  { src: "/images/sponsors/infn.webp", alt: "INFN — Istituto Nazionale di Fisica Nucleare" },
  { src: "/images/sponsors/cnr.jpg", alt: "CNR — Consiglio Nazionale delle Ricerche" },
  { src: "/images/sponsors/dipartimento-fisica-astronomia.webp", alt: "Dipartimento di Fisica e Astronomia Galileo Galilei" },
  { src: "/images/sponsors/coelum-astronomia.webp", alt: "Coelum Astronomia" },
  { src: "/images/sponsors/planetario-padova.jpg", alt: "Planetario di Padova" },
  { src: "/images/sponsors/ingv.jpg", alt: "INGV — Istituto Nazionale di Geofisica e Vulcanologia" },
  { src: "/images/sponsors/castello-di-san-pelagio.jpg", alt: "Castello di San Pelagio" },
  { src: "/images/sponsors/wia.jpg", alt: "WIA" },
  { src: "/images/sponsors/steamiamoci.webp", alt: "STEAMiamoci" },
  { src: "/images/sponsors/fondazione-roberta-lanzino.webp", alt: "Fondazione Roberta Lanzino" },
  { src: "/images/sponsors/fidapa-bpw.webp", alt: "FIDAPA – BPW Italy" },
  { src: "/images/sponsors/inclusione-donna.jpg", alt: "#InclusioneDonna" },
  { src: "/images/sponsors/acca-tagliando.jpg", alt: "Accatagliato" },
  { src: "/images/sponsors/alpm.webp", alt: "ALPM" },
];

export const festival = {
  heading: "Il Festival",
  paragraphs: [
    "Le protagoniste delle varie edizioni di Donne fra le Stelle sono state scienziate, astrofisiche, geofisiche, ingegnere aerospaziali e manager d'industria, imprenditrici, startupper e studentesse che, con le loro testimonianze, hanno offerto uno sguardo ampio e sfaccettato sul contributo femminile nei settori della ricerca scientifica e spaziale, così come nel mondo industriale.",
    "Nel corso degli incontri sono stati esplorati temi di grande attualità: dalla conoscenza dell'universo alla tutela dell'ambiente, dal ruolo delle tecnologie spaziali per la salvaguardia del pianeta fino alla nuova corsa allo spazio.",
    "Le relatrici hanno inoltre condiviso aspirazioni, percorsi professionali, ostacoli superati e risultati raggiunti, trasmettendo un forte messaggio di incoraggiamento alle nuove generazioni a intraprendere studi tecnico-scientifici e a scegliere con fiducia carriere in ambito STEM.",
    "Il Festival Donne fra le Stelle si rivolge a un pubblico ampio, composto da studenti, genitori e nonni, con l'obiettivo di guidare e ispirare le nuove generazioni, nonché a tutti coloro che sono curiosi di scoprire cosa si fa nel mondo dello spazio e comprendere l'importanza degli investimenti in questo settore.",
  ],
  highlight:
    "È un Festival di divulgazione non convenzionale e di elevata professionalità, nato per mettere in luce le numerose figure femminili e professioniste che contribuiscono all'innovazione e alla crescita di questo ambito. Il Festival si articolerà in due giornate caratterizzate da una forte partecipazione sia del mondo scientifico che di quello industriale.",
  awardsHeading: "Sono stati istituiti anche due premi",
  awards: [
    {
      name: "Donne fra le Stelle Award",
      description:
        "Indetto dalla IV edizione con la premiazione della celeberrima prima ingegnera aeronautica Amalia Ercoli-Finzi",
    },
    {
      name: "Rossella Panarese Award",
      description:
        "Indetto dalla III edizione alla memoria della grande omonima giornalista di Radio3 Scienza",
    },
  ],
};

export const whySponsor = {
  heading: "Perché Sponsorizzare Donne fra le Stelle",
  reasons: [
    {
      title: "Sostenere la parità di genere e l'empowerment femminile in settori strategici",
      text: "Sponsorizzare \"Donne fra le Stelle\" significa sostenere concretamente la promozione della presenza femminile in ambiti chiave come la scienza, la tecnologia, l'aerospazio e l'industria. L'evento valorizza le competenze e i successi delle donne, contribuendo a una società più equa e innovativa.",
    },
    {
      title: "Promuovere l'innovazione e la crescita del settore tecnologico e industriale",
      text: "Essere sponsor di un festival che mette in luce il ruolo delle donne nei settori STEM (Science, Technology, Engineering, Mathematics) e industriali permette di associarsi ai valori di innovazione, crescita e avanguardia. Le testimonianze e i progetti presentati favoriscono la diffusione di idee e la nascita di nuove collaborazioni.",
    },
    {
      title: "Investire sul futuro: orientamento e ispirazione per le nuove generazioni",
      text: "Il festival si rivolge soprattutto a studenti e famiglie, con l'obiettivo di guidare e ispirare le giovani generazioni verso studi e carriere scientifiche e tecnologiche. Sponsorizzare l'evento rappresenta un investimento nel capitale umano del futuro, contribuendo alla formazione di nuove professionalità indispensabili per lo sviluppo del Paese.",
    },
    {
      title: "Valorizzare la responsabilità sociale",
      text: "Partecipare come sponsor rafforza l'immagine dell'azienda/ente come attore responsabile e impegnato socialmente, attento ai valori della diversità, dell'inclusione e dello sviluppo sostenibile. L'appoggio a iniziative di divulgazione scientifica e di orientamento rafforza la reputazione presso istituzioni, comunità e partner.",
    },
    {
      title: "Visibilità qualificata in un contesto di alto profilo",
      text: "Il Festival è riconosciuto come incontro di divulgazione di alta professionalità, con la presenza di relatrici di rilievo ed esperte dei settori scientifico e industriale. Sponsorizzando l'evento, ci si garantisce visibilità presso un pubblico qualificato e motivato, nonché la possibilità di networking con esponenti di prim'ordine del comparto aerospaziale, scientifico, accademico e industriale.",
    },
    {
      title: "Un evento unico a livello nazionale, simbolo di eccellenza",
      text: "Donne fra le Stelle è un appuntamento non convenzionale e unico in Italia, capace di portare all'attenzione temi di grande attualità e rilevanza sociale. Essere sponsor di una manifestazione così distintiva significa legare il proprio marchio a valori di eccellenza, originalità e spirito pionieristico.",
    },
  ],
  closing: "Attendiamo fiduciosi la conferma della vostra adesione",
};

export type Tier = {
  key: "polare" | "firmamento" | "cadente" | "nascente";
  name: string;
  subtitle: string;
  price: string;
  highlight: boolean;
  benefits: string[];
};

export const tiers: Tier[] = [
  {
    key: "nascente",
    name: "Stella Nascente",
    subtitle: "Sponsor Sostenitore",
    price: "€500",
    highlight: false,
    benefits: [
      "Logo nella sezione \"Sponsor Sostenitori\" del sito e del programma",
      "Possibilità di inserire materiale promozionale nei welcome kit",
      "Attestato di ringraziamento digitale",
    ],
  },
  {
    key: "cadente",
    name: "Stella Cadente",
    subtitle: "Silver Sponsor",
    price: "€1.500",
    highlight: false,
    benefits: [
      "Logo su sito web e programma digitale dell'evento",
      "Possibilità di intervento con una relatrice",
      "Possibilità di esporre roll-up in un'apposita area",
      "Menzione tra gli sponsor durante l'evento e sui social",
      "Possibilità di inserire materiale promozionale nella cartella dell'evento",
    ],
  },
  {
    key: "firmamento",
    name: "Stella del Firmamento",
    subtitle: "Gold Sponsor",
    price: "€2.500",
    highlight: false,
    benefits: [
      "Logo ben visibile sul sito ufficiale e sui materiali informativi",
      "Spazio per pubblicizzare materiale informativo dell'azienda/ente (brochure, flyer, gadget)",
      "Possibilità di intervento con due relatrici",
      "Menzione nei comunicati stampa e nei social ufficiali dell'evento",
      "Possibilità di inserire materiali promozionali nei welcome kit",
      "Ringraziamento durante le sessioni principali",
    ],
  },
  {
    key: "polare",
    name: "Stella Polare",
    subtitle: "Main Sponsor",
    price: "€5.000",
    highlight: true,
    benefits: [
      "Logo in posizione di massima evidenza su tutti i materiali promozionali (locandine, sito, social, comunicati stampa)",
      "Visibilità esclusiva del logo aziendale sul banner sotto il palco, garantendo massima visibilità nelle riprese televisive, nelle foto ufficiali e durante l'evento streaming",
      "Possibilità di intervento con tre relatrici",
      "Inserimento di contenuti editoriali nella cartella stampa e/o gadget con il proprio brand nel welcome kit",
      "Intervista dedicata a rappresentanti dell'azienda",
      "Logo su backdrop e roll-up principali in sala",
      "Ringraziamento istituzionale durante il discorso inaugurale e conclusivo",
      "Contributo alla cena sociale con menzione speciale",
    ],
  },
];

export const comparisonTable = {
  columns: ["Stella Nascente", "Stella Cadente", "Stella del Firmamento", "Stella Polare"],
  columnSubtitles: ["Sostenitore", "Silver Sponsor", "Gold Sponsor", "Main Sponsor"],
  priceRow: ["€500", "€1.500", "€2.500", "€5.000"],
  rows: [
    { label: "Logo in prominenza", values: [false, false, true, true] },
    { label: "Intervento speaker", values: [false, "1", "2", "3"] },
    { label: "Materiale per la cartella stampa", values: [false, false, true, true] },
    { label: "Materiale promozionale", values: [true, true, true, true] },
    { label: "Visibilità massima", values: [true, true, true, true] },
    { label: "Logo sul banner sotto palco", values: [false, false, false, true] },
    { label: "Intervista dedicata", values: [false, false, false, true] },
    { label: "Roll-up in sala", values: [false, true, true, true] },
    { label: "Menzione speciale durante la cena", values: [false, false, false, true] },
    { label: "Ringraziamento speciale", values: [false, false, true, true] },
    { label: "Menzionato nella lista sponsor", values: [true, true, true, true] },
    { label: "Attestato di ringraziamento", values: [true, true, true, true] },
  ],
};

export const venue = {
  heading: "La Sede",
  name: "Centro Culturale Altinate San Gaetano",
  gallery: [
    {
      src: "/images/venue-entrance.webp",
      alt: "Ingresso del Centro Culturale Altinate San Gaetano con i totem del Festival Donne fra le Stelle",
      caption: "Ingresso Centro Culturale",
    },
    {
      src: "/images/venue-gala.webp",
      alt: "Sala allestita per la cena di gala con tavoli rotondi e illuminazione scenografica",
      caption: "16 Ottobre 2026 — Cena di gala",
    },
    {
      src: "/images/venue-auditorium.webp",
      alt: "Sala Polivalente Auditorium allestita per le sessioni del Festival",
      caption: "Sala Polivalente Auditorium — sessioni del Festival",
    },
    {
      src: "/images/venue-agora.webp",
      alt: "Agorà del Centro Culturale, spazio per mostre ed exhibit",
      caption: "Agorà — mostre ed exhibit \"Lasciare spazio alle idee\"",
    },
  ],
};

export const publication = {
  quote: "Il Festival Donne fra le Stelle è un appuntamento da non mancare!",
  quoteSecondary: "Voci di donne che accendono i sogni di tutti",
  bookImage: "/images/book-cover-flat.webp",
  bookAlt: "Copertina del libro \"Donne fra le stelle\" pubblicato da Springer Nature",
  payoff: "Curato da Patrizia Caraveo e Annamaria Nassisi, edito da Springer.",
  qrCode: "/images/qr-code.svg",
  qrAlt: "QR code per acquistare il libro su Springer",
  springerUrl: "https://link.springer.com/book/10.1007/978-3-031-83823-1",
  ctaLabel: "Scopri il libro su Springer",
};

export const contact = {
  heading: "Contatti",
  email: "donnefralestelle@gmail.com",
  phone: "+39 328 314 8331",
  website: "www.donnefralestelle.com",
  presidentName: "Annamaria Nassisi",
  presidentRole: "Presidente Festival",
  presidentEmail: "presidentefestival@donnefralestelle.com",
  formEndpoint: "https://formspree.io/f/REPLACE_WITH_FORM_ID",
};

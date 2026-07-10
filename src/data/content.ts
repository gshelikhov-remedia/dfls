// Contenuti testuali del sito, tratti integralmente dal PDF
// "Festival DFS 2026 Sponsorship" fornito dal cliente.
// Nessun testo qui è stato inventato: ogni stringa deriva da una delle 10 pagine del PDF.

export const site = {
  title: "Festival Donne fra le Stelle 2026 | Padova, 16–17 Ottobre",
  description:
    "Percorrere ambienti estremi come chiave di conoscenza e di nuove sfide. Il Festival Donne fra le Stelle, Padova 16–17 Ottobre 2026, Centro Culturale Altinate San Gaetano.",
};

export const nav = [
  { label: "Chi Siamo", href: "#festival" },
  { label: "Programma", href: "#programma" },
  { label: "Perché Sponsorizzare", href: "#perche-sponsorizzare" },
  { label: "Pacchetti Sponsor", href: "#pacchetti" },
  { label: "La Sede", href: "#sede" },
  { label: "Edizioni Precedenti", href: "#edizioni-precedenti" },
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
  { src: "/images/sponsors/esa.svg", alt: "ESA — Sotto l'alto patrocinio del Parlamento europeo", url: "https://www.esa.int/" },
  { src: "/images/sponsors/inaf.jpg", alt: "INAF — Istituto Nazionale di Astrofisica" },
  { src: "/images/sponsors/sait.webp", alt: "Società Astronomica Italiana" },
  { src: "/images/sponsors/aipas.webp", alt: "AIPAS — Associazione delle Imprese per le Attività Spaziali", url: "https://aipas.it/" },
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
  { src: "/images/sponsors/remedia-logo-positive.svg", alt: "Remedia", url: "https://www.remediagroup.it/" },
];

export const festival = {
  heading: "Il Festival",
  paragraphs: [
    "Le protagoniste del Festival Donne fra le Stelle sono scienziate, astrofisiche, geofisiche, ingegnere aerospaziali e manager d'industria, imprenditrici, startupper e studentesse che, con le loro testimonianze, offrono uno sguardo ampio e sfaccettato sul contributo femminile nei settori della ricerca scientifica e spaziale, così come nel mondo industriale.",
    "Nel corso dei precedenti quattro eventi di successo sono stati esplorati temi di grande attualità: dalla conoscenza dell'universo alla tutela dell'ambiente, dal ruolo delle tecnologie spaziali per la salvaguardia del pianeta fino alla nuova corsa allo spazio.",
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

export type DirettivoMember = {
  name: string;
  role: string;
  bio: string;
  photo?: string;
};

export const direttivo = {
  heading: "Il Direttivo",
  intro:
    "Il Festival Donne fra le Stelle è organizzato da un Direttivo composto da:",
  members: [
    {
      name: "Annamaria Nassisi",
      role: "Presidente del Festival",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod, nisi vel consectetur euismod, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl. Nam auctor, urna vitae tincidunt luctus, nisl nunc aliquam nunc.",
    },
    {
      name: "Dante Fortunato",
      role: "Presidente e fondatore dell'Associazione",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod, nisi vel consectetur euismod, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl. Nam auctor, urna vitae tincidunt luctus, nisl nunc aliquam nunc.",
    },
    {
      name: "Patrizia Caraveo",
      role: "Presidente del Comitato Scientifico",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod, nisi vel consectetur euismod, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl. Nam auctor, urna vitae tincidunt luctus, nisl nunc aliquam nunc.",
    },
    {
      name: "Paolo Conte",
      role: "Presidente della Giuria del premio Rossella Panarese",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod, nisi vel consectetur euismod, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl. Nam auctor, urna vitae tincidunt luctus, nisl nunc aliquam nunc.",
    },
  ] as DirettivoMember[],
};

export type ProgrammeSession = {
  time: string;
  title: string;
  moderator?: string;
  description?: string[];
  speakers?: string[];
  note?: string;
  interlude?: boolean;
};

export type ProgrammeBlock = {
  heading?: string;
  sessions: ProgrammeSession[];
};

export type ProgrammeDay = {
  tabLabel: string;
  dateLabel: string;
  venueLabel: string;
  blocks: ProgrammeBlock[];
};

export const programmeHeading = {
  title: "Programma",
  tagline: "Padova, 16–17 ottobre 2026",
};

export const programmeDays: ProgrammeDay[] = [
  {
    tabLabel: "16 Ottobre",
    dateLabel: "16 ottobre 2026",
    venueLabel: "Centro Culturale Altinate San Gaetano — Sala Polivalente Auditorium",
    blocks: [
      {
        heading: "Sessione Plenaria",
        sessions: [
          {
            time: "9:30",
            title: "Saluti Istituzionali",
            speakers: [
              "Sergio Giordani, Sindaco di Padova",
              "Alberto Stefani, Presidente Regione Veneto",
              "Daniela Mapelli, Rettrice dell'Università di Padova",
              "Elio Orio, Direttore Conservatore o Pierluigi Piran, Vicedirettore Conservatorio (inviare invito)",
              "Roberto Ragazzoni, Presidente INAF",
              "Simonetta Cheli, Director of ESA EO Programmes and Head of ESRIN",
              "Teodoro Valente, Presidente ASI",
            ],
          },
          {
            time: "10:10",
            title: "Saluto di benvenuto del Direttivo",
            speakers: [
              "Dante Fortunato, Fondatore di Donne fra le stelle e Presidente dell'Associazione a.i.",
              "Annamaria Nassisi, Presidente Festival Donne fra le stelle",
              "Patrizia Caraveo, Presidente Comitato tecno-scientifico Donne fra le stelle",
              "Paolo Conte, Presidente del Premio Rossella Panarese Donne fra le stelle",
            ],
          },
          {
            time: "10:30",
            title: "Dialogo con gli astronauti",
            description: [
              "Un momento di confronto diretto con astronauti che hanno vissuto l'esperienza unica del volo spaziale. Il dialogo offre l'opportunità di ascoltare storie personali, curiosità e riflessioni sulle missioni, la preparazione fisica e mentale, le sfide della vita a bordo della Stazione Spaziale Internazionale, e l'importanza della ricerca scientifica nello spazio. Dalle emozioni del lancio alla collaborazione internazionale, i partecipanti potranno porre domande e scoprire gli aspetti meno conosciuti dell'esplorazione spaziale, ispirandosi ai racconti di chi ha visto la Terra da una prospettiva straordinaria",
            ],
            speakers: [
              "Anthea Comellini, ESA Astronaut Reserve e Paolo Nespoli o Walter Villadei (in attesa di una conferma della partecipazione di Anthea per finalizzazione)",
            ],
          },
          {
            time: "11:30",
            title: "Video TAS Space for life e Concertisti Conservatorio (5-7 min)",
            interlude: true,
          },
          {
            time: "11:40",
            title: "Tavola istituzionale su realtà industriali e prospettive",
            moderator: "Moderatrice: TBD (da contattare)",
            description: [
              "Un confronto aperto tra associazioni industriali e distretti regionali, volto ad analizzare il ruolo strategico delle filiere territoriali e delle reti associative nello sviluppo del settore spaziale italiano. Il panel offrirà una panoramica sulle eccellenze regionali, sulle sinergie tra imprese, università e ricerca, nonché sulle prospettive di crescita grazie a nuove politiche di innovazione, internazionalizzazione e sostenibilità. I relatori porteranno le diverse esperienze del tessuto industriale diffuso, mettendo a fuoco le opportunità offerte dalla collaborazione interregionale e la visione condivisa di un ecosistema nazionale sempre più integrato e competitivo su scala europea e globale.",
            ],
            speakers: [
              "Manila Marcuccio, CTNA",
              "Federico Zoppas, RIR AIR Veneto",
              "Elena Toson, AIPAS",
              "Frida Paolella, Regione Marche",
            ],
          },
          {
            time: "12:30",
            title: "Assegnazione Premio “Donne fra le Stelle”",
            interlude: true,
          },
          {
            time: "13:00",
            title: "Lunch break",
            interlude: true,
          },
        ],
      },
      {
        heading: "Pomeriggio",
        sessions: [
          {
            time: "14:30",
            title: "Scopri le ultime innovazioni e le nuove tecnologie",
            moderator: "Moderatrice: TBD (da verificare)",
            description: [
              "Un incontro dedicato a quantistica, intelligenza artificiale e innovazione, pensato per offrire una panoramica sulle nuove frontiere della ricerca e sulle applicazioni che stanno ridefinendo il futuro. Esperti e appassionati si confronteranno sui temi che stanno cambiando il panorama tecnologico e scientifico.",
            ],
            speakers: [
              "Marilù Chiofalo, Docente Università di Pisa, fisica quantistica",
              "Francesca Ferlaino, fisica quantistica nominata scienziata 2026 (da remoto Austria da verificare)",
              "Elena Pinetti, astrofisica computazionale, Simons Foundation (da remoto US)",
              "Gabriella Greison, CEO Greison Anatomy, fisica quantistica, divulgatrice",
            ],
          },
          {
            time: "15:40",
            title: "Sostenibilità dello spazio e normative necessarie",
            description: [
              "Uno spazio sempre più affollato richiede nuove regole e soluzioni per garantirne la sostenibilità. In questo incontro esploreremo insieme le sfide legate alla gestione responsabile delle risorse spaziali, il problema dei detriti orbitali e il ruolo delle normative internazionali per preservare l'ambiente spaziale per le generazioni future. Esperti del settore discuteranno delle migliori pratiche, delle regole attuali e delle prospettive per uno sviluppo sostenibile oltre l'atmosfera terrestre.",
              "Breve dialogo con Patrizia Caraveo autrice del libro “Ecologia Spaziale”, 10 min, segue tavola rotonda con:",
            ],
            speakers: [
              "Marina Ruggeri, Università Roma TRE, Space Debris Mitigation",
              "Luisa Ruggiero, TAS, Space Law e industria",
              "Enrica Maria Ghia, GHIA Studio Legale Associato, Space Law e quadro normativo",
            ],
          },
          {
            time: "16:40",
            title: "Video “Laboratorio in Antartide” di Andrea Bettini e Concertisti Conservatorio (5-7 min)",
            interlude: true,
          },
          {
            time: "16:50",
            title: "Ambienti Estremi: comunanze fra Spazio, Artico e Subacqueo",
            description: [
              "Spazio, Artico e ambienti subacquei: territori affascinanti, ma estremi, dove la sopravvivenza e l'innovazione sono messe costantemente alla prova. Questo incontro vuole esplorare le sorprendenti comunanze tra questi tre mondi, dalle sfide ambientali alle tecnologie avanzate necessarie per operare in condizioni ostili. Esperti di diverse discipline condivideranno esperienze e soluzioni, mostrando come le conoscenze acquisite in un settore possano essere preziose anche per gli altri, offrendo nuove prospettive su esplorazione, sicurezza e sostenibilità.",
            ],
            speakers: [
              "Chiara Montanari, Base Polare",
              "TBD, Marina per Subacqueo",
              "Maria Battagliere, ASI, Spazio & Subacqueo",
            ],
          },
          {
            time: "18:00",
            title: "Assegnazione Premio Nazionale Rossella Panarese per la divulgazione scientifica spaziale",
            description: [
              "Premio dedicato alla giornalista di Radio3 Scienza e che si era resa disponibile per collaborare alla prima edizione di Donne fra le stelle. Da qui l'idea di indire un premio in suo nome dedicato a ricercatori, giornalisti, studiosi, autori, registi, blogger che con il loro impegno, e attraverso la loro arte di comunicatori, hanno contribuito a divulgare la scienza spaziale.",
              "Rossella ha introdotto la scienza nei palinsesti di RAI-Radio3: dalle trasmissioni della prima metà degli Anni Novanta (Palomar, Futura e Duemila), al 2003, quando ideò Radio3 Scienza, l'attuale quotidiano scientifico di RAI-Radio3, di cui Rossella è stata curatrice e conduttrice fino alla sua prematura scomparsa.",
              "Una vita dedicata alla comunicazione scientifica, anche attraverso le attività di insegnamento che ha svolto alla SISSA di Trieste, alla Sapienza Università di Roma e in molti altri corsi di formazione. Per ricordarne l'operato, il Comitato organizzatore di Donne fra le stelle ha dato vita, nel 2024, alla prima edizione del “Premio nazionale Rossella Panarese per la divulgazione scientifica spaziale”",
            ],
          },
          {
            time: "18:30",
            title: "Fine",
            note: "Visita libera delle attività esterne in Agorà",
            interlude: true,
          },
          {
            time: "20:00",
            title: "Gala Dinner",
            interlude: true,
          },
        ],
      },
    ],
  },
  {
    tabLabel: "17 Ottobre",
    dateLabel: "17 ottobre 2026",
    venueLabel: "Centro Culturale Altinate San Gaetano — Sala Polivalente Auditorium",
    blocks: [
      {
        sessions: [
          {
            time: "9:30",
            title: "Luna: da Galileo ai giorni nostri e con uno sguardo al futuro",
            moderator: "Moderatore: TBD",
            description: [
              "La Luna ha sempre affascinato l'umanità, ispirando scienziati, esploratori e sognatori. In questo incontro ripercorreremo la storia dell'esplorazione lunare, dai primi osservatori di Galileo fino alle missioni contemporanee, tracciando un filo che collega le scoperte del passato alle sfide e alle opportunità del futuro. Un viaggio tra scienza, tecnologia e immaginazione per scoprire come la Luna continuerà a essere protagonista nella ricerca, nell'innovazione e nell'espansione dell'orizzonte umano.",
            ],
            speakers: [
              "Laura Ferrero, ALTEC",
              "Francesca Esposito, INAF Napoli",
              "Michele Lavagna, Polimi",
              "Sara Buson, astrofisica e atronomia, Università di Würzburg (Germania)",
            ],
          },
          {
            time: "10:30",
            title: "Breve Video Moonlight o Video Artemis II altro offerto da ESA e Concertisti Conservatorio (5-7 min)",
            interlude: true,
          },
          {
            time: "10:40",
            title: "Marte e Venere: connessione fra ricerca, missioni spaziali e ricadute per la Terra",
            description: [
              "Marte e Venere, pianeti enigmatici e affascinanti, sono al centro di missioni spaziali e studi scientifici che, oltre a svelare i segreti del Sistema Solare, offrono importanti ricadute per la Terra. In questo incontro analizzeremo come la ricerca su questi mondi e le tecnologie utilizzate nelle esplorazioni spaziali si traducano in progressi scientifici, innovazioni ingegneristiche e nuovi approcci alla tutela dell'ambiente terrestre. Un'occasione per scoprire come la conoscenza dello spazio contribuisca al miglioramento della vita sul nostro pianeta.",
            ],
            speakers: [
              "TBD, ALTEC",
              "Natalia Amanda Vergara Sassarini, INAF Padova",
              "Daniela Billi, Prof Tor Vergata",
              "Ilaria Cinelli, Space and Healthcare Expert (AIKO) ??? (dipende se arriva una risposta sponsor)",
            ],
          },
          {
            time: "11:40",
            title: "“La Fisica che mi piace” con Vincenzo Schettini o progetto Refractions (Marilù Chiofalo)",
            interlude: true,
          },
          {
            time: "12:30",
            title: "Lunch break",
            note: "Visita libera delle attività esterne",
            interlude: true,
          },
          {
            time: "14:30",
            title: "Terra: osservare il puntino blu da difendere",
            moderator: "Moderatrice: TBD",
            description: [
              "Vista dallo spazio, la Terra appare come un piccolo, fragile puntino blu immerso nell'universo. In questo incontro esploreremo come l'osservazione del nostro pianeta, grazie alle moderne tecnologie satellitari, ci aiuti a comprenderne i cambiamenti, a proteggerne gli ecosistemi e a prendere decisioni più consapevoli per il suo futuro. Un viaggio tra immagini spettacolari, dati scientifici e nuove prospettive per riscoprire la responsabilità di custodire la nostra casa comune.",
            ],
            speakers: [
              "TBD, ESA COPERNICUS",
              "TBD, ASI IRIDE",
              "Cinzia Zuffada, ingegnere italo-americana e Associate Chief Scientist presso il Jet Propulsion Laboratory (NASA – California), Tecnologie Spaziali per EO",
            ],
          },
          {
            time: "15:30",
            title: "Breve Video ESA e Concertisti Conservatorio (5-7 min)",
            interlude: true,
          },
          {
            time: "15:40",
            title: "Start-up e una nuova visione",
            moderator: "Moderatrice: Alessia Gloder (startupper)",
            description: [
              "Determinazione, visione e talento stanno guidando una nuova generazione di giovani donne ai vertici dell'innovazione spaziale. In qualità di CEO, COO, CTO e nei ruoli più strategici delle start-up del settore, stanno contribuendo, con energia e competenza, a trasformare l'industria spaziale in uno spazio sempre più inclusivo, innovativo e sostenibile. Le loro storie testimoniano come passione per le STEM e spirito imprenditoriale possano superare barriere tradizionali, divenendo ispirazione e opportunità per le nuove generazioni di leader dell'economia dello spazio.",
            ],
            speakers: [
              "Benedetta Margrethe Cattani, Founder and CEO Ecosmic",
              "Camilla Conti, Co-founder e COO Adaptronics",
              "Anna Mauro, Founder e CTO ORiS (Orbital Recharge in Space)",
              "Ilaria …, Business Development",
              "Chiara Mirani, Co-founder e COO Volta Structural Energy",
              "Bianca Cefalo, Founder e CEO Space DOTS",
            ],
          },
          {
            time: "16:50",
            title: "Breve Video ESA (Philab?) e Concertisti Conservatorio (5-7 min)",
            interlude: true,
          },
          {
            time: "17:00",
            title: "“La Fisica che mi piace” con Vincenzo Schettini o progetto di Marilù",
            moderator: "Moderatrice: TBD",
            interlude: true,
          },
          {
            time: "17:20",
            title: "Spazio e Arte in connessione",
            description: [
              "Fin dai primi passi dell'umanità nello spazio, la scoperta dell'universo ha ispirato artisti, musicisti e scrittori a immaginare mondi nuovi e a rappresentare la bellezza e il mistero del cosmo. Oggi, grazie alle tecnologie spaziali, l'arte ha nuovi strumenti e prospettive per dialogare con la scienza: immagini satellitari diventano opere, installazioni sperimentano la gravità zero, la realtà virtuale trasporta nell'infinito. “Spazio e Arte in connessione” esplora come creatività e ricerca scientifica si incontrino per raccontare il nostro rapporto profondo con il cielo, stimolando meraviglia e consapevolezza in una sinergia che supera i confini della Terra.",
            ],
            speakers: [
              "Claudia Kessler",
              "Viviana Panaccia",
              "Antonella Cotta",
              "Vittoria Stanzione, studentessa fisica e scrittrice",
            ],
          },
          {
            time: "18:10",
            title: "Assegnazione Premio Cambiare",
            note: "Visita libera delle attività esterne",
            interlude: true,
          },
          {
            time: "19:00",
            title: "Concerto reading su Pippa Bacca",
            description: [
              "Il concerto reading “Sono innamorata di Pippa Bacca – Chiedimi perché!” nasce dall'omonimo libro che ripercorre la vita, l'arte e il viaggio di Pippa Bacca, con la prefazione della giudice Paola Di Nicola.",
              "La performance intreccia narrazione, musica dal vivo e immagini evocative per raccontare la fiducia come visione del mondo e l'incontro come atto di pace.",
              "Attraverso il racconto si rivivono le tappe del suo progetto artistico e della sua dimensione umana, capace di lasciare un'eredità ancora oggi potente e necessaria.",
            ],
          },
        ],
      },
    ],
  },
];

export const galleryHeading = {
  eyebrow: "I nostri momenti",
  title: "Galleria Fotografica",
  intro:
    "Uno sguardo alle edizioni 2024 e 2025 del Festival Donne fra le Stelle: relatrici, pubblico e momenti dal palco.",
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
  paragraphs: [
    "Dopo quattro eventi di successo, il Centro Culturale Altinate San Gaetano ha messo a disposizione del Festival l'intera struttura che si trova nel suggestivo Palazzo San Gaetano.",
    "Il Palazzo è uno storico edificio del XVI secolo nato come convento per l'Ordine dei Chierici Regolari Teatini, insieme all'adiacente Chiesa di San Gaetano, su progetto di Vincenzo Scamozzi. L'ultima ristrutturazione, completata nel 2008, ha restituito alla città uno spazio di grande fascino, dove la classicità delle forme originarie ideate da Scamozzi (allievo ed erede di Palladio) si integra armoniosamente con elementi moderni in acciaio e vetro temperato.",
    "Il palazzo è stato scelto come prima tappa del Festival che dal prossimo anno sarà itinerante sul territorio nazionale. Si tratta di un evento in cui lo Spazio sarà raccontato dalle donne – ma non solo per le donne – attraverso le loro esperienze e testimonianze in un ambito che è ancora oggi principalmente maschile.",
    "Sarà un appuntamento multidisciplinare che metterà in relazione lo spazio con la nostra quotidianità, offrendo tante sorprese per tutte le età.",
  ],
  highlight: "Questo connubio tra antico e contemporaneo è così riuscito che molti hanno soprannominato il Palazzo il “Beaubourg padovano”.",
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

export type PreviousEditionSpeaker = { name: string; role: string };

export type PreviousEdition = {
  number: string;
  year: string;
  location: string;
  intro: string;
  speakers: PreviousEditionSpeaker[];
  moderators: PreviousEditionSpeaker[];
  notes?: string[];
};

export const previousEditionsHeading = {
  eyebrow: "Il nostro percorso",
  title: "Edizioni Precedenti",
  intro:
    "Quattro edizioni, due regioni, decine di scienziate, ingegnere e divulgatrici che hanno raccontato il contributo femminile alla scienza e allo spazio.",
};

export const previousEditions: PreviousEdition[] = [
  {
    number: "1ª edizione",
    year: "2021",
    location: "Fiumefreddo Bruzio, Calabria",
    intro:
      "Fin dalla prima edizione ha avuto il patrocinio dell'ESA, dell'ASI e del Comune di Amantea, e la partecipazione di autorevoli scienziate, ricercatrici, manager di industria e divulgatrici provenienti da tutta Italia, inaugurando un format innovativo di divulgazione al femminile.",
    speakers: [
      { name: "Carolyn Porco", role: "Scienziata planetaria, Università della California Berkeley" },
      { name: "Amalia Ercoli Finzi", role: "Accademica, scienziata e ingegnere aerospaziale al Politecnico di Milano" },
      { name: "Marica Branchesi", role: "Presidente del Consiglio scientifico dell'Istituto Nazionale di Astrofisica" },
      { name: "Sandra Savaglio", role: "Prof.ssa di Astrofisica Unical e Assessore alla ricerca scientifica Regione Calabria" },
      { name: "Annamaria Nassisi", role: "Manager Space Economy per Osservazione della Terra e Navigazione in Thales Alenia Space Italia" },
      { name: "Paola Santini", role: "Astrofisica INAF" },
      { name: "Alessia Gloder", role: "Socia Women in Aerospace Europe Rome Local Group" },
    ],
    moderators: [
      { name: "Riccardo Mei", role: "Voce narrante di numerosi programmi Rai e di documentari" },
    ],
    notes: [
      "Durante l'evento è stata conferita la cittadinanza onoraria alla Prof.ssa Carolyn Porco, originaria di Fiumefreddo, e la consegna di una targa alla redazione di Radio3 Scienza in memoria di Rossella Panarese, che con entusiasmo aveva sostenuto questa prima edizione.",
    ],
  },
  {
    number: "2ª edizione",
    year: "2022",
    location: "Amantea, Calabria",
    intro:
      "L'evento, patrocinato dal Comune di Amantea, dalla Provincia di Cosenza, dalla Regione Calabria, e da AISE – Associazione Italiana di Systems Engineering, ha ampliato la collaborazione con l'INGV e l'Università della Calabria, consolidando la rete di relazioni istituzionali e coinvolgendo il pubblico scolastico locale per una sensibilizzazione verso le materie STEM.",
    speakers: [
      { name: "Wera di Cianni", role: "Astronoma e astrofisica" },
      { name: "Gioia Rau", role: "Astrofisica per il Goddard Space Flight Center della NASA" },
      { name: "Patrizia Caraveo", role: "Dirigente di Ricerca all'Istituto Nazionale di Astrofisica (INAF)" },
      { name: "Francesca Faedi", role: "Astrofisica e ricercatrice esopianeti" },
      { name: "Annamaria Nassisi", role: "Manager Space Economy Osservazione e Navigazione in Thales Alenia Space" },
      { name: "Giuseppina Nigro", role: "Astrofisica e ricercatrice post-doc presso l'Università della Calabria" },
      { name: "Emanuela Di Fazio", role: "Membro AISE – Associazione Italiana di Systems Engineering" },
      { name: "Claudia Agostinelli", role: "Membro AISE – Associazione Italiana di Systems Engineering" },
    ],
    moderators: [
      { name: "Riccardo Mei", role: "Voce narrante di numerosi programmi Rai e di documentari" },
    ],
  },
  {
    number: "3ª edizione",
    year: "2024",
    location: "Abano Terme, Veneto",
    intro:
      "Realizzata con il patrocinio del Comune di Abano Terme e della Regione Veneto, e con la collaborazione della Specola di Padova e dell'INAF, ha rappresentato il debutto veneto dell'associazione. L'evento, dedicato a un pubblico generalista, ha coinvolto anche interessanti dibattiti su scienza e fede e sull'agricoltura, e ha avuto come sostenitori la Federalberghi Abano Montegrotto, Officina Stellare, Hotel Tritone, Hotel Plaza, e numerose realtà locali che hanno contribuito all'ospitalità delle relatrici e alla logistica dell'evento.",
    speakers: [
      { name: "Patrizia Caraveo", role: "Dirigente di ricerca presso INAF (Istituto Nazionale di Astrofisica)" },
      { name: "Lucia Votano", role: "Dirigente di Ricerca affiliata INFN" },
      { name: "Ersilia Vaudo Scarpetta", role: "ESA Chief Diversity Officer e Presidente de Il Cielo Itinerante" },
      { name: "Monica Lazzarin", role: "Docente del Dipartimento di Fisica e Astronomia dell'Università di Padova" },
      { name: "Alessia Gloder", role: "CEO di Astradyne" },
      { name: "Barbara Negri", role: "Responsabile Volo Umano e Sperimentazione Scientifica in ASI" },
      { name: "Elena Pettinelli", role: "Professoressa Ordinaria di Fisica Terrestre, Università degli Studi Roma Tre" },
      { name: "Bianca Maria Poggianti", role: "Dirigente di ricerca INAF, Direttrice dell'INAF–Osservatorio Astronomico di Padova" },
      { name: "Maria Vittoria Legnardi", role: "Dottoranda in astronomia all'Università di Padova" },
      { name: "Raffaella Luglini", role: "Chief Sustainability Officer, Leonardo" },
      { name: "Annamaria Nassisi", role: "Manager presso Thales Alenia Space Italia e co-leader WIA Europe Rome Chapter" },
      { name: "Veronica La Regina", role: "Direttore Generale di Space Cargo Unlimited" },
      { name: "Giorgia Pontetti", role: "CEO di G&A Engineering e CEO di Ferrari Farm Soc." },
      { name: "Elena Toson", role: "COO e Business Development Manager di T4i" },
      { name: "Cristina Valente", role: "Head of Institutional Key Account Management in Telespazio e co-leader WIA Europe Rome Chapter" },
      { name: "Emanuela De Fazio", role: "Responsabile Editoriale AISE INCOSE Chapter Italia e Technology Development Business Unit GCAP Leonardo" },
      { name: "Luisa Pontecorvo", role: "Studentessa" },
    ],
    moderators: [
      { name: "Riccardo Mei", role: "Voce narrante di numerosi programmi Rai e di documentari" },
    ],
    notes: [
      "Tra gli eventi collaterali: un incontro-dibattito sul rapporto tra fede e scienza, un momento dedicato all'alimentazione del futuro su altri pianeti con lo chef Stefano Polato, esperto di alimentazione per astronauti, la prima edizione del premio per la divulgazione Rossella Panarese, e un incontro fra arte e spazio con il brano di Sagan interpretato da Riccardo e Margherita Mei e brevi brani strumentali interpretati da Alessia Gloder.",
      "Questa edizione ha dato vita all'omonimo libro \"Donne fra le stelle\", edito da Springer e curato da Patrizia Caraveo e Annamaria Nassisi: un libro raccontato dalle donne, con articoli di alta qualità scientifica ma linguaggio divulgativo, per chi cerca risposte sui misteri del cosmo, del nostro sistema solare e delle missioni spaziali dedicate alla protezione del nostro pianeta.",
    ],
  },
  {
    number: "4ª edizione",
    year: "2025",
    location: "Abano Terme, Veneto",
    intro:
      "Considerando l'alto interesse, l'evento si è spostato presso il Teatro Pietro d'Abano con due giornate di conferenze, presentazioni di libri e incontri con protagoniste dell'astrofisica, della geologia e della comunicazione scientifica, con il patrocinio del Comune di Abano Terme, della Regione Veneto, dell'ASI, dell'INAF, e di Federalberghi Abano Montegrotto (partner ospitalità). Il filo conduttore è stato la sostenibilità, declinata nelle sue varie sfaccettature con un approccio multidisciplinare, coniugando la conoscenza di un ambiente ostile, le tecnologie e la sostenibilità necessaria, con ricadute a salvaguardia del nostro pianeta e della vita umana, fino all'importanza della divulgazione.",
    speakers: [
      { name: "Maria Fabrizia Buongiorno", role: "Direttrice della Ricerca Tecnologica, INGV (Istituto Nazionale di Geofisica e Vulcanologia)" },
      { name: "Maria Cristina Facchini", role: "Direttrice Istituto di Scienze dell'Atmosfera e del Clima, Consiglio Nazionale delle Ricerche" },
      { name: "Claudia Vitolo", role: "ESA EO Digital Twin Earth Application Scientist, in rappresentanza di Simonetta Cheli, Director of ESA Earth Observation Programmes e Head of ESA/ESRIN" },
      { name: "Annamaria Piras", role: "Director LEO Exploration Programs, Thales Alenia Space Italy" },
      { name: "Luisa Bettili", role: "Responsabile del PMO Moonlight, Telespazio" },
      { name: "Stefania De Pascale", role: "Dipartimento di Agraria, Università degli Studi di Napoli Federico II, Laboratory of Crop Research for Space, Accademia dei Georgofili" },
      { name: "Valentina Sumini", role: "PhD, Space Architect, Engineer and Research Affiliate at MIT Media Lab" },
      { name: "Maria Messina", role: "Co-leader WIA-E Rome RN" },
      { name: "Mariafelicia De Laurentis", role: "Professoressa di Astronomia e Astrofisica, Università Federico II" },
      { name: "Viviana Casasola", role: "Astrofisica, Ricercatrice, INAF" },
      { name: "Margherita Cardi", role: "VP Programs and Business Development, Tyvak International" },
      { name: "Marilisa Pischedda", role: "Ingegnera Aerospaziale, Presidente ASTEC" },
      { name: "Ilaria Lucrezia Rossi", role: "Fisica e Content Creator scientifica" },
      { name: "Paola Catapano", role: "Section Leader, Editorial Content Production CERN e Deputy Group Leader CERN" },
    ],
    moderators: [
      { name: "Giuseppe Milano", role: "Segretario Generale Greenaccord" },
      { name: "Annamaria Nassisi", role: "Manager Space Economy Observation & Navigation, Thales Alenia Space Italia" },
      { name: "Rossella Spiga", role: "INAF – Osservatorio Astrofisico di Arcetri" },
      { name: "Romina Gobbo", role: "Giornalista" },
    ],
    notes: [
      "Patrizia Caraveo e Annamaria Nassisi hanno presentato il libro \"Donne fra le stelle\". Prima edizione del Premio Donne fra le Stelle e seconda edizione del premio per la divulgazione Rossella Panarese.",
      "Si segnala la partecipazione straordinaria della giornalista e scrittrice Carmen Lasorella, che ha dialogato con Amalia Ercoli Finzi, vincitrice della prima edizione del Premio Donne fra le Stelle.",
    ],
  },
];

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

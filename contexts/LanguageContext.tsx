"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Language = "fr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Traductions
const translations = {
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.experiences": "Expériences",
    "nav.projects": "Projets",
    "nav.hobbies": "À côté",
    "nav.contact": "Contact",
    "nav.contactMe": "Me contacter",
    "nav.toggleTheme": "Passer en mode clair",
    "nav.toggleThemeDark": "Passer en mode sombre",
    
    // Hero
    "hero.subtitle": "Product Builder & Entrepreneur",
    "hero.description1": "Je conçois et lance des produits digitaux utiles, durables et orientés impact.",
    "hero.description2": "J’aide les entreprises à transformer des idées complexes en produits concrets : applications web, expériences IA, outils métier et automatisations. De l’idée à la mise en production, avec une approche pragmatique, produit et orientée utilisateurs.",
    "hero.available": "Travaillons ensemble",
    "hero.seeProjects": "Voir mes projets",
    "hero.contactMe": "Me contacter",
    "hero.downloadCV": "Voir mon CV",
    
    // Experiences
    "exp.title": "Expériences",
    "exp.qwant.title": "Product Manager IA",
    "exp.qwant.org": "Qwant",
    "exp.qwant.period": "Depuis 2024",
    "exp.qwant.point1": "Conception et pilotage d’expériences IA à grande échelle pour un moteur de recherche européen.",
    "exp.qwant.point2": "Enjeux forts de privacy, performance et sobriété technique.",
    "exp.qwant.point3": "AI overviews, Chat IA, nouvelles interfaces de recherche.",
    "exp.freelance.title": "Freelance Product Builder",
    "exp.freelance.org": "PME & Startups",
    "exp.freelance.period": "Depuis 2019",
    "exp.freelance.point1": "Accompagnement d’entreprises dans la création et l’évolution de produits digitaux.",
    "exp.freelance.point2": "Applications web, MVP SaaS, outils internes, automatisations et expériences IA.",
    "exp.freelance.point3": "Interventions rapides, forte autonomie, focus sur la valeur livrée.",
    "exp.startup.title": "Product Builder",
    "exp.startup.org": "PayFit",
    "exp.startup.period": "2022 — 2024",
    "exp.startup.point1": "Rôle hybride entre product management et delivery dans un environnement SaaS en forte croissance.",
    "exp.startup.point2": "Produits liés à la comptabilité, au reporting, aux API et aux déclarations sociales.",
    "exp.startup.point3": "Collaboration rapprochée avec les équipes tech et ops pour livrer rapidement.",
    "exp.media.title": "Product Manager",
    "exp.media.org": "Altice Media",
    "exp.media.period": "2020 — 2022",
    "exp.media.point1": "Pilotage produit des applications mobiles du groupe (BFMTV, RMC, BFM Business).",
    "exp.media.point2": "Refonte majeure de l’application BFMTV pour les élections présidentielles.",
    "exp.media.point3": "Coordination des équipes design, tech et éditoriales.",
    
    // Projects
    "projects.title": "Projects",
    "projects.search.name": "Pacemate — AI Running Coach",
    "projects.search.type": "Projet personnel",
    "projects.search.point1": "Coach de course propulsé par l’IA.",
    "projects.search.point2": "Plans d’entraînement personnalisés basés sur performance, progression et récupération.",
    "projects.search.point3": "Vision long terme, à la croisée du produit, de la data, de l’IA et des sports d’endurance.",
    "projects.dashboard.name": "Freelance — Product & Web Tools",
    "projects.dashboard.type": "Client work",
    "projects.dashboard.point1": "Création rapide d’outils web sur-mesure pour les petites entreprises.",
    "projects.dashboard.point2": "Sites web, applications, lancement de produits et MVP.",
    "projects.dashboard.point3": "Marketing, automatisation et e-commerce selon les besoins.",
    
    // Project details
    "projects.detail.client": "Client",
    "projects.detail.company": "Entreprise",
    "projects.detail.type": "Type de projet",
    "projects.detail.year": "Année",
    "projects.detail.visitWebsite": "Visiter le site",
    "projects.detail.viewProject": "Voir le projet",
    
    // Project specific details
    "projects.search.client": "Projet personnel",
    "projects.search.company": "Pacemate",
    "projects.search.year": "2024",
    "projects.search.description": "Pacemate est un coach de course à pied propulsé par l’IA. Il génère des plans d’entraînement personnalisés basés sur les performances, la progression et la récupération, avec une vision long terme.",
    "projects.search.cta": "En savoir plus",

    "projects.dashboard.client": "Clients",
    "projects.dashboard.company": "Freelance",
    "projects.dashboard.year": "2019 — 2024",
    "projects.dashboard.description": "J’aide les petites entreprises à créer rapidement des outils web sur-mesure : développement de sites web, applications, MVP et automatisations, avec un focus sur la valeur livrée.",
    "projects.dashboard.cta": "Discuter d’un projet",
    
    // Hobbies
    "hobbies.title": "Au-delà du travail",
    "hobbies.running.title": "Trail, outdoor & endurance",
    "hobbies.running.desc": "Je pratique le trail et les sports d’endurance. Ces disciplines influencent directement ma manière de construire des produits : progression dans le temps, méthode, constance et vision long terme.",
    "hobbies.ai.title": "Entrepreneuriat",
    "hobbies.ai.desc": "Je suis co-fondateur d’une marque de maillots de bain née d’un besoin concret, lancée en crowdfunding puis développée sur plusieurs années. Un terrain d’apprentissage réel autour du produit, du marketing et de l’exécution.",
    
    // Contact
    "contact.title": "Travaillons ensemble",
    "contact.description": "Un projet, une idée ou un besoin produit / tech ? Parlons-en.",
    "contact.writeMe": "M'écrire",
    "contact.formTitle": "Formulaire de contact",
    "contact.name": "Nom",
    "contact.namePlaceholder": "Votre nom",
    "contact.email": "Email",
    "contact.emailPlaceholder": "votre@email.com",
    "contact.message": "Message",
    "contact.messagePlaceholder": "Parlez-moi de votre projet...",
    "contact.send": "Envoyer",
    "contact.sendAlert": "Formulaire de démonstration. Utilisez le bouton 'M'écrire' pour me contacter directement.",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.experiences": "Experiences",
    "nav.projects": "Projects",
    "nav.hobbies": "Hobbies",
    "nav.contact": "Contact",
    "nav.contactMe": "Contact me",
    "nav.toggleTheme": "Switch to light mode",
    "nav.toggleThemeDark": "Switch to dark mode",
    
    // Hero
    "hero.subtitle": "Product Builder & Entrepreneur",
    "hero.description1": "I design and launch useful, sustainable, impact-driven digital products.",
    "hero.description2": "I help companies turn complex ideas into concrete products: web applications, AI experiences, business tools and automations. From idea to production, with a pragmatic, product-driven and user-focused approach.",
    "hero.available": "Let’s work together",
    "hero.seeProjects": "View my projects",
    "hero.contactMe": "Contact me",
    "hero.downloadCV": "See my CV",
    
    // Experiences
    "exp.title": "Experiences",
    "exp.qwant.title": "AI Product Manager",
    "exp.qwant.org": "Qwant",
    "exp.qwant.period": "2024 – Present",
    "exp.qwant.point1": "Design and delivery of large-scale AI experiences for a European search engine.",
    "exp.qwant.point2": "Strong constraints around privacy, performance and technical efficiency.",
    "exp.qwant.point3": "AI overviews, AI chat, new search interfaces.",
    "exp.freelance.title": "Freelance Product Builder",
    "exp.freelance.org": "SMEs & Startups",
    "exp.freelance.period": "2019 – Present",
    "exp.freelance.point1": "Helping companies build and evolve digital products.",
    "exp.freelance.point2": "Web applications, SaaS MVPs, internal tools, automations and AI-powered experiences.",
    "exp.freelance.point3": "Fast execution, high autonomy, strong focus on delivered value.",
    "exp.startup.title": "Product Builder",
    "exp.startup.org": "PayFit",
    "exp.startup.period": "2022 – 2024",
    "exp.startup.point1": "Hybrid role between product management and delivery in a fast-growing SaaS environment.",
    "exp.startup.point2": "Products related to accounting, reporting, APIs and social declarations.",
    "exp.startup.point3": "Close collaboration with tech and ops teams to ship quickly.",
    "exp.media.title": "Product Manager",
    "exp.media.org": "Altice Media",
    "exp.media.period": "2020 – 2022",
    "exp.media.point1": "Product management for the group’s mobile applications (BFMTV, RMC, BFM Business).",
    "exp.media.point2": "Major redesign of the BFMTV app for the French presidential elections.",
    "exp.media.point3": "Coordinated design, tech and editorial teams.",
    
    // Projects
    "projects.title": "Projects",
    "projects.search.name": "Pacemate — AI Running Coach",
    "projects.search.type": "Personal project",
    "projects.search.point1": "AI-powered running coach.",
    "projects.search.point2": "Personalized training plans based on performance, progression and recovery.",
    "projects.search.point3": "Long-term approach at the intersection of product, data, AI and endurance sports.",
    "projects.dashboard.name": "Freelance — Product & Web Tools",
    "projects.dashboard.type": "Client work",
    "projects.dashboard.point1": "Helping small businesses build custom web tools, fast.",
    "projects.dashboard.point2": "Website development, apps, product launches and MVPs.",
    "projects.dashboard.point3": "Marketing, automation and e-commerce when needed.",
    
    // Project details
    "projects.detail.client": "Client",
    "projects.detail.company": "Company",
    "projects.detail.type": "Project Type",
    "projects.detail.year": "Year",
    "projects.detail.visitWebsite": "Visit Website",
    "projects.detail.viewProject": "View Project",
    
    // Project specific details
    "projects.search.client": "Personal project",
    "projects.search.company": "Pacemate",
    "projects.search.year": "2024",
    "projects.search.description": "Pacemate is an AI-powered running coach. It generates personalized training plans based on performance, progression and recovery, with a long-term and sustainable approach.",
    "projects.search.cta": "Learn more",
    
    "projects.dashboard.client": "Clients",
    "projects.dashboard.company": "Freelance",
    "projects.dashboard.year": "2019 – 2024",
    "projects.dashboard.description": "I help small businesses build custom web tools, fast: websites, applications, MVPs and automations, with a focus on delivered value.",
    "projects.dashboard.cta": "Discuss a project",
    
    "projects.chatbot.client": "SaaS Startup",
    "projects.chatbot.company": "SaaS Startup",
    "projects.chatbot.year": "2022",
    "projects.chatbot.description": "Implementation of an intelligent chatbot for customer support, capable of automatically answering 60% of common queries. Integration with existing CRM for complete interaction tracking.",
    "projects.chatbot.cta": "Test Chatbot",
    
    "projects.nocode.client": "Internal Team",
    "projects.nocode.company": "Internal Team",
    "projects.nocode.year": "2023",
    "projects.nocode.description": "Development of a no-code platform allowing teams to create workflows and internal applications without technical skills. Intuitive drag-and-drop interface with ready-to-use templates.",
    "projects.nocode.cta": "Access Platform",
    
    "projects.automation.client": "Services SME",
    "projects.automation.company": "Services SME",
    "projects.automation.year": "2022",
    "projects.automation.description": "Complete automation of repetitive business processes, integrating Slack, Notion and other ecosystem tools. Estimated time savings of 15 hours per week per team, enabling better resource allocation.",
    "projects.automation.cta": "View Automations",
    
    "projects.ecommerce.client": "E-commerce",
    "projects.ecommerce.company": "E-commerce",
    "projects.ecommerce.year": "2023",
    "projects.ecommerce.description": "Rapid launch of an e-commerce MVP with AI-based product recommendations. Optimization of user journey and conversion, with payment integration and real-time inventory management.",
    "projects.ecommerce.cta": "Visit Store",
    
    // Hobbies
    "hobbies.title": "Beyond work",
    "hobbies.running.title": "Trail, outdoor & endurance",
    "hobbies.running.desc": "I practice trail running and endurance sports. These disciplines shape how I build products: long-term thinking, consistency, method and sustainable progress.",
    "hobbies.ai.title": "Entrepreneurship",
    "hobbies.ai.desc": "I am also the co-founder of a swimwear brand born from a concrete need, launched through crowdfunding and grown over several years. A real-world playground for product, marketing and execution.",
    
    // Contact
    "contact.title": "Let's work together",
    "contact.description": "Have a project, an idea or a product / tech need? Let’s talk.",
    "contact.writeMe": "Write to me",
    "contact.formTitle": "Contact form",
    "contact.name": "Name",
    "contact.namePlaceholder": "Your name",
    "contact.email": "Email",
    "contact.emailPlaceholder": "your@email.com",
    "contact.message": "Message",
    "contact.messagePlaceholder": "Tell me about your project...",
    "contact.send": "Send",
    "contact.sendAlert": "Demo form. Use the 'Write to me' button to contact me directly.",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "fr" || savedLanguage === "en")) {
      setLanguageState(savedLanguage);
    } else {
      // Par défaut : anglais (comme demandé)
      setLanguageState("en");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}


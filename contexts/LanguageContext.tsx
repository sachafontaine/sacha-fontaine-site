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
    "hero.description1": "Product builder, AI enthusiast et passionné par le développement de produits digitaux et le sport.",
    "hero.description2": "Avec plus de 5 ans d'expérience, autonome et curieux, j'aime être impliqué dans l'ensemble du processus de développement et sur des projets de développement produit stimulants.",
    "hero.available": "Disponible pour de nouvelles missions",
    "hero.seeProjects": "Voir mes projets",
    "hero.contactMe": "Me contacter",
    "hero.downloadCV": "Voir mon CV",
    
    // Experiences
    "exp.title": "Expériences",
    "exp.qwant.title": "Product Manager IA",
    "exp.qwant.org": "Qwant",
    "exp.qwant.period": "2024 – Aujourd'hui",
    "exp.qwant.point1": "Lancement et amélioration de fonctionnalités IA pour le moteur de recherche (AI overviews ; Chat IA...)",
    "exp.qwant.point2": "Amélioration de la conversion et de l'engagement utilisateur de +35%",
    "exp.qwant.point3": "Coordination entre équipes tech etdesign pour livrer rapidement",
    "exp.freelance.title": "Freelance Product Builder",
    "exp.startup.title": "Product Manager",
    "exp.startup.org": "Startup Tech",
    "exp.startup.period": "2018 – 2020",
    "exp.startup.point1": "Gestion de roadmap produit et priorisation des features",
    "exp.startup.point2": "Lancement de 3 produits majeurs avec adoption rapide",
    "exp.startup.point3": "Mise en place de processus de validation et tests utilisateurs",
    "exp.freelance.org": "PME & Startups",
    "exp.freelance.period": "2020 – Aujourd'hui",
    "exp.freelance.point1": "Conception et développement de produits web et applications no-code/low-code",
    "exp.freelance.point2": "Automatisation de processus métier réduisant le temps opérationnel de 60%",
    "exp.freelance.point3": "Accompagnement de 15+ clients dans le lancement de leurs produits digitaux",
    
    // Projects
    "projects.title": "Projets & missions",
    "projects.search.name": "IAgen pour moteur de recherche",
    "projects.search.type": "Feature IA",
    "projects.search.point1": "Intégration de LLM pour améliorer la pertinence des résultats",
    "projects.search.point2": "Réduction du temps de réponse de 40%",
    "projects.search.point3": "Amélioration de la satisfaction utilisateur mesurée",
    "projects.dashboard.name": "Dashboard trésorerie PME",
    "projects.dashboard.type": "Application web",
    "projects.dashboard.point1": "Tableau de bord temps réel pour suivi financier",
    "projects.dashboard.point2": "Automatisation des rapports et alertes",
    "projects.dashboard.point3": "Meilleure visibilité sur les KPIs pour les dirigeants",
    "projects.chatbot.name": "Chatbot IA pour support client",
    "projects.chatbot.type": "Automatisation",
    "projects.chatbot.point1": "Réduction du temps de réponse client de 80%",
    "projects.chatbot.point2": "Automatisation de 60% des requêtes courantes",
    "projects.chatbot.point3": "Intégration avec CRM existant",
    "projects.nocode.name": "Plateforme no-code pour équipes",
    "projects.nocode.type": "Site web & app",
    "projects.nocode.point1": "Interface intuitive pour créer des workflows sans code",
    "projects.nocode.point2": "Déploiement rapide de solutions internes",
    "projects.nocode.point3": "Formation et accompagnement des équipes",
    "projects.automation.name": "Système d'automatisation de process",
    "projects.automation.type": "Automatisation",
    "projects.automation.point1": "Automatisation de tâches répétitives",
    "projects.automation.point2": "Gain de temps estimé à 15h/semaine par équipe",
    "projects.automation.point3": "Intégration avec outils existants (Slack, Notion, etc.)",
    "projects.ecommerce.name": "MVP e-commerce avec IA",
    "projects.ecommerce.type": "Site web",
    "projects.ecommerce.point1": "Lancement rapide d'un MVP en 3 semaines",
    "projects.ecommerce.point2": "Recommandations produits basées sur IA",
    "projects.ecommerce.point3": "Optimisation conversion et parcours utilisateur",
    
    // Project details
    "projects.detail.client": "Client",
    "projects.detail.company": "Entreprise",
    "projects.detail.type": "Type de projet",
    "projects.detail.year": "Année",
    "projects.detail.visitWebsite": "Visiter le site",
    "projects.detail.viewProject": "Voir le projet",
    
    // Project specific details
    "projects.search.client": "Qwant",
    "projects.search.company": "Qwant",
    "projects.search.year": "2023",
    "projects.search.description": "Développement d'une fonctionnalité IA avancée pour améliorer la pertinence des résultats de recherche. Intégration de modèles de langage pour comprendre l'intention utilisateur et fournir des réponses plus précises et contextuelles.",
    "projects.search.cta": "Voir la démo",
    
    "projects.dashboard.client": "PME Tech",
    "projects.dashboard.company": "PME Tech",
    "projects.dashboard.year": "2023",
    "projects.dashboard.description": "Création d'un tableau de bord financier en temps réel permettant aux dirigeants de suivre la trésorerie, les KPIs et les alertes automatiques. Interface intuitive avec visualisations de données interactives.",
    "projects.dashboard.cta": "Voir le dashboard",
    
    "projects.chatbot.client": "Startup SaaS",
    "projects.chatbot.company": "Startup SaaS",
    "projects.chatbot.year": "2022",
    "projects.chatbot.description": "Mise en place d'un chatbot intelligent pour le support client, capable de répondre à 60% des requêtes courantes automatiquement. Intégration avec le CRM existant pour un suivi complet des interactions.",
    "projects.chatbot.cta": "Tester le chatbot",
    
    "projects.nocode.client": "Équipe interne",
    "projects.nocode.company": "Équipe interne",
    "projects.nocode.year": "2023",
    "projects.nocode.description": "Développement d'une plateforme no-code permettant aux équipes de créer des workflows et des applications internes sans compétences techniques. Interface drag-and-drop intuitive avec templates prêts à l'emploi.",
    "projects.nocode.cta": "Accéder à la plateforme",
    
    "projects.automation.client": "PME Services",
    "projects.automation.company": "PME Services",
    "projects.automation.year": "2022",
    "projects.automation.description": "Automatisation complète des processus métier répétitifs, intégrant Slack, Notion et autres outils de l'écosystème. Gain de temps estimé à 15 heures par semaine par équipe, permettant une meilleure allocation des ressources.",
    "projects.automation.cta": "Voir les automatisations",
    
    "projects.ecommerce.client": "E-commerce",
    "projects.ecommerce.company": "E-commerce",
    "projects.ecommerce.year": "2023",
    "projects.ecommerce.description": "Lancement rapide d'un MVP e-commerce avec recommandations produits basées sur l'IA. Optimisation du parcours utilisateur et de la conversion, avec intégration de paiements et gestion des stocks en temps réel.",
    "projects.ecommerce.cta": "Visiter la boutique",
    
    // Hobbies
    "hobbies.title": "À côté des missions",
    "hobbies.running.title": "Course à pied & trail",
    "hobbies.running.desc": "Préparation de marathons et projets longue distance. La discipline et la persévérance nécessaires pour atteindre des objectifs ambitieux se retrouvent dans ma façon d'aborder les projets produits : méthode, régularité et capacité à aller au bout des choses.",
    "hobbies.ai.title": "Exploration IA & LLM",
    "hobbies.ai.desc": "Curiosité constante pour les nouvelles technologies, les LLM et leurs usages pratiques. J'aime tester, expérimenter et trouver des applications concrètes qui créent de la valeur. Cette approche exploratoire nourrit ma capacité à innover dans les projets.",
    "hobbies.side.title": "Projets personnels & side projects",
    "hobbies.side.desc": "Passion pour construire des choses de A à Z, tester rapidement des idées et itérer. Ces projets personnels me permettent de rester à jour sur les dernières stack et d'apporter des solutions créatives aux défis que je rencontre en mission.",
    
    // Contact
    "contact.title": "Travaillons ensemble",
    "contact.description": "Je suis ouvert aux nouvelles missions freelance et projets produits. Que vous soyez une PME cherchant à automatiser vos processus, une startup qui veut lancer rapidement un MVP, ou une équipe qui a besoin d'un Product Manager pour structurer votre roadmap, n'hésitez pas à me contacter.",
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
    "hero.description1": "I help SMEs and product teams design, test, and launch web features, AI, and automations quickly.",
    "hero.description2": "Experience with search engines, generative AI, no-code/low-code, and business process automation.",
    "hero.available": "Available for new projects",
    "hero.seeProjects": "View my projects",
    "hero.contactMe": "Contact me",
    "hero.downloadCV": "See my CV",
    
    // Experiences
    "exp.title": "Experiences",
    "exp.qwant.title": "AI Product Manager",
    "exp.qwant.org": "Qwant",
    "exp.qwant.period": "2024 – Present",
    "exp.qwant.point1": "Launched and improved AI features for the search engine (AI overviews ; Chat IA...)",
    "exp.qwant.point2": "Improved conversion and user engagement by +35%",
    "exp.qwant.point3": "Coordinated tech and design teams to deliver quickly",
    "exp.startup.title": "Product Builder",
    "exp.startup.org": "PayFit",
    "exp.startup.period": "2022 – 2024",
    "exp.startup.point1": "Product roadmap management and feature prioritization",
    "exp.startup.point2": "Launched 3 major products with rapid adoption",
    "exp.startup.point3": "Set up validation processes and user testing",
    "exp.freelance.title": "Freelance Product Builder",
    "exp.freelance.org": "SMEs & Startups",
    "exp.freelance.period": "2019 – Present",
    "exp.freelance.point1": "Design and development of web products and no-code/low-code applications",
    "exp.freelance.point2": "Business process automation reducing operational time by 60%",
    "exp.freelance.point3": "Supported 15+ clients in launching their digital products",
    
    // Projects
    "projects.title": "Projects & missions",
    "projects.search.name": "AI search engine",
    "projects.search.type": "AI Feature",
    "projects.search.point1": "LLM integration to improve result relevance",
    "projects.search.point2": "40% reduction in response time",
    "projects.search.point3": "Measured improvement in user satisfaction",
    "projects.dashboard.name": "SME cash flow dashboard",
    "projects.dashboard.type": "Web application",
    "projects.dashboard.point1": "Real-time dashboard for financial tracking",
    "projects.dashboard.point2": "Automated reports and alerts",
    "projects.dashboard.point3": "Better visibility on KPIs for executives",
    "projects.chatbot.name": "AI chatbot for customer support",
    "projects.chatbot.type": "Automation",
    "projects.chatbot.point1": "80% reduction in customer response time",
    "projects.chatbot.point2": "Automated 60% of common queries",
    "projects.chatbot.point3": "Integration with existing CRM",
    "projects.nocode.name": "No-code platform for teams",
    "projects.nocode.type": "Website & app",
    "projects.nocode.point1": "Intuitive interface to create workflows without code",
    "projects.nocode.point2": "Rapid deployment of internal solutions",
    "projects.nocode.point3": "Training and team support",
    "projects.automation.name": "Process automation system",
    "projects.automation.type": "Automation",
    "projects.automation.point1": "Automation of repetitive tasks",
    "projects.automation.point2": "Estimated time savings of 15h/week per team",
    "projects.automation.point3": "Integration with existing tools (Slack, Notion, etc.)",
    "projects.ecommerce.name": "AI-powered e-commerce MVP",
    "projects.ecommerce.type": "Website",
    "projects.ecommerce.point1": "Rapid MVP launch in 3 weeks",
    "projects.ecommerce.point2": "AI-based product recommendations",
    "projects.ecommerce.point3": "Conversion and user journey optimization",
    
    // Project details
    "projects.detail.client": "Client",
    "projects.detail.company": "Company",
    "projects.detail.type": "Project Type",
    "projects.detail.year": "Year",
    "projects.detail.visitWebsite": "Visit Website",
    "projects.detail.viewProject": "View Project",
    
    // Project specific details
    "projects.search.client": "Qwant",
    "projects.search.company": "Qwant",
    "projects.search.year": "2023",
    "projects.search.description": "Development of an advanced AI feature to improve search result relevance. Integration of language models to understand user intent and provide more accurate and contextual responses.",
    "projects.search.cta": "View Demo",
    
    "projects.dashboard.client": "Tech SME",
    "projects.dashboard.company": "Tech SME",
    "projects.dashboard.year": "2023",
    "projects.dashboard.description": "Creation of a real-time financial dashboard allowing executives to track cash flow, KPIs and automatic alerts. Intuitive interface with interactive data visualizations.",
    "projects.dashboard.cta": "View Dashboard",
    
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
    "hobbies.running.title": "Running & trail",
    "hobbies.running.desc": "Marathon preparation and long-distance projects. The discipline and perseverance needed to achieve ambitious goals are reflected in how I approach product projects: method, consistency, and the ability to see things through.",
    "hobbies.ai.title": "AI & LLM exploration",
    "hobbies.ai.desc": "Constant curiosity for new technologies, LLMs, and their practical applications. I enjoy testing, experimenting, and finding concrete applications that create value. This exploratory approach fuels my ability to innovate in projects.",
    "hobbies.side.title": "Personal & side projects",
    "hobbies.side.desc": "Passion for building things from A to Z, quickly testing ideas and iterating. These personal projects keep me up to date with the latest stacks and bring creative solutions to challenges I encounter on missions.",
    
    // Contact
    "contact.title": "Let's work together",
    "contact.description": "I'm open to new freelance missions and product projects. Whether you're an SME looking to automate your processes, a startup wanting to quickly launch an MVP, or a team needing a Product Manager to structure your roadmap, feel free to contact me.",
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


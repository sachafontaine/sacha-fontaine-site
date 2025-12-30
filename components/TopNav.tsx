"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";

// Icônes SVG
const HomeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

const BriefcaseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);

const FolderIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 6.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z"></path>
  </svg>
);

const TargetIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="6"></circle>
    <circle cx="12" cy="12" r="2"></circle>
  </svg>
);

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);

const SunIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4"></circle>
    <path d="M12 2v2"></path>
    <path d="M12 20v2"></path>
    <path d="m4.93 4.93 1.41 1.41"></path>
    <path d="m17.66 17.66 1.41 1.41"></path>
    <path d="M2 12h2"></path>
    <path d="M20 12h2"></path>
    <path d="m6.34 17.66-1.41 1.41"></path>
    <path d="m19.07 4.93-1.41 1.41"></path>
  </svg>
);

const MoonIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
  </svg>
);

export default function TopNav() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { id: "hero", labelKey: "nav.home", icon: HomeIcon },
    { id: "experiences", labelKey: "nav.experiences", icon: BriefcaseIcon },
    { id: "projects", labelKey: "nav.projects", icon: FolderIcon },
    { id: "hobbies", labelKey: "nav.hobbies", icon: TargetIcon },
    { id: "contact", labelKey: "nav.contact", icon: MailIcon },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "experiences", "projects", "hobbies", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "fr" ? "en" : "fr");
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 dark:bg-gray-900/95 bg-white/95 backdrop-blur-sm border-b dark:border-gray-800 border-gray-200 transition-colors duration-200"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2 sm:space-x-3">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full transition-all duration-200 flex items-center justify-center ${
                    isActive
                      ? "dark:bg-white bg-gray-900 dark:text-gray-900 text-white"
                      : "dark:bg-gray-800/50 bg-gray-100/50 dark:text-gray-400 text-gray-600 dark:hover:bg-gray-700/50 hover:bg-gray-200/50"
                  }`}
                  aria-label={t(item.labelKey)}
                  title={t(item.labelKey)}
                >
                  <IconComponent />
                </button>
              );
            })}
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 rounded-full dark:bg-gray-800/50 bg-gray-100/50 dark:hover:bg-gray-700/50 hover:bg-gray-200/50 dark:text-gray-300 text-gray-700 transition-all duration-200 flex items-center justify-center hover:scale-105 text-sm font-medium"
              aria-label="Toggle language"
              title={language === "fr" ? "Switch to English" : "Passer en français"}
            >
              {language === "fr" ? "EN" : "FR"}
            </button>
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full dark:bg-gray-800/50 bg-gray-100/50 dark:hover:bg-gray-700/50 hover:bg-gray-200/50 dark:text-gray-300 text-gray-700 transition-all duration-200 flex items-center justify-center hover:scale-110"
              aria-label="Toggle theme"
              title={theme === "dark" ? t("nav.toggleTheme") : t("nav.toggleThemeDark")}
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}


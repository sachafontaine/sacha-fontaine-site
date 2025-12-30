"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

export default function Hero() {
  const { t } = useLanguage();

  const tags = [
    "Product Builder",
    "IA & LLM",
    "No-code / low-code",
    "Sites web & apps",
    "Automation",
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="hero" className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="dark:bg-gray-900/50 bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-12 dark:border-gray-800/50 border-gray-200/50 shadow-2xl transition-colors duration-200"
        >
          <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
            <div className="flex-1 space-y-6">
              <div>
                <motion.h1
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold dark:text-white text-gray-900 mb-2"
                >
                  Sacha Fontaine
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-xl sm:text-2xl dark:text-gray-300 text-gray-700 font-medium mb-4"
                >
                  {t("hero.subtitle")}
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-3 dark:text-gray-300 text-gray-700 leading-relaxed"
              >
                <p>{t("hero.description1")}</p>
                <p>{t("hero.description2")}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-2"
              >
                <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-medium border border-green-500/30">
                  {t("hero.available")}
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-2"
              >
                {tags.map((tag, index) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full dark:bg-gray-800/50 bg-gray-100 dark:text-gray-300 text-gray-700 text-sm dark:border-gray-700/50 border-gray-300/50"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <button
                  onClick={() => scrollToSection("projects")}
                  className="px-6 py-3 rounded-lg dark:bg-gray-800 bg-gray-900 dark:text-white text-white font-medium transition-all duration-200 hover:scale-105"
                >
                  {t("hero.seeProjects")}
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-6 py-3 rounded-lg dark:bg-gray-800/50 bg-gray-100 dark:hover:bg-gray-700/50 hover:bg-gray-200 dark:text-white text-gray-900 font-medium dark:border-gray-700/50 border-gray-300/50 transition-all duration-200 hover:scale-105"
                >
                  {t("hero.contactMe")}
                </button>
                <a
                  href="/sacha_fontaine_cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg dark:bg-gray-800/50 bg-gray-100 dark:hover:bg-gray-700/50 hover:bg-gray-200 dark:text-white text-gray-900 font-medium dark:border-gray-700/50 border-gray-300/50 transition-all duration-200 hover:scale-105 text-center"
                >
                  {t("hero.downloadCV")}
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="relative"
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-2xl dark:border-4 border-4 dark:border-gray-800 border-gray-200 relative"
              >
                <Image
                  src="/images/profile.jpg"
                  alt="Sacha Fontaine"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


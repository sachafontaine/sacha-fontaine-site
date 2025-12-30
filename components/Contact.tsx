"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-12 px-4 sm:px-6 lg:px-8 pb-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="dark:bg-gray-900/50 bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-12 dark:border-gray-800/50 border-gray-200/50 shadow-2xl transition-colors duration-200"
        >
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full dark:bg-gray-500 bg-gray-400"></span>
              <span className="text-sm dark:text-gray-400 text-gray-600 uppercase tracking-wide">
                Contact
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold dark:text-white text-gray-900 mb-4">
              {t("contact.title")}
            </h2>
          </div>
          <p className="dark:text-gray-300 text-gray-700 leading-relaxed mb-8 max-w-2xl">
            {t("contact.description")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Mail */}
            <motion.a
              href="mailto:hello@sachafontaine.fr"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="p-6 rounded-lg dark:bg-gray-800/50 bg-gray-50 dark:hover:bg-gray-800/70 hover:bg-gray-100 dark:border-gray-700/30 border-gray-200 transition-all duration-200 cursor-pointer group"
            >
              <div className="flex flex-col items-center text-center">
                <svg
                  className="w-8 h-8 mb-3 dark:text-gray-400 text-gray-600 group-hover:dark:text-white group-hover:text-gray-900 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <h3 className="font-semibold dark:text-white text-gray-900 mb-1">
                  Email
                </h3>
                <p className="text-sm dark:text-gray-400 text-gray-600 break-all">
                  hello@sachafontaine.fr
                </p>
              </div>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/sacha-fontaine/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="p-6 rounded-lg dark:bg-gray-800/50 bg-gray-50 dark:hover:bg-gray-800/70 hover:bg-gray-100 dark:border-gray-700/30 border-gray-200 transition-all duration-200 cursor-pointer group"
            >
              <div className="flex flex-col items-center text-center">
                <svg
                  className="w-8 h-8 mb-3 dark:text-gray-400 text-gray-600 group-hover:dark:text-white group-hover:text-gray-900 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <h3 className="font-semibold dark:text-white text-gray-900 mb-1">
                  LinkedIn
                </h3>
                <p className="text-sm dark:text-gray-400 text-gray-600">
                  Connectons-nous
                </p>
              </div>
            </motion.a>

            {/* GitHub */}
            <motion.a
              href="https://github.com/sachafontaine/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="p-6 rounded-lg dark:bg-gray-800/50 bg-gray-50 dark:hover:bg-gray-800/70 hover:bg-gray-100 dark:border-gray-700/30 border-gray-200 transition-all duration-200 cursor-pointer group"
            >
              <div className="flex flex-col items-center text-center">
                <svg
                  className="w-8 h-8 mb-3 dark:text-gray-400 text-gray-600 group-hover:dark:text-white group-hover:text-gray-900 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                <h3 className="font-semibold dark:text-white text-gray-900 mb-1">
                  GitHub
                </h3>
                <p className="text-sm dark:text-gray-400 text-gray-600">
                  Voir mes projets
                </p>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

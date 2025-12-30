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

          <div className="space-y-6">
            <a
              href="mailto:sacha@example.com"
              className="inline-block"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-lg dark:bg-gray-800 bg-gray-900 dark:text-white text-white font-semibold text-lg transition-all duration-200 w-full sm:w-auto"
              >
                {t("contact.writeMe")}
              </motion.button>
            </a>

            <div className="mt-8 pt-8 dark:border-t border-t dark:border-gray-800 border-gray-200">
              <h3 className="text-xl font-semibold dark:text-white text-gray-900 mb-4">
                {t("contact.formTitle")}
              </h3>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-2"
                  >
                    {t("contact.name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg dark:bg-gray-800/50 bg-gray-50 dark:border-gray-700/50 border-gray-300 dark:text-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-all"
                    placeholder={t("contact.namePlaceholder")}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-2"
                  >
                    {t("contact.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg dark:bg-gray-800/50 bg-gray-50 dark:border-gray-700/50 border-gray-300 dark:text-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-all"
                    placeholder={t("contact.emailPlaceholder")}
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-2"
                  >
                    {t("contact.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg dark:bg-gray-800/50 bg-gray-50 dark:border-gray-700/50 border-gray-300 dark:text-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                    placeholder={t("contact.messagePlaceholder")}
                  />
                </div>
                <button
                  type="button"
                  className="px-6 py-3 rounded-lg dark:bg-gray-800/50 bg-gray-100 dark:hover:bg-gray-700/50 hover:bg-gray-200 dark:text-white text-gray-900 font-medium dark:border-gray-700/50 border-gray-300/50 transition-all duration-200 hover:scale-105"
                  onClick={(e) => {
                    e.preventDefault();
                    alert(t("contact.sendAlert"));
                  }}
                >
                  {t("contact.send")}
                </button>
              </form>
            </div>

            <div className="mt-8 pt-8 dark:border-t border-t dark:border-gray-800 border-gray-200">
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.linkedin.com/in/sacha-fontaine/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark:text-gray-400 text-gray-600 hover:text-gray-300 dark:hover:text-gray-200 transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/sachafontaine/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark:text-gray-400 text-gray-600 hover:text-gray-300 dark:hover:text-gray-200 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


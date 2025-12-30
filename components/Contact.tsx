"use client";

import { motion } from "framer-motion";
import { FormEvent, useMemo, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

type Captcha = {
  a: number;
  b: number;
};

const generateCaptcha = (): Captcha => ({
  a: Math.floor(Math.random() * 8) + 2,
  b: Math.floor(Math.random() * 8) + 2,
});

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    captchaAnswer: "",
  });
  const [captcha, setCaptcha] = useState<Captcha>(generateCaptcha);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [feedback, setFeedback] = useState<string | null>(null);

  const captchaQuestion = useMemo(
    () => `${captcha.a} + ${captcha.b}`,
    [captcha.a, captcha.b],
  );

  const resetForm = () => {
    setFormData({ name: "", email: "", message: "", captchaAnswer: "" });
    setCaptcha(generateCaptcha());
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFeedback(null);

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim() ||
      !formData.captchaAnswer.trim()
    ) {
      setStatus("error");
      setFeedback(t("contact.requiredFields"));
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          captcha,
          captchaAnswer: formData.captchaAnswer,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFeedback(t("contact.success"));
        resetForm();
      } else {
        const data = await response.json().catch(() => null);
        setStatus("error");
        setFeedback(data?.error ?? t("contact.error"));
        setCaptcha(generateCaptcha());
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setFeedback(t("contact.error"));
      setCaptcha(generateCaptcha());
    }
  };

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


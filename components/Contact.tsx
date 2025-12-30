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
            <div className="mt-8 pt-8 dark:border-t border-t dark:border-gray-800 border-gray-200">
              <h3 className="text-xl font-semibold dark:text-white text-gray-900 mb-4">
                {t("contact.formTitle")}
              </h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
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
                    required
                    className="w-full px-4 py-3 rounded-lg dark:bg-gray-800/50 bg-gray-50 dark:border-gray-700/50 border-gray-300 dark:text-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-all"
                    placeholder={t("contact.namePlaceholder")}
                    value={formData.name}
                    onChange={(event) =>
                      setFormData((previous) => ({
                        ...previous,
                        name: event.target.value,
                      }))
                    }
                    autoComplete="name"
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
                    required
                    className="w-full px-4 py-3 rounded-lg dark:bg-gray-800/50 bg-gray-50 dark:border-gray-700/50 border-gray-300 dark:text-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-all"
                    placeholder={t("contact.emailPlaceholder")}
                    value={formData.email}
                    onChange={(event) =>
                      setFormData((previous) => ({
                        ...previous,
                        email: event.target.value,
                      }))
                    }
                    autoComplete="email"
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
                    required
                    className="w-full px-4 py-3 rounded-lg dark:bg-gray-800/50 bg-gray-50 dark:border-gray-700/50 border-gray-300 dark:text-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                    placeholder={t("contact.messagePlaceholder")}
                    value={formData.message}
                    onChange={(event) =>
                      setFormData((previous) => ({
                        ...previous,
                        message: event.target.value,
                      }))
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor="captcha"
                    className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-2"
                  >
                    {t("contact.captcha")} ({captchaQuestion})
                  </label>
                  <input
                    type="number"
                    id="captcha"
                    name="captcha"
                    required
                    className="w-full px-4 py-3 rounded-lg dark:bg-gray-800/50 bg-gray-50 dark:border-gray-700/50 border-gray-300 dark:text-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-all"
                    placeholder={t("contact.captchaPlaceholder")}
                    value={formData.captchaAnswer}
                    onChange={(event) =>
                      setFormData((previous) => ({
                        ...previous,
                        captchaAnswer: event.target.value,
                      }))
                    }
                    inputMode="numeric"
                    min="0"
                  />
                </div>
                {feedback && (
                  <p
                    className={`text-sm ${
                      status === "success"
                        ? "text-green-600 dark:text-green-400"
                        : "text-red-600 dark:text-red-400"
                    }`}
                    aria-live="polite"
                  >
                    {feedback}
                  </p>
                )}
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg dark:bg-gray-800/50 bg-gray-100 dark:hover:bg-gray-700/50 hover:bg-gray-200 dark:text-white text-gray-900 font-medium dark:border-gray-700/50 border-gray-300/50 transition-all duration-200 hover:scale-105 disabled:opacity-60"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? t("contact.sending") : t("contact.send")}
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


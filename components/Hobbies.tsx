"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Hobby {
  title: string;
  description: string;
}

function getHobbies(t: (key: string) => string): Hobby[] {
  return [
    {
      title: t("hobbies.running.title"),
      description: t("hobbies.running.desc"),
    },
    {
      title: t("hobbies.ai.title"),
      description: t("hobbies.ai.desc"),
    },
    {
      title: t("hobbies.side.title"),
      description: t("hobbies.side.desc"),
    },
  ];
}

function HobbyBlock({ hobby, index }: { hobby: Hobby; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="dark:bg-gray-800/30 bg-gray-50 rounded-xl p-6 dark:border-gray-700/50 border-gray-200 transition-colors duration-200"
    >
      <h3 className="text-xl font-semibold dark:text-white text-gray-900 mb-3">
        {hobby.title}
      </h3>
      <p className="dark:text-gray-300 text-gray-700 leading-relaxed">{hobby.description}</p>
    </motion.div>
  );
}

export default function Hobbies() {
  const { t } = useLanguage();
  const hobbies = getHobbies(t);

  return (
    <section id="hobbies" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="dark:bg-gray-900/50 bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-12 dark:border-gray-800/50 border-gray-200/50 shadow-2xl transition-colors duration-200"
        >
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full dark:bg-gray-500 bg-gray-400"></span>
              <span className="text-sm dark:text-gray-400 text-gray-600 uppercase tracking-wide">
                {t("hobbies.title")}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold dark:text-white text-gray-900">
              {t("hobbies.title")}
            </h2>
          </div>
          <div className="space-y-6">
            {hobbies.map((hobby, index) => (
              <HobbyBlock key={index} hobby={hobby} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Experience {
  title: string;
  organization: string;
  period: string;
  points: string[];
}

function getExperiences(t: (key: string) => string): Experience[] {
  return [
    {
      title: t("exp.qwant.title"),
      organization: t("exp.qwant.org"),
      period: t("exp.qwant.period"),
      points: [
        t("exp.qwant.point1"),
        t("exp.qwant.point2"),
        t("exp.qwant.point3"),
      ],
    },
    {
      title: t("exp.freelance.title"),
      organization: t("exp.freelance.org"),
      period: t("exp.freelance.period"),
      points: [
        t("exp.freelance.point1"),
        t("exp.freelance.point2"),
        t("exp.freelance.point3"),
      ],
    },
    {
      title: t("exp.startup.title"),
      organization: t("exp.startup.org"),
      period: t("exp.startup.period"),
      points: [
        t("exp.startup.point1"),
        t("exp.startup.point2"),
        t("exp.startup.point3"),
      ],
    },
    {
      title: t("exp.media.title"),
      organization: t("exp.media.org"),
      period: t("exp.media.period"),
      points: [
        t("exp.media.point1"),
        t("exp.media.point2"),
        t("exp.media.point3"),
      ],
    },
  ];
}

function ExperienceItem({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-8 last:pb-0 dark:border-gray-800 border-gray-300 border-l-2"
    >
      <div className="absolute -left-2 top-0 w-4 h-4 rounded-full dark:bg-gray-500 bg-gray-400 dark:border-2 border-2 dark:border-gray-900 border-white"></div>
      <div className="space-y-2">
        <div>
          <h3 className="text-xl font-semibold dark:text-white text-gray-900">
            {experience.title}
          </h3>
          <p className="dark:text-gray-300 text-gray-700 font-medium">
            {experience.organization}
          </p>
          <p className="text-sm dark:text-gray-400 text-gray-600">{experience.period}</p>
        </div>
        <ul className="space-y-1 dark:text-gray-300 text-gray-700">
          {experience.points.map((point, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="dark:text-gray-400 text-gray-500 mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Experiences() {
  const { t } = useLanguage();
  const experiences = getExperiences(t);

  return (
    <section id="experiences" className="py-12 px-4 sm:px-6 lg:px-8">
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
                {t("exp.title")}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold dark:text-white text-gray-900">
              {t("exp.title")}
            </h2>
          </div>
          <div className="space-y-0">
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} experience={exp} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


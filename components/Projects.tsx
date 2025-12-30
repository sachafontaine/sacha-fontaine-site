"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

interface Project {
  id: string;
  name: string;
  type: string;
  points: string[];
  client: string;
  company: string;
  year: string;
  description: string;
  cta: string;
  images?: string[];
}

function getProjects(t: (key: string) => string): Project[] {
  return [
    {
      id: "search",
      name: t("projects.search.name"),
      type: t("projects.search.type"),
      points: [
        t("projects.search.point1"),
        t("projects.search.point2"),
        t("projects.search.point3"),
      ],
      client: t("projects.search.client"),
      company: t("projects.search.company"),
      year: t("projects.search.year"),
      description: t("projects.search.description"),
      cta: t("projects.search.cta"),
    },
    {
      id: "dashboard",
      name: t("projects.dashboard.name"),
      type: t("projects.dashboard.type"),
      points: [
        t("projects.dashboard.point1"),
        t("projects.dashboard.point2"),
        t("projects.dashboard.point3"),
      ],
      client: t("projects.dashboard.client"),
      company: t("projects.dashboard.company"),
      year: t("projects.dashboard.year"),
      description: t("projects.dashboard.description"),
      cta: t("projects.dashboard.cta"),
    },
    {
      id: "chatbot",
      name: t("projects.chatbot.name"),
      type: t("projects.chatbot.type"),
      points: [
        t("projects.chatbot.point1"),
        t("projects.chatbot.point2"),
        t("projects.chatbot.point3"),
      ],
      client: t("projects.chatbot.client"),
      company: t("projects.chatbot.company"),
      year: t("projects.chatbot.year"),
      description: t("projects.chatbot.description"),
      cta: t("projects.chatbot.cta"),
    },
    {
      id: "nocode",
      name: t("projects.nocode.name"),
      type: t("projects.nocode.type"),
      points: [
        t("projects.nocode.point1"),
        t("projects.nocode.point2"),
        t("projects.nocode.point3"),
      ],
      client: t("projects.nocode.client"),
      company: t("projects.nocode.company"),
      year: t("projects.nocode.year"),
      description: t("projects.nocode.description"),
      cta: t("projects.nocode.cta"),
    },
    {
      id: "automation",
      name: t("projects.automation.name"),
      type: t("projects.automation.type"),
      points: [
        t("projects.automation.point1"),
        t("projects.automation.point2"),
        t("projects.automation.point3"),
      ],
      client: t("projects.automation.client"),
      company: t("projects.automation.company"),
      year: t("projects.automation.year"),
      description: t("projects.automation.description"),
      cta: t("projects.automation.cta"),
    },
    {
      id: "ecommerce",
      name: t("projects.ecommerce.name"),
      type: t("projects.ecommerce.type"),
      points: [
        t("projects.ecommerce.point1"),
        t("projects.ecommerce.point2"),
        t("projects.ecommerce.point3"),
      ],
      client: t("projects.ecommerce.client"),
      company: t("projects.ecommerce.company"),
      year: t("projects.ecommerce.year"),
      description: t("projects.ecommerce.description"),
      cta: t("projects.ecommerce.cta"),
    },
  ];
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useLanguage();

  // Générer une icône/lettre pour chaque projet
  const projectIcon = project.name.charAt(0).toUpperCase();
  const iconColors = [
    "bg-gray-600",
    "bg-gray-500",
    "bg-gray-700",
    "bg-gray-600",
    "bg-gray-500",
    "bg-gray-700",
  ];

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={!isExpanded ? { x: 4, transition: { duration: 0.2 } } : {}}
        onClick={() => setIsExpanded(!isExpanded)}
        className="dark:bg-gray-800/50 bg-gray-50 dark:hover:bg-gray-800/70 hover:bg-gray-100 rounded-xl dark:border-gray-700/30 border-gray-200 transition-all duration-200 cursor-pointer"
      >
        {/* Card Header */}
        <div className="p-5 flex items-center gap-4">
          <div
            className={`w-12 h-12 rounded-full ${iconColors[index % iconColors.length]} flex items-center justify-center text-white font-semibold text-lg flex-shrink-0`}
          >
            {projectIcon}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold dark:text-white text-gray-900 mb-1">
              {project.name}
            </h3>
            <p className="text-sm dark:text-gray-400 text-gray-600">
              {project.type}
            </p>
          </div>
          <div className="flex-shrink-0 dark:text-gray-400 text-gray-600 transition-transform duration-200">
            <motion.span
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              ↓
            </motion.span>
          </div>
        </div>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-5 pb-5 pt-0 border-t dark:border-gray-700/30 border-gray-200 mt-4">
                {/* Project Details Header */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 pt-4">
                  <div>
                    <p className="text-xs dark:text-gray-500 text-gray-500 mb-1 uppercase tracking-wide">
                      {t("projects.detail.client")}
                    </p>
                    <p className="text-sm font-medium dark:text-white text-gray-900">
                      {project.client}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs dark:text-gray-500 text-gray-500 mb-1 uppercase tracking-wide">
                      {t("projects.detail.company")}
                    </p>
                    <p className="text-sm font-medium dark:text-white text-gray-900">
                      {project.company}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs dark:text-gray-500 text-gray-500 mb-1 uppercase tracking-wide">
                      {t("projects.detail.type")}
                    </p>
                    <p className="text-sm font-medium dark:text-white text-gray-900">
                      {project.type}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs dark:text-gray-500 text-gray-500 mb-1 uppercase tracking-wide">
                      {t("projects.detail.year")}
                    </p>
                    <p className="text-sm font-medium dark:text-white text-gray-900">
                      {project.year}
                    </p>
                  </div>
                </div>

                {/* Project Logo/Icon Large */}
                <div className="mb-6">
                  <div
                    className={`w-20 h-20 rounded-full ${iconColors[index % iconColors.length]} flex items-center justify-center text-white font-bold text-3xl`}
                  >
                    {projectIcon}
                  </div>
                </div>

                {/* Project Title */}
                <h4 className="text-2xl font-bold dark:text-white text-gray-900 mb-4">
                  {project.name}
                </h4>

                {/* Rich Text Description */}
                <div className="mb-6">
                  <p className="text-base dark:text-gray-300 text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Key Points */}
                <div className="mb-6">
                  <ul className="space-y-2 dark:text-gray-300 text-gray-700">
                    {project.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="dark:text-gray-400 text-gray-500 mt-1">•</span>
                        <span className="text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Images Section (placeholder - vous pouvez ajouter des images plus tard) */}
                <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="aspect-video dark:bg-gray-800/50 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-sm dark:text-gray-500 text-gray-400">
                      Image 1
                    </span>
                  </div>
                  <div className="aspect-video dark:bg-gray-800/50 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-sm dark:text-gray-500 text-gray-400">
                      Image 2
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      // Action du bouton CTA
                    }}
                    className="px-6 py-3 rounded-lg dark:bg-gray-800 bg-gray-900 dark:text-white text-white font-medium transition-all duration-200 hover:scale-105 flex items-center gap-2"
                  >
                    <span>{project.cta}</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default function Projects() {
  const { t } = useLanguage();
  const projects = getProjects(t);

  return (
    <section id="projects" className="py-12 px-4 sm:px-6 lg:px-8">
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
                {t("projects.title")}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold dark:text-white text-gray-900 mb-4">
              {t("projects.title")}
            </h2>
          </div>
          <div className="space-y-3">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

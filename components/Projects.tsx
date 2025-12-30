"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
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
      images: ["/images/pacemate1.png", "/images/pacemate2.png"],
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
      images: [
        "/images/mouillerlemaillot.png",
        "/images/tabledescopains.png",
        "/images/pastislaborde.png",
        "/images/maisonm.png",
      ],
    },
  ];
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isExpanded, setIsExpanded] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
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

  // Fonctions pour la galerie
  const openGallery = (imageIndex: number) => {
    setCurrentImageIndex(imageIndex);
    setGalleryOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeGallery = () => {
    setGalleryOpen(false);
    document.body.style.overflow = "unset";
  };

  const nextImage = () => {
    if (project.images && project.images.length > 0) {
      const imagesLength = project.images.length;
      setCurrentImageIndex((prev) => (prev + 1) % imagesLength);
    }
  };

  const prevImage = () => {
    if (project.images && project.images.length > 0) {
      const imagesLength = project.images.length;
      setCurrentImageIndex((prev) => (prev - 1 + imagesLength) % imagesLength);
    }
  };

  // Navigation au clavier
  useEffect(() => {
    if (!galleryOpen || !project.images) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeGallery();
      } else if (e.key === "ArrowRight") {
        nextImage();
      } else if (e.key === "ArrowLeft") {
        prevImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [galleryOpen]);

  // Nettoyage au démontage
  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

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

                {/* Images Section */}
                {project.images && project.images.length > 0 && (
                  <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.images.map((image, idx) => (
                      <div
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          openGallery(idx);
                        }}
                        className="aspect-video relative rounded-lg overflow-hidden dark:bg-gray-800/50 bg-gray-100 cursor-pointer hover:opacity-90 transition-opacity duration-200 group"
                      >
                        <Image
                          src={image}
                          alt={`${project.name} - Image ${idx + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white bg-black/50 px-3 py-1 rounded-full text-sm">
                            Cliquer pour agrandir
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

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

      {/* Gallery Modal */}
      <AnimatePresence>
        {galleryOpen && project.images && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeGallery}
          >
            {/* Close Button */}
            <button
              onClick={closeGallery}
              className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors duration-200 p-2"
              aria-label="Fermer la galerie"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Previous Button */}
            {project.images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 z-10 text-white hover:text-gray-300 transition-colors duration-200 p-3 bg-black/50 rounded-full hover:bg-black/70"
                aria-label="Image précédente"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            )}

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-[90vw] max-h-[90vh] w-auto h-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={project.images[currentImageIndex]}
                alt={`${project.name} - Image ${currentImageIndex + 1}`}
                width={1200}
                height={800}
                className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg"
                priority
              />
            </motion.div>

            {/* Next Button */}
            {project.images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 z-10 text-white hover:text-gray-300 transition-colors duration-200 p-3 bg-black/50 rounded-full hover:bg-black/70"
                aria-label="Image suivante"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            )}

            {/* Image Counter */}
            {project.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 text-white bg-black/50 px-4 py-2 rounded-full text-sm">
                {currentImageIndex + 1} / {project.images.length}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
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

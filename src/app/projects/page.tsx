"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";

const categories = ["All", "Residential", "Commercial", "Hospitality", "Cultural"];

const projects = [
    {
        title: "Skyline Residences",
        category: "Residential",
        year: "2025",
        image: "/images/project_skyline_1770311730864.png",
        href: "/projects/skyline-residences",
    },
    {
        title: "Azure Office Complex",
        category: "Commercial",
        year: "2024",
        image: "/images/project_azure_1770311747853.png",
        href: "/projects/azure-office",
    },
    {
        title: "Emerald Gardens Hotel",
        category: "Hospitality",
        year: "2023",
        image: "/images/project_emerald_1770311765469.png",
        href: "/projects/emerald-gardens",
    },
    {
        title: "Metropolitan Tower",
        category: "Commercial",
        year: "2024",
        image: "/images/hero_architecture_1770311713692.png",
        href: "/projects/metropolitan-tower",
    },
    {
        title: "Serenity Villa",
        category: "Residential",
        year: "2023",
        image: "/images/project_skyline_1770311730864.png",
        href: "/projects/serenity-villa",
    },
    {
        title: "The Grand Museum",
        category: "Cultural",
        year: "2024",
        image: "/images/about_studio_1770311781747.png",
        href: "/projects/grand-museum",
    },
    {
        title: "Horizon Resort",
        category: "Hospitality",
        year: "2023",
        image: "/images/project_emerald_1770311765469.png",
        href: "/projects/horizon-resort",
    },
    {
        title: "Innovation Hub",
        category: "Commercial",
        year: "2024",
        image: "/images/project_azure_1770311747853.png",
        href: "/projects/innovation-hub",
    },
];

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects =
        activeCategory === "All"
            ? projects
            : projects.filter((p) => p.category === activeCategory);

    return (
        <>
            {/* Hero Section */}
            <section className="section pt-32 lg:pt-40 section-dark">
                <div className="container">
                    <SectionHeader
                        subtitle="Our Portfolio"
                        title="Projects"
                        description="Explore our diverse portfolio of architectural and interior design projects spanning residential, commercial, hospitality, and cultural spaces."
                    />

                    {/* Category Filters */}
                    <div className="filter-tabs justify-center">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`filter-tab ${activeCategory === category ? "active" : ""
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="grid-projects"
                        >
                            {filteredProjects.map((project) => (
                                <ProjectCard key={project.title} {...project} />
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {/* Empty State */}
                    {filteredProjects.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-20"
                        >
                            <p className="text-[--muted-gray] text-lg">
                                No projects found in this category.
                            </p>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Stats Section */}
            <section className="section section-charcoal">
                <div className="container">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                        {[
                            { number: "200+", label: "Projects Completed" },
                            { number: "15+", label: "Years of Excellence" },
                            { number: "50+", label: "Design Awards" },
                            { number: "30+", label: "Countries" },
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-center"
                            >
                                <span className="text-4xl lg:text-5xl font-heading text-[--gold] block mb-2">
                                    {stat.number}
                                </span>
                                <span className="text-small-caps text-[--muted-gray]">
                                    {stat.label}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

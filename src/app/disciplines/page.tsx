"use client";

import { motion } from "framer-motion";
import DisciplineCard from "@/components/DisciplineCard";
import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";

const disciplines = [
    {
        id: "architecture",
        title: "Architecture",
        description:
            "Designing structures that harmonize form, function, and context. From conceptual design to construction, we create buildings that inspire and endure.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
            </svg>
        ),
    },
    {
        id: "interiors",
        title: "Interior Design",
        description:
            "Crafting interior spaces that reflect personality and purpose. Every element is thoughtfully curated to create environments of comfort and beauty.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                <path d="M20 9v11a2 2 0 01-2 2H6a2 2 0 01-2-2V9M9 22V12h6v10M2 10l10-8 10 8" />
            </svg>
        ),
    },
    {
        id: "urban",
        title: "Urban Design",
        description:
            "Shaping the public realm and urban landscapes. We design cities and neighborhoods that foster community, connectivity, and quality of life.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                <path d="M3 21h18M9 21V10h6v11M6 21V14h3M15 21V14h3M12 3v4M8 7h8" />
            </svg>
        ),
    },
    {
        id: "landscape",
        title: "Landscape Architecture",
        description:
            "Integrating nature with the built environment. Our landscape designs create outdoor spaces that enhance wellbeing and ecological sustainability.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                <path d="M12 3a7 7 0 017 7c0 3-2 5-4 6v5H9v-5c-2-1-4-3-4-6a7 7 0 017-7z" />
                <path d="M9 21h6" />
            </svg>
        ),
    },
    {
        id: "parametric",
        title: "Parametric Design",
        description:
            "Leveraging computational design to explore complex geometries and optimize performance. Pushing the boundaries of architectural form.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
        ),
    },
    {
        id: "sustainable",
        title: "Sustainable Design",
        description:
            "Creating environmentally responsible designs that minimize impact and maximize efficiency. Sustainability is integrated into every decision.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c2.39 0 4.68-.94 6.36-2.64M12 3v9l6 3" />
                <path d="M17 3a5 5 0 015 5M17 3v5h5" />
            </svg>
        ),
    },
    {
        id: "experiential",
        title: "Experiential Design",
        description:
            "Designing immersive experiences and environments. From retail spaces to exhibitions, we create memorable journeys that engage all senses.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
        ),
    },
    {
        id: "digital",
        title: "Digital Visualization",
        description:
            "Bringing designs to life through photorealistic renderings, animations, and virtual reality. See your project before it&apos;s built.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
];

export default function DisciplinesPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="section pt-32 lg:pt-40 section-dark">
                <div className="container">
                    <SectionHeader
                        subtitle="Our Expertise"
                        title="Disciplines"
                        description="A multi-disciplinary approach that brings together expertise across architecture, design, sustainability, and digital innovation to deliver holistic solutions."
                    />

                    {/* Disciplines Grid */}
                    <div className="grid-disciplines">
                        {disciplines.map((discipline, index) => (
                            <div key={discipline.id} id={discipline.id}>
                                <DisciplineCard
                                    title={discipline.title}
                                    description={discipline.description}
                                    icon={discipline.icon}
                                    index={index}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Approach Section */}
            <section className="section section-charcoal">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <span className="text-small-caps text-[--gold] block mb-4">
                                Our Approach
                            </span>
                            <h2 className="text-3xl lg:text-4xl font-heading mb-6">
                                Integrated Design Thinking
                            </h2>
                            <p className="text-[--platinum] mb-6">
                                Our multi-disciplinary teams work collaboratively from day one,
                                ensuring that architecture, interiors, landscape, and
                                sustainability are considered holistically throughout the design
                                process.
                            </p>
                            <p className="text-[--platinum] mb-8">
                                This integrated approach results in cohesive designs that
                                perform better, cost less, and create more meaningful
                                experiences for the people who use them.
                            </p>
                            <Link href="/about" className="btn btn-primary">
                                Learn About Our Process
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="grid grid-cols-2 gap-6"
                        >
                            {[
                                { number: "40%", label: "Energy Reduction" },
                                { number: "8", label: "Disciplines" },
                                { number: "500+", label: "Collaborators" },
                                { number: "100%", label: "Integrated Teams" },
                            ].map((stat, index) => (
                                <div
                                    key={stat.label}
                                    className="p-6 border border-white/5 text-center"
                                >
                                    <span className="text-3xl font-heading text-[--gold] block mb-2">
                                        {stat.number}
                                    </span>
                                    <span className="text-xs text-[--muted-gray] uppercase tracking-wider">
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section section-blue">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h2 className="text-3xl lg:text-4xl font-heading mb-6">
                            Have a project in mind?
                        </h2>
                        <p className="text-editorial text-[--soft-cream] mb-10">
                            Our team of experts is ready to bring your vision to life. Let&apos;s
                            explore how our disciplines can serve your needs.
                        </p>
                        <Link href="/contact" className="btn btn-gold">
                            Get in Touch
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}

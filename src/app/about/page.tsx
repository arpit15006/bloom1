"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";
import Image from "next/image";

const timeline = [
    {
        year: "2010",
        title: "Founded",
        description:
            "Blubloom Interiors was established with a vision to redefine architectural design.",
    },
    {
        year: "2014",
        title: "First Major Award",
        description:
            "Recognized with our first international design award for the Azure Tower project.",
    },
    {
        year: "2017",
        title: "Global Expansion",
        description:
            "Opened studios in London, Dubai, and Singapore, marking our global presence.",
    },
    {
        year: "2020",
        title: "Digital Practice",
        description:
            "Launched our dedicated digital practice and SpaceTwin platform.",
    },
    {
        year: "2024",
        title: "200+ Projects",
        description:
            "Celebrating over 200 completed projects across 30+ countries worldwide.",
    },
];

const philosophy = [
    {
        title: "Innovation",
        description:
            "Pushing boundaries with cutting-edge design thinking and technology integration.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
    },
    {
        title: "Sustainability",
        description:
            "Creating designs that minimize environmental impact and promote ecological balance.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
        ),
    },
    {
        title: "Human-Centered",
        description:
            "Designing spaces that prioritize human experience, comfort, and wellbeing.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
    },
];

const process = [
    {
        step: "01",
        title: "Discovery",
        description:
            "Understanding your vision, constraints, and aspirations through deep collaboration.",
    },
    {
        step: "02",
        title: "Concept",
        description:
            "Exploring design possibilities and developing a compelling architectural vision.",
    },
    {
        step: "03",
        title: "Refinement",
        description:
            "Iterating on details, materials, and systems to perfect every aspect of the design.",
    },
    {
        step: "04",
        title: "Implementation",
        description:
            "Bringing the vision to life with precision and excellence in execution.",
    },
];

export default function AboutPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="section pt-32 lg:pt-40 section-dark">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-small-caps text-[--gold] block mb-6">
                                About Us
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-8 leading-tight">
                                Shaping how people
                                <br />
                                experience spaces
                            </h1>
                            <p className="text-editorial text-[--platinum] mb-8">
                                Since 2010, Blubloom Interiors has been at the forefront of
                                architectural innovation. We are a global, multi-disciplinary
                                design studio operating at the intersection of architecture,
                                interiors, sustainability, and digital futures.
                            </p>
                            <p className="text-[--platinum]">
                                Our work spans continents and typologies, from intimate
                                residential sanctuaries to landmark commercial developments.
                                What unites it all is our commitment to design that amplifies
                                human experience.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative aspect-[4/5]"
                        >
                            <Image
                                src="/images/about_studio_1770311781747.png"
                                alt="Blubloom design studio"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="section section-charcoal">
                <div className="container">
                    <SectionHeader
                        subtitle="Our Philosophy"
                        title="What Drives Us"
                        description="Three pillars that guide every design decision we make."
                    />

                    <div className="grid md:grid-cols-3 gap-8">
                        {philosophy.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="text-center p-8 lg:p-10"
                            >
                                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center text-[--gold]">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-heading text-[--warm-ivory] mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-[--platinum] text-sm">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="section section-dark overflow-hidden">
                <div className="container">
                    <SectionHeader
                        subtitle="Our Journey"
                        title="15 Years of Excellence"
                        align="left"
                    />

                    <div className="relative max-w-4xl">
                        {/* Timeline Line - Vertical */}
                        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[--gold] via-[--gold]/60 to-[--gold]/20" />

                        {timeline.map((item, index) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="relative pl-16 md:pl-24 pb-16 last:pb-0"
                            >
                                {/* Timeline Dot with Ring */}
                                <div className="absolute left-4 md:left-8 top-1 -translate-x-1/2 flex items-center justify-center">
                                    <div className="w-4 h-4 rounded-full bg-[--gold] z-10" />
                                    <motion.div
                                        className="absolute w-8 h-8 rounded-full border-2 border-[--gold]/40"
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
                                    />
                                </div>

                                {/* Timeline Card */}
                                <div className="relative group">
                                    <motion.div
                                        whileHover={{ x: 10 }}
                                        transition={{ duration: 0.3 }}
                                        className="p-6 md:p-8 bg-[--charcoal]/50 border border-white/5 hover:border-[--gold]/30 transition-colors"
                                    >
                                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-3">
                                            <span className="text-3xl md:text-4xl font-heading text-[--gold]">
                                                {item.year}
                                            </span>
                                            <div className="hidden md:block w-12 h-px bg-[--gold]/30" />
                                            <h3 className="text-xl md:text-2xl font-heading text-[--warm-ivory]">
                                                {item.title}
                                            </h3>
                                        </div>
                                        <p className="text-[--platinum] leading-relaxed">
                                            {item.description}
                                        </p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="section section-blue">
                <div className="container">
                    <SectionHeader
                        subtitle="Our Process"
                        title="How We Work"
                        description="A proven methodology that guides every project from vision to reality."
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {process.map((item, index) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative"
                            >
                                <span className="text-6xl font-heading text-white/10 block mb-4">
                                    {item.step}
                                </span>
                                <h4 className="text-xl font-heading text-[--warm-ivory] mb-3">
                                    {item.title}
                                </h4>
                                <p className="text-[--soft-cream] text-sm">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section section-charcoal">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h2 className="text-3xl lg:text-4xl font-heading mb-6">
                            Join our team of visionaries
                        </h2>
                        <p className="text-editorial text-[--platinum] mb-10">
                            We&apos;re always looking for talented architects, designers, and
                            thinkers who share our passion for exceptional design.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn btn-primary">
                                Get in Touch
                            </Link>
                            <a href="#careers" className="btn btn-outline">
                                View Careers
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}

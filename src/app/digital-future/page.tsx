"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";
import Image from "next/image";

const digitalServices = [
    {
        title: "Data & Analytics",
        description:
            "Leveraging data to inform design decisions, optimize performance, and create evidence-based spaces that truly work for people.",
        features: [
            "Occupancy Analytics",
            "Performance Benchmarking",
            "Predictive Modeling",
            "User Behavior Studies",
        ],
    },
    {
        title: "Design Optimization",
        description:
            "Using computational tools to explore thousands of design options and find solutions that maximize value while minimizing resources.",
        features: [
            "Generative Design",
            "Energy Simulation",
            "Daylight Analysis",
            "Cost Optimization",
        ],
    },
    {
        title: "Digital Products",
        description:
            "Creating digital tools and platforms that extend the value of physical spaces and enhance how people interact with buildings.",
        features: [
            "Space Management Apps",
            "Wayfinding Systems",
            "Smart Building Interfaces",
            "Tenant Portals",
        ],
    },
    {
        title: "Digital Delivery",
        description:
            "Transforming how projects are delivered through BIM, digital twins, and connected construction technologies.",
        features: [
            "BIM Coordination",
            "Digital Twins",
            "Construction Tech",
            "As-Built Documentation",
        ],
    },
];

export default function DigitalFuturePage() {
    return (
        <>
            {/* Hero Section */}
            <section className="section pt-32 lg:pt-40 section-blue min-h-[70vh] flex items-center relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full">
                        {[...Array(20)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute border border-white/10"
                                style={{
                                    width: `${Math.random() * 200 + 50}px`,
                                    height: `${Math.random() * 200 + 50}px`,
                                    top: `${Math.random() * 100}%`,
                                    left: `${Math.random() * 100}%`,
                                    transform: `rotate(${Math.random() * 45}deg)`,
                                }}
                            />
                        ))}
                    </div>
                </div>

                <div className="container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <span className="text-small-caps text-[--gold-light] block mb-6">
                            Innovation & Technology
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-8 leading-tight">
                            Designing for the
                            <br />
                            <span className="text-[--gold]">Digital Future</span>
                        </h1>
                        <p className="text-editorial text-[--soft-cream] max-w-2xl mb-10">
                            We believe that buildings must be designed for long-term
                            relevance. Our digital practice ensures that every project is
                            future-ready, connected, and continuously optimized.
                        </p>
                        <Link href="/contact" className="btn btn-gold">
                            Explore Possibilities
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="section section-dark">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <span className="text-small-caps text-[--gold] block mb-4">
                                Our Vision
                            </span>
                            <h2 className="text-3xl lg:text-4xl font-heading mb-6">
                                Long-term Relevance
                            </h2>
                            <p className="text-[--platinum] mb-6">
                                In a world of rapid technological change, buildings must be
                                designed to adapt and evolve. We integrate digital thinking from
                                the earliest stages of design, ensuring that our projects remain
                                relevant and valuable for decades to come.
                            </p>
                            <p className="text-[--platinum]">
                                From data-driven design decisions to connected building systems,
                                we&apos;re pioneering the future of architecture and creating spaces
                                that learn, adapt, and improve over time.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="relative aspect-video lg:aspect-square"
                        >
                            <Image
                                src="/images/project_azure_1770311747853.png"
                                alt="Digital architecture"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[--midnight-charcoal] via-transparent to-transparent" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section section-charcoal">
                <div className="container">
                    <SectionHeader
                        subtitle="Digital Services"
                        title="How We Deliver Digital Value"
                        description="Our integrated digital services span the entire lifecycle of a building, from initial data gathering to ongoing optimization."
                    />

                    <div className="grid md:grid-cols-2 gap-8">
                        {digitalServices.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-8 lg:p-10 border border-white/5 hover:border-[--gold]/20 transition-colors"
                            >
                                <h3 className="text-2xl font-heading text-[--warm-ivory] mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-[--platinum] mb-6">{service.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {service.features.map((feature) => (
                                        <span
                                            key={feature}
                                            className="text-xs px-3 py-1 bg-[--royal-blue]/20 text-[--gold] rounded-full"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SpaceTwin Product Section */}
            <section className="section section-blue">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-16"
                    >
                        <span className="text-small-caps text-[--gold-light] block mb-4">
                            Introducing
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-heading mb-6">
                            SpaceTwin™
                        </h2>
                        <p className="text-editorial text-[--soft-cream] max-w-2xl mx-auto">
                            Our proprietary digital twin platform that creates living,
                            breathing virtual replicas of physical spaces — enabling real-time
                            monitoring, simulation, and optimization.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Real-time Monitoring",
                                description:
                                    "Connect to building systems and IoT sensors for live performance data.",
                            },
                            {
                                title: "Predictive Insights",
                                description:
                                    "AI-powered analytics anticipate issues before they occur.",
                            },
                            {
                                title: "What-If Simulation",
                                description:
                                    "Test scenarios and optimize operations in a risk-free environment.",
                            },
                        ].map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="text-center p-8 bg-white/5 backdrop-blur-sm"
                            >
                                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[--gold]/20 flex items-center justify-center">
                                    <span className="text-2xl font-heading text-[--gold]">
                                        {index + 1}
                                    </span>
                                </div>
                                <h4 className="text-xl font-heading text-[--warm-ivory] mb-3">
                                    {feature.title}
                                </h4>
                                <p className="text-[--soft-cream] text-sm">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-center mt-12"
                    >
                        <Link href="/contact" className="btn btn-gold">
                            Request a Demo
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}

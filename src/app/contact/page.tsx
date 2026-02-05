"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

const offices = [
    {
        city: "New York",
        address: "350 Fifth Avenue, Suite 5100",
        phone: "+1 (212) 555-0123",
        email: "newyork@blubloom.com",
    },
    {
        city: "London",
        address: "30 St Mary Axe, Level 28",
        phone: "+44 20 7946 0958",
        email: "london@blubloom.com",
    },
    {
        city: "Dubai",
        address: "Burj Khalifa, Level 124",
        phone: "+971 4 555 0199",
        email: "dubai@blubloom.com",
    },
    {
        city: "Singapore",
        address: "Marina Bay Sands, Tower 3",
        phone: "+65 6555 0188",
        email: "singapore@blubloom.com",
    },
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        projectType: "",
        budget: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log("Form submitted:", formData);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <>
            {/* Hero Section */}
            <section className="section pt-32 lg:pt-40 section-dark min-h-[50vh] flex items-center">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <span className="text-small-caps text-[--gold] block mb-6">
                            Get in Touch
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-8">
                            Let&apos;s Create Something
                            <br />
                            Extraordinary
                        </h1>
                        <p className="text-editorial text-[--platinum]">
                            Whether you have a project in mind or simply want to explore
                            possibilities, we&apos;d love to hear from you.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="section section-charcoal">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <h2 className="text-2xl font-heading mb-8">Start a Conversation</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="form-group">
                                        <label htmlFor="name" className="form-label">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="form-input"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email" className="form-label">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="form-input"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="form-group">
                                        <label htmlFor="company" className="form-label">
                                            Company / Organization
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="form-input"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="projectType" className="form-label">
                                            Project Type
                                        </label>
                                        <select
                                            id="projectType"
                                            name="projectType"
                                            value={formData.projectType}
                                            onChange={handleChange}
                                            className="form-input"
                                        >
                                            <option value="">Select a type</option>
                                            <option value="residential">Residential</option>
                                            <option value="commercial">Commercial</option>
                                            <option value="hospitality">Hospitality</option>
                                            <option value="cultural">Cultural</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="budget" className="form-label">
                                        Estimated Budget
                                    </label>
                                    <select
                                        id="budget"
                                        name="budget"
                                        value={formData.budget}
                                        onChange={handleChange}
                                        className="form-input"
                                    >
                                        <option value="">Select a range</option>
                                        <option value="under-500k">Under $500,000</option>
                                        <option value="500k-1m">$500,000 - $1,000,000</option>
                                        <option value="1m-5m">$1,000,000 - $5,000,000</option>
                                        <option value="5m-10m">$5,000,000 - $10,000,000</option>
                                        <option value="over-10m">Over $10,000,000</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message" className="form-label">
                                        Tell Us About Your Project *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="form-textarea"
                                        rows={6}
                                        required
                                    />
                                </div>

                                <button type="submit" className="btn btn-gold w-full sm:w-auto">
                                    Send Message
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                                    </svg>
                                </button>
                            </form>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            <h2 className="text-2xl font-heading mb-8">General Inquiries</h2>

                            <div className="mb-12">
                                <p className="text-[--platinum] mb-6">
                                    For general questions, press inquiries, or career
                                    opportunities, please reach out to our main office:
                                </p>
                                <div className="space-y-4">
                                    <div>
                                        <span className="text-small-caps text-[--gold] block mb-1">
                                            Email
                                        </span>
                                        <a
                                            href="mailto:hello@blubloom.com"
                                            className="text-[--warm-ivory] hover:text-[--gold] transition-colors"
                                        >
                                            hello@blubloom.com
                                        </a>
                                    </div>
                                    <div>
                                        <span className="text-small-caps text-[--gold] block mb-1">
                                            Phone
                                        </span>
                                        <a
                                            href="tel:+12125550100"
                                            className="text-[--warm-ivory] hover:text-[--gold] transition-colors"
                                        >
                                            +1 (212) 555-0100
                                        </a>
                                    </div>
                                    <div>
                                        <span className="text-small-caps text-[--gold] block mb-1">
                                            Office Hours
                                        </span>
                                        <p className="text-[--warm-ivory]">
                                            Monday – Friday: 9:00 AM – 6:00 PM (EST)
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="divider" />

                            <h3 className="text-xl font-heading mt-12 mb-6">
                                Global Studios
                            </h3>

                            <div className="grid sm:grid-cols-2 gap-8">
                                {offices.map((office) => (
                                    <div key={office.city} className="group">
                                        <h4 className="font-heading text-[--gold] mb-2">
                                            {office.city}
                                        </h4>
                                        <p className="text-[--platinum] text-sm mb-2">
                                            {office.address}
                                        </p>
                                        <a
                                            href={`tel:${office.phone.replace(/\s/g, "")}`}
                                            className="text-[--muted-gray] text-sm hover:text-[--warm-ivory] transition-colors block"
                                        >
                                            {office.phone}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="section section-dark py-0">
                <div className="w-full h-[400px] bg-[--charcoal] flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <p className="text-[--muted-gray] text-sm uppercase tracking-wider mb-2">
                            Global Presence
                        </p>
                        <p className="text-[--warm-ivory] font-heading text-xl">
                            Studios in 4 Cities Across 3 Continents
                        </p>
                    </motion.div>
                </div>
            </section>
        </>
    );
}

"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeaderProps {
    subtitle?: string;
    title: string;
    description?: string;
    align?: "left" | "center";
    children?: ReactNode;
}

export default function SectionHeader({
    subtitle,
    title,
    description,
    align = "center",
    children,
}: SectionHeaderProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`mb-12 lg:mb-16 ${align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-2xl"
                }`}
        >
            {subtitle && (
                <span className="text-small-caps text-[--gold] block mb-4">
                    {subtitle}
                </span>
            )}
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading mb-6">
                {title}
            </h2>
            {description && (
                <p className="text-editorial text-[--platinum]">{description}</p>
            )}
            {children}
        </motion.div>
    );
}

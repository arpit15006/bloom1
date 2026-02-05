"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface DisciplineCardProps {
    title: string;
    description: string;
    icon: ReactNode;
    index?: number;
}

export default function DisciplineCard({
    title,
    description,
    icon,
    index = 0,
}: DisciplineCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="card p-8 lg:p-10 cursor-pointer group"
        >
            <div className="w-12 h-12 mb-6 flex items-center justify-center text-[--gold] opacity-80 group-hover:opacity-100 transition-opacity">
                {icon}
            </div>
            <h3 className="text-xl font-heading text-[--warm-ivory] mb-3 group-hover:text-[--gold] transition-colors">
                {title}
            </h3>
            <p className="text-[--platinum] text-sm leading-relaxed">{description}</p>
        </motion.div>
    );
}

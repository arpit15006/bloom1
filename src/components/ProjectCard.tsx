"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
    title: string;
    category: string;
    year: string;
    image: string;
    href: string;
}

export default function ProjectCard({
    title,
    category,
    year,
    image,
    href,
}: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
        >
            <Link href={href} className="card-project block group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden bg-[--charcoal]">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="overlay">
                        <span className="text-small-caps text-[--gold] mb-2">
                            {category}
                        </span>
                        <h3 className="text-xl lg:text-2xl font-heading text-[--warm-ivory] mb-1">
                            {title}
                        </h3>
                        <span className="text-[--muted-gray] text-sm">{year}</span>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}

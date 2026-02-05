"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";
import Image from "next/image";

const newsArticles = [
    {
        id: 1,
        title: "Blubloom Wins Prestigious Global Design Award for Azure Office Complex",
        category: "Awards",
        date: "January 28, 2025",
        excerpt:
            "Our Azure Office Complex has been recognized with the International Architecture Award, celebrating innovative sustainable design in commercial spaces.",
        image: "/images/project_azure_1770311747853.png",
        featured: true,
    },
    {
        id: 2,
        title: "Skyline Residences: A New Landmark in Luxury Living",
        category: "Projects",
        date: "January 15, 2025",
        excerpt:
            "Explore the design journey behind Skyline Residences, our latest residential masterpiece that reimagines urban living.",
        image: "/images/project_skyline_1770311730864.png",
        featured: false,
    },
    {
        id: 3,
        title: "The Future of Sustainable Hospitality Design",
        category: "Insights",
        date: "December 20, 2024",
        excerpt:
            "Our design director shares insights on how sustainability is reshaping the hospitality industry and what it means for future projects.",
        image: "/images/project_emerald_1770311765469.png",
        featured: false,
    },
    {
        id: 4,
        title: "SpaceTwin Platform Launches New AI Features",
        category: "Technology",
        date: "December 10, 2024",
        excerpt:
            "Our digital twin platform now includes AI-powered predictive analytics for enhanced building performance optimization.",
        image: "/images/hero_architecture_1770311713692.png",
        featured: false,
    },
    {
        id: 5,
        title: "Blubloom Opens New Studio in Singapore",
        category: "Studio News",
        date: "November 25, 2024",
        excerpt:
            "Expanding our presence in Asia-Pacific with a new state-of-the-art design studio in Singapore's vibrant Marina Bay district.",
        image: "/images/about_studio_1770311781747.png",
        featured: false,
    },
    {
        id: 6,
        title: "Designing for Wellness: The Human-Centered Approach",
        category: "Insights",
        date: "November 12, 2024",
        excerpt:
            "How evidence-based design principles are creating healthier, more productive spaces for people to thrive.",
        image: "/images/project_skyline_1770311730864.png",
        featured: false,
    },
];

export default function NewsPage() {
    const featuredArticle = newsArticles.find((a) => a.featured);
    const regularArticles = newsArticles.filter((a) => !a.featured);

    return (
        <>
            {/* Hero Section */}
            <section className="section pt-32 lg:pt-40 section-dark">
                <div className="container">
                    <SectionHeader
                        subtitle="Latest Updates"
                        title="News & Insights"
                        description="Stay informed with the latest project announcements, design insights, and studio news from Blubloom Interiors."
                    />

                    {/* Featured Article */}
                    {featuredArticle && (
                        <motion.article
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16"
                        >
                            <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden group">
                                <Image
                                    src={featuredArticle.image}
                                    alt={featuredArticle.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>
                            <div className="flex flex-col justify-center">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-xs px-3 py-1 bg-[--gold]/20 text-[--gold] uppercase tracking-wider">
                                        {featuredArticle.category}
                                    </span>
                                    <span className="text-small-caps text-[--muted-gray]">
                                        {featuredArticle.date}
                                    </span>
                                </div>
                                <h2 className="text-2xl lg:text-3xl font-heading mb-4 hover:text-[--gold] transition-colors cursor-pointer">
                                    {featuredArticle.title}
                                </h2>
                                <p className="text-[--platinum] mb-6">{featuredArticle.excerpt}</p>
                                <Link
                                    href={`/news/${featuredArticle.id}`}
                                    className="text-[--gold] text-sm uppercase tracking-wider hover:text-[--gold-light] transition-colors inline-flex items-center gap-2"
                                >
                                    Read More
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </motion.article>
                    )}

                    <div className="divider" />

                    {/* Article Grid */}
                    <div className="grid-news mt-12">
                        {regularArticles.map((article, index) => (
                            <motion.article
                                key={article.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="relative aspect-[16/10] mb-6 overflow-hidden">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                                <div className="flex items-center gap-4 mb-3">
                                    <span className="text-xs text-[--gold] uppercase tracking-wider">
                                        {article.category}
                                    </span>
                                    <span className="text-xs text-[--muted-gray]">
                                        {article.date}
                                    </span>
                                </div>
                                <h3 className="text-lg font-heading text-[--warm-ivory] mb-3 group-hover:text-[--gold] transition-colors cursor-pointer leading-tight">
                                    {article.title}
                                </h3>
                                <p className="text-[--platinum] text-sm mb-4 line-clamp-2">
                                    {article.excerpt}
                                </p>
                                <Link
                                    href={`/news/${article.id}`}
                                    className="text-[--gold] text-xs uppercase tracking-wider hover:text-[--gold-light] transition-colors inline-flex items-center gap-2"
                                >
                                    Read More
                                    <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </motion.article>
                        ))}
                    </div>

                    {/* Load More */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mt-16"
                    >
                        <button className="btn btn-outline">Load More Articles</button>
                    </motion.div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="section section-blue">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-2xl mx-auto"
                    >
                        <h2 className="text-3xl lg:text-4xl font-heading mb-6">
                            Stay Inspired
                        </h2>
                        <p className="text-[--soft-cream] mb-8">
                            Subscribe to our newsletter for the latest design insights, project
                            announcements, and industry trends.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="form-input flex-1 bg-white/10 border-white/20 placeholder:text-[--platinum]"
                            />
                            <button type="submit" className="btn btn-gold whitespace-nowrap">
                                Subscribe
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </>
    );
}

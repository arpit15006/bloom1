"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { href: "/", label: "Explore" },
    { href: "/projects", label: "Projects" },
    { href: "/disciplines", label: "Disciplines" },
    { href: "/digital-future", label: "Digital Future" },
    { href: "/about", label: "About" },
    { href: "/news", label: "News" },
    { href: "/contact", label: "Contact" },
];

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? "bg-[--midnight-charcoal]/95 backdrop-blur-md py-4"
                    : "bg-transparent py-6"
                    }`}
            >
                <div className="container flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="relative z-50">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <img
                                src="/logo.svg"
                                alt="Blubloom Interior"
                                className="h-12 sm:h-14 w-auto"
                            />
                        </motion.div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link, index) => (
                            <motion.div
                                key={link.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                            >
                                <Link
                                    href={link.href}
                                    className={`nav-link ${pathname === link.href ? "text-[--warm-ivory]" : ""
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            </motion.div>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
                        aria-label="Toggle menu"
                    >
                        <motion.span
                            animate={{
                                rotate: isOpen ? 45 : 0,
                                y: isOpen ? 6 : 0,
                            }}
                            className="w-6 h-0.5 bg-[--warm-ivory] transition-colors"
                        />
                        <motion.span
                            animate={{
                                opacity: isOpen ? 0 : 1,
                            }}
                            className="w-6 h-0.5 bg-[--warm-ivory]"
                        />
                        <motion.span
                            animate={{
                                rotate: isOpen ? -45 : 0,
                                y: isOpen ? -6 : 0,
                            }}
                            className="w-6 h-0.5 bg-[--warm-ivory] transition-colors"
                        />
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-[--midnight-charcoal] lg:hidden"
                    >
                        <nav className="h-full flex flex-col items-center justify-center gap-8">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                >
                                    <Link
                                        href={link.href}
                                        className={`text-2xl font-heading tracking-wide transition-colors ${pathname === link.href
                                            ? "text-[--gold]"
                                            : "text-[--warm-ivory] hover:text-[--gold]"
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

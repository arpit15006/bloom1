import Link from "next/link";

const footerLinks = {
    explore: [
        { href: "/projects", label: "Projects" },
        { href: "/disciplines", label: "Disciplines" },
        { href: "/digital-future", label: "Digital Future" },
        { href: "/news", label: "News" },
    ],
    company: [
        { href: "/about", label: "About Us" },
        { href: "/contact", label: "Contact" },
        { href: "#careers", label: "Careers" },
        { href: "#press", label: "Press" },
    ],
    disciplines: [
        { href: "/disciplines#architecture", label: "Architecture" },
        { href: "/disciplines#interiors", label: "Interior Design" },
        { href: "/disciplines#sustainable", label: "Sustainable Design" },
        { href: "/disciplines#digital", label: "Digital Visualization" },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-[--midnight-charcoal]">
            {/* Main Footer */}
            <div className="container">
                {/* Top Section with Logo */}
                <div className="py-10 lg:py-12 border-b border-white/5">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                        {/* Brand */}
                        <div className="max-w-sm">
                            <Link href="/" className="inline-block mb-4">
                                <img
                                    src="/logo.svg"
                                    alt="Blubloom Interior"
                                    className="h-14 w-auto"
                                />
                            </Link>
                            <p className="text-[--platinum] text-sm leading-relaxed">
                                A global, multi-disciplinary design studio shaping how people
                                experience spaces.
                            </p>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            {[
                                { name: "LinkedIn", abbr: "Li" },
                                { name: "Instagram", abbr: "In" },
                                { name: "Twitter", abbr: "Tw" },
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href="#"
                                    aria-label={social.name}
                                    className="w-10 h-10 flex items-center justify-center border border-white/10 text-[--platinum] text-xs uppercase tracking-widest hover:text-[--gold] hover:border-[--gold]/50 transition-all"
                                >
                                    {social.abbr}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Links Grid */}
                <div className="py-10 lg:py-12 grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8 lg:gap-x-12">
                    <div>
                        <h4 className="text-small-caps text-[--gold] mb-5 text-xs">Explore</h4>
                        <ul className="space-y-3">
                            {footerLinks.explore.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-[--platinum] text-sm hover:text-[--warm-ivory] transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-small-caps text-[--gold] mb-5 text-xs">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-[--platinum] text-sm hover:text-[--warm-ivory] transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-small-caps text-[--gold] mb-5 text-xs">Disciplines</h4>
                        <ul className="space-y-3">
                            {footerLinks.disciplines.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-[--platinum] text-sm hover:text-[--warm-ivory] transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5 bg-[--charcoal]">
                <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-[--muted-gray] text-xs">
                        © {new Date().getFullYear()} Blubloom Interiors. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <a
                            href="#"
                            className="text-[--muted-gray] text-xs hover:text-[--platinum] transition-colors"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="text-[--muted-gray] text-xs hover:text-[--platinum] transition-colors"
                        >
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}




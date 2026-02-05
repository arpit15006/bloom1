"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";

const featuredProjects = [
  {
    title: "Skyline Residences",
    category: "Residential",
    year: "2025",
    image: "/images/project_skyline_1770311730864.png",
    href: "/projects/skyline-residences",
  },
  {
    title: "Azure Office Complex",
    category: "Commercial",
    year: "2024",
    image: "/images/project_azure_1770311747853.png",
    href: "/projects/azure-office",
  },
  {
    title: "Emerald Gardens Hotel",
    category: "Hospitality",
    year: "2023",
    image: "/images/project_emerald_1770311765469.png",
    href: "/projects/emerald-gardens",
  },
];

const disciplines = [
  { title: "Architecture", href: "/disciplines#architecture" },
  { title: "Interior Design", href: "/disciplines#interiors" },
  { title: "Sustainable Design", href: "/disciplines#sustainable" },
  { title: "Digital Visualization", href: "/disciplines#digital" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero min-h-screen relative flex items-center">
        {/* Background Image */}
        <div className="hero-bg">
          <Image
            src="/images/hero_architecture_1770311713692.png"
            alt="Modern luxury architecture"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="hero-overlay" />
        </div>

        {/* Hero Content */}
        <div className="hero-content container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-small-caps text-[--gold] block mb-6"
            >
              Global Architecture & Design Studio
            </motion.span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading leading-tight mb-8">
              We design the places
              <br />
              <span className="text-[--gold]">where people love</span>
              <br />
              to create.
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-editorial text-[--platinum] max-w-2xl mx-auto mb-10"
            >
              Operating at the intersection of architecture, interiors,
              sustainability, and digital futures — we shape experiences that
              stand the test of time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/projects" className="btn btn-primary">
                Explore Projects
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
              <Link href="/about" className="btn btn-outline">
                About Us
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border border-[--platinum]/30 rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1 h-2 bg-[--gold] rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Projects Section */}
      <section className="section section-dark">
        <div className="container">
          <SectionHeader
            subtitle="Selected Work"
            title="Featured Projects"
            description="Signature designs that define our commitment to excellence, innovation, and timeless elegance."
          />

          <div className="grid-projects">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/projects" className="btn btn-outline">
              View All Projects
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Studio Philosophy Section */}
      <section className="section section-blue relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 border border-[--gold]/20 rotate-45" />
          <div className="absolute bottom-40 right-40 w-32 h-32 border border-[--gold]/20 rotate-12" />
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-small-caps text-[--gold-light] block mb-4">
                Our Philosophy
              </span>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading mb-6 leading-tight">
                Crafting environments
                <br />
                that inspire
              </h2>
              <div className="divider divider-gold w-24 mb-8" />
              <p className="text-editorial text-[--soft-cream] mb-8">
                At Blubloom Interiors, we believe that great design amplifies
                human experience. Our global team of architects, designers, and
                visionaries work at the intersection of form, function, and
                innovation.
              </p>
              <p className="text-[--platinum] mb-8">
                From residential havens to commercial landmarks, every project
                reflects our commitment to sustainability, digital innovation,
                and designs that stand the test of time.
              </p>
              <Link href="/about" className="btn btn-outline">
                Learn More About Us
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] relative">
                <Image
                  src="/images/about_studio_1770311781747.png"
                  alt="Blubloom design studio"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Stats Overlay */}
              <div className="absolute -bottom-8 -left-8 bg-[--midnight-charcoal] p-8 border-l-2 border-[--gold]">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <span className="text-3xl font-heading text-[--gold]">
                      15+
                    </span>
                    <span className="block text-xs text-[--platinum] mt-1 uppercase tracking-wider">
                      Years
                    </span>
                  </div>
                  <div>
                    <span className="text-3xl font-heading text-[--gold]">
                      200+
                    </span>
                    <span className="block text-xs text-[--platinum] mt-1 uppercase tracking-wider">
                      Projects
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Disciplines Overview */}
      <section className="section section-dark">
        <div className="container">
          <SectionHeader
            subtitle="What We Do"
            title="Our Disciplines"
            description="A multi-disciplinary approach that brings together expertise across architecture, design, and digital innovation."
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {disciplines.map((discipline, index) => (
              <motion.div
                key={discipline.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={discipline.href}
                  className="block p-6 lg:p-8 border border-white/5 hover:border-[--gold]/30 transition-all duration-300 group text-center"
                >
                  <h4 className="font-heading text-lg text-[--warm-ivory] group-hover:text-[--gold] transition-colors">
                    {discipline.title}
                  </h4>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/disciplines" className="btn btn-outline">
              Explore All Disciplines
            </Link>
          </motion.div>
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
              Ready to create something extraordinary?
            </h2>
            <p className="text-editorial text-[--platinum] mb-10">
              Let&apos;s discuss how we can bring your vision to life with design
              that inspires and endures.
            </p>
            <Link href="/contact" className="btn btn-gold">
              Start a Conversation
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

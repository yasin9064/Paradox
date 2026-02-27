"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [projectFilter, setProjectFilter] = useState<"app" | "web">("app");
  const [visibleProjects, setVisibleProjects] = useState(2);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const projects = {
    app: [
      { title: "BMI Calculator Pro", img: "/images/projects/BMI Calculator Pro.png", link: "https://github.com/yasin9064/BMI_Calculator_Pro", w: 400, h: 250 },
      { title: "Todo App", img: "/images/projects/Todo.png", link: "https://github.com/yasin9064/Todo-App", w: 500, h: 300 },
      { title: "Weather App", img: "/images/projects/Weather App.png", link: "https://github.com/yasin9064/weather_app", w: 400, h: 250 },
      { title: "ImaginAI", img: "/images/projects/Imagin-AI.png", link: "https://github.com/yasin9064/imagin_ai", w: 400, h: 250 },
    ],
    web: [
      { title: "Tetrasip Web", img: "/images/web_projects/tetrasip web.png", link: "https://tetrasip.com", w: 400, h: 250 },
      { title: "WebCraft Web", img: "/images/web_projects/webcraft web.png", link: "https://webcraft-rust.vercel.app/", w: 400, h: 250 },
      { title: "Dt.Shehnaz", img: "/images/web_projects/Shehnaz web.png", link: "https://shehnaz-dt.vercel.app/", w: 400, h: 250 },
    ]
  };

  const handleFilterChange = (filter: "app" | "web") => {
    setProjectFilter(filter);
    setVisibleProjects(2);
  };

  return (
    <div className="min-h-screen w-full bg-[#111] font-sans text-white relative overflow-x-hidden">
      {/* Container and Card-Shadow Effect */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 md:py-8">
        <div className="rounded-2xl border border-gray-600 bg-[#181818] shadow-lg relative overflow-hidden min-h-screen">
          {/* Header/Nav */}
          <header className="px-4 sm:px-6 md:px-10 py-4 md:py-6 border-b border-gray-700">
            <div className="flex items-center justify-between">
              <div className="text-xl md:text-2xl font-bold text-[#ff8000] tracking-wider">
                Paradox
              </div>

              {/* Desktop Nav */}
              <nav className="hidden md:flex gap-8 lg:gap-10 text-gray-200 font-medium text-base md:text-lg items-center">
                <a className="text-[#ff8000]" href="#home">
                  Home
                </a>
                <a href="#about">About me</a>
                <a href="#skills">Skills</a>
                <a href="#portfolio">Projects</a>
                <a href="#contact">Contact me</a>
              </nav>

              {/* Mobile menu button */}
              <button
                type="button"
                aria-label="Toggle navigation menu"
                className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:text-white hover:bg-[#222] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#181818] focus:ring-[#ff8000]"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                <span className="sr-only">Open main menu</span>
                <div className="space-y-1">
                  <span
                    className={`block h-0.5 w-6 bg-current transition-transform duration-200 ${
                      isMenuOpen ? "translate-y-1.5 rotate-45" : ""
                    }`}
                  ></span>
                  <span
                    className={`block h-0.5 w-6 bg-current transition-opacity duration-200 ${
                      isMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  ></span>
                  <span
                    className={`block h-0.5 w-6 bg-current transition-transform duration-200 ${
                      isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""
                    }`}
                  ></span>
                </div>
              </button>
            </div>

            {/* Mobile dropdown menu */}
            {isMenuOpen && (
              <nav className="mt-4 flex flex-col gap-3 text-gray-200 font-medium text-base md:hidden">
                <a
                  className="text-[#ff8000] py-1"
                  href="#home"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  className="py-1"
                  href="#about"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About me
                </a>
                <a
                  className="py-1"
                  href="#skills"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Skills
                </a>
                <a
                  className="py-1"
                  href="#portfolio"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </a>
                <a
                  className="py-1"
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact me
                </a>
              </nav>
            )}
          </header>

          {/* Hero Section */}
          <motion.section
            id="home"
            className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10 px-4 sm:px-6 md:px-10 py-8 md:py-20"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Left: Info */}
            <motion.div className="flex-1" variants={fadeIn}>
              <div className="text-gray-400 text-base sm:text-lg md:text-xl mb-1">Hi I am</div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Mohammad Yasin (Paradox)</div>
              <div className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#ff8000] mb-6 leading-tight">Flutter Developer</div>
              {/* Social Icons */}
              <div className="flex gap-3 mb-7">
                {[
                  { href: "https://www.linkedin.com/in/yasin56", src: "/images/logos/LinkedIn.png", alt: "LinkedIn", w: 28, h: 28 },
                  { href: "https://github.com/yasin9064", src: "/images/logos/GitHub.png", alt: "GitHub", w: 30, h: 30 },
                  { href: "https://www.instagram.com/__yasin_05__", src: "/images/logos/Instagram.png", alt: "Instagram", w: 28, h: 28 },
                  { href: "https://www.facebook.com/share/1FxrZ8NDGj/", src: "/images/logos/Facebook.png", alt: "Facebook", w: 28, h: 28 }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center cursor-pointer bg-white/10"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 128, 0, 0.2)", borderColor: "#ff8000" }}
                  >
                    <Image src={social.src} alt={social.alt} width={social.w} height={social.h}/>
                  </motion.a>
                ))}
              </div>
              {/* Buttons */}
              <div className="flex gap-4 mb-8">
                <motion.button
                  className="bg-[#ff8000] hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-bold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Hire Me
                </motion.button>
                <motion.button
                  className="border border-gray-400 text-gray-200 px-8 py-3 rounded-lg font-semibold hover:bg-[#161616]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download CV
                </motion.button>
              </div>
              {/* Stats */}
              <div className="flex gap-7 text-center mt-6">
                <motion.div variants={fadeIn}>
                  <div className="text-[#ff8000] text-2xl font-bold">3+ years</div>
                  <div className="text-gray-300">Experiences</div>
                </motion.div>
                <motion.div variants={fadeIn}>
                  <div className="text-[#ff8000] text-2xl font-bold">8+</div>
                  <div className="text-gray-300">Project done</div>
                </motion.div>
              </div>
            </motion.div>
            {/* Right: Placeholder for Hero Image */}
            <motion.div className="flex-1 flex justify-center items-center" variants={fadeIn}>
              <motion.div
                className="w-60 h-72 sm:w-80 sm:h-[420px] md:w-[340px] md:h-[440px] rounded-full relative bg-[#1a1a1a] flex items-center justify-center overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-56 h-64 sm:w-72 sm:h-[400px] md:w-[320px] md:h-[410px] rounded-full bg-neutral-800 flex items-center justify-center opacity-60"></div>
                <Image
                  src="/images/profile.png"
                  alt="Profile"
                  fill
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </motion.div>
            </motion.div>
          </motion.section>
          {/* About Me Section */}
          <motion.section
            id="about"
            className="px-4 sm:px-6 md:px-10 py-16 md:py-24 flex flex-col md:flex-row gap-12 md:gap-20 items-center bg-[#1a1a1a]/50"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Left: Stylized Image Container */}
            <motion.div className="flex-1 relative" variants={fadeIn}>
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[450px] mx-auto">
                {/* Decorative backgrounds */}
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#ff8000] rounded-2xl z-0"></div>
                <div className="absolute top-4 left-4 w-full h-full bg-[#222] rounded-2xl z-10 shadow-xl overflow-hidden">
                  <Image
                    src="/images/profile.png"
                    alt="About Profile"
                    fill
                    className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                {/* Experience badge */}
                <motion.div
                  className="absolute -bottom-6 -right-6 bg-[#ff8000] text-white p-4 rounded-xl shadow-lg z-20 text-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="text-2xl font-bold">3+</div>
                  <div className="text-xs uppercase font-bold">Years Exp.</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right: Content */}
            <motion.div className="flex-1" variants={fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#ff8000] mb-2">About Me</h2>
              <div className="w-20 h-1 bg-[#ff8000] mb-6 rounded-full"></div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                Professional Flutter Developer & Creative Thinker
              </h3>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
                Aspiring Software Developer with a focus on software design and multi-platform application development using the Flutter framework.
                Successfully developed mobile applications that enhance user accessibility across platforms.
                Seeking entry-level opportunities to contribute to innovative software projects through expertise in front-end development and cross-platform technologies.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Design", desc: "UI/UX focused apps" },
                  { title: "Development", desc: "Clean & scalable code" },
                  { title: "Optimization", desc: "Fast & smooth performance" },
                  { title: "AI Prompting", desc: "Next-gen workflow" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-3 group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-[#ff8000]/20 flex items-center justify-center mt-1 group-hover:bg-[#ff8000]">
                      <div className="w-2 h-2 rounded-full bg-[#ff8000] group-hover:bg-white"></div>
                    </div>
                    <div>
                      <div className="text-white font-bold">{item.title}</div>
                      <div className="text-gray-500 text-sm">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Action Button */}
              <motion.div className="mt-10" variants={fadeIn}>
                <a
                  href="#contact"
                  className="inline-block bg-[#ff8000] text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors"
                >
                  Let's Talk
                </a>
              </motion.div>
            </motion.div>
          </motion.section>

          {/* Skills Section (Matching Image & Website Theme) */}
          <motion.section
            id="skills"
            className="px-4 sm:px-6 md:px-10 py-16 md:py-24 border-t border-gray-700"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="max-w-6xl mx-auto">
              {/* Title and Description Row */}
              <motion.div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8" variants={fadeIn}>
                <div className="max-w-xl">
                  <h3 className="text-[#ff8000] italic text-2xl mb-2 font-serif opacity-90">My Professional</h3>
                  <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    Background Skills and Accomplishments
                  </h2>
                </div>
                <div className="max-w-md text-gray-400 text-sm md:text-base leading-relaxed text-right md:mt-4">
                 Here are some of the skills and accomplishments I have achieved in my professional journey.
                </div>
              </motion.div>

              {/* Circular Skill Icons Row */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 justify-items-center">
                {[
                  { id: "figma", type: "image", src: "/images/logos/Figma.png", alt: "Figma" },
                  { id: "flutter", type: "image", src: "/images/logos/Flutter.png", alt: "Flutter" },
                  { id: "gear", type: "image", src: "/images/logos/Gear.png", alt: "Prompt Engineering" },
                  { id: "coding", type: "svg", content: (
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                      <line x1="14" y1="4" x2="10" y2="20" />
                    </svg>
                  )}
                ].map((skill, i) => (
                  <motion.div key={i} className="relative group" variants={fadeIn}>
                    <motion.div
                      className="w-32 h-44 md:w-40 md:h-56 rounded-full border border-orange-500/20 flex items-center justify-center bg-orange-900/5 backdrop-blur-sm transition-all duration-300"
                      whileHover={{
                        borderColor: "rgba(255,128,0,0.5)",
                        boxShadow: "0 0 30px rgba(255,128,0,0.15)",
                        scale: 1.05
                      }}
                    >
                      {skill.type === "image" ? (
                        <Image src={skill.src!} alt={skill.alt!} width={64} height={64} className="group-hover:scale-110 transition-transform duration-300" />
                      ) : (
                        <div className="group-hover:scale-110 transition-transform duration-300">
                          {skill.content}
                        </div>
                      )}
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* Progress Bars Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10 items-start">
                {/* Left Column Skills */}
                <div className="space-y-10">
                  {[
                    { name: "UI Design", val: "80%" },
                    { name: "Flutter", val: "80%" },
                    { name: "Prompt Engineering", val: "85%" }
                  ].map((skill, i) => (
                    <motion.div key={i} className="space-y-4" variants={fadeIn}>
                      <div className="flex justify-between items-center text-white font-medium">
                        <span>{skill.name}</span>
                        <span>{skill.val}</span>
                      </div>
                      <div className="relative h-1 bg-white/10 rounded-full overflow-visible">
                        <motion.div
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#ff8000] to-orange-400 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: skill.val }}
                          transition={{ duration: 1, delay: 0.5 }}
                          viewport={{ once: true }}
                        ></motion.div>
                        <motion.div
                          className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-[#ff8000] rounded-full shadow-[0_0_10px_rgba(255,128,0,0.6)]"
                          initial={{ left: 0 }}
                          whileInView={{ left: skill.val }}
                          transition={{ duration: 1, delay: 0.5 }}
                          viewport={{ once: true }}
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Right Column Skills */}
                <div className="space-y-10">
                  <motion.div className="space-y-4" variants={fadeIn}>
                    <div className="flex justify-between items-center text-white font-medium">
                      <span>Python</span>
                      <span>80%</span>
                    </div>
                    <div className="relative h-1 bg-white/10 rounded-full overflow-visible">
                      <motion.div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#ff8000] to-orange-400 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "80%" }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                      ></motion.div>
                      <motion.div
                        className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-[#ff8000] rounded-full shadow-[0_0_10px_rgba(255,128,0,0.6)]"
                        initial={{ left: 0 }}
                        whileInView={{ left: "80%" }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                      ></motion.div>
                    </div>
                  </motion.div>

                  {/* No Code Tools Box */}
                  <motion.div className="bg-[#222]/30 border border-gray-700 rounded-2xl p-6 space-y-6 shadow-xl backdrop-blur-sm" variants={fadeIn}>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center text-white font-medium">
                        <span>No Code Tools</span>
                        <span>65%</span>
                      </div>
                      <div className="relative h-1 bg-white/10 rounded-full overflow-visible">
                        <motion.div
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#ff8000] to-orange-400 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: "65%" }}
                          transition={{ duration: 1, delay: 0.5 }}
                          viewport={{ once: true }}
                        ></motion.div>
                        <motion.div
                          className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-[#ff8000] rounded-full shadow-[0_0_10px_rgba(255,128,0,0.6)]"
                          initial={{ left: 0 }}
                          whileInView={{ left: "65%" }}
                          transition={{ duration: 1, delay: 0.5 }}
                          viewport={{ once: true }}
                        ></motion.div>
                      </div>
                    </div>

                    {/* Tool Icons Row */}
                    <div className="flex items-center gap-6 pt-2">
                      {[
                        { name: "Framer", icon: (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0L12 8L4 8L12 0ZM12 8L20 8L12 16L12 8ZM4 8L12 16L12 24L4 16L4 8Z" />
                          </svg>
                        )},
                        { name: "Webflow", icon: (
                          <svg width="24" height="24" viewBox="0 0 100 100" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path d="M92.6 22.1L71.4 67.2L55.7 34.2L40.1 67.2L18.9 22.1H7.4L35.5 81.9H44.6L60.3 48.9L75.9 81.9H85L113.1 22.1H92.6Z" />
                          </svg>
                        )},
                        { name: "shopify", icon: (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.17 10.1c.14-.15.34-.23.55-.22.21 0 .4.1.52.28.13.17.15.4.06.59l-.01.03-3.1 6.5c-.13.27-.4.44-.7.44-.1 0-.21-.02-.31-.06-.17-.07-.3-.21-.37-.38l-.01-.02-2.31-5.32c-.1-.23-.05-.49.12-.67.17-.18.43-.24.66-.15.24.09.4.3.4.56v.01l1.58 3.63 2.73-5.74v-.01c.01-.03.01-.06.01-.09z" />
                            <path d="M4.6 9.4c0-.1.02-.2.07-.29l.01-.02 3.1-6.5C7.9 2.3 8.2 2.1 8.5 2.1c.1 0 .21.02.31.06.17.07.3.21.37.38l.01.02 2.31 5.32c.1.23.05.49-.12.67-.17.18-.43.24-.66.15-.24-.09-.4-.3-.4-.56v-.01L8.74 4.5l-2.73 5.74v.01c-.13.27-.4.44-.7.44-.1 0-.21-.02-.31-.06-.17-.07-.3-.21-.37-.38l-.01-.02-.02-.03c0-.1-.01-.2-.01-.3 0-.17.04-.33.11-.48z" />
                            <path d="M22.5 13.5v-3c0-.83-.67-1.5-1.5-1.5h-1.5v3c0 .83.67 1.5 1.5 1.5h1.5zM1.5 10.5v3c0 .83.67 1.5 1.5 1.5h1.5v-3c0-.83-.67-1.5-1.5-1.5h-1.5z" />
                          </svg>
                        )}
                      ].map((tool, i) => (
                        <motion.div key={i} className="flex items-center gap-2 text-sm text-gray-300" whileHover={{ scale: 1.1, color: "#fff" }}>
                          {tool.icon}
                          <span className="font-semibold">{tool.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Portfolio Section */}
          <motion.section
            id="portfolio"
            className="px-4 sm:px-6 md:px-10 py-10 md:py-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 md:gap-8 mb-6 md:mb-8" variants={fadeIn}>
              <h2 className="text-2xl md:text-3xl font-bold text-orange-400">Projects</h2>
              {/* Filter Buttons */}
              <div className="flex gap-3">
                <motion.button
                  onClick={() => handleFilterChange("app")}
                  className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                    projectFilter === "app"
                      ? "bg-[#ff8000] text-white hover:bg-orange-600"
                      : "bg-[#222] text-gray-300 border border-gray-600 hover:bg-[#2a2a2a]"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  App Projects
                </motion.button>
                <motion.button
                  onClick={() => handleFilterChange("web")}
                  className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                    projectFilter === "web"
                      ? "bg-[#ff8000] text-white hover:bg-orange-600"
                      : "bg-[#222] text-gray-300 border border-gray-600 hover:bg-[#2a2a2a]"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Web Projects
                </motion.button>
              </div>
            </motion.div>
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-7"
              layout
            >
              <AnimatePresence mode="popLayout">
                {projects[projectFilter].slice(0, visibleProjects).map((project) => (
                  <motion.div
                    key={project.title}
                    layout
                    className="bg-[#181818] border border-gray-600 rounded-xl min-h-[260px] p-5 flex flex-col items-center justify-between"
                    variants={fadeIn}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    whileHover={{ y: -10, borderColor: "#ff8000" }}
                  >
                    <div className="w-full flex justify-center mb-3">
                      <Image src={project.img} alt={project.title} width={project.w} height={project.h} className="rounded-xl object-cover shadow-md" />
                    </div>
                    <div className="font-bold text-xl text-white mb-2">{project.title}</div>
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block px-4 py-2 bg-[#ff8000] hover:bg-orange-600 rounded-lg text-white font-semibold transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {projectFilter === "app" ? "View on GitHub" : "View Website"}
                    </motion.a>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
            {(visibleProjects < projects[projectFilter].length || visibleProjects > 2) && (
              <motion.div className="flex justify-center mt-6 gap-4" variants={fadeIn}>
                {visibleProjects < projects[projectFilter].length && (
                  <motion.button
                    onClick={() => setVisibleProjects((prev) => prev + 2)}
                    className="px-6 py-2 bg-[#222] border border-gray-600 text-white rounded-lg hover:bg-[#2a2a2a] transition-colors font-semibold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View More
                  </motion.button>
                )}
                {visibleProjects > 2 && (
                  <motion.button
                    onClick={() => setVisibleProjects(2)}
                    className="px-6 py-2 bg-[#222] border border-gray-600 text-white rounded-lg hover:bg-[#2a2a2a] transition-colors font-semibold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Less
                  </motion.button>
                )}
              </motion.div>
            )}
          </motion.section>

          {/* Contact Section */}
          <motion.section
            id="contact"
            className="px-4 sm:px-6 md:px-10 py-10 md:py-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 className="text-2xl md:text-3xl font-bold text-orange-400 mb-5 md:mb-6" variants={fadeIn}>Contact me</motion.h2>
            <motion.p className="mb-7 md:mb-10 text-gray-400 max-w-xl md:max-w-2xl" variants={fadeIn}>Cultivating Connections! Reach Out And Connect With Me</motion.p>
            <motion.form className="grid gap-4 md:gap-5 grid-cols-1 md:grid-cols-2 max-w-lg md:max-w-3xl" variants={fadeIn}>
              <input className="bg-[#222] border border-gray-600 rounded-lg px-4 md:px-5 py-3 md:py-4 text-white mb-3 outline-none focus:border-[#ff8000] transition-colors" type="text" placeholder="Name" />
              <input className="bg-[#222] border border-gray-600 rounded-lg px-4 md:px-5 py-3 md:py-4 text-white mb-3 outline-none focus:border-[#ff8000] transition-colors" type="email" placeholder="Email" />
              <input className="bg-[#222] border border-gray-600 rounded-lg px-4 md:px-5 py-3 md:py-4 text-white mb-3 outline-none focus:border-[#ff8000] transition-colors" type="text" placeholder="Phone Number" />
              <input className="bg-[#222] border border-gray-600 rounded-lg px-4 md:px-5 py-3 md:py-4 text-white mb-3 outline-none focus:border-[#ff8000] transition-colors" type="text" placeholder="Service Of Interest" />
              <textarea className="bg-[#222] border border-gray-600 rounded-lg px-4 md:px-5 py-3 md:py-4 text-white mb-3 outline-none md:col-span-2 focus:border-[#ff8000] transition-colors" rows={4} placeholder="Project Details" />
              <motion.button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg text-white font-semibold w-full md:w-32 md:col-span-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send
              </motion.button>
            </motion.form>
          </motion.section>

          {/* Footer */}
          <footer className="mt-8 md:mt-10 px-4 sm:px-6 md:px-10 py-6 md:py-8 border-t border-gray-700 text-gray-400 bg-[#181818]">
            <div className="flex flex-col items-center gap-2 md:gap-3">
              <div className="text-orange-500 text-lg md:text-xl font-bold mb-1 md:mb-2">Paradox</div>
              <nav className="flex flex-col xs:flex-row gap-2 xs:gap-4 md:gap-6 mb-1 md:mb-2 items-center">
                <a href="#home">Home</a>
                <a href="#about">About me</a>
                <a href="#skills">Skills</a>
                <a href="#portfolio">Projects</a>
                <a href="#contact">Contact me</a>
              </nav>
              <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-xs md:text-sm opacity-80">
                <span>mohammadyasin9064@gmail.com</span>
                <span className="hidden sm:inline">|</span>
                <span>+91-9064938269</span>
              </div>
              <div className="text-[10px] md:text-xs opacity-60 mt-1 md:mt-2 text-center">Powered by Paradox (Flutter Developer)</div>
            </div>
          </footer>
        </div>
      </div>
      {/* Optional: background effects or overlays */}
    </div>
  );
}

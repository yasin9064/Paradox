import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#111] font-sans text-white relative overflow-x-hidden">
      {/* Container and Card-Shadow Effect */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="rounded-2xl border border-gray-600 bg-[#181818] shadow-lg relative overflow-hidden min-h-screen">
          {/* Header/Nav */}
          <header className="flex items-center justify-between px-10 py-6 border-b border-gray-700">
            <div className="text-2xl font-bold text-[#ff8000] tracking-wider">LOGO</div>
            <nav className="hidden md:flex gap-10 text-gray-200 font-medium text-lg">
              <a className="text-[#ff8000]" href="#home">Home</a>
              <a href="#about">About me</a>
              <a href="#portfolio">Projects</a>
              <a href="#contact">Contact me</a>
            </nav>
            <button className="bg-[#ff8000] hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg text-lg ml-6 transition-colors">Hire Me</button>
          </header>

          {/* Hero Section */}
          <section id="home" className="flex flex-col md:flex-row items-center md:items-start gap-10 px-10 py-10 md:py-20">
            {/* Left: Info */}
            <div className="flex-1">
              <div className="text-gray-400 text-xl mb-1">Hi I am</div>
              <div className="text-3xl font-bold mb-2">Mohammad Yasin (Paradox)</div>
              <div className="text-6xl font-extrabold text-[#ff8000] mb-6 leading-tight">Flutter Developer</div>
              {/* Social Icons */}
              <div className="flex gap-3 mb-7">
                <a href="https://www.linkedin.com/in/yasin56" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center cursor-pointer bg-white/10">
                  <Image src="/images/logos/LinkedIn.png" alt="LinkedIn" width={28} height={28}/>
                </a>
                <a href="https://github.com/yasin9064" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center cursor-pointer bg-white/10">
                  <Image src="/images/logos/GitHub.png" alt="GitHub" width={30} height={30}/>
                </a>
                <a href="https://www.instagram.com/__yasin_05__" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center cursor-pointer bg-white/10">
                  <Image src="/images/logos/Instagram.png" alt="Instagram" width={28} height={28}/>
                </a>
                <a href="https://www.facebook.com/share/1FxrZ8NDGj/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center cursor-pointer bg-white/10">
                  <Image src="/images/logos/Facebook.png" alt="Facebook" width={28} height={28}/>
                </a>
              </div>
              {/* Buttons */}
              <div className="flex gap-4 mb-8">
                <button className="bg-[#ff8000] hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-bold">Hire Me</button>
                <button className="border border-gray-400 text-gray-200 px-8 py-3 rounded-lg font-semibold hover:bg-[#161616]">Download CV</button>
              </div>
              {/* Stats */}
              <div className="flex gap-7 text-center mt-6">
                <div>
                  <div className="text-[#ff8000] text-2xl font-bold">3+</div>
                  <div className="text-gray-300">Experiences</div>
                </div>
                <div>
                  <div className="text-[#ff8000] text-2xl font-bold">8+</div>
                  <div className="text-gray-300">Project done</div>
                </div>
              </div>
            </div>
            {/* Right: Placeholder for Hero Image */}
            <div className="flex-1 flex justify-center items-center">
              <div className="w-[340px] h-[440px] rounded-full relative bg-[#1a1a1a] flex items-center justify-center overflow-hidden">
                <div className="w-[320px] h-[410px] rounded-full bg-neutral-800 flex items-center justify-center opacity-60"></div>
                <Image src="/images/profile.png" alt="Profile" layout="fill" objectFit="cover" className="absolute inset-0 w-full h-full object-cover object-center" />
              </div>
            </div>
          </section>
          {/* About Me Section */}
          <section id="about" className="px-10 py-14 flex flex-col md:flex-row gap-12 items-start">
            {/* Placeholder for About Image */}
            <div className="flex-1 flex justify-center items-start mb-10 md:mb-0">
              <div className="w-[300px] h-[380px] rounded-full bg-[#1a1a1a] flex items-center justify-center overflow-hidden relative">
                <Image src="/images/profile2.jpg" alt="Profile" layout="fill" objectFit="cover" className="absolute inset-0 w-full h-full object-cover object-center" />
              </div>
            </div>
            {/* About Content */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-orange-400 mb-4">About Me</h2>
              <h3 className="font-semibold text-lg mb-2 text-gray-200">Flutter Developer & Prompt Engineer</h3>
              <p className="text-gray-400 mb-6">Aspiring Software Developer with a focus on software design<br/> and multi-platformapplication development using the Flutter
framework. Successfully developed mobile applications that enhance user accessibility across platforms.</p>

              {/* Skills Row */}
              <div className="flex flex-wrap gap-6 mt-6">
                {[
                  { label: 'Flutter', value: '90%' },
                  { label: 'Prompting', value: '80%' },
                  { label: 'Dart', value: '95%' },
                  { label: 'Python', value: '80%' },
                  { label: 'Figma', value: '70%' }
                ].map((skill, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    {skill.label === 'Flutter' && (
                      <Image src="/images/logos/Flutter.png" alt="Flutter" width={32} height={32}/>
                    )}
                    {skill.label === 'Prompting' && (
                      <Image src="/images/logos/Gear.png" alt="Prompt Engineering" width={32} height={32}/>
                    )}
                    {skill.label === 'Dart' && (
                      <Image src="/images/logos/Dart.png" alt="Dart" width={32} height={32}/>
                    )}
                    {skill.label === 'Python' && (
                      <Image src="/images/logos/Python.png" alt="Python" width={32} height={32}/>
                    )}
                    {skill.label === 'Figma' && (
                      <Image src="/images/logos/Figma.png" alt="Figma" width={32} height={32}/>
                    )}
                    <div className="font-bold mt-2 text-orange-400">{skill.value}</div>
                    <div className="text-gray-300 text-sm">{skill.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Portfolio Section */}
          <section id="portfolio" className="px-10 py-16">
            <div className="flex items-center gap-8 mb-8">
              <h2 className="text-3xl font-bold text-orange-400">Projects</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-7">
              {/* Project 1 */}
              <div className="bg-[#181818] border border-gray-600 rounded-xl min-h-[260px] p-5 flex flex-col items-center justify-between">
                <div className="w-full flex justify-center mb-3">
                  <Image src="/images/projects/BMI Calculator Pro.png" alt="BMI Calculator Pro" width={400} height={250} className="rounded-xl object-cover shadow-md" />
                </div>
                <div className="font-bold text-xl text-white mb-2">BMI Calculator Pro</div>
                <a href="https://github.com/yasin9064/BMI_Calculator_Pro" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block px-4 py-2 bg-[#ff8000] hover:bg-orange-600 rounded-lg text-white font-semibold transition-colors">View on GitHub</a>
              </div>
              {/* Project 2 */}
              <div className="bg-[#181818] border border-gray-600 rounded-xl min-h-[260px] p-5 flex flex-col items-center justify-between">
                <div className="w-full flex justify-center mb-3">
                  <Image src="/images/projects/Todo.png" alt="Todo App" width={500} height={300} className="rounded-xl object-cover shadow-md" />
                </div>
                <div className="font-bold text-xl text-white mb-2">Todo App</div>
                <a href="https://github.com/yasin9064/Todo-App" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block px-4 py-2 bg-[#ff8000] hover:bg-orange-600 rounded-lg text-white font-semibold transition-colors">View on GitHub</a>
              </div>
              {/* Project 3 */}
              <div className="bg-[#181818] border border-gray-600 rounded-xl min-h-[260px] p-5 flex flex-col items-center justify-between">
                <div className="w-full flex justify-center mb-3">
                  <Image src="/images/projects/Weather App.png" alt="Weather App" width={400} height={250} className="rounded-xl object-cover shadow-md" />
                </div>
                <div className="font-bold text-xl text-white mb-2">Weather App</div>
                <a href="https://github.com/yasin9064/weather_app" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block px-4 py-2 bg-[#ff8000] hover:bg-orange-600 rounded-lg text-white font-semibold transition-colors">View on GitHub</a>
              </div>
              {/* Project 4 */}
              <div className="bg-[#181818] border border-gray-600 rounded-xl min-h-[260px] p-5 flex flex-col items-center justify-between">
                <div className="w-full flex justify-center mb-3">
                  <Image src="/images/projects/Imagin-AI.png" alt="ImaginAI" width={400} height={250} className="rounded-xl object-cover shadow-md" />
                </div>
                <div className="font-bold text-xl text-white mb-2">ImaginAI</div>
                <a href="https://github.com/yasin9064/imagin_ai" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block px-4 py-2 bg-[#ff8000] hover:bg-orange-600 rounded-lg text-white font-semibold transition-colors">View on GitHub</a>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="px-10 py-16">
            <h2 className="text-3xl font-bold text-orange-400 mb-6">Contact me</h2>
            <p className="mb-10 text-gray-400 max-w-2xl">Cultivating Connections! Reach Out And Connect With Me</p>
            <form className="grid gap-5 grid-cols-1 md:grid-cols-2 max-w-3xl">
              <input className="bg-[#222] border border-gray-600 rounded-lg px-5 py-4 text-white mb-3 outline-none" type="text" placeholder="Name" />
              <input className="bg-[#222] border border-gray-600 rounded-lg px-5 py-4 text-white mb-3 outline-none" type="email" placeholder="Email" />
              <input className="bg-[#222] border border-gray-600 rounded-lg px-5 py-4 text-white mb-3 outline-none" type="text" placeholder="Phone Number" />
              <input className="bg-[#222] border border-gray-600 rounded-lg px-5 py-4 text-white mb-3 outline-none" type="text" placeholder="Service Of Interest" />
              <textarea className="bg-[#222] border border-gray-600 rounded-lg px-5 py-4 text-white mb-3 outline-none md:col-span-2" rows={4} placeholder="Project Details" />
              <button type="submit" className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg text-white font-semibold w-32 md:col-span-2">Send</button>
            </form>
          </section>

          {/* Footer */}
          <footer className="mt-10 px-10 py-8 border-t border-gray-700 text-gray-400 bg-[#181818]">
            <div className="flex flex-col items-center gap-3">
              <div className="text-orange-500 text-xl font-bold mb-2">LOGO</div>
              <nav className="flex gap-6 mb-2">
                <a href="#home">Home</a>
                <a href="#about">About me</a>
                <a href="#portfolio">Projects</a>
                <a href="#contact">Contact me</a>
              </nav>
              <div className="flex flex-col md:flex-row items-center gap-2 text-sm opacity-80">
                <span>mohammadyasin9064@gmail.com</span>
                <span>|</span>
                <span>+91-9064938269</span>
              </div>
              <div className="text-xs opacity-60 mt-2">Powered by Paradox (Flutter Developer)</div>
            </div>
          </footer>
        </div>
      </div>
      {/* Optional: background effects or overlays */}
    </div>
  );
}


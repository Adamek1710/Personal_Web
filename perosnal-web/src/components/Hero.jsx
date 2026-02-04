import React from 'react';

const styles = {
  section: "relative flex flex-col items-center justify-center min-h-[80vh] px-6 text-center bg-slate-950 text-white overflow-hidden",
  
  // Decorative Glow
  glow: "absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none",
  
  // Availability Badge
  badge: "inline-flex items-center gap-2 px-3 py-1 mb-8 text-sm font-medium border rounded-full bg-slate-900/50 border-slate-700 backdrop-blur-sm",
  dotPing: "absolute inline-flex w-full h-full bg-green-400 rounded-full opacity-75 animate-ping",
  dotStatic: "relative inline-flex w-2 h-2 bg-green-500 rounded-full",
  badgeText: "text-slate-300",

  // Typography
  headline: "max-w-4xl text-5xl font-bold tracking-tight md:text-7xl",
  gradientText: "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400",
  description: "max-w-2xl mt-6 text-lg leading-8 text-slate-400",
  
  // Buttons/CTAs
  btnContainer: "flex flex-col gap-4 mt-10 sm:flex-row",
  primaryBtn: "px-8 py-3 font-semibold text-black transition-transform bg-white rounded-lg hover:scale-105 active:scale-95",
  secondaryBtn: "px-8 py-3 font-semibold transition-colors border rounded-lg border-slate-700 bg-slate-900/50 hover:bg-slate-800",
  
  // Footer text
  techFooter: "mt-16 text-sm font-medium tracking-widest uppercase text-slate-500"
};

const Hero = () => {
  return (
    <section className={styles.section}>
      {/* Background Effect */}
      <div className={styles.glow} />

      {/* Available for Work Badge */}
      <div className={styles.badge}>
        <span className="relative flex w-2 h-2">
          <span className={styles.dotPing}></span>
          <span className={styles.dotStatic}></span>
        </span>
        <span className={styles.badgeText}>Available for Summer Internships & Freelance</span>
      </div>

      {/* Main Headline */}
      <h1 className={styles.headline}>
        Building the web's future while 
        <span className={styles.gradientText}> studying the theory.</span>
      </h1>

      {/* Sub-headline */}
      <p className={styles.description}>
        Computer Science student specializing in modern Full-Stack development. 
        I bridge the gap between academic rigor and real-world freelance solutions.
      </p>

      {/* Action Buttons */}
      <div className={styles.btnContainer}>
        <a href="#projects" className={styles.primaryBtn}>
          View Projects
        </a>
        <a href="mailto:adam.sramek0704@gmail.com" className={styles.secondaryBtn}>
          Get in Touch
        </a>
      </div>

      {/* Tech Stack Preview */}
      <div className={styles.techFooter}>
        Tech Toolkit: React • Python • C/C++ • .NET/C# • Git   
      </div>
    </section>
  );
};

export default Hero;
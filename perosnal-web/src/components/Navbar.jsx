import React from 'react';

const styles = {
  nav: "fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-950/70 border-b border-slate-800",
  container: "max-w-6xl mx-auto px-6 py-4 flex justify-between items-center",
  logo: "text-xl font-bold tracking-tighter text-white hover:text-blue-400 transition-colors",
  links: "hidden md:flex gap-8 text-sm font-medium text-slate-400",
  link: "hover:text-white transition-colors cursor-pointer",
  cta: "px-4 py-2 text-xs font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-all"
};

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        {/* Your New Name */}
        <div className={styles.logo}>
          AS<span className="text-blue-500">.</span>DEV
        </div>

        <div className={styles.links}>
          <a href="#" className={styles.link}>Home</a>
          <a href="#projects" className={styles.link}>Projects</a>
          <a href="mailto:adam.sramek0704@gmail.com" className={styles.link}>Contact</a>
        </div>

        <a href="/resume.pdf" className={styles.cta}>
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
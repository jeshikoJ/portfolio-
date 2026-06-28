import { useEffect, useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { navLinks, profile } from '../data';

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = ['home', ...navLinks.map((n) => n.id)];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ink/90 backdrop-blur-md border-b border-line-soft' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => go('home')} className="flex items-center gap-2 group" aria-label="Go to home">
          <span className="font-display text-2xl tracking-tight text-paper">
            J<span className="text-gold">J</span>
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold group-hover:scale-125 transition-transform" />
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className={`font-head text-[13px] tracking-[0.18em] uppercase pb-1 border-b transition-colors cursor-pointer ${
                active === link.id
                  ? 'text-paper border-gold'
                  : 'text-dim border-transparent hover:text-paper'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={profile.resume}
            download
            className="inline-flex items-center gap-2 font-head text-[13px] tracking-[0.12em] uppercase border border-line rounded-full px-5 py-2.5 text-paper hover:border-gold hover:text-gold transition-colors"
          >
            <Download size={14} />
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-paper" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-ink border-t border-line-soft px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className={`text-left font-head text-sm tracking-[0.18em] uppercase py-1.5 ${
                active === link.id ? 'text-gold' : 'text-dim'
              }`}
            >
              {link.label}
            </button>
          ))}
          <a
            href={profile.resume}
            download
            className="inline-flex items-center gap-2 font-head text-sm tracking-[0.12em] uppercase border border-line rounded-full px-5 py-2.5 text-paper w-fit"
          >
            <Download size={14} />
            Resume
          </a>
        </div>
      )}
    </header>
  );
}

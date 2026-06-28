import { useState } from 'react';
import { experiences, techStacks, certifications } from '../data';

export default function Experience() {
  const [activeId, setActiveId] = useState(experiences[0]?.id);
  const active = experiences.find((e) => e.id === activeId) || experiences[0];

  if (!active) return null;

  return (
    <section id="experience" className="relative border-b border-line-soft">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="flex items-center gap-3 mb-14">
          <span className="w-8 h-px bg-gold" />
          <span className="font-head text-xs tracking-[0.3em] uppercase text-gold">My Experience</span>
        </div>

        <div className="grid md:grid-cols-[0.95fr_1.4fr] gap-10 md:gap-16 mb-24">
          {/* Role list */}
          <div className="flex flex-col">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActiveId(exp.id)}
                className={`text-left font-display text-xl sm:text-2xl md:text-[28px] uppercase leading-snug sm:leading-tight py-3 transition-colors ${
                  activeId === exp.id ? 'text-paper' : 'text-line hover:text-mute'
                }`}
              >
                {exp.title}
              </button>
            ))}
          </div>

          {/* Detail */}
          <div className="fade-up" key={active.id}>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-gold-soft border border-gold-dim px-2 py-0.5">
                {active.tag}
              </span>
              <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-dim">
                {active.type}
              </span>
            </div>
            <h3 className="font-head text-xl md:text-2xl font-bold text-gold mb-1">{active.org}</h3>
            <div className="w-10 h-px bg-line my-5" />
            <ul className="space-y-4">
              {active.description.map((line, i) => (
                <li key={i} className="flex gap-3 text-dim text-sm md:text-[15px] leading-relaxed">
                  <span className="text-gold mt-1.5 flex-shrink-0 text-[8px]">●</span>
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tech stacks */}
        <div className="flex items-center gap-3 mb-10">
          <span className="w-8 h-px bg-gold" />
          <span className="font-head text-xs tracking-[0.3em] uppercase text-gold">Tech Stacks</span>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-16">
          {techStacks.map((stack) => (
            <div
              key={stack.title}
              className="border border-line-soft rounded-sm p-6 hover:border-line transition-colors"
            >
              <h4 className="font-head text-sm tracking-[0.1em] uppercase text-paper mb-4">
                {stack.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {stack.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs text-dim border border-line-soft rounded-full px-3 py-1.5 hover:border-gold hover:text-gold-soft transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications strip */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-8 h-px bg-gold" />
          <span className="font-head text-xs tracking-[0.3em] uppercase text-gold">Certifications</span>
        </div>
        <div className="flex flex-wrap gap-3">
          {certifications.map((c) => (
            <div
              key={c.name}
              className="flex items-baseline gap-2 border border-line-soft rounded-sm px-4 py-2.5"
            >
              <span className="text-paper text-sm font-medium">{c.name}</span>
              <span className="text-mute text-xs font-mono">— {c.issuer}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

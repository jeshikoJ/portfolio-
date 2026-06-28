import { ArrowUpRight, ShoppingCart } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { project } from '../data';

export default function Projects() {
  return (
    <section id="projects" className="relative border-b border-line-soft">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="flex items-center gap-3 mb-14">
          <span className="w-8 h-px bg-gold" />
          <span className="font-head text-xs tracking-[0.3em] uppercase text-gold">Projects</span>
        </div>

        <div className="border border-line-soft rounded-sm overflow-hidden fade-up">
          <div className="grid md:grid-cols-[1fr_1.3fr]">
            {/* Left: identity */}
            <div className="bg-surface p-8 md:p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-line-soft">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="w-10 h-10 rounded-full border border-gold-dim flex items-center justify-center text-gold">
                    <ShoppingCart size={18} />
                  </span>
                  <span className="font-mono text-xs text-mute">{project.year}</span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-paper leading-tight mb-3">
                  {project.title.split(' ').slice(0, -1).join(' ')}{' '}
                  <span className="text-gold">{project.title.split(' ').slice(-1)}</span>
                </h3>
                <p className="font-head text-xs tracking-[0.1em] uppercase text-dim mb-8">
                  {project.subtitle}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[11px] text-gold-soft border border-gold-dim rounded-full px-3 py-1"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex gap-5">
                <a
                  href={project.links.demo}
                  className="inline-flex items-center gap-1.5 font-head text-xs tracking-[0.15em] uppercase text-gold hover:gap-2.5 transition-all"
                >
                  View Project <ArrowUpRight size={14} />
                </a>
                <a
                  href={project.links.code}
                  className="inline-flex items-center gap-1.5 font-head text-xs tracking-[0.15em] uppercase text-dim hover:text-paper transition-colors"
                >
                  <GithubIcon size={14} /> Code
                </a>
              </div>
            </div>

            {/* Right: details */}
            <div className="p-8 md:p-10">
              <p className="text-dim text-sm md:text-[15px] leading-relaxed mb-8">
                {project.description}
              </p>

              <h4 className="font-head text-xs tracking-[0.2em] uppercase text-paper mb-4">
                Key Features
              </h4>
              <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                {project.features.map((f) => (
                  <li key={f} className="flex gap-2.5 text-dim text-sm leading-snug">
                    <span className="text-gold flex-shrink-0">▸</span>
                    {f}
                  </li>
                ))}
              </ul>

              <h4 className="font-head text-xs tracking-[0.2em] uppercase text-paper mb-3">
                Architecture
              </h4>
              <p className="text-dim text-sm leading-relaxed mb-10">{project.architecture}</p>

              <div className="grid grid-cols-3 gap-4 border-t border-line-soft pt-6">
                {project.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="font-display text-2xl md:text-3xl text-gold mb-1">{m.value}</div>
                    <div className="font-mono text-[11px] tracking-[0.05em] uppercase text-mute leading-tight">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="font-mono text-xs text-mute mt-6">
          More projects in progress — this case study will grow as new work ships.
        </p>
      </div>
    </section>
  );
}

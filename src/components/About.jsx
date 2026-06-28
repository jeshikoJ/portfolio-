import { profile, specializations } from '../data';

export default function About() {
  return (
    <section id="about" className="relative border-b border-line-soft">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-12 md:gap-16 items-start">
          {/* Photo */}
          <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-sm border border-line-soft fade-up">
            <img
              src={profile.photo}
              alt={profile.name}
              className="w-full h-full object-cover grayscale-[20%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 font-mono text-[11px] tracking-[0.2em] uppercase text-gold-soft bg-ink/70 px-3 py-1.5 border border-line-soft">
              ● Open to work
            </div>
          </div>

          {/* Text */}
          <div className="fade-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-gold" />
              <span className="font-head text-xs tracking-[0.3em] uppercase text-gold">About Me</span>
            </div>

            <h2 className="font-head text-3xl md:text-4xl lg:text-[42px] leading-[1.2] text-dim mb-8">
              I'm <span className="text-paper font-bold">Jeshiko</span> — a software engineer building{' '}
              <span className="text-paper font-bold">full-stack web applications</span> with clean
              architecture, focused on delivering scalable solutions and robust{' '}
              <span className="text-paper font-bold">cloud infrastructure</span>.
            </h2>

            <p className="text-dim text-sm md:text-[15px] leading-relaxed mb-10 max-w-md">
              As a Computer Science Engineering graduate, I specialize in Python, Django, and JavaScript. I have hands-on experience with AWS, CI/CD pipelines, and Infrastructure as Code, and am passionate about building production-ready systems that deliver real business value.
            </p>

            <div className="border-t border-line-soft pt-6 divide-y divide-line-soft">
              {specializations.map((s) => (
                <div key={s.id} className="flex items-center gap-4 py-3 first:pt-0">
                  <span className="font-mono text-xs text-gold w-6">{s.id}</span>
                  <span className="w-6 h-px bg-line" />
                  <span className="font-head text-sm tracking-[0.08em] uppercase text-paper">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

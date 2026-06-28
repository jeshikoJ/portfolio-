import { useState } from 'react';
import { Phone, Mail, MapPin, Send, Check, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { profile } from '../data';

const FORM_NOT_CONFIGURED = profile.formEndpoint.includes('REPLACE_ME');

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', purpose: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const mailtoFallback = () => {
    const subject = encodeURIComponent(`Portfolio contact: ${form.purpose || 'New message'} — ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nCompany: ${form.company}\nPurpose: ${form.purpose}\n\n${form.message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (FORM_NOT_CONFIGURED) {
      mailtoFallback();
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(profile.formEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.target),
      });
      if (res.ok) {
        setStatus('sent');
        setForm({ name: '', email: '', phone: '', company: '', purpose: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <h2 className="font-display text-5xl md:text-7xl text-paper mb-16">
          CONTACT<span className="text-gold">.</span>
        </h2>

        <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-14 md:gap-16">
          {/* Info */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-gold" />
              <span className="font-head text-xs tracking-[0.3em] uppercase text-gold">
                {profile.firstName}'s Portfolio
              </span>
            </div>
            <p className="text-dim text-sm md:text-[15px] leading-relaxed mb-10 max-w-sm">
              Thanks for exploring my little corner of the web. This portfolio is just the trailer —
              the real story begins when we connect.
            </p>

            <h4 className="font-head text-xs tracking-[0.2em] uppercase text-paper mb-5">Reach Out</h4>
            <div className="flex flex-col gap-4 mb-10">
              <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-dim hover:text-gold-soft transition-colors text-sm">
                <Phone size={16} className="text-gold" /> {profile.phone}
              </a>
              <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-dim hover:text-gold-soft transition-colors text-sm">
                <Mail size={16} className="text-gold" /> {profile.email}
              </a>
              <div className="flex items-center gap-3 text-dim text-sm">
                <MapPin size={16} className="text-gold" /> {profile.location}
              </div>
            </div>

            <h4 className="font-head text-xs tracking-[0.2em] uppercase text-paper mb-4">Catch Me Online</h4>
            <div className="flex gap-3">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-line-soft flex items-center justify-center text-dim hover:text-gold hover:border-gold transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-line-soft flex items-center justify-center text-dim hover:text-gold hover:border-gold transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="w-11 h-11 rounded-full border border-line-soft flex items-center justify-center text-dim hover:text-gold hover:border-gold transition-colors"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-7">
            <input type="hidden" name="_subject" value={`Portfolio contact: ${form.purpose || 'New message'} from ${form.name || 'website visitor'}`} />
            <div className="grid sm:grid-cols-2 gap-7">
              <Field label="Name *" name="name" value={form.name} onChange={handleChange} required />
              <Field label="Email *" name="email" type="email" value={form.email} onChange={handleChange} required />
            </div>
            <div className="grid sm:grid-cols-2 gap-7">
              <Field label="Phone *" name="phone" value={form.phone} onChange={handleChange} required />
              <Field label="Company (optional)" name="company" value={form.company} onChange={handleChange} />
            </div>
            <Field label="Purpose" name="purpose" value={form.purpose} onChange={handleChange} />
            <Field
              label="Your Message"
              name="message"
              value={form.message}
              onChange={handleChange}
              textarea
            />

            <div className="flex items-center gap-4 mt-2">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="self-start inline-flex items-center gap-2 bg-gold text-ink font-head text-xs tracking-[0.2em] uppercase px-8 py-3.5 rounded-sm hover:bg-gold-soft transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Sent' : 'Send'}
                {status === 'sent' ? <Check size={14} /> : <Send size={14} />}
              </button>

              {status === 'sent' && (
                <span className="font-mono text-xs text-gold-soft">
                  Thanks — I'll get back to you soon.
                </span>
              )}
              {status === 'error' && (
                <span className="flex items-center gap-1.5 font-mono text-xs text-red-400">
                  <AlertCircle size={13} /> Something went wrong —{' '}
                  <a href={`mailto:${profile.email}`} className="underline">
                    email me directly
                  </a>
                  .
                </span>
              )}
            </div>
          </form>
        </div>

        <div className="mt-24 pt-8 border-t border-line-soft flex flex-col sm:flex-row justify-between gap-3 text-mute font-mono text-xs">
          <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
          <span>Built with React · Vite · Tailwind</span>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, value, onChange, type = 'text', required = false, textarea = false }) {
  const Comp = textarea ? 'textarea' : 'input';
  return (
    <label className="flex flex-col gap-2">
      <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-mute">{label}</span>
      <Comp
        name={name}
        type={textarea ? undefined : type}
        value={value}
        onChange={onChange}
        required={required}
        rows={textarea ? 4 : undefined}
        className="bg-transparent border-b border-line-soft focus:border-gold outline-none py-2.5 text-paper text-base sm:text-sm placeholder:text-mute transition-colors resize-none w-full"
      />
    </label>
  );
}

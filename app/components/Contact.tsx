'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Eyebrow, Icon3D, Reveal, Tilt } from './Ui';
import { cardDark, cardLight } from './theme';

const benefits = [
  'Quick response',
  'Professional support',
  'Secure communication',
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-paper px-2 py-16 md:px-4 md:py-24">
      <div
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-gradient-to-b from-[#2E3034] to-[#141517] px-6 py-16 text-white md:px-14 md:py-24"
        style={{ boxShadow: cardDark }}
      >
        <div
          aria-hidden
          className="grid-lines pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_left,black,transparent_70%)]"
        />
        <motion.div
          aria-hidden
          animate={{ opacity: [0.3, 0.55, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute -bottom-40 left-[-6rem] h-[26rem] w-[26rem] rounded-full bg-orange blur-[150px]"
        />
        <motion.div
          aria-hidden
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="pointer-events-none absolute -right-32 -top-32 h-[26rem] w-[26rem] rounded-full border border-white/10"
        />
        <motion.div
          aria-hidden
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
          className="pointer-events-none absolute -right-14 -top-14 h-[18rem] w-[18rem] rounded-full border border-dashed border-orange/30"
        />

        <div className="relative grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Eyebrow dark>Get in Touch</Eyebrow>

            <h2 className="mt-7 font-display text-[clamp(1.9rem,4.4vw,3.8rem)] font-bold uppercase leading-[1.08] tracking-[-0.01em]">
              Contact Us
            </h2>

            <p className="mt-8 max-w-lg text-lg leading-8 text-white/65">
              Send your requirement — we’ll reply on email.
            </p>

            <ul className="mt-10 space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-4">
                  <CheckCircle2 size={22} className="shrink-0 text-orange" strokeWidth={1.8} />
                  <span className="text-base font-semibold text-white/90">{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <Tilt
              className="rounded-[28px] bg-gradient-to-b from-white to-[#F1F1EF] p-7 text-ink sm:p-10"
              style={{ boxShadow: cardLight }}
            >
              <Icon3D icon={Mail} tone="dark" size={64} />

              <h3 className="mt-8 font-display text-2xl font-bold uppercase tracking-[-0.01em]">
                Email
              </h3>

              <p className="mt-3 text-[15px] leading-7 text-mute">
                For quotations, partnerships, and project discussions:
              </p>

              <Link
                href="mailto:support@datatechservices.com"
                className="btn-3d btn-orange mt-6 w-full justify-between !tracking-[0.04em] !normal-case"
              >
                <span className="break-all text-sm sm:text-base">
                  support@datatechservices.com
                </span>
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-orange"
                  style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,.2)' }}
                >
                  <ArrowUpRight size={16} strokeWidth={2.4} />
                </span>
              </Link>

              <div className="my-8 border-t border-black/10" />

              <div className="flex items-start gap-3 rounded-2xl bg-ink/[0.04] p-4">
                <ShieldCheck
                  size={21}
                  className="mt-0.5 shrink-0 text-orange-deep"
                  strokeWidth={1.9}
                />
                <p className="text-sm leading-6 text-mute">
                  Contact our team to discuss your requirements and explore
                  suitable service solutions.
                </p>
              </div>
            </Tilt>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
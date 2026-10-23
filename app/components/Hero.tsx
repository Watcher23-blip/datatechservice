'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Eyebrow } from './Ui';
import { cardDark } from './theme';

type Line = { text: string; bold?: boolean; indent?: boolean; accent?: boolean };

const lines: Line[] = [
  { text: 'Reliable', bold: true },
  { text: 'Typing &', bold: true },
  { text: 'Data', indent: true },
  { text: 'Segregation', bold: true },
  { text: 'Services', indent: true },

];

/** A wireframe sphere built from real 3D-transformed rings, rotating slowly. */
function Globe() {
  const S = 280;
  const R = S / 2;
  const lats = [-0.62, -0.32, 0, 0.32, 0.62];

  return (
    <div className="relative" style={{ width: S, height: S, perspective: 1100 }}>
      {/* solid body */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            'radial-gradient(circle at 32% 26%, #fff 0%, #ececea 30%, #b7b8b6 66%, #6e7073 100%)',
          boxShadow:
            'inset -24px -32px 60px rgba(0,0,0,.38), inset 12px 12px 34px rgba(255,255,255,.7), 0 60px 90px -24px rgba(244,160,74,.5)',
        }}
      />

      {/* rotating rings */}
      <motion.div
        className="absolute inset-0"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            className="absolute inset-0 rounded-full border border-ink/40"
            style={{ transform: `rotateY(${i * 30}deg)` }}
          />
        ))}
        {lats.map((f) => {
          const d = S * Math.sqrt(1 - f * f);
          return (
            <span
              key={f}
              className="absolute rounded-full border border-ink/40"
              style={{
                width: d,
                height: d,
                left: (S - d) / 2,
                top: (S - d) / 2,
                transform: `translateY(${f * R}px) rotateX(90deg)`,
              }}
            />
          );
        })}
      </motion.div>

      {/* specular highlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{
          background:
            'radial-gradient(circle at 30% 22%, rgba(255,255,255,.9), transparent 34%)',
        }}
      />
    </div>
  );
}

function Orb({
  className,
  delay,
  dur,
}: {
  className: string;
  delay: number;
  dur: number;
}) {
  return (
    <motion.span
      aria-hidden
      animate={{ y: [0, -14, 0] }}
      transition={{ duration: dur, delay, repeat: Infinity, ease: 'easeInOut' }}
      className={`absolute rounded-full ${className}`}
      style={{
        background:
          'radial-gradient(circle at 32% 28%, #fff, #d4d4d1 55%, #8d8e90)',
        boxShadow: '0 12px 20px -6px rgba(0,0,0,.6)',
      }}
    />
  );
}

function GlassCard({
  className,
  bars,
  delay,
}: {
  className: string;
  bars: number[];
  delay: number;
}) {
  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute rounded-2xl border border-white/10 bg-white/[0.06] p-3 backdrop-blur-md ${className}`}
      style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,.12), 0 20px 30px -12px rgba(0,0,0,.6)' }}
    >
      <div className="flex h-12 items-end gap-1.5">
        {bars.map((h, i) => (
          <motion.span
            key={i}
            animate={{ height: [`${h}%`, `${Math.max(25, h - 28)}%`, `${h}%`] }}
            transition={{ duration: 4 + i * 0.6, repeat: Infinity, ease: 'easeInOut' }}
            className={`w-2 rounded-sm ${i === bars.length - 1 ? 'bg-orange' : 'bg-white/35'}`}
          />
        ))}
      </div>
      <span className="mt-2 block h-1 w-12 rounded-full bg-white/20" />
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-gradient-to-b from-[#E9E9E6] via-[#F4F4F2] to-white px-5 pb-16 pt-28 md:px-8 lg:pt-32"
    >
      <div
        aria-hidden
        className="grid-lines-light pointer-events-none absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(ellipse_at_30%_40%,black,transparent_70%)]"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:min-h-[calc(100svh-9rem)] lg:grid-cols-[1.05fr_0.95fr]">
        {/* Text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Eyebrow>Data Tech Service  since 2006</Eyebrow>
          </motion.div>


          <h1 className="mt-7 max-w-2xl font-display text-[clamp(2.25rem,4.5vw,4.5rem)] uppercase leading-[1.05] tracking-[-0.045em] text-ink">
            {lines.map((l, i) => (
              <motion.span
                key={l.text}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.2 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={[
                  'inline',
                  l.bold ? 'font-bold' : 'font-normal',
                  l.accent ? 'text-orange-deep' : '',
                ].join(' ')}
              >
                {l.text}{' '}
              </motion.span>
            ))}
          </h1>


          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.95 }}
            className="mt-8 max-w-md text-base leading-7 text-mute"
          >
            A trusted IT-enabled service partner delivering precision-driven
            typing, data entry, and data segregation solutions for businesses
            across India.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-9"
          >
            <Link href="#services" className="btn-3d btn-orange">
              Get Started
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-orange"
                style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,.2)' }}
              >
                <ArrowUpRight size={16} strokeWidth={2.4} />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Dark showcase panel */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden
          className="relative flex h-[440px] items-center justify-center overflow-hidden rounded-[32px] bg-gradient-to-b from-[#34373B] to-[#121315] sm:h-[540px] lg:h-[620px]"
          style={{ boxShadow: cardDark }}
        >
          <div className="grid-lines absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
          <motion.div
            animate={{ opacity: [0.5, 0.85, 0.5] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-[-4rem] left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-orange/40 blur-[90px]"
          />

          <GlassCard className="right-4 top-8 sm:right-8" bars={[45, 70, 55, 85]} delay={1.2} />
          <GlassCard className="bottom-24 right-4 sm:right-8" bars={[60, 40, 75]} delay={1.4} />

          <Orb className="left-[12%] top-[18%] h-5 w-5" delay={0} dur={5} />
          <Orb className="left-[20%] bottom-[24%] h-8 w-8" delay={1} dur={6.5} />
          <Orb className="right-[22%] top-[44%] h-3 w-3" delay={0.5} dur={4.5} />

          <div className="relative flex scale-[0.72] flex-col items-center sm:scale-90 lg:scale-100">
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Globe />
            </motion.div>

            {/* pedestal */}
            <div className="relative -mt-6 h-14 w-72">
              <div
                className="absolute inset-0 rounded-[50%] bg-gradient-to-b from-[#f4f4f2] to-[#b9b9b5]"
                style={{ boxShadow: 'inset 0 2px 0 #fff, 0 24px 40px rgba(0,0,0,.65)' }}
              />
              <div className="absolute inset-x-7 inset-y-3 rounded-[50%] bg-orange/90 blur-[5px]" />
              <div className="absolute inset-x-10 inset-y-[14px] rounded-[50%] bg-ink/90" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
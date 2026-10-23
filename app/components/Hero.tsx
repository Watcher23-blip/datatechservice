
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Eyebrow } from './Ui';
import { cardDark } from './theme';

type Line = {
  text: string;
  bold?: boolean;
  indent?: boolean;
  accent?: boolean;
};

const lines: Line[] = [
  { text: 'Reliable', bold: true },
  { text: 'Typing &', bold: true },
  { text: 'Data', indent: true },
  { text: 'Segregation', bold: true },
  { text: 'Services', indent: true },
];

function GlassCard({
  className,
  bars,
  delay,
  label,
}: {
  className: string;
  bars: number[];
  delay: number;
  label: string;
}) {
  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className={`absolute z-10 w-[132px] rounded-2xl border border-white/15 bg-[#202124]/75 p-3 backdrop-blur-xl sm:w-[158px] sm:p-4 ${className}`}
      style={{
        boxShadow:
          'inset 0 1px 0 rgba(255,255,255,.12), 0 18px 35px rgba(0,0,0,.25)',
      }}
    >
      <div className="mb-3 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-[#F4A04A]" />
        <span className="truncate text-[9px] font-bold uppercase tracking-[0.12em] text-white/80 sm:text-[10px]">
          {label}
        </span>
      </div>

      <div className="flex h-10 items-end gap-1.5 sm:h-12">
        {bars.map((height, index) => (
          <motion.span
            key={index}
            animate={{
              height: [
                `${height}%`,
                `${Math.max(20, height - 22)}%`,
                `${height}%`,
              ],
            }}
            transition={{
              duration: 3 + index * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className={`flex-1 rounded-t-sm ${
              index === bars.length - 1
                ? 'bg-[#F4A04A]'
                : 'bg-white/35'
            }`}
          />
        ))}
      </div>

      <div className="mt-3 h-1 w-full rounded-full bg-white/10">
        <motion.div
          animate={{ width: ['55%', '82%', '68%', '88%'] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="h-full rounded-full bg-[#F4A04A]"
        />
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-gradient-to-b from-[#E9E9E6] via-[#F4F4F2] to-white px-4 pb-16 pt-28 sm:px-6 md:px-8 lg:pt-32"
    >
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-60 [background-image:linear-gradient(rgba(32,33,36,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(32,33,36,0.04)_1px,transparent_1px)] [background-size:36px_36px] [mask-image:radial-gradient(ellipse_at_30%_40%,black,transparent_70%)]"
      />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:min-h-[calc(100svh-9rem)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        {/* Left: Hero copy */}
        <div className="min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Eyebrow>Data Tech Service since 2006</Eyebrow>
          </motion.div>

          <h1 className="mt-7 max-w-2xl font-display text-[clamp(2.25rem,7vw,4.5rem)] uppercase leading-[1.05] tracking-[-0.045em] text-ink sm:text-[clamp(2.5rem,5vw,4.5rem)]">
            {lines.map((line, index) => (
              <motion.span
                key={line.text}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.2 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={[
                  'inline',
                  line.bold ? 'font-bold' : 'font-normal',
                  line.indent ? 'ml-[0.15em]' : '',
                  line.accent ? 'text-orange-deep' : '',
                ].join(' ')}
              >
                {line.text}{' '}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-7 max-w-md text-sm leading-7 text-mute sm:mt-8 sm:text-base"
          >
            A trusted IT-enabled service partner delivering precision-driven
            typing, data entry, and data segregation solutions for businesses
            across India.
          </motion.p>

          {/* Service highlights */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.95 }}
            className="mt-6 flex flex-wrap gap-x-5 gap-y-3"
          >
            {['Accuracy focused', 'Reliable delivery'].map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#55565B] sm:text-sm"
              >
                <CheckCircle2
                  size={15}
                  className="shrink-0 text-[#D97720]"
                />
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-8 sm:mt-9"
          >
            <Link href="#services" className="btn-3d btn-orange">
              Get Started
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-orange"
                style={{
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,.2)',
                }}
              >
                <ArrowUpRight size={16} strokeWidth={2.4} />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Right: Workplace image showcase */}
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto w-full min-w-0 max-w-[620px]"
        >
          <div
            className="relative h-[390px] w-full overflow-hidden rounded-[26px] bg-[#202124] sm:h-[500px] sm:rounded-[32px] lg:h-[620px]"
            style={{ boxShadow: cardDark }}
          >
            {/* Workplace photograph */}
            <Image
              src="/office-worker.jpg"
              alt="Professional working at a computer in an office"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover object-center"
            />

            {/* Dark overlay for depth and legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#121315]/85 via-[#121315]/15 to-[#121315]/10" />

            <div className="absolute inset-0 bg-gradient-to-r from-[#121315]/20 via-transparent to-[#121315]/20" />

            {/* Ambient orange light */}
            <motion.div
              aria-hidden="true"
              animate={{ opacity: [0.2, 0.45, 0.2] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="pointer-events-none absolute -bottom-20 left-1/2 h-56 w-72 -translate-x-1/2 rounded-full bg-[#F4A04A]/40 blur-[75px]"
            />

            {/* Floating data cards */}
         

            <GlassCard
              className="bottom-24 left-3 sm:bottom-28 sm:left-6"
              bars={[65, 42, 78, 58, 90]}
              delay={1.1}
              label="Work overview"
            />

            {/* Bottom image caption */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="absolute inset-x-4 bottom-4 z-10 flex items-end justify-between gap-3 sm:inset-x-7 sm:bottom-7"
            >
              <div className="min-w-0">
               

                <h2 className="font-display text-xl font-bold uppercase leading-tight tracking-tight text-white sm:text-3xl">
                  Precision in every detail.
                </h2>

                <p className="mt-2 max-w-xs text-xs leading-5 text-white/75 sm:text-sm">
                  Supporting businesses with dependable data services.
                </p>
              </div>

              <div className="mb-1 hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md sm:flex">
                <ArrowUpRight size={20} />
              </div>
            </motion.div>
          </div>

          {/* Decorative bottom accent */}
          <div className="absolute -bottom-2 left-[12%] right-[12%] -z-10 h-6 rounded-full bg-[#F4A04A]/20 blur-xl" />
        </motion.div>
      </div>
    </section>
  );
}


'use client';

import { motion } from 'framer-motion';
import {
  FileText,
  Database,
  Users,
  Workflow,
  ArrowUpRight,
} from 'lucide-react';

import {
  Eyebrow,
  Icon3D,
  Reveal,
  Spotlight,
  Tilt,
} from './Ui';

import { cardDark } from './theme';

const services = [
  {
    title: 'Typing Centre',
    description:
      'High-volume document typing, digitization, and data entry with speed and precision.',
    icon: FileText,
  },
  {
    title: 'Data Segregation',
    description:
      'Accurate classification and organization of business-critical data.',
    icon: Database,
  },
  {
    title: 'Freelancer Network',
    description:
      'A trained workforce across India enabling flexible and scalable execution.',
    icon: Users,
  },
  {
    title: 'Data Processing',
    description:
      'Clean, validated, and structured data ready for business use.',
    icon: Workflow,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-20 w-full bg-gradient-to-b from-[#2E3034] to-[#141517] px-5 py-20 sm:px-8 md:py-28"
      style={{ boxShadow: cardDark }}
    >
      {/* Background Effects */}
      <div
        aria-hidden="true"
        className="grid-lines pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
      />

      <motion.div
        aria-hidden="true"
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute right-[-6rem] top-0 h-[26rem] w-[26rem] rounded-full bg-orange blur-[150px]"
      />

      <div className="relative mx-auto w-full max-w-7xl">
        {/* Centered Heading */}
        <Reveal>
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <Eyebrow dark>What We Do</Eyebrow>

            <h2 className="mt-7 font-display text-[clamp(2.2rem,5vw,4rem)] font-bold uppercase leading-[0.95] tracking-[-0.025em] text-white">
              Our <span className="text-[#F4A04A]">Services</span>
            </h2>

            <div className="mt-7 h-px w-24 bg-gradient-to-r from-transparent via-orange to-transparent" />

            <p className="mt-6 max-w-lg text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              IT-enabled solutions tailored for modern businesses.
              Reliable execution, accurate results, and flexible
              support to help your business move forward.
            </p>
          </div>
        </Reveal>

        {/* Service Cards */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              delay={0.09 * i}
              className="h-full"
            >
              <Tilt className="h-full">
                <Spotlight
                  className="group flex h-full min-h-[300px] flex-col items-center rounded-[28px] border border-white/10 p-6 text-center transition-colors duration-300 hover:border-[#F4A04A]/40 sm:min-h-[330px] sm:p-7"
                  style={{
                    background:
                      'linear-gradient(165deg, rgba(255,255,255,.09), rgba(255,255,255,.02))',
                    boxShadow:
                      'inset 0 1px 0 rgba(255,255,255,.14), 0 5px 0 rgba(0,0,0,.35), 0 30px 50px -24px rgba(0,0,0,.8)',
                  }}
                >
                  {/* Icon and Arrow */}
                  <div className="relative flex w-full items-center justify-center">
                    <Icon3D icon={s.icon} tone="orange" size={64} />

                    <span className="absolute right-0 top-1 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>

                  {/* Text */}
                  <h3 className="mt-8 text-xl font-bold leading-snug tracking-tight text-white">
                    {s.title}
                  </h3>

                  <p className="mt-3 max-w-xs text-[15px] leading-7 text-white/60">
                    {s.description}
                  </p>

                  {/* Accent */}
                 
                </Spotlight>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

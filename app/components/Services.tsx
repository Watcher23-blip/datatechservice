'use client';

import { motion } from 'framer-motion';
import { FileText, Database, Users, Workflow, ArrowUpRight } from 'lucide-react';
import { Eyebrow, Icon3D, Reveal, Spotlight, Tilt } from './Ui';
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
    <section id="services" className="scroll-mt-20 bg-white px-2 pb-4 md:px-4">
      <div
        className="relative mx-auto max-w-[1500px] overflow-hidden rounded-[40px] bg-gradient-to-b from-[#2E3034] to-[#141517] px-5 py-20 md:px-10 md:py-28"
        style={{ boxShadow: cardDark }}
      >
        <div
          aria-hidden
          className="grid-lines pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
        />
        <motion.div
          aria-hidden
          animate={{ opacity: [0.25, 0.5, 0.25], scale: [1, 1.15, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute -top-32 right-[-6rem] h-[26rem] w-[26rem] rounded-full bg-orange blur-[150px]"
        />

        <div className="relative mx-auto max-w-7xl">
          <Reveal className="max-w-3xl">
            <Eyebrow dark>What We Do</Eyebrow>

            <h2 className="mt-7 font-display text-[clamp(1.7rem,3.6vw,3.2rem)] font-bold uppercase leading-[1.1] tracking-[-0.01em] text-white">
              Our Services
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-white/60">
              IT-enabled solutions tailored for modern businesses.
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={0.09 * i}>
                <Tilt className="h-full">
                  <Spotlight
                    className="flex min-h-[320px] flex-col rounded-[28px] border border-white/10 p-7"
                    style={{
                      background:
                        'linear-gradient(165deg, rgba(255,255,255,.09), rgba(255,255,255,.02))',
                      boxShadow:
                        'inset 0 1px 0 rgba(255,255,255,.14), 0 5px 0 rgba(0,0,0,.45), 0 30px 50px -24px rgba(0,0,0,.8)',
                    }}
                  >
                    <div className="flex items-start justify-between">
                      <Icon3D icon={s.icon} tone="orange" size={64} />
                      <span className="flex h-9 w-9 translate-y-1 items-center justify-center rounded-full border border-white/15 text-white/70 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <ArrowUpRight size={16} />
                      </span>
                    </div>

                    <h3 className="mt-auto pt-12 text-xl font-extrabold tracking-tight text-white">
                      {s.title}
                    </h3>

                    <p className="mt-3 text-[15px] leading-7 text-white/60">
                      {s.description}
                    </p>
                  </Spotlight>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import {
  ShieldCheck,
  Clock3,
  Layers3,
  BriefcaseBusiness,
} from 'lucide-react';

import { Eyebrow, Icon3D, Reveal, Spotlight, Tilt } from './Ui';
import { cardLight } from './theme';

const highlights = [
  { title: '18+ Years Experience', icon: Clock3 },
  { title: 'Data Security', icon: ShieldCheck },
  { title: 'On-Time Delivery', icon: BriefcaseBusiness },
  { title: 'Flexible Scale', icon: Layers3 },
];

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 bg-white px-5 py-20 sm:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Centered About Heading and Description */}
        <Reveal>
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <Eyebrow>About Us</Eyebrow>

            <h2 className="mt-6 font-display text-[clamp(2.2rem,5vw,4.5rem)] font-bold uppercase leading-[0.95] tracking-[-0.025em] text-ink">
              DATATECH
              <span className="text-[#F4A04A]"> SERVICES</span>
            </h2>

            <div className="mt-7 h-px w-24 bg-gradient-to-r from-transparent via-orange to-transparent" />

            <p className="mt-7 max-w-2xl text-base leading-7 text-mute sm:text-lg sm:leading-8">
              Established in 2006, DATATECH SERVICES delivers reliable
              typing, data entry, and data segregation solutions for
              businesses across India.
            </p>
          </div>
        </Reveal>

        {/* Four Highlight Cards */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {highlights.map((item, i) => (
            <Reveal
              key={item.title}
              delay={0.08 * i}
              className="h-full"
            >
              <Tilt className="h-full">
                <Spotlight
                  className="flex h-full min-h-[190px] flex-col items-center justify-center rounded-[24px] bg-gradient-to-b from-white to-[#F3F3F1] p-5 text-center sm:min-h-[220px] sm:rounded-[28px] sm:p-7"
                  style={{ boxShadow: cardLight }}
                >
                  <Icon3D icon={item.icon} tone="dark" size={54} />

                  <h3 className="mt-7 text-base font-bold leading-snug tracking-tight text-ink sm:text-lg">
                    {item.title}
                  </h3>

             
                </Spotlight>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

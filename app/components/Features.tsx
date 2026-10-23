
'use client';

import {
  ChartNoAxesCombined,
  Headset,
  CalendarClock,
  UsersRound,
} from 'lucide-react';

import { Eyebrow, Icon3D, Reveal, Spotlight, Tilt } from './Ui';
import { cardLight } from './theme';

const features = [
  { title: 'Performance Reports', icon: ChartNoAxesCombined },
  { title: 'Dedicated Support', icon: Headset },
  { title: 'Application Timeline', icon: CalendarClock },
  { title: 'Referral System', icon: UsersRound },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative scroll-mt-20 overflow-hidden bg-paper px-5 py-20 sm:px-8 md:py-28"
    >
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="grid-lines-light pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Centered heading and description */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Freelancer Benefits</Eyebrow>

            <h2 className="mt-6 font-display text-[clamp(2.2rem,5vw,4.5rem)] font-bold uppercase leading-[0.95] tracking-[-0.025em] text-ink">
              The Features Every
              <br />
              Freelancer <span className="text-[#F4A04A]">Needs.</span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-mute sm:text-lg sm:leading-8">
              Tools and support designed to help freelancers manage their
              work, track progress, and stay connected throughout the process.
            </p>
          </div>
        </Reveal>

        {/* Four centered feature cards */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <Reveal
              key={feature.title}
              delay={0.08 * i}
              className="h-full"
            >
              <Tilt className="h-full">
                <Spotlight
                  className="flex h-full min-h-[210px] flex-col items-center justify-center rounded-[24px] bg-white p-6 text-center sm:min-h-[230px] sm:rounded-[28px] sm:p-7"
                  style={{ boxShadow: cardLight }}
                >
                  <Icon3D
                    icon={feature.icon}
                    tone="dark"
                    size={54}
                  />

                  <h3 className="mt-7 text-base font-bold leading-snug tracking-tight text-ink sm:text-lg">
                    {feature.title}
                  </h3>

                  <div className="mt-4 h-1 w-full rounded-full bg-[#F4A04A]" />
                </Spotlight>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

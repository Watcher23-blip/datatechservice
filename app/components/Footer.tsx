
'use client';

import Link from 'next/link';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { Icon3D } from './Ui';

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#26282B] to-[#0F1011] px-5 py-10 text-white sm:px-8 md:py-12">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 md:grid-cols-2">

        {/* Part 1: Brand */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <Link
            href="#home"
            className="font-display text-2xl font-bold uppercase tracking-[-0.02em] transition-colors duration-200 hover:text-white/75"
          >
            DATATECH <span className="text-orange">SERVICES</span>
          </Link>

          <p className="mt-3 max-w-sm text-sm leading-6 text-white/55">
            Reliable typing, data entry, and data segregation solutions
            for businesses across India since 2006.
          </p>
        </div>

        {/* Part 2: Copyright, services and back-to-top */}
        <div className="flex flex-col items-center gap-5 text-center md:items-end md:text-right">
          <p className="text-xs font-medium text-white/55 sm:text-sm">
            © 2006–2026 DATATECH SERVICES
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs text-white/65 sm:text-sm md:justify-end">
            <span>Typing</span>
            <span className="text-orange">•</span>
            <span>Data Entry</span>
            <span className="text-orange">•</span>
            <span>Data Segregation</span>
          </div>

          <Link
            href="#home"
            aria-label="Back to top"
            className="group flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 transition-colors duration-300 hover:border-[#F4A04A]/60 hover:bg-white/5"
          >
            <span className="text-sm text-white/70 transition-colors group-hover:text-white">
              Back to top
            </span>
            <ArrowUpRight
              size={16}
              className="text-orange transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="mx-auto mt-9 max-w-7xl border-t border-white/10 pt-5">
        <p className="text-center text-xs text-white/35">
          Built for reliability. Designed for business.
        </p>
      </div>
    </footer>
  );
}

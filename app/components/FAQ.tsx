'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, ArrowUpRight, Plus } from 'lucide-react';
import { Eyebrow, Icon3D, Reveal } from './Ui';
import { cardLight } from './theme';

const faqs = [
  {
    question: 'What services does DATATECHSERVICES provide?',
    answer:
      'We provide typing, data entry, data segregation, data processing, and freelancer-based execution services.',
  },
  {
    question: 'Can you handle large projects?',
    answer:
      'Yes. Our in-house team and freelancer network allow us to scale resources according to project requirements.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'We prioritize confidentiality and follow data-handling and quality-control protocols throughout our workflow.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 bg-white px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal className="self-start lg:sticky lg:top-32">
          <Icon3D icon={MessageCircle} tone="dark" size={68} />

          <div className="mt-9">
            <Eyebrow>Here to Help</Eyebrow>
          </div>

          <h2 className="mt-7 font-display text-[clamp(1.7rem,3.6vw,3.2rem)] font-bold uppercase leading-[1.1] tracking-[-0.01em] text-ink">
            Frequently Asked Questions
          </h2>

          <p className="mt-8 max-w-md text-lg leading-8 text-mute">
            Clear answers to help you understand our services and process.
          </p>

          <Link href="#contact" className="btn-3d btn-orange mt-10">
            Still have questions? Contact us
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-orange"
              style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,.2)' }}
            >
              <ArrowUpRight size={16} strokeWidth={2.4} />
            </span>
          </Link>
        </Reveal>

        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <Reveal key={faq.question} delay={0.08 * index} y={26}>
                <div
                  className={`relative overflow-hidden rounded-[24px] transition-colors duration-300 ${
                    isOpen ? 'bg-ink text-white' : 'bg-gradient-to-b from-white to-[#F3F3F1] text-ink'
                  }`}
                  style={{
                    boxShadow: isOpen
                      ? 'inset 0 1px 0 rgba(255,255,255,.12), 0 6px 0 #000, 0 34px 50px -24px rgba(0,0,0,.6)'
                      : cardLight,
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-7 sm:py-6"
                  >
                    <span
                      className={`font-display text-sm font-bold transition-colors duration-300 ${
                        isOpen ? 'text-orange' : 'text-mute'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span className="flex-1 text-base font-bold leading-snug tracking-tight sm:text-lg">
                      {faq.question}
                    </span>

                    <motion.span
                      animate={{ rotate: isOpen ? 135 : 0 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                        isOpen ? 'bg-orange text-ink' : 'bg-ink/[0.06] text-ink'
                      }`}
                    >
                      <Plus size={18} strokeWidth={2.3} />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-7 pl-[4.25rem] pr-6 text-base leading-7 text-white/65 sm:pl-[4.75rem] sm:pr-10 sm:text-[17px] sm:leading-8">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
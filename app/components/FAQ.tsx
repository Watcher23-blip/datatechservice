"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  MessageCircle,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";

const faqs = [
  {
    question: "What services does DATATECHSERVICES provide?",
    answer:
      "We provide typing, data entry, data segregation, data processing, and freelancer-based execution services.",
  },
  {
    question: "Can you handle large projects?",
    answer:
      "Yes. Our in-house team and freelancer network allow us to scale resources according to project requirements.",
  },
  {
    question: "Is my data secure?",
    answer:
      "We prioritize confidentiality and follow data-handling and quality-control protocols throughout our workflow.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative isolate overflow-hidden bg-gradient-to-br from-blue-800 via-blue-700 to-indigo-900 px-5 py-20 md:px-8 md:py-28"
    >
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-indigo-400/20 blur-3xl" />

      <div className="pointer-events-none absolute right-[8%] top-16 hidden rotate-12 text-white/[0.08] lg:block">
        <ArrowUpRight size={100} strokeWidth={0.7} />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white shadow-lg shadow-blue-950/10 backdrop-blur-sm">
            <MessageCircle size={25} strokeWidth={1.5} />
          </div>

          <p className="mt-5 text-xs font-medium uppercase tracking-[0.22em] text-blue-200">
            Here to Help
          </p>

          <h2 className="mt-3 text-3xl font-normal tracking-tight text-white sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm font-normal leading-7 text-blue-100/90 sm:text-base">
            Clear answers to help you understand our services and process.
          </p>

          <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-cyan-200 to-transparent" />
        </div>

        <div className="mx-auto mt-12 max-w-7xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`group overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                  isOpen
                    ? "border-blue-200 shadow-[0_12px_35px_rgba(15,23,42,0.16)]"
                    : "border-white/60 shadow-[0_4px_18px_rgba(15,23,42,0.08)] hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(15,23,42,0.14)]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 px-4 py-5 text-left sm:px-6 sm:py-6"
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm transition-colors duration-300 ${
                      isOpen
                        ? "bg-blue-600 text-white"
                        : "bg-blue-50 text-blue-700 group-hover:bg-blue-100"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="flex-1 text-sm font-normal leading-6 text-gray-900 sm:text-base">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-700"
                    }`}
                  >
                    <ChevronDown size={18} strokeWidth={1.7} />
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="mx-5 border-t border-gray-100 sm:mx-6" />

                    <div className="flex gap-3 px-5 py-5 sm:px-7 sm:py-6">
                      <ArrowRight
                        size={17}
                        className="mt-1 shrink-0 text-blue-600"
                        strokeWidth={1.7}
                      />

                      <p className="text-sm font-normal leading-7 text-gray-600 sm:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
  href="#contact"
  className="group mx-auto mt-10 inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-normal !text-white backdrop-blur-sm transition-all duration-200 hover:border-white/50 hover:bg-white/15"
>
  <span className="!text-white">Still have questions? Contact us</span>
  <ArrowUpRight
    size={17}
    className="shrink-0 !text-white transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
  />
</Link>
        </div>
      </div>
    </section>
  );
}
import { Mail, ArrowUpRight, CheckCircle2, ShieldCheck } from "lucide-react";
import Link from "next/link";

const benefits = [
  "Quick response",
  "Professional support",
  "Secure communication",
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gray-50 px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
              Get in Touch
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              Contact Us
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-600 md:text-lg">
              Send your requirement — we’ll reply on email.
            </p>

            <div className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle2
                    size={20}
                    className="shrink-0 text-blue-600"
                    strokeWidth={1.8}
                  />
                  <span className="text-sm font-medium text-gray-700 md:text-base">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm sm:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Mail size={27} strokeWidth={1.8} />
            </div>

            <h3 className="mt-7 text-xl font-semibold text-gray-900">
              Email
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-600">
              For quotations, partnerships, and project discussions:
            </p>

            <Link
              href="mailto:support@datatechservices.com"
              className="mt-5 inline-flex items-center gap-2 break-all text-base font-semibold text-blue-600 transition-colors hover:text-blue-800 sm:text-lg"
            >
              support@datatechservices.com
              <ArrowUpRight
                size={18}
                className="shrink-0"
              />
            </Link>

            <div className="my-7 border-t border-gray-100" />

            <div className="flex items-start gap-3 rounded-lg bg-gray-50 p-4">
              <ShieldCheck
                size={21}
                className="mt-0.5 shrink-0 text-blue-600"
                strokeWidth={1.8}
              />
              <p className="text-sm leading-6 text-gray-600">
                Contact our team to discuss your requirements and explore
                suitable service solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
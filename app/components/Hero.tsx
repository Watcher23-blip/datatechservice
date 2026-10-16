import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-blue-900"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-blue-900/80" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 md:px-12 lg:px-16">
        <div className="max-w-4xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-blue-200 sm:text-base">
            Data Tech Service
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Reliable Typing &amp; Data Segregation Services Since 2006
          </h1>

          <p className="mt-7 max-w-3xl text-base leading-8 text-blue-50 sm:text-lg md:text-xl">
            A trusted IT-enabled service partner delivering
            precision-driven typing, data entry, and data segregation
            solutions for businesses across India.
          </p>

          <div className="mt-10">
            <Link
              href="#services"
              className="inline-flex items-center justify-center rounded-md bg-white px-8 py-4 text-base font-semibold text-blue-800 transition-colors duration-200 hover:bg-blue-50"
            >
              Get Started
              <span className="ml-3 text-lg" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
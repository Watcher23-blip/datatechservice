import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080f1e] px-5 py-8 text-white md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <Link
          href="#home"
          className="text-lg font-normal tracking-tight text-white transition-colors duration-200 hover:text-blue-300"
        >
          DATATECH <span className="text-blue-400">SERVICES</span>
        </Link>

        <p className="text-sm font-normal text-gray-400">
          © 2006–2026 <span className="mx-2 text-gray-600">|</span> Typing
          <span className="mx-2 text-blue-500">•</span> Data Entry
          <span className="mx-2 text-blue-500">•</span> Data Segregation
        </p>
      </div>
    </footer>
  );
}
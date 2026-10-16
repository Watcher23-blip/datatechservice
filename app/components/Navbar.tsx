import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Features", href: "#features" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link
          href="#home"
          className="shrink-0 text-xl font-bold tracking-tight text-gray-900"
        >
          Data Tech <span className="text-blue-600">Service</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600"
            >
              {link.name}
            </Link>
          ))}
        </div>


        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none rounded-md border border-gray-200 px-3 py-2 text-sm font-medium text-gray-800">
            Menu
          </summary>

          <div className="absolute right-0 top-12 flex w-52 flex-col gap-1 rounded-lg border border-gray-200 bg-white p-3 shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="rounded-md px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </details>
      </nav>
    </header>
  );
}
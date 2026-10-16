import {
  ShieldCheck,
  Clock3,
  Layers3,
  BriefcaseBusiness,
} from "lucide-react";

const highlights = [
  {
    title: "18+ Years Experience",
    icon: Clock3,
  },
  {
    title: "Data Security",
    icon: ShieldCheck,
  },
  {
    title: "On-Time Delivery",
    icon: BriefcaseBusiness,
  },
  {
    title: "Flexible Scale",
    icon: Layers3,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-gray-50 px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-normal uppercase tracking-[0.18em] text-blue-600">
            About Us
          </span>

          <h2 className="mt-4 text-3xl font-normal tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
           DATATECH SERVICES
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-600 md:text-lg">
            Established in 2006, DATATECHSERVICES delivers reliable typing,
            data entry, and data segregation solutions for businesses
            across India.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group relative rounded-2xl border border-gray-200/80 bg-white p-8 text-center shadow-[0_5px_0_0_#dbeafe,0_10px_20px_rgba(15,23,42,0.06)] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_8px_0_0_#bfdbfe,0_22px_35px_rgba(37,99,235,0.14)] motion-reduce:transform-none motion-reduce:transition-none"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-blue-100/70 text-blue-600 shadow-[inset_0_2px_4px_rgba(255,255,255,0.9),0_5px_10px_rgba(37,99,235,0.10)] transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[0_8px_18px_rgba(37,99,235,0.18)] motion-reduce:transform-none">
                  <Icon size={30} strokeWidth={1.6} />
                </div>

                <h3 className="mt-6 text-lg font-normal leading-7 text-gray-800 transition-colors duration-300 group-hover:text-blue-700">
                  {item.title}
                </h3>

                <div className="mx-auto mt-4 h-0.5 w-8 rounded-full bg-blue-200 transition-all duration-300 group-hover:w-16 group-hover:bg-blue-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
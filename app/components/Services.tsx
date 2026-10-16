import {
  FileText,
  Database,
  Users,
  Workflow,
} from "lucide-react";

const services = [
  {
    title: "Typing Centre",
    description:
      "High-volume document typing, digitization, and data entry with speed and precision.",
    icon: FileText,
  },
  {
    title: "Data Segregation",
    description:
      "Accurate classification and organization of business-critical data.",
    icon: Database,
  },
  {
    title: "Freelancer Network",
    description:
      "A trained workforce across India enabling flexible and scalable execution.",
    icon: Users,
  },
  {
    title: "Data Processing",
    description:
      "Clean, validated, and structured data ready for business use.",
    icon: Workflow,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-blue-700 px-5 py-20 md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-normal uppercase tracking-[0.16em] text-blue-100">
            What We Do
          </span>

          <h2 className="mt-4 text-3xl font-normal tracking-tight text-white sm:text-4xl md:text-5xl">
            Our Services
          </h2>

          <p className="mt-5 text-base font-normal leading-7 text-blue-50 md:text-lg">
            IT-enabled solutions tailored for modern businesses.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="flex min-h-[280px] flex-col items-center rounded-xl bg-white px-5 py-10 text-center transition-transform duration-200 hover:-translate-y-1"
              >
                <Icon
                  size={34}
                  strokeWidth={1.7}
                  className="text-blue-600"
                  fill="currentColor"
                  fillOpacity={0.12}
                />

                <h3 className="mt-5 text-lg font-normal text-black">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm font-normal leading-7 text-black/70">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
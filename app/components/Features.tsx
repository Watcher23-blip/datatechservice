import {
  ChartNoAxesCombined,
  Headset,
  CalendarClock,
  UsersRound,
} from "lucide-react";

const features = [
  {
    title: "Performance Reports",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Dedicated Support",
    icon: Headset,
  },
  {
    title: "Application Timeline",
    icon: CalendarClock,
  },
  {
    title: "Referral System",
    icon: UsersRound,
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-gray-50/80 px-5 py-20 md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-5xl text-center">
          <span className="text-sm font-normal uppercase tracking-[0.16em] text-blue-600">
            Freelancer Benefits
          </span>

          <h2 className="mt-4 text-3xl font-normal tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            The Features Every Freelancer Needs
          </h2>

          <p className="mt-5 text-base font-normal leading-7 text-gray-600 md:text-lg">
            Everything required to work smoothly and get paid on time.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="flex min-h-[190px] flex-col items-center justify-center gap-5 rounded-xl border border-white bg-white px-5 py-8 text-center shadow-[0_3px_10px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-200 hover:-translate-y-1 hover:border-blue-100 hover:shadow-[0_10px_25px_rgba(15,23,42,0.08)]"
              >
                <Icon
                  size={34}
                  strokeWidth={1.6}
                  className="text-blue-600"
                />

                <h3 className="text-base font-normal leading-6 text-gray-800">
                  {feature.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
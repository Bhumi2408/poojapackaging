import {
  CalendarDays,
  Globe,
  HandCoins,
  Scale,
  ChartNoAxesCombined,
  FileText,
} from "lucide-react";

const stats = [
  {
    icon: HandCoins,
    title: "Nature of Business",
    value: "Manufacturer",
  },
  {
    icon: Scale,
    title: "Legal Status of Firm",
    value: "Proprietorship",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Annual Turnover",
    value: "Upto 5 Cr.",
  },
  {
    icon: CalendarDays,
    title: "GST Registration Date",
    value: "01-07-2017",
  },
  {
    icon: Globe,
    title: "Import Export Code (IEC)",
    value: "AAGFP3760D",
  },
  {
    icon: FileText,
    title: "GST Number",
    value: "07AAGFP3760D1Z8",
  },
];

export default function CompanyStats() {
  return (
    <section className="bg-white pb-16 -mt-[100px] pt-[150px] rounded-b-[100px] relative z-[8]">
      <div className="w-[75%] mx-auto px-6">
        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center text-center md:text-left md:items-start gap-3"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#C23E34] text-[#C23E34] shrink-0">
                  <Icon className="w-8 h-8" />
                </div>

                <div>
                  <h4 className="text-xl font-medium text-[#777789] leading-5">
                    {item.title}
                  </h4>

                  <p className="mt-1 text-[#8B8B8B]">
                    {item.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
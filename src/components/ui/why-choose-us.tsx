import {
  TrophyIcon,
  ShieldCheckIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import { HeadsetIcon } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <TrophyIcon className="h-8 w-8 text-black" />,
      title: "High Quality",
      description: "crafted from top materials",
    },
    {
      icon: <ShieldCheckIcon className="h-8 w-8 text-black" />,
      title: "Warranty Protection",
      description: "Over 2 years",
    },
    {
      icon: <TruckIcon className="h-8 w-8 text-black" />,
      title: "Free Shipping",
      description: "Order over 150 $",
    },
    {
      icon: <HeadsetIcon className="h-8 w-8 text-black" />,
      title: "24 / 7 Support",
      description: "Dedicated support",
    },
  ];

  return (
    <div className="bg-[#FAF3E8] py-10 mt-48">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-black">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-500">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;

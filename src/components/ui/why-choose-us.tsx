import { Trophy, ShieldCheck, Truck, HeadphonesIcon } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="bg-[#fcfcfc] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* High Quality */}
          <div className="flex flex-col items-center text-center">
            <Trophy className="mb-4 h-12 w-12 text-gray-800" strokeWidth={1} />
            <h3 className="mb-2 text-lg font-semibold text-gray-800">
              High Quality
            </h3>
            <p className="text-sm text-gray-500">crafted from top materials</p>
          </div>

          {/* Warranty Protection */}
          <div className="flex flex-col items-center text-center">
            <ShieldCheck
              className="mb-4 h-12 w-12 text-gray-800"
              strokeWidth={1}
            />
            <h3 className="mb-2 text-lg font-semibold text-gray-800">
              Warranty Protection
            </h3>
            <p className="text-sm text-gray-500">Over 2 years</p>
          </div>

          {/* Free Shipping */}
          <div className="flex flex-col items-center text-center">
            <Truck className="mb-4 h-12 w-12 text-gray-800" strokeWidth={1} />
            <h3 className="mb-2 text-lg font-semibold text-gray-800">
              Free Shipping
            </h3>
            <p className="text-sm text-gray-500">Order over 150 $</p>
          </div>

          {/* 24/7 Support */}
          <div className="flex flex-col items-center text-center">
            <HeadphonesIcon
              className="mb-4 h-12 w-12 text-gray-800"
              strokeWidth={1}
            />
            <h3 className="mb-2 text-lg font-semibold text-gray-800">
              24 / 7 Support
            </h3>
            <p className="text-sm text-gray-500">Dedicated support</p>
          </div>
        </div>
      </div>
    </section>
  );
}

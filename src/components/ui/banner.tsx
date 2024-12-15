import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BannerProps {
  backgroundImage: string; // Path to the background image
  title: string; // Title text
  breadcrumbs: { label: string; href?: string }[]; // Breadcrumb links
  logo?: string; // Optional logo path
}

const Banner: React.FC<BannerProps> = ({
  backgroundImage,
  title,
  breadcrumbs,
  logo,
}) => {
  return (
    <div className="relative h-[200px] sm:h-[300px]">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt={`${title} Banner`}
        fill
        className="object-cover"
        priority
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-black px-4 text-center">
        {/* Optional Logo */}
        {logo && (
          <Image
            src={logo}
            alt="Logo"
            width={50}
            height={50}
            className="mb-2 w-12 h-12 sm:w-16 sm:h-16"
          />
        )}

        {/* Title */}
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4">{title}</h1>

        {/* Breadcrumbs */}
        <div className="flex items-center text-xs sm:text-sm">
          {breadcrumbs.map((breadcrumb, index) => (
            <React.Fragment key={index}>
              {breadcrumb.href ? (
                <Link
                  href={breadcrumb.href}
                  className="hover:underline transition-all duration-300"
                >
                  {breadcrumb.label}
                </Link>
              ) : (
                <span>{breadcrumb.label}</span>
              )}
              {index < breadcrumbs.length - 1 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 sm:h-4 sm:w-4 mx-1 sm:mx-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;

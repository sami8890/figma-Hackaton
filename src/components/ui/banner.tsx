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
    <div className="relative h-[300px]">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt={`${title} Banner`}
        fill
        className="object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-black">
        {/* Optional Logo */}
        {logo && (
          <Image
            src={logo}
            alt="Logo"
            width={50}
            height={50}
            className="mb-2"
          />
        )}
        {/* Title */}
        <h1 className="text-4xl font-bold">{title}</h1>

        {/* Breadcrumbs */}
        <div className="flex items-center text-sm mt-4">
          {breadcrumbs.map((breadcrumb, index) => (
            <React.Fragment key={index}>
              {breadcrumb.href ? (
                <Link href={breadcrumb.href} className="hover:underline">
                  {breadcrumb.label}
                </Link>
              ) : (
                <span>{breadcrumb.label}</span>
              )}
              {index < breadcrumbs.length - 1 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mx-2"
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

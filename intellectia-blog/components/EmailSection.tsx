"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const EmailSection = () => {
  return (
    <section className="w-full py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        {/* Left: Image */}
        <div className="w-full h-[300px] md:h-[400px] relative">
          <Image
            src="/images/hand.jpg" // replace with your image path
            alt="Professional woman smiling"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right: Content */}
        <div className="flex flex-col items-start justify-center space-y-6 font-dm-sans md:ml-16">
          <h2 className="text-xl md:text-17xl font-bold text-gray-800 uppercase">
            Join our legal community
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-md">
            Elevate your career. Define your future with a firm that values excellence,
            integrity, and collaboration.
          </p>

          {/* Button with animated arrow */}
          <Link
            href="/ContactUs/Careers"
            className="group inline-flex items-center gap-2 bg-gray-800  text-white font-medium px-8 py-3 hover:bg-opacity-95 transition-all"
          >
            Explore and apply now
            <ArrowUpRight
              className="w-5 h-5 transform transition-transform duration-300 group-hover:rotate-[45deg]"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;

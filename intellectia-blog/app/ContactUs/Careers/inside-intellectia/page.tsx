"use client";

import React, { useState, useEffect } from "react";
import Nav from "@/components/nav";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";

async function getStrapiData(url: string) {
  const baseURL = "http://localhost:1337";
  try {
    const response = await fetch(baseURL + url, { cache: "no-store" });
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default function WorkwithUs() {
  const [logoURL, setLogoURL] = useState("");
  const [randomImage, setRandomImage] = useState("");
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      /* ------------------------ FETCH LOGO ------------------------ */
      const homeRes = await getStrapiData("/api/home-page?populate=*");

      if (homeRes?.data?.attributes?.Logo?.data?.attributes?.url) {
        const logoUrl = homeRes.data.attributes.Logo.data.attributes.url;
        setLogoURL("http://localhost:1337" + logoUrl);
      }

      /* ------------------------ RANDOM HERO IMAGE ------------------------ */
      const imageRes = await getStrapiData("/api/image-section?populate=*");
      const images = imageRes?.data?.attributes?.Images?.data || [];

      if (images.length > 0) {
        const randomIndex = Math.floor(Math.random() * images.length);
        const selected = images[randomIndex].attributes.url;

        const refreshedImage =
          "http://localhost:1337" + selected + "?t=" + new Date().getTime();

        setRandomImage(refreshedImage);
      }

      /* ------------------------ JOB LISTINGS ------------------------ */
      const jobRes = await getStrapiData("/api/job-listings?populate=*");
      setJobs(jobRes?.data || []);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Nav logoURL={logoURL} />

      <section className="w-full bg-white flex flex-col items-center">
        {/* Hero Image */}
        <div className="w-full h-[350px] md:h-[450px] overflow-hidden relative">
          {randomImage && (
            <img
              src={randomImage}
              alt="Random hero artwork"
              className="w-full h-full object-cover"
            />
          )}
        </div>

        <div className="relative w-full -mt-24 md:-mt-10 px-4 md:px-8 mb-20">
          <div className="w-full bg-gray-200 p-5 md:p-8 flex flex-col gap-6 items-center">
            <h1 className="text-gray-800 font-semibold text-5xl md:text-20xl font-dm-sans mb-5">
              Openings
            </h1>

            {/* JOB LIST LOOP */}
            {jobs.map((job: any) => (
              <div
                key={job.id}
                className="w-full max-w-5xl md:max-w-4xl bg-white shadow-md border p-5 md:p-8 flex flex-col gap-6"
              >
                {/* TOP: LOGO + TITLE */}
                <div className="flex gap-4 w-full">
                  <img
                    src="/images/intellectia.png"
                    className="w-16 md:w-16 h-16 md:h-16 object-contain"
                    alt="Company Logo"
                  />

                  <div className="font-opensans flex flex-col">
                    <h2 className="text-sm md:text-lg font-semibold">
                      {job.attributes.role}
                    </h2>
                    <p className="text-gray-700 text-sm md:text-base">
                      {job.attributes.company}
                    </p>
                    <p className="text-gray-500 text-sm md:text-base">
                      {job.attributes.location}
                    </p>
                  </div>
                </div>

                {/* BULLET POINT DESCRIPTION */}
                {job.attributes.description?.length > 0 && (
                  <ul className="pl-5 text-gray-700 text-sm md:text-base space-y-1">
                    {job.attributes.description.map((item: any) => (
                      <li key={item.id} className="flex gap-2">
                        <span>-</span>
                        <span>{item.desc}</span>
                      </li>
                    ))}
                  </ul>
                )}


                {/* APPLY BUTTON AT BOTTOM */}
                <div className="flex justify-end md:justify-end">
                  <Link
                    href="/ContactUs/Careers/#careers"
                    className="px-4 md:px-6 py-2 md:py-3 bg-gray-800 text-white 
                               text-sm md:text-base font-opensans font-semibold 
                               hover:bg-opacity-95 whitespace-nowrap"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}

            {jobs.length === 0 && (
              <p className="text-gray-700 text-lg font-dm-sans text-center">
                No current openings. Please check back soon.
              </p>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

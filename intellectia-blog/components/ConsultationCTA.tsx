'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function ConsultationCTA() {
  return (
    <section className="bg-white py-20 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-1 gap-12">
        {/* Left Column */}
        <div className="flex flex-col justify-between ">
          
          <div className='flex flex-row '>
             <div>
                <h2 className="text-[17px] md:text-20xl mt-4 md:mt-0 font-semibold font-inter text-gray-900  leading-snug">
                   <span className=''> Motivated team is </span><br /> <span className='text-gray-300'>the core of your success</span>
                  </h2>

                  <div className="mt-5 md:mt-10">
                  <Image
                    src="/images/team1.jpg"
                    alt="Office team"
                    width={670}
                    height={400}
                    className="object-cover w-full mb-5"
                  />
                  <div className='bg-gray-300 h-0.5 mt-4'></div>
                  <p className="mt-5 md:mt-10 text-gray-800 text-[21px] md:text-xl font-medium  tracking-wide">
                    We’re on the lookout for dedicated and enthusiastic team members — let’s grow together.
                  </p>
                </div> 
             </div>

             <div className='ml-10 '>
                 <p className="text-gray-600 mt-4 text-base md:text-lg flex-1">
                    You can consult with us for personalized legal advice
                    and a clear understanding of your rights.
                  </p>
                  <Link
                      href="/ContactUs"
                      className="bg-gray-800 inline-flex items-center gap-2 text-sm font-dm-sans font-medium mt-6 mb-3 text-gray-200 px-5 py-2 hover:bg-opacity-95 hover:text-white transition-all"
                    >
                      {/* Show different text based on screen size */}
                      <span className="hidden sm:inline">Connect with us Today</span>
                      <span className="inline sm:hidden">Talk to us</span>
                      <ArrowUpRight className="w-5 h-5 mt-1" />
                    </Link>


                  <div className='bg-gray-300 h-0.5 mt-3 mb-3'></div>

                  <div>
                      <h3 className="text-lgx md:text-17xl font-medium text-gray-900 mt-5 md:mt-10">
                        Experienced management and business analysts are the core of your
                        projects success
                      </h3>
                      <Image
                        src="/images/team2.jpg"
                        alt="Team working"
                        width={550}
                        height={300}
                        className="object-cover w-full mt-6 rounded-sm"
                      />
                    </div>
             </div>
          </div>
        </div>
        


        {/* Right Column */}
        <div className="flex flex-col justify-between">
          

          <Link
            href="/ContactUs/Careers/"
            className="mt-0 md:mt-10 bg-gray-800
              text-white flex items-center justify-between px-7  md:px-6 py-5 md:py-14 text-sm md:text-lg font-medium hover:bg-opacity-95 transition-all"
          >
            Explore career opportunities
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

'use client';
import React from 'react';


const LearningCenter = () => {
  const resources = [
    {
      image: "/learing1.png",
      title: "Complete Platform Docs",
      description: "In-depth guides, API references, and quickstart tutorials for all Coredge products.",
      linkText: "Browse Docs",
      linkUrl: "#"
    },
    {
      image: "/learing2.png",
      title: "Sovereign AI in Practice",
      description: "Learn how enterprises are deploying compliant AI infra without sacrificing performance.",
      linkText: "Browse PDF",
      linkUrl: "#"
    },
    {
      image: "/learing3.png",
      title: "Edge-to-Cloud Orchestration",
      description: "Watch our architects demonstrate hybrid deployments.",
      linkText: "Watch Now",
      linkUrl: "#"
    },
    {
      image: "/learing4.png",
      title: "Healthcare AI Compliance",
      description: "See how leading healthcare providers deploy HIPAA-compliant AI at the edge.",
      linkText: "View Video",
      linkUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-full mx-auto lg:mt-28 xl:mt-40">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] leading-[70px] font-medium mb-4">
            Learning Center
          </h1>
          <p className="sm:text-[16px] md:-text-[18px] lg:text-[20px] font-normal leading-[30px] max-w-2xl mx-auto">
            Resources to help you get started and scale
          </p>
        </div>

        {/* Cards */}
        <div className="bg-[#141414]/50 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="group bg-zinc-900 rounded-lg overflow-hidden  transition-all duration-1000 hover:shadow-sm hover:shadow-gray-600 hover:-translate-y-0"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col h-[calc(100%-12rem)] border border-[#3F3F3F] border-t-0 ">
                <h3 className=" text-xl font-semibold mb-3 leading-[34px] md:text-[20px] lg:text-[24px] transition-colors display-block">
                  {resource.title}
                </h3>
                <p className="text-white font-normal mb-6 flex-grow leading-[30px] md:text-[18px] lg:text-[20px]">
                  {resource.description}
                </p>

                {/* Link */}
                <a
                  href={resource.linkUrl}
                  className="inline-flex items-center text-white font-medium group-hover:text-blue-400 transition-colors group/link"
                >
                  <span className="underline group-hover:no-underline group-hover/link:border-blue-400 transition-colors">
                    {resource.linkText}
                  </span>

                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningCenter;
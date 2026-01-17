
'use client';
import React from 'react';

interface PillarItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Corepiller: React.FC = () => {
  
  const pillars: PillarItem[] = [
    {
      title: "Sovereign AI",
      description: "Geo-fenced AI infra with data sovereignty and regulatory compliance.",
      icon: (
        <img 
          src="/p1.png" 
          alt="Sovereign AI" 
          className="w-6 h-6"
        />
      )
    },
    {
      title: "GPU Efficiency",
      description: "Optimize AI/ML workloads with dynamic GPU provisioning.",
      icon: (
        <img 
          src="/p3.png" 
          alt="GPU Efficiency" 
          className="w-6 h-6"
        />
      )
    },
    {
      title: "Multi-Cloud Freedom",
      description: "Break free from vendor lock-in with true hybrid orchestration.",
      icon: (
        <img 
          src="/p2.png" 
          alt="Multi-Cloud Freedom" 
          className="w-6 h-6"
        />
      )
    },
    {
      title: "Edge Readiness",
      description: "Deploy workloads closer to users with ultra-low latency.",
      icon: (
        <img 
          src="/p4.png" 
          alt="Edge Readiness" 
          className="w-6 h-6"
        />
      )
    }
  ];

  return (
    <div className="bg-[#0B0B0B] text-white selection:bg-cyan-500/30">
    
      {/* SECTION 2: */}
      <section className="py-24 px-6 sm:px-12 lg:px-10 max-w-full mx-auto">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-4xl md:text-5xl font-medium lg:text-[64px]">Built on Four Core Pillars</h2>
          <p className="text-white text-lg lg:text-[20px] font-normal">What sets Coredge apart in the sovereign cloud landscape</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <div 
              key={i} 
              className="bg-[#141414] border border-[#3f3f3f]/50 rounded-xl p-8 transition-all duration-500 group"
            >
              <div className="w-12 h-12 bg-[#141414] rounded-lg flex items-center justify-center 
               mb-10 border border-[#3F3F3F80] transition-colors">
                {pillar.icon}
              </div>
              <h3 className=" text-xl font-semibold lg:text-[26px] text-white mb-4">{pillar.title}</h3>
              <p className="text-white font-normal lg:text-[20px] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Corepiller;
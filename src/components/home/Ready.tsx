'use client';
export default function Ready() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-black overflow-hidden">
     
      <div 
        className="w-[100%] h-[99%] absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('/Ready.png')`,
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B] via-[#0B0B0B] to-black/0" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-[34px] sm:text-[44px] md:text-[54px] lg:text-[64px] font-medium text-white mb-6 sm:mb-8 leading-tight">
          Ready to Transform Your Cloud
          <br />
          Infrastructure?
        </h1>
        
        <p className="text-[20px] sm:text-lg md:text-xl text-white mb-8 sm:mb-12 max-w-3xl mx-auto font-normal lg:text-[20px]">
          Join leading enterprises leveraging sovereign cloud for secure, scalable operations
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-56 sm:mb-40 md:mb-56 lg:mb-56 xl:mb-70 2xl:mb-72 ">
          <button className="rounded-md transition-all font-medium 
                             lg:h-10 h-10
                             2xl:px-4 xl:px-6 lg:px-4 px-4
                             2xl:text-[14px] xl:text-[16px] lg:text-[14px] bg-[#0095B6] text-white ">
            Request a Demo
          </button>
          
          <button className="rounded-md transition-all font-medium 
                             lg:h-10 h-10
                             2xl:px-4 xl:px-6 lg:px-4 px-4
                             2xl:text-[14px] xl:text-[16px] lg:text-[14px] bg-transparent hover:bg-white/10 text-white border-2 border-white ">
            Get in Touch
          </button>
        </div>
      </div>
    
    </section>
  );
}
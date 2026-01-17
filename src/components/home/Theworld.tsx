// "use client";

// import React, { useRef, useState, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger, useGSAP);

// const stats = [
//     { value: 10, suffix: "K+", desc: "GPUs Managed. Lorem Ipsum is simply dummy text " },
//     { value: 60, suffix: "%", desc: "TCO Savings. Lorem Ipsum is simply dummy text" },
//     { value: 50, suffix: "%", desc: "Faster Deployment. Lorem Ipsum is simply dummy text" },
//     { value: 99.9, suffix: "%", desc: "Uptime SLA. Lorem Ipsum is simply dummy text" },
//     { value: 10, suffix: "K+", desc: "GPUs Managed. Lorem Ipsum is simply dummy text " },
//     { value: 60, suffix: "%", desc: "TCO Savings. Lorem Ipsum is simply dummy text" },
//     { value: 50, suffix: "%", desc: "Faster Deployment. Lorem Ipsum is simply dummy text" },
//     { value: 99.9, suffix: "%", desc: "Uptime SLA. Lorem Ipsum is simply dummy text" },
// ];

// export default function Theworld() {
    // const sliderRef = useRef<HTMLDivElement>(null);
    // const statsTriggerRef = useRef<HTMLDivElement>(null);

    // const [mounted, setMounted] = useState(false);
    // useEffect(() => { setMounted(true); }, []);

    // useGSAP(() => {
    //     if (!mounted || !sliderRef.current || !statsTriggerRef.current) return;

    //     const slider = sliderRef.current;

    //     // This function calculates the total distance to move
    //     // It's the total width of the cards minus the visible screen width
    //     const getScrollAmount = () => {
    //         return slider.scrollWidth - window.innerWidth;
    //     };

    //     const pinTimeline = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: statsTriggerRef.current,
    //             start: "top top",
    //             // We use a function here so it recalculates on resize
    //             end: () => `+=${getScrollAmount()}`, 
    //             scrub: 1,
    //             pin: true,
    //             anticipatePin: 1,
    //             invalidateOnRefresh: true,
    //         }
    //     });

    //     pinTimeline.to(slider, {
    //         x: () => -getScrollAmount(),
    //         ease: "none",
    //     });

    //     // Number animation
    //     const statNumbers = gsap.utils.toArray<HTMLElement>(".stat-number");
    //     statNumbers.forEach((num) => {
    //         const target = parseFloat(num.getAttribute("data-target") || "0");
    //         gsap.fromTo(num,
    //             { innerText: 0 },
    //             {
    //                 innerText: target,
    //                 duration: 0.8,
    //                 snap: { innerText: target % 1 === 0 ? 1 : 0.1 },
    //                 scrollTrigger: {
    //                     trigger: num,
    //                     containerAnimation: pinTimeline,
    //                     start: "left 100%", // Trigger slightly earlier
    //                     toggleActions: "play none none reverse",
    //                 }
    //             }
    //         );
    //     });

    //     // Force a refresh to catch the correct layout
    //     ScrollTrigger.refresh();

    // }, { dependencies: [mounted] });

    // if (!mounted) return <div className="bg-[#0B0B0B] h-auto" />;

//     return (
//         <div className="bg-[#0B0B0B] text-white">
//             {/* Header section scrolls normally */}
//             <section className="pt-20 pb-10 px-6">
//                 <div className="text-center mb-12">
//                     <h2 className="text-[34px] md:text-[44px] xl:text-[54px] 2xl:text-[64px] font-medium leading-tight">
//                         The world's #1 AI cloud platform,<br />
//                         purpose-built for what's next
//                     </h2>
//                 </div>
//                 <div className="flex justify-center">
//                     <video
//                         className="w-full max-w-4xl aspect-video rounded-2xl"
//                         muted autoPlay loop playsInline
//                     >
//                         <source src="coredge-product-animation.webm" type="video/webm" />
//                     </video>
//                 </div>
//             </section>

//             {/* Sticky Stats Section */}
//             <div 
//                 ref={statsTriggerRef} 
//                 className="h-[300px] flex items-center overflow-hidden"
//             >
//                 <div
//                     ref={sliderRef}
//                     className="flex flex-nowrap gap-10 px-[5vw] w-max"
//                 >
//                     {stats.map((stat, i) => (
//                         <div
//                             key={i}
//                             className="stat-card min-w-[350px] md:min-w-[400px] border-t border-white/20 pt-10"
//                         >
//                             <div className="text-[100px] md:text-[130px] leading-none "
//                                 style={{
//                                     background: 'linear-gradient(90deg, #BEDD00 0%, #0095B6 93.14%)',
//                                     WebkitBackgroundClip: 'text',
//                                     WebkitTextFillColor: 'transparent',
//                                 }}>
//                                 <span className="stat-number" data-target={stat.value}>0</span>
//                                 {stat.suffix}
//                             </div>
//                             <p className="text-gray-300 text-[20px] mt-2 max-w-sm leading-relaxed">
//                                 {stat.desc}
//                             </p>
//                         </div>
//                     ))}
//                     {/* Spacer at the end to ensure the last card is fully visible */}
//                     <div className="min-w-[10vw]" />
//                 </div>
//             </div>


//         </div>
//     );
// }

"use client";

import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const stats = [
    { value: 10, suffix: "K+", desc: "GPUs Managed. Lorem Ipsum is simply dummy text " },
    { value: 60, suffix: "%", desc: "TCO Savings. Lorem Ipsum is simply dummy text" },
    { value: 50, suffix: "%", desc: "Faster Deployment. Lorem Ipsum is simply dummy text" },
    { value: 99.9, suffix: "%", desc: "Uptime SLA. Lorem Ipsum is simply dummy text" },
    { value: 10, suffix: "K+", desc: "GPUs Managed. Lorem Ipsum is simply dummy text " },
    { value: 60, suffix: "%", desc: "TCO Savings. Lorem Ipsum is simply dummy text" },
    { value: 50, suffix: "%", desc: "Faster Deployment. Lorem Ipsum is simply dummy text" },
    { value: 99.9, suffix: "%", desc: "Uptime SLA. Lorem Ipsum is simply dummy text" },
];

export default function Theworld() {
    const sliderRef = useRef<HTMLDivElement>(null);
    const statsContainerRef = useRef<HTMLDivElement>(null);

    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);

    useGSAP(() => {
        if (!mounted || !sliderRef.current || !statsContainerRef.current) return;

        const slider = sliderRef.current;

        // Total distance the slider needs to move horizontally
        const getScrollAmount = () => slider.scrollWidth - window.innerWidth;

        // ANIMATION: Slide the stats while the user scrolls down normally
        // pin: false removes the extra blank space at the bottom
        gsap.to(slider, {
            x: () => -getScrollAmount(),
            ease: "none",
            scrollTrigger: {
                trigger: statsContainerRef.current,
                start: "top 0", // Starts sliding when the section enters the bottom 80% of screen
                end: "bottom 20%",  // Ends when the section reaches the top 20%
                scrub: 1,
                pin: true,        // NO PINNING = NO EXTRA BLANK SPACE
                invalidateOnRefresh: true,
            }
        });

        // Number animation
        const statNumbers = gsap.utils.toArray<HTMLElement>(".stat-number");
        statNumbers.forEach((num) => {
            const target = parseFloat(num.getAttribute("data-target") || "0");
            gsap.fromTo(num,
                { innerText: 0 },
                {
                    innerText: target,
                    duration: 0.8,
                    snap: { innerText: target % 1 === 0 ? 1 : 0.1 },
                    scrollTrigger: {
                        trigger: num,
                        start: "top 90%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        });

    }, { dependencies: [mounted] });

    if (!mounted) return <div className="bg-[#0B0B0B] h-auto" />;

    return (
        <div className="bg-[#0B0B0B] text-white overflow-x-hidden  bg-gradient-to-t from-[#0B0B0B]/50 via-transparent to-[#0B0B0B]">
            {/* Header section */}
            <section className="pt-20 pb-10 px-6">
                <div className="text-center mb-12">
                    <h2 className="text-[34px] md:text-[44px] xl:text-[54px] 2xl:text-[64px] font-medium leading-tight">
                        The world's #1 AI cloud platform,<br />
                        purpose-built for what's next
                    </h2>
                </div>
                <div className="flex justify-center">
                    <video
                        className="w-full max-w-4xl aspect-video rounded-2xl"
                        muted autoPlay loop playsInline
                    >
                        <source src="coredge-product-animation.webm" type="video/webm" />
                    </video>
                </div>
            </section>

            {/* Stats Slider Section - NO PINNING HERE */}
            <div
                ref={statsContainerRef}
                className="py-20 flex items-center overflow-hidden"
            >
                <div
                    ref={sliderRef}
                    className="flex flex-nowrap gap-10 px-[5vw] w-max"
                >
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="stat-card min-w-[300px] md:min-w-[400px] border-t border-white/20 pt-10"
                        >
                            <div className="text-[80px] md:text-[110px] leading-none "
                                style={{
                                    background: 'linear-gradient(90deg, #BEDD00 0%, #0095B6 93.14%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}>
                                <span className="stat-number" data-target={stat.value}>0</span>
                                {stat.suffix}
                            </div>
                            <p className="text-gray-300 text-[18px] mt-4 max-w-sm leading-relaxed">
                                {stat.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
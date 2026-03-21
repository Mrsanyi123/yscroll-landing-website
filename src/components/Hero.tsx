import { useEffect, useState } from "react";
import Beta from "./Beta";

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="min-h-screen bg-white pt-24 sm:pt-28 md:pt-32 lg:pt-40">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-16">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12">
                    <div
                        className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                            }`}
                    >
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mb-6 sm:mb-8">
                            Stop Endless Scrolling,
                            <br />
                            take control of your time
                        </h1>
                    </div>

                    <div
                        className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                            } flex flex-col lg:items-end items-center lg:text-right text-center`}
                    >
                        <p className="text-gray-500 text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-lg">
                            yscroll helps you limit endless scrolling, stay focused, and get
                            more work done.
                        </p>

                        {/* Beta Signup Component */}
                        <Beta />
                    </div>
                </div>

                <div className="relative mt-12 sm:mt-16 lg:mt-20">
                    <div
                        className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                            }`}
                    >
                        <img
                            src="/hero.png"
                            alt="YScroll app screens"
                            className="w-full max-w-12xl mx-auto object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
} 

import { useEffect, useState } from "react";
import Beta from "./Beta";

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="min-h-screen bg-white pt-32 md:pt-40">
            <div className="max-w-[1400px] mx-auto px-8 md:px-16">
                <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
                    <div
                        className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                            }`}
                    >
                        <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900 mb-8">
                            Stop Endless Scrolling,
                            <br />
                            take control of your time
                        </h1>
                    </div>

                    <div
                        className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                            } flex flex-col items-end`}
                    >
                        <p className="text-gray-500 text-lg md:text-2xl mb-8 text-right max-w-md">
                            yscroll helps you limit endless scrolling, stay focused, and get
                            more work done.
                        </p>

                        {/* Beta Signup Component */}
                        <Beta />
                    </div>
                </div>

                <div className="relative mt-20">
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

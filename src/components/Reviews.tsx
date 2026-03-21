import { useEffect, useRef, useState } from 'react';

function Reviews() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={sectionRef} id="reviews" className="bg-[#F8FAFC] py-32 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-8 md:px-16 text-center">
                <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-block bg-gray-100 text-gray-600 px-5 py-2 rounded-full text-sm font-medium mb-6">
                        Reviews
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm">
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-700 mb-4">
                                "YScroll has completely changed how I use YouTube. I'm more productive and actually feel in control of my screen time."
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                                <div>
                                    <p className="font-semibold text-gray-900">Sarah K.</p>
                                    <p className="text-sm text-gray-500">Student</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm">
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-700 mb-4">
                                "Finally found something that actually works! The limit settings are perfect and I love how it doesn't feel restrictive."
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                                <div>
                                    <p className="font-semibold text-gray-900">Mike R.</p>
                                    <p className="text-sm text-gray-500">Developer</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm">
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-700 mb-4">
                                "As someone who struggles with focus, this app has been a game-changer. Highly recommend to anyone looking to be more mindful."
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                                <div>
                                    <p className="font-semibold text-gray-900">Emily L.</p>
                                    <p className="text-sm text-gray-500">Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Reviews;

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

                    <div className="bg-white border border-gray-200 p-12 max-w-2xl mx-auto shadow-sm">
                        <p className="text-2xl font-medium text-gray-400 italic">
                            "Coming Soon: We're gathering the success stories of our earliest users. Stay tuned!"
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Reviews;

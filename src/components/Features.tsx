import { useEffect, useRef, useState } from 'react';

function Features() {
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

    const features = [
        {
            title: 'Daily Limit',
            description: 'Daily Limit is the limit of how many minutes you can watch shorts in a day.',
        },
        {
            title: 'Per Session Limit',
            description: 'Per Session Limit is the limit of how many minutes you can watch shorts in a one session.',
        },
        {
            title: 'Cool Down Limit',
            description: 'Cool Down Limit is the limit of how many minutes you have to wait before you can watch shorts.',
        },
        {
            title: 'Focus Mode',
            description: 'Focus Mode is a feature in which you can block shorts entirely for a specific amount of time.',
        },
        {
            title: 'Notifactions',
            description: 'Receive notifications when you reach your daily or per session limit.',
        },
    ];

    return (
        <div ref={sectionRef} id="features" className="bg-white py-20 md:py-32">
            <div className="max-w-[1400px] mx-auto px-8 md:px-16">
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-block bg-gray-100 text-gray-600 px-5 py-2 rounded-full text-sm font-medium mb-6">
                        Features
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                        All the features you need,<br />
                        to stay productive
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {features.slice(0, 3).map((feature, index) => (
                        <div
                            key={feature.title}
                            className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <div className="bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group h-full">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 mb-8">
                                    {feature.description}
                                </p>

                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {features.slice(3).map((feature, index) => (
                        <div
                            key={feature.title}
                            className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${(index + 3) * 150}ms` }}
                        >
                            <div className="bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group h-full">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 mb-8">
                                    {feature.description}
                                </p>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Features;

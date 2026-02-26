import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

function FAQ() {
    const [isVisible, setIsVisible] = useState(false);
    const [openIndex, setOpenIndex] = useState<number | null>(0);
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

    const faqs = [
        {
            question: 'How does YScroll track my scrolling activity?',
            answer: 'YScroll uses accessibility permissions to monitor screen time and detect when you\'re actively scrolling on social media apps. It works in the background without affecting your device\'s performance.',
        },
        {
            question: 'Can I customize my daily scroll limit?',
            answer: 'Yes! You can set your own daily limits based on your goals. Whether you want 30 minutes or 2 hours, YScroll adapts to your preferences and helps you stick to them.',
        },
        {
            question: 'What happens when I reach my daily limit?',
            answer: 'When you hit your limit, YScroll will redirect you away from shorts and show you a clear notification.',
        },
        {
            question: 'Is my data private and secure?',
            answer: 'Your privacy is our priority. We dont collect or share any of your data, everuthing stays on your device.',
        },
        {
            question: 'Which apps does YScroll monitor?',
            answer: 'YScroll currently monitors YouTube Shorts. More platformns like Instagram, TikTok, Twitter/X, Linkedin are being added regularly based on user feedback.',
        },
        {
            question: 'Can I pause YScroll temporarily?',
            answer: 'Yes, you can pause YScroll for specific times, like a special occasion. This gives you flexibility while maintaining your overall productivity goals.',
        },
    ];

    return (
        <div ref={sectionRef} id="faq" className="bg-white py-20 md:py-32">
            <div className="max-w-[1000px] mx-auto px-8 md:px-16">
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-block bg-gray-100 text-gray-600 px-5 py-2 rounded-full text-sm font-medium mb-6">
                        FAQ
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                        Frequently asked<br />
                        questions
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${index * 50}ms` }}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full bg-white border border-gray-200 rounded-xl p-6 text-left hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                            >
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#5B9FED] transition-colors">
                                        {faq.question}
                                    </h3>
                                    <ChevronDown
                                        className={`w-6 h-6 text-gray-500 transition-all duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180 text-[#5B9FED]' : ''
                                            }`}
                                    />
                                </div>

                                {openIndex === index && (
                                    <div className="mt-4 pt-4 border-t border-gray-200 animate-in fade-in duration-300">
                                        <p className="text-gray-600 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </button>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default FAQ;

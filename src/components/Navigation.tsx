import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface NavigationProps {
    variant?: 'light' | 'dark';
}

function Navigation({ variant = 'light' }: NavigationProps) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 w-full px-8 md:px-16 py-6 transition-all duration-300 ${isScrolled
            ? 'backdrop-blur-lg bg-white/80 border-b border-gray-200/50'
            : 'bg-transparent border-b border-transparent'
            }`}>
            <div className="max-w-[1400px] mx-auto flex items-center justify-between">
                <div className={`text-2xl font-bold ${variant === 'dark' ? 'text-gray-900' : 'text-gray-900'}`}>
                    <div className="size-[40px] flex items-center gap-2 text-[20px]">
                        <img src="/logo.png" alt="" />
                        YScroll
                    </div>

                </div>
                <div className="hidden md:flex items-center gap-8">
                    {['Features', 'Reviews'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-gray-500 hover:text-gray-900 transition-colors duration-300 text-[15px] font-medium"
                        >
                            {item}
                        </a>
                    ))}
                    <a
                        href="https://www.buymeacoffee.com/sanyidiriba"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-900 transition-colors duration-300 text-[15px] font-medium"
                    >
                        Support
                    </a>
                    <Link
                        to="/privacy"
                        className="text-gray-500 hover:text-gray-900 transition-colors duration-300 text-[15px] font-medium"
                    >
                        Privacy
                    </Link>
                    <Link
                        to="/terms"
                        className="text-gray-500 hover:text-gray-900 transition-colors duration-300 text-[15px] font-medium"
                    >
                        Terms
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface NavigationProps {
    variant?: 'light' | 'dark';
}

function Navigation({ variant = 'light' }: NavigationProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-6 md:px-16 py-4 sm:py-6 transition-all duration-300 ${isScrolled
            ? 'backdrop-blur-lg bg-white/80 border-b border-gray-200/50'
            : 'bg-transparent border-b border-transparent'
            }`}>
            <div className="max-w-[1400px] mx-auto flex items-center justify-between">
                <div className={`text-xl sm:text-2xl font-bold ${variant === 'dark' ? 'text-gray-900' : 'text-gray-900'}`}>
                    <div className="flex items-center gap-2 text-[16px] sm:text-[20px]">
                        <img src="/logo.png" alt="YScroll" className="w-8 h-8 sm:w-10 sm:h-10" />
                        YScroll
                    </div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6 lg:gap-8">
                    {['Features'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-gray-500 hover:text-gray-900 transition-colors duration-300 text-[14px] sm:text-[15px] font-medium"
                        >
                            {item}
                        </a>
                    ))}
                    <a
                        href="https://www.buymeacoffee.com/sanyidiriba"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-900 transition-colors duration-300 text-[14px] sm:text-[15px] font-medium"
                    >
                        Support
                    </a>
                    <Link
                        to="/privacy"
                        className="text-gray-500 hover:text-gray-900 transition-colors duration-300 text-[14px] sm:text-[15px] font-medium"
                    >
                        Privacy
                    </Link>
                    <Link
                        to="/terms"
                        className="text-gray-500 hover:text-gray-900 transition-colors duration-300 text-[14px] sm:text-[15px] font-medium"
                    >
                        Terms
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden p-2 text-gray-500 hover:text-gray-900"
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
                    <div className="px-4 py-4 space-y-3">
                        {['Features'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block text-gray-500 hover:text-gray-900 transition-colors duration-300 text-[15px] font-medium py-2"
                            >
                                {item}
                            </a>
                        ))}
                        <a
                            href="https://www.buymeacoffee.com/sanyidiriba"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-gray-500 hover:text-gray-900 transition-colors duration-300 text-[15px] font-medium py-2"
                        >
                            Support
                        </a>
                        <Link
                            to="/privacy"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block text-gray-500 hover:text-gray-900 transition-colors duration-300 text-[15px] font-medium py-2"
                        >
                            Privacy
                        </Link>
                        <Link
                            to="/terms"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block text-gray-500 hover:text-gray-900 transition-colors duration-300 text-[15px] font-medium py-2"
                        >
                            Terms
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navigation;

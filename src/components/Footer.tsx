import { Linkedin, Twitter, Github, Youtube } from 'lucide-react';

function Footer() {
    return (
        <footer className="bg-gray-50 pt-24 pb-12">
            <div className="max-w-[1400px] mx-auto px-8 md:px-16">

                <div className="flex flex-col lg:flex-row justify-between gap-20 mb-20">
                    {/* Brand Section */}
                    <div className="max-w-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <img src="/logo.png" alt="YScroll" className="w-10 h-10" />
                            <span className="text-3xl font-bold text-gray-900">YScroll</span>
                        </div>
                        <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                            Stop the endless scrolling and focus on what matters. Your time is valuable.
                        </p>
                        <div className="flex gap-6">
                            {[
                                { icon: Linkedin, href: "https://www.linkedin.com/in/sanyi-diriba/", name: 'LinkedIn' },
                                { icon: Youtube, href: "https://www.youtube.com/@Sanyi-Diriba", name: 'Youtube' },
                                { icon: Twitter, href: "https://twitter.com/imsanyidiriba", name: 'Twitter' },
                                { icon: Github, href: "https://github.com/Mrsanyi123", name: 'GitHub' },
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 flex items-center justify-center rounded-xl bg-white border border-gray-200 text-gray-400 hover:text-[#5B9FED] hover:border-[#5B9FED] hover:shadow-md transition-all duration-300"
                                    aria-label={social.name}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Section */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-12 sm:gap-20">
                        <div>
                            <h4 className="text-gray-900 font-bold text-lg mb-6">Product</h4>
                            <ul className="space-y-4">
                                {['Features', 'Reviews', 'FAQ', 'Get the Chrome Extension'].map((item) => (
                                    <li key={item}>
                                        <a
                                            href={
                                                item === 'Get the Chrome Extension'
                                                    ? 'https://chromewebstore.google.com/detail/yscroll-stop-the-endless/hlnhamlgmoijbfhilkanhifompndjaho'
                                                    : `#${item.toLowerCase()}`
                                            }
                                            className="text-gray-500 hover:text-gray-900 transition-colors"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Legal */}
                        <div>
                            <h4 className="text-gray-900 font-bold text-lg mb-6">Legal</h4>
                            <ul className="space-y-4">
                                {['Privacy', 'Terms'].map((item) => (
                                    <li key={item}>
                                        <a href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-500 hover:text-gray-900 transition-colors">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Connect */}
                        <div>
                            <h4 className="text-gray-900 font-bold text-lg mb-6">Connect</h4>
                            <ul className="space-y-4">
                                <li>
                                    <a href="mailto:sanyidiriba123@gmail.com" className="text-gray-500 hover:text-gray-900 transition-colors">
                                        Contact Support
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-400 text-sm">
                        &copy; 2026 YScroll. Built by {' '}
                        <a
                            href="https://github.com/Mrsanyi123"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-[#5B9FED] font-medium transition-colors"
                        >
                            Sanyi Diriba
                        </a>.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

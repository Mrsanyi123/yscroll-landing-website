import { useEffect } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

function Terms() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <main className="pt-32 pb-24">
                <div className="max-w-4xl mx-auto px-8 md:px-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                        Terms of Service — YScroll
                    </h1>

                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-600 mb-2"><strong>Effective date:</strong> March 21, 2026</p>
                        <p className="text-gray-600 mb-8"><strong>Last updated:</strong> March 21, 2026</p>

                        <p className="text-gray-600 mb-6">
                            These Terms of Service (“Terms”) govern your use of the YScroll mobile app (“App”). By using YScroll, you agree to these Terms. If you do not agree, do not use the App.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. About the App</h2>
                        <p className="text-gray-600 mb-8">
                            YScroll helps you manage time on short-form videos (YouTube Shorts, TikTok) by letting you set limits. It may use Android’s Accessibility Service and related features to detect activity **on your device only**.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Eligibility</h2>
                        <p className="text-gray-600 mb-8">
                            YScroll is available to everyone. If you are under the minimum age, a parent or guardian must agree to these Terms on your behalf.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Using the App</h2>
                        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-8">
                            <li>You do not need an account.</li>
                            <li>Keep your device secure and updated.</li>
                            <li>Permissions (Accessibility, notifications, overlays) are needed for certain features.</li>
                            <li>You must comply with third-party apps’ own rules (YouTube, TikTok, etc.).</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Acceptable Use</h2>
                        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-8">
                            <li>No unlawful use or violating these Terms.</li>
                            <li>No reverse engineering or tampering with the App code.</li>
                            <li>No disrupting the App, our systems, or other users’ devices.</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Third-Party Apps & Libraries</h2>
                        <p className="text-gray-600 mb-8">
                            YScroll interacts with apps like YouTube and TikTok but is not affiliated with them. Google Fonts or other libraries may load assets via the internet as described in our Privacy Policy.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Disclaimers</h2>
                        <p className="text-gray-600 mb-8">
                            THE APP IS PROVIDED “AS IS” WITHOUT WARRANTIES. We do not guarantee uninterrupted use or perfect short-form detection. The App is **not medical or professional advice**.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
                        <p className="text-gray-600 mb-8">
                            To the maximum extent allowed by law, we are **not liable** for indirect, incidental, or consequential damages. Our total liability will not exceed any amount you paid for the App (if applicable).
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Indemnity</h2>
                        <p className="text-gray-600 mb-8">
                            You agree to defend and hold us harmless from claims, losses, or expenses arising from your use of the App or violation of these Terms.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Intellectual Property</h2>
                        <p className="text-gray-600 mb-8">
                            YScroll, including its branding and code, is owned by us. You may not use our trademarks except to use the App normally.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Termination</h2>
                        <p className="text-gray-600 mb-8">
                            You can stop using the App at any time by uninstalling. We may suspend or terminate access if Terms are violated.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Changes</h2>
                        <p className="text-gray-600 mb-8">
                            We may update these Terms. Continued use after changes means you accept them. Check the App or <a href="https://yscroll.xyz/terms" className="text-[#5B9FED] hover:underline">website</a> for updates.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact</h2>
                        <p className="text-gray-600 mb-8">
                            Email: <a href="mailto:sanyidiriba123@gmail.com" className="text-[#5B9FED] hover:underline">Contact</a><br />
                            Website: <a href="https://yscroll.xyz" className="text-[#5B9FED] hover:underline">https://yscroll.xyz</a>
                        </p>

                        <div className="mt-16 pt-8 border-t border-gray-200">
                            <p className="text-sm text-gray-500">
                                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Terms;

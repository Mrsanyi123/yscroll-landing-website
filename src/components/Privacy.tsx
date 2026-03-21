import { useEffect } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

function Privacy() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <main className="pt-32 pb-24">
                <div className="max-w-4xl mx-auto px-8 md:px-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                        Privacy Policy — YScroll
                    </h1>

                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-600 mb-2"><strong>Effective date:</strong> March 21, 2026</p>
                        <p className="text-gray-600 mb-8"><strong>Last updated:</strong> March 21, 2026</p>

                        <p className="text-gray-600 mb-6">
                            YScroll (“we”, “us”, or “the app”) helps you manage your time on short-form videos like YouTube Shorts and TikTok. By using YScroll, you agree to this Privacy Policy. If you do not agree, please do not use the app.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. What we collect</h2>
                        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-8">
                            <li>Settings and limits you choose (stored locally on your device)</li>
                            <li>Usage metrics for your summaries and enforcing limits (time tracked, session counts)</li>
                            <li>Technical logs on your device for debugging</li>
                            <li>Accessibility events from apps you allow (YouTube, TikTok) — only processed locally</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How we use your data</h2>
                        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-8">
                            <li>Operate app features and enforce your limits</li>
                            <li>Store your settings and usage stats locally</li>
                            <li>Improve app stability and fix bugs on your device</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Accounts & sharing</h2>
                        <p className="text-gray-600 mb-8">
                            You do not need an account. We do <strong>not</strong> sell, share, or upload your data to our servers. All processing happens on your device.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Permissions</h2>
                        <table className="table-auto text-gray-600 mb-8">
                            <thead>
                                <tr>
                                    <th className="px-2 py-1 text-left font-semibold">Permission</th>
                                    <th className="px-2 py-1 text-left font-semibold">Purpose</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="px-2 py-1">Accessibility Service</td>
                                    <td className="px-2 py-1">Detect short-form apps and enforce limits locally</td>
                                </tr>
                                <tr>
                                    <td className="px-2 py-1">Post notifications</td>
                                    <td className="px-2 py-1">Notify you when limits or focus rules are triggered</td>
                                </tr>
                                <tr>
                                    <td className="px-2 py-1">Internet</td>
                                    <td className="px-2 py-1">For optional library use (e.g., Google Fonts). Not for uploading your data</td>
                                </tr>
                            </tbody>
                        </table>

                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data retention & deletion</h2>
                        <p className="text-gray-600 mb-8">
                            Data stays on your device until you clear app data or uninstall. We do not retain usage copies on servers.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Security</h2>
                        <p className="text-gray-600 mb-8">
                            Data is processed locally. Protect your device with a lock screen and keep your OS updated.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Children</h2>
                        <p className="text-gray-600 mb-8">
                            YScroll is available for Everyone. We do not knowingly collect personal information from children.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Your rights</h2>
                        <p className="text-gray-600 mb-8">
                            You control your data by adjusting settings, disabling Accessibility Service, or uninstalling the app. For questions, contact us.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact</h2>
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

export default Privacy;

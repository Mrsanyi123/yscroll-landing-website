export default function BetaSignup() {
    return (
        <div className="w-full">
            <div className="flex flex-col items-end w-full max-w-lg ml-auto">
                <a
                    href="https://play.google.com/store"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-black text-white font-semibold shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-gray-900 transition-all duration-300 transform"
                >
                    <img
                        src="/play.png"
                        alt="Google Play"
                        className="w-6 h-6"
                    />
                    <span className="text-lg font-semibold">Get the App</span>
                </a>
            </div>
        </div>
    );
}

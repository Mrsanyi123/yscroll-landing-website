export default function BetaSignup() {
    return (
        <div className="w-full">
            <div className="flex flex-col items-center lg:items-end w-full max-w-lg mx-auto lg:ml-auto">
                <a
                    href="https://play.google.com/store"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-black text-white font-semibold shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-gray-900 transition-all duration-300 transform text-sm sm:text-base"
                >
                    <img
                        src="/play.png"
                        alt="Google Play"
                        className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                    <span className="font-semibold">Get the App</span>
                </a>
            </div>
        </div>
    );
}

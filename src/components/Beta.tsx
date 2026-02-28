export default function BetaSignup() {
    return (
        <div className="w-full">
            <div className="flex flex-col items-end w-full max-w-lg ml-auto gap-5">
                <div className="flex items-center gap-4 bg-white border border-gray-100 px-6 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex -space-x-3 overflow-hidden">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="inline-block h-8 w-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center overflow-hidden">
                                <img
                                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 700}`}
                                    alt="User"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                        <div className="flex items-center justify-center h-8 w-8 rounded-full border-2 border-white bg-[#5B9FED] text-[10px] font-bold text-white uppercase tracking-tighter">
                            99+
                        </div>
                    </div>
                    <p className="text-xs font-bold text-gray-900 leading-none text-left">
                        <span className="text-[#5B9FED] font-bold">700+</span> already joined
                    </p>
                </div>

                <div className="w-full flex justify-center">
                    <div className="inline-flex items-center gap-3 bg-white border border-gray-200 px-10 py-5 rounded-full shadow-sm">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5B9FED] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#5B9FED]"></span>
                        </span>
                        <p className="text-xl font-bold text-gray-900 tracking-tight">
                            Coming Soon
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

import { useState, useEffect } from "react";
import { db } from "../firebase";
import { doc, setDoc, serverTimestamp, collection, getCountFromServer } from "firebase/firestore";
import Confetti from "react-confetti";
import { Users } from "lucide-react";

export default function BetaSignup() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("");
    const [showConfetti, setShowConfetti] = useState(false);
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState<number | null>(null);

    useEffect(() => {
        const fetchCount = async () => {
            try {
                const coll = collection(db, "beta_emails");
                const snapshot = await getCountFromServer(coll);
                setCount(snapshot.data().count);
            } catch (error) {
                console.error("Error fetching beta count:", error);
            }
        };

        fetchCount();
        const interval = setInterval(fetchCount, 60000);
        return () => clearInterval(interval);
    }, []);

    const [windowSize, setWindowSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (loading) return;

        setLoading(true);
        setStatus("");

        try {
            await setDoc(doc(db, "beta_emails", email), {
                email,
                createdAt: serverTimestamp(),
                source: "website",
            });

            setStatus("Welcome to YScroll Beta 🎉 You're officially in.");
            setShowConfetti(true);
            setEmail("");

            setTimeout(() => {
                setShowConfetti(false);
            }, 5000);

            const coll = collection(db, "beta_emails");
            const snapshot = await getCountFromServer(coll);
            setCount(snapshot.data().count);
        } catch (error) {
            console.error(error);
            setStatus("Something went wrong. Try again.");
        }

        setLoading(false);
    };

    return (
        <div className="w-full">
            {showConfetti && (
                <Confetti
                    width={windowSize.width}
                    height={windowSize.height}
                    numberOfPieces={400}
                    recycle={false}
                    colors={['#5B9FED', '#90cdf4', '#ffffff', '#2b6cb0']}
                />
            )}

            <div className="flex flex-col items-end w-full max-w-lg ml-auto">
                {count !== null && (
                    <div className="flex items-center gap-4 mb-6 bg-white border border-gray-100 px-6 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-300 group">
                        <div className="flex -space-x-3 overflow-hidden">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="inline-block h-8 w-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center overflow-hidden">
                                    <img
                                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + (count || 0)}`}
                                        alt="User"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                            <div className="flex items-center justify-center h-8 w-8 rounded-full border-2 border-white bg-[#5B9FED] text-[10px] font-bold text-white uppercase tracking-tighter">
                                {count > 99 ? '99+' : count}
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-xs font-bold text-gray-900 leading-none mb-1 text-left">
                                <span className="text-[#5B9FED] font-bold">{count}+</span> already joined
                            </p>

                        </div>
                    </div>
                )}

                <form className="w-full relative group" onSubmit={handleSubmit}>
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#5B9FED] to-[#90cdf4] rounded-full opacity-0 group-hover:opacity-10 blur transition duration-500"></div>
                    <input
                        type="email"
                        placeholder="enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={loading}
                        className="relative w-full bg-white border border-gray-200 rounded-full px-8 py-5 pr-44 text-lg outline-none focus:ring-2 focus:ring-[#5B9FED] focus:border-transparent transition-all duration-300 hover:border-gray-300 disabled:opacity-60"
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#5B9FED] hover:bg-[#4A8EDB] text-white px-10 py-3.5 rounded-full text-lg font-bold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-xl whitespace-nowrap disabled:opacity-60 overflow-hidden group/btn"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            {loading ? "Joining..." : (
                                <>
                                    Join Beta
                                    <Users className="w-5 h-5 group-hover:btn:translate-x-1 transition-transform" />
                                </>
                            )}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                    </button>
                </form>

                {status && (
                    <div className={`mt-4 px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${status.includes("wrong") ? "bg-red-50 text-red-600 border border-red-100" : "bg-green-50 text-green-600 border border-green-100"
                        }`}>
                        {status.includes("Welcome") && <span className="text-xl">🎉</span>}
                        {status}
                    </div>
                )}
            </div>
        </div>
    );
}
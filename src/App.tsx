import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Privacy from './components/Privacy';
import Terms from './components/Terms';

function LandingPage() {
    return (
        <>
            <Navigation />
            <Hero />
            <Features />
            <Reviews />
            <FAQ />
            <Footer />
        </>
    );
}

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-white">
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/terms" element={<Terms />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

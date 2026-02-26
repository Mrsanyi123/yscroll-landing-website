import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <Hero />
            <Features />
            <Reviews />
            <FAQ />
            <Footer />
        </div>
    );
}

export default App;

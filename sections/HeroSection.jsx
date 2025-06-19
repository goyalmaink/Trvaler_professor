import React from 'react';
import Button from '../components/Button';
import { MapPin, Calendar, Users,  Download } from 'lucide-react';


export const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
                }}
            />

            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    HIMALAYAN ADVENTURE
                    <br />
                    <span className="text-orange-500">LADAKH</span>
                </h1>

                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
                    Experience the raw beauty of Leh-Ladakh with scenic landscapes, ancient monasteries, and thrilling high-altitude adventures. This carefully crafted journey combines culture with the adventure, ensuring you explore the essence of one of India's most pristine regions.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <Button size="lg" className="text-lg px-8 py-4">
                        Book Now
                    </Button>
                    <Button variant="secondary" size="lg" className="text-lg px-8 py-4">
                        Enquire
                    </Button>
                    <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-gray-900">
                        <Download size={20} />
                        Download Brochure
                    </Button>
                </div>

                <div className="flex flex-wrap justify-center gap-8 text-center">
                    <div className="flex items-center gap-2">
                        <Calendar className="text-orange-500" size={24} />
                        <span className="text-lg font-semibold">7 Days • 6 Nights</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Users className="text-orange-500" size={24} />
                        <span className="text-lg font-semibold">Max Group: 12</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin className="text-orange-500" size={24} />
                        <span className="text-lg font-semibold">Starting: ₹24,000 PP</span>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </section>
    );
};



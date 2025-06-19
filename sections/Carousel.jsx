import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {Card} from '../components/card';
import Button from '../components/Button';
import {Badge} from '../components/badge';

export const TripCarousel = () => {
    const [currentTrip, setCurrentTrip] = useState(0);

    const trips = [
        {
            title: "Ladakh Road Expedition",
            description: "Conquer the mountains with fellow explorers.",
            price: "₹15000/-",
            duration: "5 NIGHTS • 4 DAYS",
            image: "https://images.unsplash.com/photo-1641796562024-cc00f1bcbd30?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: "Bali Bliss Retreat",
            description: "Sun, surf, and culture in paradise.",
            price: "₹15000/-",
            duration: "5 NIGHTS • 4 DAYS",
            image: "https://plus.unsplash.com/premium_photo-1671211755040-44cbf2d87042?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: "Spiti Valley Adventure",
            description: "Journey to the heart of the Himalayas.",
            price: "₹15000/-",
            duration: "5 NIGHTS • 4 DAYS",
            image: "https://images.unsplash.com/photo-1607144113358-9d8dd893a647?q=80&w=1663&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ];

    const nextTrip = () => {
        setCurrentTrip((prev) => (prev + 1) % trips.length);
    };

    const prevTrip = () => {
        setCurrentTrip((prev) => (prev - 1 + trips.length) % trips.length);
    };

    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        FIND YOUR PERFECT <span className="text-orange-500">TRIP</span>...
                    </h2>
                </div>


                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {['Weekend Getaways', 'Adventure Escapes', 'International Tours', 'Family Holiday', 'Wellness Retreat'].map((category, index) => (
                        <button
                            key={category}
                            className={`px-6 py-3 rounded-full border-2 transition-all duration-300 ${index === 0
                                    ? 'border-orange-500 text-orange-500 bg-orange-50'
                                    : 'border-gray-300 text-gray-700 hover:border-orange-500 hover:text-orange-500'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>


                <div className="relative">
                    <div className="flex overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentTrip * 100}%)` }}
                        >
                            {trips.map((trip, index) => (
                                <div key={index} className="w-full flex-shrink-0">
                                    <div className="grid md:grid-cols-3 gap-8 px-4">

                                        {[0, 1, 2].map((offset) => {
                                            const tripIndex = (index + offset) % trips.length;
                                            const tripData = trips[tripIndex];
                                            return (
                                                <Card key={`${index}-${offset}`} className="overflow-hidden">
                                                    <div className="relative h-64">
                                                        <img
                                                            src={tripData.image}
                                                            alt={tripData.title}
                                                            className="w-full h-full object-cover"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                                    </div>
                                                    <div className="p-6">
                                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{tripData.title}</h3>
                                                        <p className="text-gray-600 mb-4">{tripData.description}</p>
                                                        <div className="flex items-center justify-between mb-4">
                                                            <div className="text-2xl font-bold text-orange-500">{tripData.price}</div>
                                                            <Badge variant="info">{tripData.duration}</Badge>
                                                        </div>
                                                        <div className="flex gap-2">
                                                            <Button variant="secondary" size="sm" className="flex-1">
                                                                Read More
                                                            </Button>
                                                            <Button size="sm" className="flex-1">
                                                                Enquire
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </Card>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button
                        onClick={prevTrip}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
                    >
                        <ChevronLeft size={24} className="text-gray-700" />
                    </button>
                    <button
                        onClick={nextTrip}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white shadow-lg rounded-full p-3 hover:bg-orange-600 transition-colors"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
};
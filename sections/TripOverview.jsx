
import React, { useState, useEffect } from 'react';
import {  Check} from 'lucide-react';

export const TripOverview = () => {
    const highlights = [
        "Explore ancient monasteries and Buddhist culture",
        "Scenic drive through world's highest motorable passes",
        "Visit pristine high-altitude lakes like Pangong Tso",
        "Experience traditional Ladakhi hospitality",
        "Photography opportunities at every turn",
        "Professional guide with local expertise"
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        What Makes This Trip <span className="text-orange-500">Special</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Our Ladakh expedition is designed for adventurers who seek authentic experiences beyond typical tourist trails.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1638360447329-2a97bf6a3d5c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Ladakh landscape"
                            className="w-full h-80 object-cover rounded-2xl shadow-lg"
                        />
                    </div>

                    <div>
                        <div className="space-y-4">
                            {highlights.map((highlight, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-1">
                                        <Check size={16} className="text-white" />
                                    </div>
                                    <p className="text-gray-700 text-lg">{highlight}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 p-6 bg-orange-50 rounded-xl">
                            <p className="text-gray-700 italic">
                                "Travel Professor has been curating exceptional Himalayan experiences for over a decade,
                                transforming ordinary travelers into passionate explorers through carefully crafted journeys."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
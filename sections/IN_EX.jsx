import React from 'react';
import { Check, X, } from 'lucide-react';
import { Card } from '../components/card';

export const InclusionsExclusions = () => {
    const inclusions = [
        "6 nights accommodation (hotels & camps)",
        "All meals as per itinerary",
        "Transportation in Tempo Traveller/Innova",
        "Professional guide throughout the trip",
        "All monastery and monument entry fees",
        "Camel safari in Nubra Valley",
        "Inner line permits for restricted areas",
        "First aid kit and oxygen cylinder",
        "Travel insurance for the duration"
    ];

    const exclusions = [
        "Flights to/from Leh",
        "Personal expenses and shopping",
        "Travel insurance (medical)",
        "Tips for guide and driver",
        "Any meals not mentioned in itinerary",
        "Camera fees at monuments",
        "Emergency evacuation charges",
        "Items of personal nature"
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        <span className="text-green-600">Inclusions</span> & <span className="text-red-600">Exclusions</span>
                    </h2>
                    <p className="text-xl text-gray-600">
                        Complete transparency in what's covered and what's not
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    <Card className="p-8">
                        <h3 className="text-2xl font-bold text-green-600 mb-6 flex items-center gap-3">
                            <Check className="bg-green-100 text-green-600 rounded-full p-1" size={32} />
                            What's Included
                        </h3>
                        <div className="space-y-3">
                            {inclusions.map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <Check size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </Card>
                    <Card className="p-8">
                        <h3 className="text-2xl font-bold text-red-600 mb-6 flex items-center gap-3">
                            <X className="bg-red-100 text-red-600 rounded-full p-1" size={32} />
                            What's Not Included
                        </h3>
                        <div className="space-y-3">
                            {exclusions.map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <X size={20} className="text-red-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>

                <div className="mt-12 bg-orange-50 p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Important Notes & Requirements</h3>
                    <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                        <div>
                            <h4 className="font-semibold mb-2">Medical Requirements:</h4>
                            <ul className="space-y-1 text-sm">
                                <li>• Medical fitness certificate required</li>
                                <li>• No serious heart or lung conditions</li>
                                <li>• Minimum age: 12 years</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Packing Essentials:</h4>
                            <ul className="space-y-1 text-sm">
                                <li>• Warm clothing (temperature can drop to -5°C)</li>
                                <li>• Good trekking shoes</li>
                                <li>• Sunglasses and sunscreen (high altitude)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

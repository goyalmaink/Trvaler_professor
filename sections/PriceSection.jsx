import React, { useState } from 'react';
import { MapPin, Calendar, Users, MessageCircle } from 'lucide-react';
import {Card} from '../components/card';
import Button from '../components/Button';
import {Badge} from '../components/badge';

export const PricingSection = () => {
    const [selectedOccupancy, setSelectedOccupancy] = useState('twin');

    const pricing = {
        twin: { price: 24000, savings: 2000 },
        triple: { price: 22000, savings: 4000 },
        single: { price: 28000, savings: 0 }
    };

    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        <span className="text-orange-500">Pricing</span> & Booking
                    </h2>
                    <p className="text-xl text-gray-600">
                        Flexible pricing options to suit your travel style
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <Card className="p-8 mb-8">
                        <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
                            {Object.entries(pricing).map(([type, data]) => (
                                <button
                                    key={type}
                                    onClick={() => setSelectedOccupancy(type)}
                                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${selectedOccupancy === type
                                            ? 'bg-orange-500 text-white shadow-lg'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    {type.charAt(0).toUpperCase() + type.slice(1)} Sharing
                                </button>
                            ))}
                        </div>

                        <div className="text-center">
                            <div className="text-6xl font-bold text-orange-500 mb-2">
                                ₹{pricing[selectedOccupancy].price.toLocaleString()}
                            </div>
                            <div className="text-xl text-gray-600 mb-4">per person</div>
                            {pricing[selectedOccupancy].savings > 0 && (
                                <div className="text-green-600 font-semibold mb-6">
                                    Save ₹{pricing[selectedOccupancy].savings.toLocaleString()} per person!
                                </div>
                            )}

                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                <div className="text-center">
                                    <Calendar className="mx-auto text-orange-500 mb-2" size={32} />
                                    <div className="font-semibold">Next Departure</div>
                                    <div className="text-gray-600">March 15, 2025</div>
                                </div>
                                <div className="text-center">
                                    <Users className="mx-auto text-orange-500 mb-2" size={32} />
                                    <div className="font-semibold">Group Size</div>
                                    <div className="text-gray-600">6-12 people</div>
                                </div>
                                <div className="text-center">
                                    <MapPin className="mx-auto text-orange-500 mb-2" size={32} />
                                    <div className="font-semibold">Duration</div>
                                    <div className="text-gray-600">7 Days • 6 Nights</div>
                                </div>
                            </div>
                        </div>
                    </Card>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Payment Terms</h3>
                            <div className="space-y-3 text-gray-700">
                                <div className="flex justify-between">
                                    <span>Booking Amount:</span>
                                    <span className="font-semibold">₹5,000 per person</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Balance Payment:</span>
                                    <span className="font-semibold">30 days before departure</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Cancellation:</span>
                                    <span className="font-semibold">As per policy</span>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Upcoming Departures</h3>
                            <div className="space-y-2 text-gray-700">
                                <div className="flex justify-between items-center">
                                    <span>March 15, 2025</span>
                                    <Badge variant="success">Available</Badge>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span>April 12, 2025</span>
                                    <Badge variant="success">Available</Badge>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span>May 10, 2025</span>
                                    <Badge variant="info">Filling Fast</Badge>
                                </div>
                            </div>
                        </Card>
                    </div>

                    <div className="text-center mt-12">
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="text-lg px-12 py-4">
                                Book Now - Pay ₹5,000 Only
                            </Button>
                            <Button variant="secondary" size="lg" className="text-lg px-12 py-4">
                                <MessageCircle size={20} />
                                Chat with Expert
                            </Button>
                        </div>
                        <p className="text-gray-600 mt-4">
                            ✅ Instant Confirmation • ✅ Secure Payment • ✅ 24/7 Support
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
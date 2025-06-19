import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import {Card} from '../components/card';
// import Button from '../components/Button';
import { ChevronRight } from 'lucide-react';    

export const TrustSection = () => {
    const [currentReview, setCurrentReview] = useState(0);

    const reviews = [
        {
            name: "Priya Sharma",
            location: "Mumbai",
            rating: 5,
            text: "Absolutely incredible experience! The team at Travel Professor made our Ladakh trip unforgettable. Professional guides, perfect itinerary, and amazing hospitality.",
            image: "https://images.unsplash.com/photo-1648743856421-5bc9a742ddc5?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: "Rajesh Kumar",
            location: "Delhi",
            rating: 5,
            text: "Best travel company for Himalayan adventures! Everything was organized perfectly, from accommodation to meals. Highly recommend for Ladakh trips.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
        },
        {
            name: "Anjali Patel",
            location: "Bangalore",
            rating: 5,
            text: "Professional service and attention to detail. The Pangong Lake experience was magical. Thank you Travel Professor for making our dreams come true!",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
        }
    ];

    const faqs = [
        {
            question: "Is this trip suitable for beginners?",
            answer: "Yes, our Ladakh trip is designed for adventure enthusiasts of all levels. We provide proper acclimatization time and professional guidance throughout the journey."
        },
        {
            question: "What about altitude sickness?",
            answer: "We include acclimatization days in Leh and carry oxygen cylinders. Our guides are trained to handle altitude-related issues and we have tie-ups with local medical facilities."
        },
        {
            question: "What's the best time to visit Ladakh?",
            answer: "May to September is ideal for Ladakh trips. Roads are accessible, weather is pleasant, and all attractions are reachable during this period."
        },
        {
            question: "Are permits required?",
            answer: "Yes, inner line permits are required for certain areas. We handle all permit formalities for you as part of our service."
        }
    ];

    const [openFaq, setOpenFaq] = useState(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentReview((prev) => (prev + 1) % reviews.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Why Travelers <span className="text-orange-500">Trust Us</span>
                    </h2>
                    <p className="text-xl text-gray-600">
                        Over 5,000+ happy travelers and counting
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">What Our Travelers Say</h3>
                        <Card className="p-8">
                            <div className="flex items-center mb-4">
                                <img
                                    src={reviews[currentReview].image}
                                    alt={reviews[currentReview].name}
                                    className="w-16 h-16 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <h4 className="font-bold text-gray-900">{reviews[currentReview].name}</h4>
                                    <p className="text-gray-600">{reviews[currentReview].location}</p>
                                    <div className="flex mt-1">
                                        {[...Array(reviews[currentReview].rating)].map((_, i) => (
                                            <Star key={i} className="text-yellow-400 fill-current" size={16} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-700 text-lg italic">"{reviews[currentReview].text}"</p>

                            <div className="flex justify-center mt-6 gap-2">
                                {reviews.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentReview(index)}
                                        className={`w-3 h-3 rounded-full transition-colors ${index === currentReview ? 'bg-orange-500' : 'bg-gray-300'
                                            }`}
                                    />
                                ))}
                            </div>
                        </Card>

                        <div className="grid grid-cols-3 gap-4 mt-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-orange-500">5000+</div>
                                <div className="text-gray-600">Happy Travelers</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-orange-500">250+</div>
                                <div className="text-gray-600">Group Trips</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-orange-500">50+</div>
                                <div className="text-gray-600">Destinations</div>
                            </div>
                        </div>
                    </div>

                    
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h3>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <Card key={index} className="overflow-hidden">
                                    <button
                                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                        className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                                    >
                                        <span className="font-semibold text-gray-900">{faq.question}</span>
                                        <ChevronRight
                                            className={`transform transition-transform ${openFaq === index ? 'rotate-90' : ''}`}
                                            size={20}
                                        />
                                    </button>
                                    {openFaq === index && (
                                        <div className="px-6 pb-6">
                                            <p className="text-gray-700">{faq.answer}</p>
                                        </div>
                                    )}
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
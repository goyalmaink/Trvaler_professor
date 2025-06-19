import React, { useState } from 'react';
import { Star, MapPin, Users,Utensils,Bed ,Car } from 'lucide-react';
import { Badge } from '../components/badge';
import { Card } from '../components/card';
import { ProgressBar } from '../components/Progressbar';
import { useScrollAnimation } from '../hookes/useAnimation';
import { Camera } from 'lucide-react';
import { Mountain } from 'lucide-react';
import { Clock } from 'lucide-react';
   
import { ChevronDown, ChevronUp } from 'lucide-react';

export const DetailedItinerary = () => {
    const [expandedDay, setExpandedDay] = useState(null);
    const visibleSections = useScrollAnimation();

    const itinerary = [
        {
            day: 1,
            title: "Arrival in Leh - Acclimatization",
            morning: "Arrive at Leh Airport, transfer to hotel",
            afternoon: "Rest and acclimatization, light local market exploration",
            evening: "Welcome dinner with traditional Ladakhi cuisine",
            accommodation: "Hotel Ladakh Residency (4-star)",
            meals: "Dinner included",
            distance: "Airport to hotel: 8km",
            specialNotes: "Complete rest recommended for altitude adjustment",
            activities: [
                { icon: Car, name: "Airport Transfer" },
                { icon: Bed, name: "Hotel Check-in" },
                { icon: Utensils, name: "Welcome Dinner" }
            ]
        },
        {
            day: 2,
            title: "Leh Local Sightseeing",
            morning: "Visit Shanti Stupa and Leh Palace",
            afternoon: "Explore Thiksey Monastery and Hemis Monastery",
            evening: "Sunset at Leh Palace viewpoint",
            accommodation: "Hotel Ladakh Residency",
            meals: "Breakfast, Lunch, Dinner",
            distance: "Total: 45km",
            specialNotes: "Photography workshop included",
            activities: [
                { icon: Camera, name: "Photography Tour" },
                { icon: Mountain, name: "Monastery Visits" },
                { icon: MapPin, name: "Cultural Sites" }
            ]
        },
        {
            day: 3,
            title: "Leh to Nubra Valley via Khardung La",
            morning: "Early departure via world's highest motorable pass",
            afternoon: "Reach Nubra Valley, camel safari at Hunder",
            evening: "Traditional cultural program",
            accommodation: "Desert Camp Nubra",
            meals: "Breakfast, Lunch, Dinner",
            distance: "120km (4-5 hours)",
            specialNotes: "Oxygen cylinders available if needed",
            activities: [
                { icon: Mountain, name: "Khardung La Pass" },
                { icon: Camera, name: "Camel Safari" },
                { icon: Users, name: "Cultural Show" }
            ]
        },
        {
            day: 4,
            title: "Nubra Valley Exploration",
            morning: "Visit Diskit Monastery and Giant Buddha",
            afternoon: "Sand dunes photography and local village visit",
            evening: "Stargazing session with expert guide",
            accommodation: "Desert Camp Nubra",
            meals: "Breakfast, Lunch, Dinner",
            distance: "Local sightseeing: 40km",
            specialNotes: "Clear skies perfect for astrophotography",
            activities: [
                { icon: Mountain, name: "Monastery Visit" },
                { icon: Camera, name: "Village Photography" },
                { icon: Star, name: "Stargazing" }
            ]
        },
        {
            day: 5,
            title: "Nubra to Pangong Lake",
            morning: "Drive through Shyok Valley route",
            afternoon: "Arrive at Pangong Lake, photography session",
            evening: "Lakeside camping experience",
            accommodation: "Pangong Lake Camps",
            meals: "Breakfast, Lunch, Dinner",
            distance: "150km (5-6 hours)",
            specialNotes: "One of the most scenic drives in Ladakh",
            activities: [
                { icon: Mountain, name: "Scenic Drive" },
                { icon: Camera, name: "Lake Photography" },
                { icon: Bed, name: "Lakeside Camping" }
            ]
        },
        {
            day: 6,
            title: "Pangong Lake to Leh",
            morning: "Sunrise photography at Pangong Lake",
            afternoon: "Return journey via Chang La pass",
            evening: "Farewell dinner in Leh",
            accommodation: "Hotel Ladakh Residency",
            meals: "Breakfast, Lunch, Dinner",
            distance: "160km (5-6 hours)",
            specialNotes: "Last chance for souvenir shopping",
            activities: [
                { icon: Camera, name: "Sunrise Photography" },
                { icon: Mountain, name: "Chang La Pass" },
                { icon: Utensils, name: "Farewell Dinner" }
            ]
        },
        {
            day: 7,
            title: "Departure from Leh",
            morning: "Hotel checkout and transfer to airport",
            afternoon: "Flight departure",
            evening: "Journey ends",
            accommodation: "N/A",
            meals: "Breakfast only",
            distance: "Hotel to airport: 8km",
            specialNotes: "Carry altitude sickness medication if needed",
            activities: [
                { icon: Car, name: "Airport Transfer" },
                { icon: Clock, name: "Flight Departure" }
            ]
        }
    ];

    return (
        <section
            id="itinerary"
            data-animate
            className={`py-20 bg-white transition-all duration-1000 ${visibleSections['itinerary'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <Badge variant="primary" className="mb-4">DETAILED JOURNEY</Badge>
                    <h2 className="text-5xl font-bold text-gray-900 mb-6">
                        Day-by-Day <span className="text-orange-500">Itinerary</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Every moment carefully planned to maximize your Ladakh experience while ensuring
                        comfort and safety throughout your journey.
                    </p>
                </div>

                <div className="space-y-6">
                    {itinerary.map((day) => (
                        <Card
                            key={day.day}
                            className={`transition-all duration-300 ${expandedDay === day.day ? 'ring-2 ring-orange-500' : ''
                                }`}
                        >
                            <div
                                className="p-6 cursor-pointer"
                                onClick={() => setExpandedDay(expandedDay === day.day ? null : day.day)}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-6">
                                        <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl">
                                            {day.day}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{day.title}</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {day.activities.map((activity, index) => (
                                                    <div key={index} className="flex items-center gap-1 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                                                        <activity.icon className="w-4 h-4" />
                                                        {activity.name}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    {expandedDay === day.day ?
                                        <ChevronUp className="w-6 h-6 text-gray-400" /> :
                                        <ChevronDown className="w-6 h-6 text-gray-400" />
                                    }
                                </div>

                                {expandedDay === day.day && (
                                    <div className="mt-6 pt-6 border-t border-gray-200 grid md:grid-cols-2 gap-8">
                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                                    <Clock className="w-4 h-4 text-orange-500" />
                                                    Morning
                                                </h4>
                                                <p className="text-gray-600">{day.morning}</p>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                                    <Clock className="w-4 h-4 text-orange-500" />
                                                    Afternoon
                                                </h4>
                                                <p className="text-gray-600">{day.afternoon}</p>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                                    <Clock className="w-4 h-4 text-orange-500" />
                                                    Evening
                                                </h4>
                                                <p className="text-gray-600">{day.evening}</p>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <h4 className="font-semibold text-gray-900 mb-3">Trip Details</h4>
                                                <div className="space-y-2 text-sm">
                                                    <div className="flex items-center gap-2">
                                                        <Bed className="w-4 h-4 text-gray-500" />
                                                        <span className="font-medium">Stay:</span> {day.accommodation}
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Utensils className="w-4 h-4 text-gray-500" />
                                                        <span className="font-medium">Meals:</span> {day.meals}
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Car className="w-4 h-4 text-gray-500" />
                                                        <span className="font-medium">Distance:</span> {day.distance}
                                                    </div>
                                                </div>
                                            </div>

                                            {day.specialNotes && (
                                                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
                                                    <p className="text-sm text-orange-800">
                                                        <strong>Special Note:</strong> {day.specialNotes}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <ProgressBar progress={100} className="max-w-md mx-auto mb-4" />
                    <p className="text-gray-600">Complete 7-day adventure itinerary</p>
                </div>
            </div>
        </section>
    );
};
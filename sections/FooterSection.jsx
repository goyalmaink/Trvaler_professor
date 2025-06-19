import { MapPin, Phone, Mail } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div>
                        <div className="text-2xl font-bold mb-4">
                            <span className="text-orange-500">TRAVEL</span> PROFESSOR
                        </div>
                        <p className="text-gray-400 mb-4">
                            Transforming ordinary travelers into passionate explorers through carefully crafted journeys.
                        </p>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                                <span className="text-sm font-bold">f</span>
                            </div>
                            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                                <span className="text-sm font-bold">t</span>
                            </div>
                            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                                <span className="text-sm font-bold">i</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <div className="space-y-2 text-gray-400">
                            <a href="#" className="block hover:text-white transition-colors">About Us</a>
                            <a href="#" className="block hover:text-white transition-colors">Our Destinations</a>
                            <a href="#" className="block hover:text-white transition-colors">Group Tours</a>
                            <a href="#" className="block hover:text-white transition-colors">Custom Packages</a>
                            <a href="#" className="block hover:text-white transition-colors">Travel Blog</a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Support</h3>
                        <div className="space-y-2 text-gray-400">
                            <a href="#" className="block hover:text-white transition-colors">Contact Us</a>
                            <a href="#" className="block hover:text-white transition-colors">FAQs</a>
                            <a href="#" className="block hover:text-white transition-colors">Booking Policy</a>
                            <a href="#" className="block hover:text-white transition-colors">Cancellation</a>
                            <a href="#" className="block hover:text-white transition-colors">Travel Insurance</a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                        <div className="space-y-3 text-gray-400">
                            <div className="flex items-center gap-2">
                                <Phone size={16} />
                                <span>+91 98765 43210</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail size={16} />
                                <span>info@travelprofessor.com</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <MapPin size={16} className="mt-1" />
                                <span>123 Adventure Street,<br />New Delhi, India 110001</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400">
                        © 2025 Travel Professor. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-gray-400 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

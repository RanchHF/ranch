'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import { Phone, Star, Shield, Clock, Award } from 'lucide-react';

// Dados da galeria otimizados com descrições persuasivas
const galleryItems = [
  {
    id: 1,
    category: 'Installation',
    title: 'Premium Dark Hardwood',
    description: 'Luxurious dark hardwood installation with rich, deep tones and flawless finish',
    image: '/images/luxury-living-classic.jpg',
    featured: true,
    location: 'Mission Hills'
  },
  {
    id: 2,
    category: 'Refinishing',
    title: 'Natural Red Oak',
    description: 'Select grade red oak flooring with crystal-clear finish enhancing natural wood grain',
    image: '/images/natural-oak-detail.jpg',
    featured: false,
    location: 'Overland Park'
  },
  {
    id: 3,
    category: 'Custom Design',
    title: 'Modern Gray Hardwood',
    description: 'Contemporary gray-washed hardwood floors creating a bright, modern atmosphere',
    image: '/images/modern-bright-living.jpg',
    featured: true,
    location: 'Leawood'
  },
  {
    id: 4,
    category: 'Installation',
    title: 'Professional Installation',
    description: 'Expert hardwood installation with precision fitting and superior craftsmanship',
    image: '/images/expert-installation-process.jpg',
    featured: false,
    location: 'Kansas City'
  },
  {
    id: 5,
    category: 'Custom Design',
    title: 'Open Space Flooring',
    description: 'Continuous hardwood flooring creating seamless flow throughout open spaces',
    image: '/images/open-concept-kitchen.jpg',
    featured: true,
    location: 'Prairie Village'
  },
  {
    id: 6,
    category: 'Custom Design',
    title: 'Hand-Scraped Prefinished',
    description: 'Elegant prefinished hardwood with hand-scraped texture, adding rich character and depth to the flooring',
    image: '/images/sunlit-living-room.jpg',
    featured: true,
    location: 'Overland Park'
  },
  {
    id: 7,
    category: 'Custom Design',
    title: 'Multi-Room Installation',
    description: 'Seamless hardwood installation flowing perfectly between connected spaces',
    image: '/images/archway-transition.jpg',
    featured: false,
    location: 'Mission Hills'
  }
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const categories = ['All', ...Array.from(new Set(galleryItems.map(item => item.category)))];
  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gallery-hero.jpg"
            alt="Premium Hardwood Floor Transformations"
            fill
            className="object-cover brightness-75"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg text-white">
              Transform Your Space
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-gray-100 font-medium drop-shadow-md">
              View our showcase of premium hardwood floor transformations
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+19136332425"
                className="w-full md:w-auto inline-block bg-green-600 text-white px-10 py-5 rounded-xl text-2xl font-bold hover:bg-green-700 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 text-center mb-2 md:mb-4"
              >
                Get Free Quote Now
              </a>
              {/* Feature blocks - Smaller on mobile */}
              <div className="grid grid-cols-2 gap-1.5 md:flex md:gap-4">
                <div className="bg-black/30 backdrop-blur-sm px-2.5 py-2 md:px-6 md:py-3 rounded-lg">
                  <p className="text-sm md:text-lg font-semibold flex items-center gap-1 md:gap-2 text-white">
                    <span className="text-green-400 text-xs md:text-base">✓</span>
                    Licensed & Insured
                  </p>
                  <p className="text-xs md:text-base text-gray-200">Family Owned</p>
                </div>
                <div className="bg-black/30 backdrop-blur-sm px-2.5 py-2 md:px-6 md:py-3 rounded-lg">
                  <p className="text-sm md:text-lg font-semibold flex items-center gap-1 md:gap-2 text-white">
                    <span className="text-yellow-400 text-xs md:text-base">⚡</span>
                    Fast Service
                  </p>
                  <p className="text-xs md:text-base text-gray-200">Quick Response</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="bg-white py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-gray-600 font-medium">5-Star Rated Service</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="text-gray-600 font-medium">100% Satisfaction Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-600" />
              <span className="text-gray-600 font-medium">Fast Project Completion</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-lg font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-green-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 hover:scale-102'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="relative group cursor-pointer transform transition-all duration-300 hover:-translate-y-1"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="inline-block px-2 py-1 bg-green-600 text-white text-xs rounded-full mb-1">
                        {item.category}
                      </span>
                      <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-200 mb-2 line-clamp-2">{item.description}</p>
                      <div className="flex items-center gap-2 text-xs text-gray-300">
                        <span>📍 {item.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-green-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Transform Your Floors?</h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Get a FREE consultation and estimate today. Plus, receive a special 15% discount on your hardwood floor installation!
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+19136332425"
              className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-5 h-5" />
              <span>Schedule Your Free Consultation</span>
            </a>
            <p className="text-sm text-gray-100">
              ⚡ Limited Time Offer • No Obligation • Quick Response
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 
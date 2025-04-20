'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Clock, Search, ArrowRight } from 'lucide-react';

// Blog categories optimized for SEO and conversion
const categories = [
  { id: 'maintenance', name: 'Maintenance', icon: '🔧' },
  { id: 'repairs', name: 'Repairs', icon: '🛠️' },
  { id: 'installation', name: 'Installation', icon: '📋' },
  { id: 'tips', name: 'Tips & Care', icon: '💡' },
];

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  featured?: boolean;
  slug?: string;
  readTime?: string;
}

// Blog posts with strategic content
const blogPosts: BlogPost[] = [
  {
    id: 'how-to-clean-hardwood-floors',
    title: 'How to Clean Hardwood Floors Properly',
    excerpt: 'Learn the best practices for maintaining your hardwood floors and keeping them beautiful for years to come.',
    image: '/images/blog/floor-cleaning.jpg',
    category: 'Maintenance',
    date: 'April 15, 2024',
    featured: true,
    slug: 'how-to-clean-hardwood-floors',
    readTime: '5 min read'
  },
  {
    id: 'signs-floor-needs-refinishing',
    title: 'Signs Your Floor Needs Refinishing',
    excerpt: 'Discover the key indicators that suggest it\'s time to refinish your hardwood floors.',
    image: '/images/blog/refinishing-signs.jpg',
    category: 'Repairs',
    date: 'April 16, 2024',
    featured: true,
    slug: 'signs-floor-needs-refinishing',
    readTime: '4 min read'
  },
  {
    id: 'why-hire-professional-installation',
    title: 'Why Hire a Professional for Floor Installation',
    excerpt: 'Understanding the importance of professional installation for your hardwood floors.',
    image: '/images/blog/professional-install.jpg',
    category: 'Installation',
    date: 'April 18, 2024',
    slug: 'why-hire-professional-installation',
    readTime: '6 min read'
  },
  {
    id: '5-common-maintenance-mistakes',
    title: '5 Common Mistakes in Hardwood Floor Maintenance',
    excerpt: 'Avoid these common mistakes that can damage your hardwood floors.',
    image: '/images/blog/common-mistakes.jpg',
    category: 'Tips',
    date: 'April 19, 2024',
    slug: '5-common-maintenance-mistakes',
    readTime: '4 min read'
  },
  {
    id: 'choosing-wood-type',
    title: 'How to Choose the Best Wood Type for Your Floor',
    excerpt: 'A comprehensive guide to selecting the perfect wood type for your home.',
    image: '/images/blog/wood-types.jpg',
    category: 'Tips',
    date: 'April 20, 2024',
    slug: 'choosing-wood-type',
    readTime: '7 min read'
  }
];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Separate featured and regular posts
  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Hardwood Floor Expert Blog
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Professional tips, maintenance guides, and essential information for your hardwood floors
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl relative">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 rounded-lg text-gray-800 bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <Search className="absolute right-4 top-4 text-gray-400" />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-2 rounded-full text-lg font-medium transition-all duration-300 ${
                activeCategory === 'all'
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full text-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category.id
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span>{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Featured Posts</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.id}>
                  <article className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="relative h-64">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-4">
                        {categories.find(cat => cat.id === post.category)?.name}
                      </span>
                      <h3 className="text-2xl font-bold mb-3 text-gray-800">{post.title}</h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </span>
                        <span className="text-green-600 font-medium flex items-center gap-1">
                          Read more <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.id}>
                <article className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-4">
                      {categories.find(cat => cat.id === post.category)?.name}
                    </span>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">{post.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </span>
                      <span className="text-green-600 font-medium flex items-center gap-1">
                        Read more <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Need Professional Help?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Our experts are ready to help with any hardwood flooring service.
            Contact us for a free consultation!
          </p>
          <a
            href="tel:+19136332425"
            className="inline-flex items-center gap-2 bg-white text-green-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <Phone className="w-5 h-5" />
            <span>Schedule Free Consultation</span>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
} 
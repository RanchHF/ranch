'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Check, Zap, X } from 'lucide-react';

export default function PopupPromo() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-8 md:right-auto md:w-[400px] bg-white rounded-2xl shadow-2xl p-6 z-50">
      {/* Close Button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-2 right-2 p-2 text-gray-400 hover:text-gray-600 transition-colors"
        aria-label="Close promotion"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Header */}
      <div className="text-center mb-4">
        <Link 
          href="/quote"
          className="block w-full bg-green-500 hover:bg-green-600 text-white text-lg md:text-xl font-semibold py-3 px-6 rounded-xl mb-4 transition-colors"
        >
          Get Free Quote Now
        </Link>
      </div>

      {/* Features */}
      <div className="space-y-3 mb-4">
        <div className="flex items-center gap-2">
          <Check className="w-5 h-5 text-green-500" />
          <span className="text-gray-700">Licensed & Insured</span>
        </div>
        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-green-500" />
          <span className="text-gray-700">Fast Service</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          Premium Hardwood Floor Services
        </h2>
        <p className="text-gray-600 mb-4">
          Elevating Homes with Timeless Elegance
        </p>
        <Link
          href="/services#installation"
          className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg transition-colors"
        >
          Installation
        </Link>
      </div>

      {/* CTA */}
      <div className="mt-4">
        <Link
          href="/contact"
          className="block w-full bg-green-100 hover:bg-green-200 text-green-700 text-center py-3 rounded-xl font-medium transition-colors"
        >
          Claim Offer Now
        </Link>
      </div>
    </div>
  );
} 
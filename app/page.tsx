import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Image from 'next/image';
import { Phone } from 'lucide-react';

export default function Home() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-hardwood.jpg"
            alt="Beautiful hardwood floor installation"
            fill
            className="object-cover brightness-75"
            priority
            quality={100}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
              Transform Your Space With Premium Hardwood Floors
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-gray-100 font-medium drop-shadow-md">
              Expert installation, refinishing, and restoration with our 100% Satisfaction Guarantee
            </p>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <a
                href="tel:+19136332425"
                className="w-full md:w-auto inline-block bg-green-600 text-white px-10 py-5 rounded-xl text-2xl font-bold hover:bg-green-700 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 text-center"
              >
                Get Free Quote Now
              </a>
              <div className="flex items-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
                  <p className="text-lg font-semibold">✓ Licensed & Insured</p>
                  <p className="text-sm">Family Owned</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
                  <p className="text-lg font-semibold">⚡ Fast Service</p>
                  <p className="text-sm">Quick Response</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Responsive Title */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          {/* Services Title - Now responsive */}
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <div className="bg-white rounded-xl shadow-lg py-8 px-6">
              <span className="text-green-600 font-semibold block mb-2">Our Expertise</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                Premium Hardwood Floor Services
              </h2>
              <p className="text-gray-600">
                Elevating Homes with Timeless Elegance
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {/* Unfinished Hardwood */}
              <div className="flex flex-col items-center">
                <div className="relative w-full h-[250px] rounded-lg overflow-hidden group">
                  <Image
                    src="/images/unfinished-hardwood-new.jpg"
                    alt="Unfinished Hardwood Installation"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-center">
                      We Install Unfinished Hardwood Floors That Let You Choose the Perfect Stain & Finish
                    </p>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 bg-black/60 p-4">
                    <h4 className="text-lg font-bold text-white flex items-center justify-center">
                      <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span>
                      Unfinished Hardwood
                    </h4>
                  </div>
                </div>
              </div>

              {/* Prefinished Hardwood */}
              <div className="flex flex-col items-center">
                <div className="relative w-full h-[250px] rounded-lg overflow-hidden group">
                  <Image
                    src="/images/prefinished-hardwood.jpg"
                    alt="Prefinished Hardwood Installation"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-center">
                      Quick installation with factory finish
                    </p>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 bg-black/60 p-4">
                    <h4 className="text-lg font-bold text-white flex items-center justify-center">
                      <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span>
                      Prefinished Hardwood
                    </h4>
                  </div>
                </div>
              </div>

              {/* Custom Designs */}
              <div className="flex flex-col items-center">
                <div className="relative w-full h-[250px] rounded-lg overflow-hidden group">
                  <Image
                    src="/images/custom-designs.jpg"
                    alt="Custom Hardwood Designs"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-center">
                      Unique patterns and personalized designs
                    </p>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 bg-black/60 p-4">
                    <h4 className="text-lg font-bold text-white flex items-center justify-center">
                      <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span>
                      Custom Designs
                    </h4>
                  </div>
                </div>
              </div>

              {/* Staircases */}
              <div className="flex flex-col items-center">
                <div className="relative w-full h-[250px] rounded-lg overflow-hidden group">
                  <Image
                    src="/images/staircases.jpg"
                    alt="Hardwood Staircase Installation"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-center">
                      Custom staircases with matching elements
                    </p>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 bg-black/60 p-4">
                    <h4 className="text-lg font-bold text-white flex items-center justify-center">
                      <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span>
                      Staircases
                    </h4>
                  </div>
                </div>
              </div>

              {/* Dustless Refinishing */}
              <div className="flex flex-col items-center">
                <div className="relative w-full h-[250px] rounded-lg overflow-hidden group">
                  <Image
                    src="/images/dustless-refinishing.jpg"
                    alt="Dustless Floor Refinishing"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-center">
                      Clean process with minimal disruption
                    </p>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 bg-black/60 p-4">
                    <h4 className="text-lg font-bold text-white flex items-center justify-center">
                      <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span>
                      Dustless Refinishing
                    </h4>
                  </div>
                </div>
              </div>

              {/* Floor Recoating */}
              <div className="flex flex-col items-center">
                <div className="relative w-full h-[250px] rounded-lg overflow-hidden group">
                  <Image
                    src="/images/floor-recoating.jpg"
                    alt="Floor Recoating Service"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-center">
                      Protect and refresh your floors
                    </p>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 bg-black/60 p-4">
                    <h4 className="text-lg font-bold text-white flex items-center justify-center">
                      <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span>
                      Floor Recoating
                    </h4>
                  </div>
                </div>
              </div>

              {/* Repair & Restoration */}
              <div className="flex flex-col items-center">
                <div className="relative w-full h-[250px] rounded-lg overflow-hidden group">
                  <Image
                    src="/images/repair-restoration.jpg"
                    alt="Floor Repair and Restoration"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-center">
                      Expert repair of damaged floors
                    </p>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 bg-black/60 p-4">
                    <h4 className="text-lg font-bold text-white flex items-center justify-center">
                      <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span>
                      Repair & Restoration
                    </h4>
                  </div>
                </div>
              </div>

              {/* Water Damage Recovery */}
              <div className="flex flex-col items-center">
                <div className="relative w-full h-[250px] rounded-lg overflow-hidden group">
                  <Image
                    src="/images/water-damage.jpg"
                    alt="Water Damage Recovery"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-center">
                      Specialized water damage restoration
                    </p>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 bg-black/60 p-4">
                    <h4 className="text-lg font-bold text-white flex items-center justify-center">
                      <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span>
                      Water Damage Recovery
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-green-600 font-semibold">What Our Clients Say</span>
            <h2 className="text-3xl font-bold mt-2">Trusted by Homeowners Across Kansas City</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[1,2,3,4,5].map((star) => (
                    <svg key={star} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">"Outstanding service! They transformed our old, worn-out floors into beautiful hardwood that looks brand new. Highly recommend!"</p>
              <div className="font-semibold">Sarah M.</div>
              <div className="text-sm text-gray-500">Overland Park, KS</div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[1,2,3,4,5].map((star) => (
                    <svg key={star} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">"Professional team, excellent craftsmanship. They completed the job on time and left everything spotless. Worth every penny!"</p>
              <div className="font-semibold">Mike R.</div>
              <div className="text-sm text-gray-500">Kansas City, MO</div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[1,2,3,4,5].map((star) => (
                    <svg key={star} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">"Best decision we made for our home renovation. The custom design they created exceeded our expectations!"</p>
              <div className="font-semibold">Jennifer L.</div>
              <div className="text-sm text-gray-500">Leawood, KS</div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">100% Satisfaction Guarantee</h3>
              <p className="text-gray-600">We're not happy until you're completely satisfied with our work</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">On-Time Completion</h3>
              <p className="text-gray-600">We respect your time and stick to our project timelines</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Best Price Guarantee</h3>
              <p className="text-gray-600">Competitive pricing with no compromise on quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <span className="text-green-600 font-semibold">Limited Time Offer</span>
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Space?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get 15% off your hardwood floor installation when you schedule this month. Contact Ranch Hardwood Floors LLC today for a free consultation and quote.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+19136332425"
              className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors duration-200 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              <span>Get Your Free Quote</span>
            </a>
            <p className="text-sm text-gray-500">
              ⚡ Fast Response • Free Estimates • No Obligation
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 
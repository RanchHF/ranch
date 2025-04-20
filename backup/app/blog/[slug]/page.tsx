'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Clock, ArrowLeft, Share2 } from 'lucide-react';

// Blog posts database
const blogPostsData = {
  'how-to-clean-hardwood-floors': {
    title: 'How to Clean Hardwood Floors Properly',
    date: 'April 15, 2024',
    readTime: '5 min',
    category: 'Maintenance',
    heroImage: '/images/blog/floor-cleaning.jpg',
    content: `
      <h2>The Importance of Proper Cleaning</h2>
      <p>Keeping your hardwood floor clean isn't just about aesthetics—it's about preservation. A well-maintained floor can last for decades, while improper cleaning practices can cause irreversible damage.</p>

      <h3>Products to Avoid</h3>
      <ul>
        <li>Excess water or steam</li>
        <li>Harsh chemical cleaners</li>
        <li>Vinegar or acidic products</li>
        <li>Non-specific wood waxes</li>
      </ul>

      <h3>Recommended Practices</h3>
      <p>To keep your floor in great condition, follow these basic guidelines:</p>
      <ol>
        <li>Vacuum or sweep daily to remove dust and debris</li>
        <li>Use a slightly damp cloth for deeper cleaning</li>
        <li>Clean spills immediately</li>
        <li>Use products specifically designed for hardwood floors</li>
      </ol>

      <div class="warning-box">
        <h4>Warning!</h4>
        <p>If you notice deep scratches, persistent stains, or excessive wear, it's time to consult a professional. Attempting to fix these issues without experience can make them worse.</p>
      </div>

      <h2>Preventive Maintenance</h2>
      <p>The best way to keep your floor beautiful is to prevent damage. Here are some important tips:</p>
      <ul>
        <li>Use felt pads under furniture</li>
        <li>Implement a "no shoes" policy at home</li>
        <li>Place mats at entrances</li>
        <li>Keep pet nails trimmed</li>
      </ul>
    `,
    relatedPosts: ['signs-floor-needs-refinishing', '5-common-maintenance-mistakes']
  },
  'signs-floor-needs-refinishing': {
    title: 'Signs Your Floor Needs Refinishing',
    date: 'April 16, 2024',
    readTime: '7 min',
    category: 'Repairs',
    heroImage: '/images/blog/refinishing-signs.jpg',
    content: `
      <h2>When to Refinish Your Hardwood Floors</h2>
      <p>Recognizing the signs that your hardwood floors need refinishing is crucial for maintaining their beauty and value. Here are the key indicators to watch for.</p>

      <h3>Visual Signs</h3>
      <ul>
        <li>Gray or dull areas where finish has worn away</li>
        <li>Deep scratches that penetrate the wood</li>
        <li>Significant color fading in high-traffic areas</li>
        <li>Water stains or sun damage</li>
      </ul>

      <h3>Physical Signs</h3>
      <p>Test your floor's condition with these simple checks:</p>
      <ol>
        <li>The water test: If water beads up, your finish is intact</li>
        <li>Check for splinters or rough spots</li>
        <li>Look for gaps between boards</li>
        <li>Notice if cleaning no longer restores shine</li>
      </ol>
    `,
    relatedPosts: ['how-to-clean-hardwood-floors', 'why-hire-professional-installation']
  },
  'why-hire-professional-installation': {
    title: 'Why Hire a Professional for Floor Installation',
    date: 'April 18, 2024',
    readTime: '6 min',
    category: 'Installation',
    heroImage: '/images/blog/professional-install.jpg',
    content: `
      <h2>The Value of Professional Installation</h2>
      <p>While DIY projects can be rewarding, hardwood floor installation requires specific expertise and tools. Learn why professional installation is crucial for long-term satisfaction.</p>

      <h3>Expert Knowledge</h3>
      <ul>
        <li>Proper subfloor preparation</li>
        <li>Moisture testing and control</li>
        <li>Precise measurements and cuts</li>
        <li>Professional-grade tools and equipment</li>
      </ul>

      <h3>Long-term Benefits</h3>
      <p>Professional installation ensures:</p>
      <ol>
        <li>Proper acclimation of materials</li>
        <li>Correct expansion gaps</li>
        <li>Expert finishing techniques</li>
        <li>Valid warranty protection</li>
      </ol>
    `,
    relatedPosts: ['signs-floor-needs-refinishing', 'choosing-wood-type']
  },
  '5-common-maintenance-mistakes': {
    title: '5 Common Mistakes in Hardwood Floor Maintenance',
    date: 'April 19, 2024',
    readTime: '4 min',
    category: 'Tips',
    heroImage: '/images/blog/common-mistakes.jpg',
    content: `
      <h2>Common Mistakes to Avoid</h2>
      <p>Many homeowners unknowingly damage their hardwood floors through improper maintenance. Learn about these common mistakes and how to avoid them.</p>

      <h3>Top 5 Mistakes</h3>
      <ul>
        <li>Using too much water when cleaning</li>
        <li>Neglecting regular maintenance</li>
        <li>Using wrong cleaning products</li>
        <li>Dragging furniture</li>
        <li>Ignoring scratches and dents</li>
      </ul>

      <h3>Prevention Tips</h3>
      <p>Here's how to avoid these common mistakes:</p>
      <ol>
        <li>Use proper cleaning techniques</li>
        <li>Establish a regular maintenance schedule</li>
        <li>Choose the right cleaning products</li>
        <li>Use furniture pads</li>
        <li>Address damage promptly</li>
      </ol>
    `,
    relatedPosts: ['how-to-clean-hardwood-floors', 'signs-floor-needs-refinishing']
  },
  'choosing-wood-type': {
    title: 'How to Choose the Best Wood Type for Your Floor',
    date: 'April 20, 2024',
    readTime: '9 min',
    category: 'Tips',
    heroImage: '/images/blog/wood-types.jpg',
    content: `
      <h2>Selecting the Perfect Wood Type</h2>
      <p>Choosing the right wood type is crucial for long-term satisfaction with your hardwood floors. Consider these factors when making your decision.</p>

      <h3>Popular Wood Types</h3>
      <ul>
        <li>Oak (Red and White)</li>
        <li>Maple</li>
        <li>Cherry</li>
        <li>Walnut</li>
        <li>Hickory</li>
      </ul>

      <h3>Factors to Consider</h3>
      <p>Make your decision based on:</p>
      <ol>
        <li>Traffic levels in your space</li>
        <li>Local climate conditions</li>
        <li>Design preferences</li>
        <li>Budget constraints</li>
        <li>Maintenance requirements</li>
      </ol>
    `,
    relatedPosts: ['why-hire-professional-installation', 'signs-floor-needs-refinishing']
  }
} as const;

type BlogPostSlug = keyof typeof blogPostsData;

interface RelatedPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  slug: string;
}

// Get post by slug
const getPostBySlug = (slug: BlogPostSlug) => {
  const post = blogPostsData[slug];
  if (!post) return null;

  // Get related posts data
  const relatedPosts = post.relatedPosts
    .map(relatedSlug => {
      const relatedPost = blogPostsData[relatedSlug as BlogPostSlug];
      if (!relatedPost) return null;
      
      return {
        id: relatedSlug,
        title: relatedPost.title,
        excerpt: relatedPost.content.split('</p>')[0].replace(/<[^>]+>/g, '').slice(0, 120) + '...',
        image: relatedPost.heroImage,
        slug: relatedSlug
      };
    })
    .filter((post): post is NonNullable<typeof post> => post !== null);

  return {
    ...post,
    relatedPosts
  };
};

export default function BlogPost({ params }: { params: { slug: BlogPostSlug } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The post you're looking for doesn't exist or has been moved.</p>
          <Link
            href="/blog"
            className="inline-flex items-center text-green-600 hover:text-green-700"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Blog
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px]">
        <Image
          src={post.heroImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-white mb-4 hover:text-green-400 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Blog
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-gray-200">
              <span>{post.date}</span>
              <span>•</span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {post.readTime} read
              </span>
              <span>•</span>
              <span>{post.category}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Share Button */}
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: post.title,
                    url: window.location.href,
                  });
                }
              }}
              className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
            >
              <Share2 className="w-4 h-4" />
              Share
            </button>

            {/* Article Content */}
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* CTA Box */}
            <div className="my-12 bg-green-50 border border-green-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Need Professional Help?
              </h3>
              <p className="text-gray-600 mb-6">
                Our experts can help with any hardwood floor issue.
                Schedule a free consultation today!
              </p>
              <a
                href="tel:+19136332425"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                <Phone className="w-5 h-5" />
                <span>Talk to an Expert</span>
              </a>
            </div>

            {/* Related Posts */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {post.relatedPosts.map((relatedPost) => (
                  <Link href={`/blog/${relatedPost.slug}`} key={relatedPost.id}>
                    <article className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                      <div className="relative h-48">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-gray-800">
                          {relatedPost.title}
                        </h3>
                        <p className="text-gray-600">{relatedPost.excerpt}</p>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
} 
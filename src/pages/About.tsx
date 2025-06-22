
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Heart, Star, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-rose-50 to-pink-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-6">
              Our Story
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Belle Bows was born from a passion for creating beautiful, high-quality 
              hair accessories that make every woman feel confident and elegant.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                  Crafted with Love
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Every Belle Bows accessory begins with carefully selected premium materials. 
                  From luxurious silk to soft velvet, we source only the finest fabrics to 
                  ensure our scrunchies and bows not only look beautiful but feel amazing too.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our design process combines timeless elegance with contemporary trends, 
                  creating pieces that complement any style - from casual everyday looks 
                  to special occasion glamour.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We believe that the little details matter, which is why each accessory 
                  is handcrafted with attention to every stitch, ensuring you receive 
                  a product that's as unique as you are.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=600&h=500&fit=crop&crop=center"
                  alt="Craftsmanship"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif font-bold text-gray-900 text-center mb-12">
              What We Stand For
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-rose-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality First</h3>
                <p className="text-gray-600">
                  We never compromise on quality. Every piece is made with premium materials 
                  and undergoes strict quality checks before reaching you.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-rose-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Unique Designs</h3>
                <p className="text-gray-600">
                  Our in-house design team creates original patterns and styles that you 
                  won't find anywhere else, making each piece truly special.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-rose-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Customer Love</h3>
                <p className="text-gray-600">
                  Your satisfaction is our priority. We're here to help you find the perfect 
                  accessory and ensure you're delighted with every purchase.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We'd love to hear from you! Whether you have questions about our products 
              or just want to say hello, don't hesitate to reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-rose-600 text-white px-8 py-3 rounded-full font-medium hover:bg-rose-700 transition-colors">
                Contact Us
              </button>
              <button className="border-2 border-rose-600 text-rose-600 px-8 py-3 rounded-full font-medium hover:bg-rose-600 hover:text-white transition-colors">
                Follow on Instagram
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;

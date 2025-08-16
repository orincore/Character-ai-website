import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Download, 
  Mail, 
  Shield, 
  Zap, 
  Users, 
  Star,
  ChevronRight,
  Smartphone,
  Globe,
  Lock
} from 'lucide-react';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-indigo-600" />,
      title: "Secure & Private",
      description: "Enterprise-grade security with end-to-end encryption"
    },
    {
      icon: <Zap className="w-6 h-6 text-indigo-600" />,
      title: "Lightning Fast",
      description: "Optimized performance for seamless user experience"
    },
    {
      icon: <Users className="w-6 h-6 text-indigo-600" />,
      title: "Team Collaboration",
      description: "Work together seamlessly with real-time sync"
    },
    {
      icon: <Globe className="w-6 h-6 text-indigo-600" />,
      title: "Cross-Platform",
      description: "Available on all your devices, everywhere you go"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      content: "Orincore's app has revolutionized how our team collaborates. The intuitive design and powerful features make it indispensable.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Startup Founder",
      content: "The security features and performance are exceptional. It's exactly what we needed for our growing business.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Designer",
      content: "Beautiful interface, smooth performance, and excellent customer support. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Orincore Technologies - Innovative Mobile Solutions</title>
        <meta name="description" content="Led by CEO Adarsh Suradkar, Orincore Technologies delivers cutting-edge mobile applications with exceptional user experiences. Download our app today." />
        <meta name="keywords" content="mobile app, technology, innovation, Adarsh Suradkar, Orincore" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-white to-violet-50 pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              The Future of
              <span className="block bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Mobile Innovation
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              Experience the next generation of mobile technology with Orincore's revolutionary app. 
              Designed for efficiency, built for the future.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up animation-delay-400">
              <Link
                to="/download"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                <Download className="w-5 h-5 mr-2" />
                Download on Play Store
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-xl hover:bg-indigo-600 hover:text-white transition-all duration-200"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Us
              </Link>
            </div>

            {/* App Mockup */}
            <div className="relative max-w-md mx-auto animate-fade-in-up animation-delay-600">
              <div className="bg-gray-900 rounded-3xl p-2 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-2xl overflow-hidden">
                  <div className="bg-indigo-600 h-24 flex items-center justify-center">
                    <Smartphone className="w-12 h-12 text-white" />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="h-4 bg-gray-200 rounded-full"></div>
                    <div className="h-4 bg-gray-200 rounded-full w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded-full w-1/2"></div>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="h-20 bg-gradient-to-br from-indigo-100 to-violet-100 rounded-lg"></div>
                      <div className="h-20 bg-gradient-to-br from-violet-100 to-pink-100 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features Built for You
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what makes our app the preferred choice for thousands of users worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-indigo-50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/features"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold transition-colors"
            >
              View All Features
              <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-violet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-xl text-gray-600">
              See what our users are saying about their experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-violet-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            Join thousands of satisfied users and experience the future of mobile technology today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/download"
              className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Now
            </Link>
            <Link
              to="/features"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-indigo-600 transition-all duration-200"
            >
              Learn More
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
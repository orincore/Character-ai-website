import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Smartphone, Download, QrCode, Star, Shield, Zap, Users } from 'lucide-react';

const AppDownloadPage: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-indigo-600" />,
      title: "Secure & Private",
      description: "Your data is protected with enterprise-grade security"
    },
    {
      icon: <Zap className="w-6 h-6 text-violet-600" />,
      title: "Lightning Fast",
      description: "Optimized performance for seamless experience"
    },
    {
      icon: <Users className="w-6 h-6 text-purple-600" />,
      title: "Team Collaboration",
      description: "Work together with real-time synchronization"
    }
  ];

  const requirements = [
    "Android 7.0 (API level 24) or higher",
    "2GB RAM minimum (4GB recommended)",
    "100MB available storage space",
    "Internet connection for sync features"
  ];

  return (
    <>
      <Helmet>
        <title>Download App - Orincore Technologies | Get Our Mobile App</title>
        <meta name="description" content="Download the Orincore Technologies mobile app from Google Play Store. Get secure, fast, and collaborative mobile experience on your Android device." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-violet-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Download Our App
                <span className="block bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  Available Now
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Experience the power of our mobile application. Download now from Google Play Store 
                and join thousands of satisfied users worldwide.
              </p>
              
              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <Download className="w-6 h-6 mr-3" />
                  <div className="text-left">
                    <div className="text-xs text-indigo-100">Get it on</div>
                    <div className="text-lg font-bold">Google Play</div>
                  </div>
                </a>
                
                <div className="flex items-center justify-center sm:justify-start">
                  <div className="flex items-center text-yellow-500 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm">4.8 out of 5 stars</span>
                </div>
              </div>

              {/* App Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600">500K+</div>
                  <div className="text-sm text-gray-600">Downloads</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-violet-600">4.8</div>
                  <div className="text-sm text-gray-600">Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">100K+</div>
                  <div className="text-sm text-gray-600">Reviews</div>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Phone Mockup */}
              <div className="relative max-w-sm mx-auto">
                <div className="bg-gray-900 rounded-3xl p-3 shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-white rounded-2xl overflow-hidden">
                    {/* Status Bar */}
                    <div className="bg-gray-900 px-4 py-2 flex justify-between items-center">
                      <span className="text-white text-xs">9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-4 h-2 bg-white rounded-sm opacity-60"></div>
                        <div className="w-4 h-2 bg-white rounded-sm opacity-80"></div>
                        <div className="w-4 h-2 bg-white rounded-sm"></div>
                      </div>
                    </div>
                    
                    {/* App Header */}
                    <div className="bg-gradient-to-r from-indigo-600 to-violet-600 p-6 text-white">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3">
                          <Smartphone className="w-6 h-6 text-indigo-600" />
                        </div>
                        <div>
                          <div className="font-bold">Orincore</div>
                          <div className="text-xs text-indigo-100">Technologies</div>
                        </div>
                      </div>
                      <div className="text-lg font-semibold">Welcome back!</div>
                      <div className="text-sm text-indigo-100">Ready to be productive?</div>
                    </div>
                    
                    {/* App Content */}
                    <div className="p-6 space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="h-20 bg-gradient-to-br from-indigo-100 to-violet-100 rounded-lg p-3">
                          <div className="w-6 h-6 bg-indigo-500 rounded mb-2"></div>
                          <div className="text-xs font-medium text-gray-700">Quick Action</div>
                        </div>
                        <div className="h-20 bg-gradient-to-br from-violet-100 to-purple-100 rounded-lg p-3">
                          <div className="w-6 h-6 bg-violet-500 rounded mb-2"></div>
                          <div className="text-xs font-medium text-gray-700">Analytics</div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="h-4 bg-gray-200 rounded-full"></div>
                        <div className="h-4 bg-gray-200 rounded-full w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded-full w-1/2"></div>
                      </div>
                      
                      <div className="flex justify-center pt-4">
                        <div className="w-16 h-1 bg-gray-300 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QR Code Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Quick Install with QR Code</h2>
          <p className="text-xl text-gray-600 mb-8">
            Scan the QR code with your phone's camera to go directly to the app store
          </p>
          
          <div className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-3xl p-8 inline-block">
            <div className="w-48 h-48 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4">
              <QrCode className="w-32 h-32 text-gray-400" />
            </div>
            <p className="text-gray-600 text-sm">QR Code for Google Play Store</p>
          </div>
          
          <p className="text-gray-500 text-sm mt-6">
            Open your camera app and point it at the QR code above
          </p>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Download Our App?</h2>
            <p className="text-xl text-gray-600">Discover the features that make our app special</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-violet-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">System Requirements</h2>
              <p className="text-lg text-gray-600 mb-8">
                Make sure your device meets these requirements for the best experience:
              </p>
              
              <ul className="space-y-4">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    </div>
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-3xl p-8">
              <div className="text-center mb-6">
                <Smartphone className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900">Compatible Devices</h3>
              </div>
              
              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Phones:</span>
                  <span className="font-medium text-gray-900">✓ Supported</span>
                </div>
                <div className="flex justify-between">
                  <span>Tablets:</span>
                  <span className="font-medium text-gray-900">✓ Supported</span>
                </div>
                <div className="flex justify-between">
                  <span>Android TV:</span>
                  <span className="text-gray-500">Coming Soon</span>
                </div>
                <div className="flex justify-between">
                  <span>Wear OS:</span>
                  <span className="text-gray-500">Coming Soon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews & Testimonials */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Users Are Saying</h2>
            <p className="text-xl text-gray-600">Join thousands of satisfied users</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600 text-sm">5/5</span>
              </div>
              <p className="text-gray-600 italic mb-4">
                "This app has completely transformed how I work. The interface is intuitive and the features are exactly what I needed."
              </p>
              <div>
                <div className="font-semibold text-gray-900">Sarah M.</div>
                <div className="text-gray-500 text-sm">Product Manager</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600 text-sm">5/5</span>
              </div>
              <p className="text-gray-600 italic mb-4">
                "Excellent security features and lightning-fast performance. Highly recommended for business use."
              </p>
              <div>
                <div className="font-semibold text-gray-900">Michael R.</div>
                <div className="text-gray-500 text-sm">IT Director</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600 text-sm">5/5</span>
              </div>
              <p className="text-gray-600 italic mb-4">
                "Love the team collaboration features. It's made working with my remote team so much easier."
              </p>
              <div>
                <div className="font-semibold text-gray-900">Emily L.</div>
                <div className="text-gray-500 text-sm">Design Lead</div>
              </div>
            </div>
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
            Download our app today and experience the future of mobile productivity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              <Download className="w-6 h-6 mr-3" />
              <div className="text-left">
                <div className="text-xs text-indigo-400">Get it on</div>
                <div className="text-lg font-bold">Google Play</div>
              </div>
            </a>
            
            <a
              href="/features"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-indigo-600 transition-all duration-200"
            >
              Learn More About Features
            </a>
          </div>
          
          <p className="text-indigo-200 text-sm mt-6">
            Free to download • No credit card required • Available worldwide
          </p>
        </div>
      </section>
    </>
  );
};

export default AppDownloadPage;
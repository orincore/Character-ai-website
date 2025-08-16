import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Shield, 
  Zap, 
  Users, 
  Globe, 
  Lock, 
  Smartphone,
  Cloud,
  BarChart,
  MessageSquare,
  Settings,
  Bell,
  FileText,
  Calendar,
  Search,
  Share2,
  Palette,
  Clock,
  Check
} from 'lucide-react';

const FeaturesPage: React.FC = () => {
  const mainFeatures = [
    {
      icon: <Shield className="w-8 h-8 text-indigo-600" />,
      title: "Advanced Security",
      description: "End-to-end encryption and enterprise-grade security protocols protect your data",
      benefits: ["256-bit encryption", "Biometric authentication", "Secure cloud storage", "Privacy controls"]
    },
    {
      icon: <Zap className="w-8 h-8 text-violet-600" />,
      title: "Lightning Performance",
      description: "Optimized for speed with intelligent caching and efficient resource management",
      benefits: ["Sub-second loading times", "Offline functionality", "Smart caching", "Battery optimization"]
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Team Collaboration",
      description: "Seamless real-time collaboration with advanced sharing and communication tools",
      benefits: ["Real-time sync", "Team workspaces", "Comment system", "Version history"]
    },
    {
      icon: <Globe className="w-8 h-8 text-pink-600" />,
      title: "Cross-Platform Sync",
      description: "Access your data anywhere, anytime across all your devices with perfect sync",
      benefits: ["Universal access", "Auto-sync", "Multi-device support", "Cloud backup"]
    }
  ];

  const additionalFeatures = [
    { icon: <Cloud className="w-6 h-6" />, title: "Cloud Integration", desc: "Seamless cloud storage and backup" },
    { icon: <BarChart className="w-6 h-6" />, title: "Analytics Dashboard", desc: "Comprehensive insights and metrics" },
    { icon: <MessageSquare className="w-6 h-6" />, title: "In-App Messaging", desc: "Built-in communication system" },
    { icon: <Settings className="w-6 h-6" />, title: "Customizable Settings", desc: "Personalize your experience" },
    { icon: <Bell className="w-6 h-6" />, title: "Smart Notifications", desc: "Intelligent alerts and reminders" },
    { icon: <FileText className="w-6 h-6" />, title: "Document Management", desc: "Organize and manage files easily" },
    { icon: <Calendar className="w-6 h-6" />, title: "Calendar Integration", desc: "Sync with your existing calendar" },
    { icon: <Search className="w-6 h-6" />, title: "Powerful Search", desc: "Find anything instantly" },
    { icon: <Share2 className="w-6 h-6" />, title: "Easy Sharing", desc: "Share content with one tap" },
    { icon: <Palette className="w-6 h-6" />, title: "Custom Themes", desc: "Personalize your interface" },
    { icon: <Lock className="w-6 h-6" />, title: "Privacy Controls", desc: "Granular privacy settings" },
    { icon: <Clock className="w-6 h-6" />, title: "Time Tracking", desc: "Monitor usage and productivity" }
  ];

  const upcomingFeatures = [
    {
      title: "AI-Powered Assistant",
      description: "Intelligent automation and smart suggestions powered by machine learning",
      timeline: "Q2 2025",
      status: "In Development"
    },
    {
      title: "Advanced API Integration",
      description: "Connect with hundreds of third-party services and applications",
      timeline: "Q3 2025",
      status: "Planned"
    },
    {
      title: "Enhanced Mobile Experience",
      description: "Native mobile optimizations and gesture-based navigation",
      timeline: "Q4 2025",
      status: "Planned"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Features - Orincore Technologies | Powerful Mobile App Features</title>
        <meta name="description" content="Discover the powerful features of Orincore's mobile app including advanced security, lightning performance, team collaboration, and cross-platform sync." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-violet-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Powerful Features for 
              <span className="block bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Modern Users
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover the comprehensive set of features designed to enhance your productivity, 
              security, and collaboration experience.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {mainFeatures.map((feature, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-violet-100 rounded-2xl flex items-center justify-center mr-4">
                      {feature.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{feature.title}</h2>
                  </div>
                  <p className="text-lg text-gray-600 mb-8">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-700">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-3xl p-8">
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <div className="h-40 bg-gradient-to-br from-indigo-100 to-violet-100 rounded-lg mb-4 flex items-center justify-center">
                        <div className="text-4xl text-indigo-600">
                          {feature.icon}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-4 bg-gray-200 rounded-full"></div>
                        <div className="h-4 bg-gray-200 rounded-full w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded-full w-1/2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Even More Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive suite of tools designed to meet all your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-violet-100 rounded-xl flex items-center justify-center mb-4">
                  <div className="text-indigo-600">{feature.icon}</div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Coming Soon
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Exciting new features currently in development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingFeatures.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    feature.status === 'In Development' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {feature.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="flex items-center text-sm text-indigo-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  Expected: {feature.timeline}
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
            Experience These Features Today
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            Download our app and discover how these powerful features can transform your workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              <Smartphone className="w-5 h-5 mr-2" />
              Download Now
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-indigo-600 transition-all duration-200"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesPage;
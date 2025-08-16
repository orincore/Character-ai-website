import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Plus, Minus, MessageCircle, Mail, Phone, Book, Video } from 'lucide-react';

const SupportPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      category: 'Getting Started',
      questions: [
        {
          id: 1,
          question: 'How do I create an account?',
          answer: 'To create an account, download the app from Google Play Store, tap "Sign Up", and follow the registration process. You\'ll need to provide your email address and create a secure password.'
        },
        {
          id: 2,
          question: 'What devices are supported?',
          answer: 'Our app supports Android 7.0 (API level 24) and higher. It works on phones and tablets with at least 2GB of RAM for optimal performance.'
        },
        {
          id: 3,
          question: 'Is the app free to use?',
          answer: 'Yes, our app is free to download and use with core features available at no cost. Premium features are available through in-app purchases.'
        }
      ]
    },
    {
      category: 'Account & Security',
      questions: [
        {
          id: 4,
          question: 'How do I reset my password?',
          answer: 'Tap "Forgot Password" on the login screen, enter your email address, and follow the instructions in the password reset email we send you.'
        },
        {
          id: 5,
          question: 'How do I enable two-factor authentication?',
          answer: 'Go to Settings > Security > Two-Factor Authentication and follow the setup instructions. We recommend using an authenticator app for enhanced security.'
        },
        {
          id: 6,
          question: 'Can I change my email address?',
          answer: 'Yes, go to Settings > Account > Email Address. You\'ll need to verify the new email address before the change takes effect.'
        }
      ]
    },
    {
      category: 'Features & Usage',
      questions: [
        {
          id: 7,
          question: 'How do I sync data across devices?',
          answer: 'Data syncing happens automatically when you\'re signed in to the same account. Ensure you have an internet connection and sync is enabled in Settings > Sync.'
        },
        {
          id: 8,
          question: 'Can I use the app offline?',
          answer: 'Yes, many features work offline. Your data will sync automatically when you reconnect to the internet. Some features require an active internet connection.'
        },
        {
          id: 9,
          question: 'How do I share content with team members?',
          answer: 'Use the Share button in any content item, enter email addresses or select from your contacts, and set appropriate permissions for each user.'
        }
      ]
    },
    {
      category: 'Troubleshooting',
      questions: [
        {
          id: 10,
          question: 'The app is running slowly. What can I do?',
          answer: 'Try closing other apps, restarting your device, or clearing the app cache. Ensure you have sufficient storage space and a stable internet connection.'
        },
        {
          id: 11,
          question: 'I\'m not receiving notifications. How do I fix this?',
          answer: 'Check your device settings for notification permissions, ensure notifications are enabled in the app settings, and verify Do Not Disturb mode isn\'t active.'
        },
        {
          id: 12,
          question: 'How do I report a bug or issue?',
          answer: 'Use the "Report Issue" feature in Settings > Help & Support, or contact us directly at support@orincore.tech with details about the problem you\'re experiencing.'
        }
      ]
    }
  ];

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <>
      <Helmet>
        <title>Support & FAQ - Orincore Technologies | Get Help</title>
        <meta name="description" content="Find answers to common questions about Orincore's mobile app. Get support, troubleshooting help, and access our comprehensive FAQ." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-violet-50 pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How can we help you?
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Find answers to common questions, get troubleshooting help, or contact our support team.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for help..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Help Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Help Options</h2>
            <p className="text-xl text-gray-600">Choose the best way to get the help you need</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-violet-50 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-4 text-sm">Get instant help from our support team</p>
              <button className="text-indigo-600 hover:text-indigo-800 font-medium text-sm">
                Start Chat →
              </button>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h3>
              <p className="text-gray-600 mb-4 text-sm">Send us detailed questions or feedback</p>
              <a href="mailto:support@orincore.tech" className="text-violet-600 hover:text-violet-800 font-medium text-sm">
                Email Us →
              </a>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Book className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">User Guide</h3>
              <p className="text-gray-600 mb-4 text-sm">Comprehensive documentation and tutorials</p>
              <button className="text-purple-600 hover:text-purple-800 font-medium text-sm">
                Read Guides →
              </button>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-red-50 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Video className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Video Tutorials</h3>
              <p className="text-gray-600 mb-4 text-sm">Step-by-step video instructions</p>
              <button className="text-pink-600 hover:text-pink-800 font-medium text-sm">
                Watch Videos →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to the most common questions</p>
          </div>

          <div className="space-y-8">
            {filteredFaqs.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.questions.map((faq) => (
                    <div key={faq.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                      <button
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                        {openFaq === faq.id ? (
                          <Minus className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                        ) : (
                          <Plus className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        )}
                      </button>
                      {openFaq === faq.id && (
                        <div className="px-6 pb-4 border-t border-gray-100">
                          <p className="text-gray-600 pt-4 leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {filteredFaqs.length === 0 && searchTerm && (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-4">No results found for "{searchTerm}"</p>
              <p className="text-gray-500">Try a different search term or contact our support team for help.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-3xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-xl text-indigo-100 mb-8">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl hover:shadow-lg transition-shadow"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Support
              </a>
              <a
                href="tel:+15551234567"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-indigo-600 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us
              </a>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-indigo-100 text-sm">
                Support Hours: Monday - Friday, 9:00 AM - 6:00 PM PST
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SupportPage;
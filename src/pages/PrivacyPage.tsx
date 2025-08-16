import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye, Users, Database, Globe, Calendar } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Orincore Technologies | Your Privacy Matters</title>
        <meta name="description" content="Read Orincore Technologies' privacy policy. Learn how we collect, use, and protect your personal data in compliance with global privacy standards." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-violet-50 pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Your privacy is our priority. This policy explains how Orincore Technologies 
              collects, uses, and protects your personal information.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: January 15, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Information We Collect */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-violet-100 rounded-xl flex items-center justify-center mr-4">
                  <Database className="w-6 h-6 text-indigo-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Account information (name, email address, phone number)
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Profile information and preferences
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Communication preferences and settings
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Usage Information</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-violet-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      App usage patterns and feature interactions
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-violet-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Device information and technical specifications
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-violet-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Performance metrics and crash reports
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Location Information</h3>
                  <p className="text-gray-600">
                    We may collect location data when you explicitly grant permission, which helps us provide 
                    location-based features and improve our services. You can disable location services at any time 
                    through your device settings.
                  </p>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-100 to-purple-100 rounded-xl flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-violet-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Delivery</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Provide and maintain our app services</li>
                    <li>• Process your requests and transactions</li>
                    <li>• Deliver customer support</li>
                    <li>• Send important service notifications</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Improvement & Analytics</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Analyze usage patterns and preferences</li>
                    <li>• Improve app functionality and performance</li>
                    <li>• Develop new features and services</li>
                    <li>• Conduct research and analytics</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Communication</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Send product updates and announcements</li>
                    <li>• Provide technical support</li>
                    <li>• Respond to inquiries and feedback</li>
                    <li>• Share relevant promotional content</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Security & Compliance</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Protect against fraud and abuse</li>
                    <li>• Ensure platform security</li>
                    <li>• Comply with legal obligations</li>
                    <li>• Enforce our terms of service</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Storage & Security */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center mr-4">
                  <Lock className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Data Storage & Security</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Security Measures</h3>
                  <p className="text-gray-600 mb-4">
                    We implement industry-standard security measures to protect your personal information:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-xl">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Lock className="w-6 h-6 text-green-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">256-bit Encryption</h4>
                      <p className="text-sm text-gray-600">End-to-end encryption for all data transmission</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-xl">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Shield className="w-6 h-6 text-blue-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">Secure Storage</h4>
                      <p className="text-sm text-gray-600">Data stored in certified secure facilities</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-xl">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Users className="w-6 h-6 text-purple-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">Access Control</h4>
                      <p className="text-sm text-gray-600">Strict access controls and monitoring</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Retention</h3>
                  <p className="text-gray-600">
                    We retain your personal information only as long as necessary to provide our services 
                    and comply with legal obligations. Account data is typically retained while your account 
                    is active and for up to 90 days after deletion, unless required by law to retain longer.
                  </p>
                </div>
              </div>
            </div>

            {/* Third-Party Services */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-red-100 rounded-xl flex items-center justify-center mr-4">
                  <Globe className="w-6 h-6 text-pink-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Third-Party Services</h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-gray-600">
                  Our app may integrate with third-party services to enhance functionality. 
                  These services have their own privacy policies:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Analytics Services</h3>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Google Analytics (usage statistics)</li>
                      <li>• Firebase Analytics (app performance)</li>
                      <li>• Crashlytics (crash reporting)</li>
                    </ul>
                  </div>
                  
                  <div className="border border-gray-200 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Infrastructure Services</h3>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Amazon Web Services (cloud hosting)</li>
                      <li>• Cloudflare (content delivery)</li>
                      <li>• SendGrid (email services)</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                  <p className="text-yellow-800">
                    <strong>Note:</strong> These third-party services may collect information as described 
                    in their respective privacy policies. We encourage you to review their privacy practices.
                  </p>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Your Rights</h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-gray-600">
                  You have several rights regarding your personal information:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-green-600 text-xs font-bold">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Access</h4>
                        <p className="text-sm text-gray-600">Request a copy of your personal data</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-blue-600 text-xs font-bold">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Correction</h4>
                        <p className="text-sm text-gray-600">Update or correct inaccurate information</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-purple-600 text-xs font-bold">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Deletion</h4>
                        <p className="text-sm text-gray-600">Request deletion of your account and data</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-orange-600 text-xs font-bold">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Portability</h4>
                        <p className="text-sm text-gray-600">Export your data in a readable format</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-red-600 text-xs font-bold">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Opt-out</h4>
                        <p className="text-sm text-gray-600">Unsubscribe from marketing communications</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-pink-600 text-xs font-bold">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Restrict</h4>
                        <p className="text-sm text-gray-600">Limit how we process your information</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6">
                  <p className="text-indigo-800">
                    To exercise any of these rights, please contact us at <strong>privacy@orincore.tech</strong> 
                    or visit our <a href="/delete-account" className="underline hover:no-underline">account deletion page</a>.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-violet-100 rounded-xl flex items-center justify-center mr-4">
                  <Calendar className="w-6 h-6 text-indigo-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Policy Updates & Contact</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Policy Updates</h3>
                  <p className="text-gray-600">
                    We may update this privacy policy from time to time. We will notify you of any material 
                    changes by posting the new policy on this page and updating the "Last updated" date. 
                    We encourage you to review this policy periodically.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Contact Us</h3>
                  <p className="text-gray-600 mb-4">
                    If you have any questions about this privacy policy or our data practices, please contact us:
                  </p>
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <strong className="text-gray-900">Email:</strong><br />
                        <a href="mailto:privacy@orincore.tech" className="text-indigo-600 hover:underline">
                          privacy@orincore.tech
                        </a>
                      </div>
                      <div>
                        <strong className="text-gray-900">Address:</strong><br />
                        123 Innovation Drive<br />
                        San Francisco, CA 94105
                      </div>
                      <div>
                        <strong className="text-gray-900">Data Protection Officer:</strong><br />
                        <a href="mailto:dpo@orincore.tech" className="text-indigo-600 hover:underline">
                          dpo@orincore.tech
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPage;
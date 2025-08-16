import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Users, Shield, AlertTriangle, Scale, Globe } from 'lucide-react';

const TermsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions - Orincore Technologies | App Usage Terms</title>
        <meta name="description" content="Read the terms and conditions for using Orincore Technologies' mobile app. Understand your rights and obligations as a user." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-violet-50 pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms & Conditions
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Please read these terms carefully before using our mobile application. 
              By using our app, you agree to these terms and conditions.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: January 15, 2025 | Effective Date: January 15, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Acceptance of Terms */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-violet-100 rounded-xl flex items-center justify-center mr-4">
                <Scale className="w-6 h-6 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Acceptance of Terms</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                By accessing and using the Orincore Technologies mobile application ("the App"), 
                you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 my-6">
                <p className="text-blue-800 mb-0">
                  <strong>Important:</strong> These terms constitute a legally binding agreement between you and 
                  Orincore Technologies. Please read them carefully and contact us if you have any questions.
                </p>
              </div>
            </div>
          </div>

          {/* Service Description */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-100 to-purple-100 rounded-xl flex items-center justify-center mr-4">
                <Globe className="w-6 h-6 text-violet-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Service Description</h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-600">
                Orincore Technologies provides a mobile application designed to enhance productivity, 
                collaboration, and user experience through innovative technology solutions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">What We Provide</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Mobile application access and functionality</li>
                    <li>• Cloud-based data synchronization</li>
                    <li>• Customer support and assistance</li>
                    <li>• Regular updates and improvements</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Availability</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• 99.9% uptime target</li>
                    <li>• Scheduled maintenance notifications</li>
                    <li>• Emergency support availability</li>
                    <li>• Cross-platform compatibility</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* User Obligations */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">User Obligations</h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-600">
                By using our app, you agree to the following obligations and responsibilities:
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Account Responsibility</h3>
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Maintain the confidentiality of your account credentials
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Notify us immediately of any unauthorized account access
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Ensure all account information is accurate and up-to-date
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Take responsibility for all activities under your account
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Acceptable Use</h3>
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <p className="text-gray-600 mb-4">You agree to use the app only for lawful purposes and in accordance with these terms. You must not:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ul className="space-y-2 text-gray-600 text-sm">
                        <li>• Violate any applicable laws or regulations</li>
                        <li>• Transmit harmful or malicious content</li>
                        <li>• Interfere with app functionality</li>
                        <li>• Attempt to breach security measures</li>
                      </ul>
                      <ul className="space-y-2 text-gray-600 text-sm">
                        <li>• Share copyrighted content without permission</li>
                        <li>• Engage in harassment or abuse</li>
                        <li>• Create false or misleading accounts</li>
                        <li>• Use automated tools without authorization</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Prohibited Activities */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-orange-100 rounded-xl flex items-center justify-center mr-4">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Prohibited Activities</h2>
            </div>
            
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-red-800">
                The following activities are strictly prohibited:
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-red-800 mb-2">Technical Violations</h4>
                  <ul className="space-y-1 text-red-700 text-sm">
                    <li>• Reverse engineering or decompiling the app</li>
                    <li>• Attempting to access unauthorized areas</li>
                    <li>• Distributing malware or viruses</li>
                    <li>• Overloading or attacking our servers</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-red-800 mb-2">Content Violations</h4>
                  <ul className="space-y-1 text-red-700 text-sm">
                    <li>• Posting illegal or harmful content</li>
                    <li>• Harassment or threatening behavior</li>
                    <li>• Spam or unsolicited communications</li>
                    <li>• Impersonating others or false representation</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-red-100 rounded-xl">
                <p className="text-red-800 text-sm font-medium">
                  Violation of these terms may result in immediate account suspension or termination, 
                  and may be reported to relevant authorities where applicable.
                </p>
              </div>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center mr-4">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Intellectual Property Rights</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Rights</h3>
                <p className="text-gray-600 mb-4">
                  The app, including its design, functionality, content, and underlying technology, 
                  is owned by Orincore Technologies and protected by intellectual property laws.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                  <ul className="space-y-2 text-green-800">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      All trademarks, logos, and brand names are our property
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      App code, algorithms, and technical innovations are proprietary
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Content, graphics, and user interface elements are protected
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Your Rights</h3>
                <p className="text-gray-600">
                  We grant you a limited, non-exclusive, non-transferable license to use the app 
                  for personal or business purposes in accordance with these terms.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">User Content</h3>
                <p className="text-gray-600">
                  You retain ownership of content you create or upload. However, you grant us 
                  necessary rights to provide our services, including storing, processing, and 
                  transmitting your content as needed for app functionality.
                </p>
              </div>
            </div>
          </div>

          {/* Privacy & Data Protection */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center mr-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Privacy & Data Protection</h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-600">
                Your privacy is important to us. Our data collection, use, and protection practices 
                are detailed in our Privacy Policy, which is incorporated into these terms by reference.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Key Privacy Commitments</h3>
                <ul className="space-y-2 text-blue-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    We only collect data necessary for app functionality
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Your data is encrypted and securely stored
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    You have control over your data and privacy settings
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    We comply with applicable data protection regulations
                  </li>
                </ul>
                
                <div className="mt-4 pt-4 border-t border-blue-200">
                  <p className="text-blue-800">
                    For complete details, please read our 
                    <a href="/privacy" className="font-semibold underline hover:no-underline ml-1">
                      Privacy Policy
                    </a>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimers & Limitations */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl flex items-center justify-center mr-4">
                <AlertTriangle className="w-6 h-6 text-yellow-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Disclaimers & Limitations</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8">
                <h3 className="text-lg font-semibold text-yellow-800 mb-4">Service Disclaimer</h3>
                <p className="text-yellow-700 mb-4">
                  The app is provided "as is" without warranties of any kind, either express or implied. 
                  We do not warrant that the service will be uninterrupted, error-free, or completely secure.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-2">We Do Not Guarantee</h4>
                    <ul className="space-y-1 text-yellow-700 text-sm">
                      <li>• 100% uptime or availability</li>
                      <li>• Error-free operation</li>
                      <li>• Compatibility with all devices</li>
                      <li>• Specific performance outcomes</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-2">Limitation of Liability</h4>
                    <ul className="space-y-1 text-yellow-700 text-sm">
                      <li>• Liability limited to service fees paid</li>
                      <li>• No liability for indirect damages</li>
                      <li>• No responsibility for data loss</li>
                      <li>• User assumes risk of use</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Third-Party Services</h3>
                <p className="text-gray-600">
                  Our app may integrate with third-party services. We are not responsible for the 
                  availability, content, or practices of these external services. Your use of 
                  third-party services is subject to their respective terms and conditions.
                </p>
              </div>
            </div>
          </div>

          {/* Termination */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Termination</h2>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-purple-800 mb-3">Your Right to Terminate</h3>
                  <p className="text-purple-700 mb-3">
                    You may terminate your account at any time by:
                  </p>
                  <ul className="space-y-2 text-purple-700 text-sm">
                    <li>• Using the in-app account deletion feature</li>
                    <li>• Contacting our support team</li>
                    <li>• Following the deletion process on our website</li>
                  </ul>
                </div>
                
                <div className="bg-pink-50 border border-pink-200 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-pink-800 mb-3">Our Right to Terminate</h3>
                  <p className="text-pink-700 mb-3">
                    We may suspend or terminate accounts for:
                  </p>
                  <ul className="space-y-2 text-pink-700 text-sm">
                    <li>• Violation of these terms</li>
                    <li>• Illegal or harmful activities</li>
                    <li>• Extended periods of inactivity</li>
                    <li>• Technical or security reasons</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Effect of Termination</h3>
                <p className="text-gray-600">
                  Upon termination, your access to the app will cease immediately. We will retain your 
                  data for a limited period as outlined in our Privacy Policy, after which it will be 
                  permanently deleted unless required by law to retain longer.
                </p>
              </div>
            </div>
          </div>

          {/* Contact & Updates */}
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-violet-100 rounded-xl flex items-center justify-center mr-4">
                <FileText className="w-6 h-6 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Updates & Contact Information</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Terms Updates</h3>
                <p className="text-gray-600">
                  We may update these terms periodically to reflect changes in our services or 
                  legal requirements. Material changes will be communicated through the app or 
                  by email. Continued use after updates constitutes acceptance of new terms.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Questions & Contact</h3>
                <p className="text-gray-600 mb-4">
                  If you have questions about these terms or need clarification on any provisions, 
                  please contact us:
                </p>
                
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <strong className="text-gray-900">Legal Department:</strong><br />
                      <a href="mailto:legal@orincore.tech" className="text-indigo-600 hover:underline">
                        legal@orincore.tech
                      </a>
                    </div>
                    <div>
                      <strong className="text-gray-900">General Support:</strong><br />
                      <a href="mailto:support@orincore.tech" className="text-indigo-600 hover:underline">
                        support@orincore.tech
                      </a>
                    </div>
                    <div>
                      <strong className="text-gray-900">Phone:</strong><br />
                      <a href="tel:+15551234567" className="text-indigo-600 hover:underline">
                        +1 (555) 123-4567
                      </a>
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

export default TermsPage;
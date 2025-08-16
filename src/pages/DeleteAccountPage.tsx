import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Trash2, AlertTriangle, Mail, Phone, Shield, Clock } from 'lucide-react';

const DeleteAccountPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    reason: '',
    confirmation: ''
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.confirmation.toLowerCase() === 'delete my account') {
      setShowConfirmation(true);
    } else {
      alert('Please type "DELETE MY ACCOUNT" exactly as shown to confirm.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const reasons = [
    'I no longer use the app',
    'Privacy concerns',
    'Found a better alternative',
    'Technical issues',
    'Too expensive',
    'Account security concerns',
    'Other'
  ];

  return (
    <>
      <Helmet>
        <title>Delete Account - Orincore Technologies | Account Deletion Request</title>
        <meta name="description" content="Request account deletion for your Orincore Technologies app account. Learn about data retention and the account deletion process." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 via-white to-orange-50 pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Trash2 className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Delete Your Account
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're sorry to see you go. Before you delete your account, please review 
              what happens when you delete your data.
            </p>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-50 border border-red-200 rounded-3xl p-8 mb-12">
            <div className="flex items-center mb-6">
              <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
              <h2 className="text-2xl font-bold text-red-800">Important: Account Deletion is Permanent</h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-red-700 text-lg">
                Once you delete your account, this action cannot be undone. Please review what will happen:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-red-800 mb-3">What Will Be Deleted</h3>
                  <ul className="space-y-2 text-red-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Your profile and account information
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      All your personal data and content
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      App preferences and settings
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Access to premium features
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-red-800 mb-3">What Happens Next</h3>
                  <ul className="space-y-2 text-red-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Account deleted within 48 hours
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Data permanently removed from our servers
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      You'll lose access immediately
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      No way to recover deleted data
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Data Retention Information */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Retention & Privacy</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Processing Time</h3>
                <p className="text-gray-600 text-sm">
                  Account deletion requests are processed within 48 hours of confirmation.
                </p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Secure Deletion</h3>
                <p className="text-gray-600 text-sm">
                  Your data is securely wiped from all our systems using industry-standard methods.
                </p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Confirmation</h3>
                <p className="text-gray-600 text-sm">
                  You'll receive email confirmation once your account has been successfully deleted.
                </p>
              </div>
            </div>
          </div>

          {/* Alternatives */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Consider These Alternatives</h2>
            <p className="text-gray-600 mb-6">
              Before permanently deleting your account, you might want to consider these options:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Temporary Deactivation</h3>
                <p className="text-gray-600 mb-4">
                  Take a break without losing your data. You can reactivate anytime.
                </p>
                <button className="text-indigo-600 hover:text-indigo-800 font-medium">
                  Learn More →
                </button>
              </div>
              
              <div className="border border-gray-200 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Privacy Settings</h3>
                <p className="text-gray-600 mb-4">
                  Adjust your privacy settings and data sharing preferences instead.
                </p>
                <button className="text-indigo-600 hover:text-indigo-800 font-medium">
                  View Settings →
                </button>
              </div>
              
              <div className="border border-gray-200 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Support</h3>
                <p className="text-gray-600 mb-4">
                  Talk to our team about your concerns. We might be able to help.
                </p>
                <a href="/contact" className="text-indigo-600 hover:text-indigo-800 font-medium">
                  Contact Us →
                </a>
              </div>
              
              <div className="border border-gray-200 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Export Your Data</h3>
                <p className="text-gray-600 mb-4">
                  Download a copy of your data before deleting your account.
                </p>
                <button className="text-indigo-600 hover:text-indigo-800 font-medium">
                  Export Data →
                </button>
              </div>
            </div>
          </div>

          {/* Deletion Form */}
          {!showConfirmation && (
            <div className="bg-gray-50 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Account Deletion Request</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm Your Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
                    Reason for Deletion (Optional)
                  </label>
                  <select
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Select a reason (helps us improve)</option>
                    {reasons.map((reason, index) => (
                      <option key={index} value={reason}>{reason}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="confirmation" className="block text-sm font-medium text-gray-700 mb-2">
                    Type "DELETE MY ACCOUNT" to confirm *
                  </label>
                  <input
                    type="text"
                    id="confirmation"
                    name="confirmation"
                    required
                    value={formData.confirmation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="DELETE MY ACCOUNT"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    type="submit"
                    className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-colors"
                  >
                    <Trash2 className="w-5 h-5 mr-2" />
                    Delete My Account
                  </button>
                  <a
                    href="/"
                    className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors text-center justify-center"
                  >
                    Cancel & Go Home
                  </a>
                </div>
              </form>
            </div>
          )}

          {/* Confirmation Message */}
          {showConfirmation && (
            <div className="bg-green-50 border border-green-200 rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-green-800 mb-4">Deletion Request Submitted</h2>
              <p className="text-green-700 mb-6">
                We've received your account deletion request. You'll receive a confirmation email 
                within 48 hours once your account has been permanently deleted.
              </p>
              <p className="text-green-600 text-sm">
                If you change your mind, you can contact our support team within the next 24 hours.
              </p>
            </div>
          )}

          {/* Support Contact */}
          <div className="mt-12 text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Help?</h3>
            <p className="text-gray-600 mb-6">
              If you have questions about account deletion or need assistance, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@orincore.tech"
                className="inline-flex items-center px-6 py-3 text-indigo-600 hover:text-indigo-800 font-medium"
              >
                <Mail className="w-5 h-5 mr-2" />
                support@orincore.tech
              </a>
              <a
                href="tel:+15551234567"
                className="inline-flex items-center px-6 py-3 text-indigo-600 hover:text-indigo-800 font-medium"
              >
                <Phone className="w-5 h-5 mr-2" />
                +1 (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DeleteAccountPage;
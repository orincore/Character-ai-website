import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Award, Target, Eye, Users, TrendingUp, Calendar } from 'lucide-react';

const AboutPage: React.FC = () => {
  const milestones = [
    { year: '2020', title: 'Company Founded', description: 'Orincore Technologies established with a vision to innovate' },
    { year: '2021', title: 'First Product Launch', description: 'Released our flagship mobile application' },
    { year: '2022', title: '100K+ Users', description: 'Reached significant user milestone' },
    { year: '2023', title: 'Series A Funding', description: 'Secured major investment for expansion' },
    { year: '2024', title: 'Global Expansion', description: 'Expanded operations to international markets' },
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Orincore Technologies | Led by CEO Adarsh Suradkar</title>
        <meta name="description" content="Learn about Orincore Technologies, our mission, vision, and leadership under CEO Adarsh Suradkar. Discover our journey in mobile technology innovation." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-violet-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Orincore Technologies
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Pioneering the future of mobile technology with innovative solutions, 
              exceptional user experiences, and unwavering commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Innovation at Our Core
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded with the mission to revolutionize mobile technology, Orincore Technologies 
                has been at the forefront of creating intuitive, powerful, and secure applications 
                that empower users worldwide.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Under the visionary leadership of CEO Adarsh Suradkar, we have built a team of 
                passionate innovators who are dedicated to pushing the boundaries of what's possible 
                in mobile technology.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600">500K+</div>
                  <div className="text-gray-600">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600">50+</div>
                  <div className="text-gray-600">Team Members</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-indigo-100 to-violet-100 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <TrendingUp className="w-12 h-12 text-indigo-600 mb-4" />
                    <h3 className="font-semibold text-gray-900">Growth</h3>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <Users className="w-12 h-12 text-violet-600 mb-4" />
                    <h3 className="font-semibold text-gray-900">Community</h3>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <Award className="w-12 h-12 text-purple-600 mb-4" />
                    <h3 className="font-semibold text-gray-900">Excellence</h3>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <Target className="w-12 h-12 text-pink-600 mb-4" />
                    <h3 className="font-semibold text-gray-900">Focus</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To democratize technology by creating mobile applications that are not only powerful and 
                secure but also intuitive and accessible to users of all backgrounds. We believe technology 
                should enhance human potential, not complicate it.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading force in mobile technology innovation, creating solutions that transform 
                how people work, connect, and live. We envision a world where technology seamlessly 
                integrates into daily life, making it more productive and enjoyable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">Meet the visionaries driving our success</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1">
                  <div className="w-48 h-48 bg-gradient-to-br from-indigo-400 to-violet-600 rounded-full mx-auto flex items-center justify-center shadow-2xl">
                    <div className="text-6xl font-bold text-white">AS</div>
                  </div>
                </div>
                <div className="md:col-span-2 text-center md:text-left">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Adarsh Suradkar</h3>
                  <p className="text-xl text-indigo-600 mb-6">Chief Executive Officer & Founder</p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Adarsh Suradkar is a visionary leader with over a decade of experience in mobile 
                    technology and product development. Under his leadership, Orincore Technologies 
                    has grown from a startup idea to a thriving company serving hundreds of thousands 
                    of users globally.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    With a passion for innovation and user-centric design, Adarsh continues to drive 
                    the company towards new heights, ensuring that every product we create makes a 
                    meaningful impact on our users' lives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey & Milestones */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our growth story</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-indigo-500 to-violet-600"></div>
            
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-8`}>
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-3">
                      <Calendar className="w-5 h-5 text-indigo-600 mr-2" />
                      <span className="text-sm font-semibold text-indigo-600">{milestone.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-indigo-50 to-violet-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">User-Centric</h3>
              <p className="text-gray-600">Every decision we make is driven by what's best for our users</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">We strive for the highest quality in everything we create</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">We constantly push boundaries to create breakthrough solutions</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
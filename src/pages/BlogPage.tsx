import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, User, ArrowRight, Tag } from 'lucide-react';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Mobile Technology: What's Next for 2025",
      excerpt: "Exploring the emerging trends that will shape mobile app development and user experiences in the coming year.",
      content: "As we look ahead to 2025, several exciting trends are emerging in mobile technology...",
      author: "Adarsh Suradkar",
      date: "January 10, 2025",
      readTime: "5 min read",
      category: "Technology",
      featured: true,
      tags: ["Mobile", "Innovation", "Future Tech"]
    },
    {
      id: 2,
      title: "Announcing Our Latest App Update: Enhanced Security Features",
      excerpt: "We're excited to roll out our biggest security update yet, featuring advanced encryption and privacy controls.",
      content: "Security has always been at the core of what we do at Orincore Technologies...",
      author: "Development Team",
      date: "January 5, 2025",
      readTime: "3 min read",
      category: "Product Update",
      featured: false,
      tags: ["Security", "Update", "Privacy"]
    },
    {
      id: 3,
      title: "Building for Accessibility: Our Commitment to Inclusive Design",
      excerpt: "Learn how we're making our mobile app accessible to users with disabilities through thoughtful design and development.",
      content: "At Orincore, we believe technology should be accessible to everyone...",
      author: "Design Team",
      date: "December 28, 2024",
      readTime: "4 min read",
      category: "Design",
      featured: false,
      tags: ["Accessibility", "Design", "UX"]
    },
    {
      id: 4,
      title: "Year in Review: 2024 Achievements and Milestones",
      excerpt: "Reflecting on our incredible journey in 2024, from major product launches to reaching new user milestones.",
      content: "2024 has been an extraordinary year for Orincore Technologies...",
      author: "Adarsh Suradkar",
      date: "December 20, 2024",
      readTime: "6 min read",
      category: "Company News",
      featured: true,
      tags: ["Year Review", "Milestones", "Growth"]
    },
    {
      id: 5,
      title: "How AI is Transforming Mobile User Experiences",
      excerpt: "Discover how artificial intelligence is revolutionizing the way users interact with mobile applications.",
      content: "Artificial Intelligence is no longer a futuristic concept...",
      author: "Tech Team",
      date: "December 15, 2024",
      readTime: "7 min read",
      category: "Technology",
      featured: false,
      tags: ["AI", "Machine Learning", "UX"]
    },
    {
      id: 6,
      title: "Best Practices for Mobile App Performance Optimization",
      excerpt: "Technical insights on how we achieve lightning-fast performance in our mobile applications.",
      content: "Performance is crucial for mobile app success...",
      author: "Engineering Team",
      date: "December 10, 2024",
      readTime: "8 min read",
      category: "Technical",
      featured: false,
      tags: ["Performance", "Optimization", "Development"]
    }
  ];

  const categories = ["All", "Technology", "Product Update", "Design", "Company News", "Technical"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <>
      <Helmet>
        <title>Blog - Orincore Technologies | Tech Insights & Company Updates</title>
        <meta name="description" content="Stay updated with the latest from Orincore Technologies. Read about mobile technology trends, product updates, and company insights from our team." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-violet-50 pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Orincore Blog
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Stay updated with the latest insights on mobile technology, product updates, 
              and company news from the Orincore Technologies team.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === "All" && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-100 to-violet-100 text-indigo-800 rounded-full text-sm font-semibold mb-4">
                Featured Post
              </span>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-3xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                <div className="p-8 lg:p-12">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-semibold">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {featuredPost.date}
                    </div>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center text-gray-600 text-sm">
                        <User className="w-4 h-4 mr-1" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    
                    <button className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
                
                <div className="h-64 lg:h-full bg-gradient-to-br from-indigo-400 to-violet-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-4">
                      <Tag className="w-12 h-12" />
                    </div>
                    <div className="text-sm font-medium">Featured Article</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-indigo-400 to-violet-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-2">
                      <Tag className="w-8 h-8" />
                    </div>
                    <div className="text-xs font-medium">{post.category}</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="text-sm text-gray-600">{post.author}</div>
                      <div className="flex items-center text-gray-500 text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <button className="text-indigo-600 hover:text-indigo-800 text-sm font-semibold transition-colors">
                      Read More
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-3xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-indigo-100 mb-8">
              Subscribe to our newsletter and never miss the latest updates, insights, and product announcements.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
                <button className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-xl hover:shadow-lg transition-shadow">
                  Subscribe
                </button>
              </div>
            </div>
            
            <p className="text-indigo-200 text-sm mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
import React from 'react';
import { CalendarDays, User, Tag } from 'lucide-react';

const BlogCard = ({ image, author, category, title, date }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="relative h-48">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6">
      <div className="flex items-center gap-4 mb-3">
        <div className="flex items-center text-sm text-gray-600">
          <User className="w-4 h-4 mr-1" />
          <span>by: {author}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Tag className="w-4 h-4 mr-1" />
          <span>{category}</span>
        </div>
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <div className="flex justify-between items-center">
        <div className="flex items-center text-sm text-gray-600">
          <CalendarDays className="w-4 h-4 mr-1" />
          <span>{date}</span>
        </div>
        <button className="text-green-500 hover:text-green-600 font-medium">
          READ MORE
        </button>
      </div>
    </div>
  </div>
);

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-start gap-4">
    <div className="w-12 h-12 text-green-500">
      <Icon className="w-full h-full" />
    </div>
    <h3 className="text-lg font-bold">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const BlogPage = () => {
  const blogs = [
    {
      image: "/image/company.jpg",
      author: "broccoli",
      category: "Blogs V1",
      title: "Common Engine Oil Problems and Solutions",
      date: "August 11, 2022"
    },
    {
      image: "/image/growingplant.jpg",
      author: "broccoli",
      category: "Blogs V1",
      title: "How and when to replace brake rotors",
      date: "August 11, 2022"
    },
    {
      image: "/image/plant watering.jpg",
      author: "broccoli",
      category: "Blogs V1",
      title: "Electric Car Maintenance, Servicing & Repairs",
      date: "August 11, 2022"
    }
  ];

  const features = [
    {
      icon: (props) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" />
          <path d="M4 6v12c0 1.1.9 2 2 2h14v-4" />
          <path d="M18 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
      ),
      title: "Curated Products",
      description: "Provide Curated Products for all product over $100"
    },
    {
      icon: (props) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v6m0 12v2M4.93 4.93l4.24 4.24m5.66 5.66l4.24 4.24M2 12h6m12 0h2M4.93 19.07l4.24-4.24m5.66-5.66l4.24-4.24" />
        </svg>
      ),
      title: "Handmade",
      description: "We ensure the product quality that is our main goal"
    },
    {
      icon: (props) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      title: "Natural Food",
      description: "Return product within 3 days for any product you buy"
    },
    {
      icon: (props) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      ),
      title: "Free home delivery",
      description: "We ensure the product quality that you can trust easily"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Leatest Blog</h1>
        
        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
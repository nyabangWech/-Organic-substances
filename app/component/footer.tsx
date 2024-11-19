import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const companyLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Fresh Fruits', href: '#' },
    { name: 'Our Gallery', href: '#' },
    { name: 'Our History', href: '#' },
    { name: 'Latest News', href: '#' },
    { name: 'Shop Grid', href: '#' },
    { name: 'Agriculture', href: '#' },
  ];

  const rightLinks = [
    { name: 'News', href: '#' },
    { name: 'Our Faq', href: '#' },
    { name: 'Our Faq', href: '#' },
    { name: 'Fresh Fruits', href: '#' },
    { name: 'Shop', href: '#' },
    { name: 'Team', href: '#' },
    { name: 'Contact Us', href: '#' },
  ];

  const popularPosts = [
    {
      title: 'Donec sit amet sit amet, consectetur adipisicing elit...',
      date: 'August 11, 2022',
      image: '/image/company.jpg'
    },
    {
      title: 'In congue laoreet sollicitudin. Aliquam diam justo, volutat...',
      date: 'August 11, 2022',
      image: '/image/growingplant.jpg'
    },
    {
      title: 'Maecenas ac nisi laoreet sapien tempor tincidunt nec...',
      date: 'August 11, 2022',
      image: '/image/plant watering.jpg'
      
    }
  ];

  const paymentMethods = [
    { name: 'PayPal', icon: '/image/icons8-paypal-48.png' },
    { name: 'Visa', icon: '/image/Visa Payment Card Logo PNG vector in SVG, PDF, AI, CDR format.jpeg' },
    { name: 'Discover', icon: '/image/Discover it® Cash Back Review.jpeg' },
    { name: 'Mastercard', icon: '/image/Freebie – Mastercard Card.gif' },
    { name: 'American Express', icon: '/image/American Express Launches Amex Business Link™, a New Digital B2B Payments Ecosystem for Network Participants.jpeg' }
  ];

  return (
    <footer className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8">
                <div className="w-full h-full bg-green-600 rounded-full" />
              </div>
              <span className="text-xl font-bold">Broccoli</span>
            </div>
            
            <p className="text-gray-600">
              Ut at sit is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of the printing.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="text-green-600 w-5 h-5" />
                <span>Brooklyn, New York, United States</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-green-600 w-5 h-5" />
                <span>+0123-456789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-green-600 w-5 h-5" />
                <span>example@example.com</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-600 hover:text-green-600 cursor-pointer" />
              <Linkedin className="w-5 h-5 text-gray-600 hover:text-green-600 cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-600 hover:text-green-600 cursor-pointer" />
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Company</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                {companyLinks.map((link, index) => (
                  <Link 
                    key={index}
                    href={link.href}
                    className="block text-gray-600 hover:text-green-600"
                  >
                    <span className="text-gray-400 mr-2"></span>
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="space-y-3">
                {rightLinks.map((link, index) => (
                  <Link 
                    key={index}
                    href={link.href}
                    className="block text-gray-600 hover:text-green-600"
                  >
                    <span className="text-gray-400 mr-2"></span>
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Popular Posts */}
          <div>
            <h3 className="text-xl font-bold mb-6">Popular Post</h3>
            <div className="space-y-6">
              {popularPosts.map((post, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={80}
                      height={80}
                      className="rounded-full h-10 w-10"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium mb-1 line-clamp-2">
                      {post.title}
                    </p>
                    <div className="flex items-center text-green-600 text-sm">
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6">Newsletter</h3>
            <p className="mb-6">
              Subscribe to our weekly Newsletter and receive updates via email.
            </p>
            
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email*"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              />
              <button className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-200">
                SUBSCRIBE
              </button>
            </div>

            <div className="mt-8">
              <h4 className="font-bold mb-4">We Accept</h4>
              <div className="flex space-x-2">
                {paymentMethods.map((method, index) => (
                  <div key={index} className="w-12">
                    <Image
                      src={method.icon}
                      alt={method.name}
                      width={60}
                      height={40}
                      className="rounded"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-900 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0">
              All Rights Reserved @ Company 2024
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="hover:text-green-400">
                Terms & Conditions
              </Link>
              <Link href="#" className="hover:text-green-400">
                Claim
              </Link>
              <Link href="#" className="hover:text-green-400">
                Privacy & Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
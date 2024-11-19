import { Search, User, ShoppingCart } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  return (
    <div className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Branding */}
          <div className="flex items-center space-x-2">
            <Image src="/image/brocoli.jpg" alt="Broccoli" width={40} height={40} />
            <span className="text-xl font-bold">Broccoli</span>
          </div>

          
          <div className="flex items-center gap-x-6">
            <a href="#" className="text-gray-700 hover:text-green-600">Home</a>
            <a href="#" className="text-gray-700 hover:text-green-600">About</a>
            <a href="#" className="text-gray-700 hover:text-green-600">Shop</a>
            <a href="#" className="text-gray-700 hover:text-green-600">News</a>
            <a href="#" className="text-gray-700 hover:text-green-600">Pages</a>
            <a href="#" className="text-gray-700 hover:text-green-600">Contact</a>
          </div>

          {/* Actions (Button + Icons) */}
          <div className="flex items-center gap-x-6">
            <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
              GET A QUOTE
            </button>
            <div className="flex items-center gap-x-4">
              <Search className="w-6 h-6 text-gray-600 cursor-pointer" />
              <User className="w-6 h-6 text-gray-600 cursor-pointer" />
              <div className="relative">
                <ShoppingCart className="w-6 h-6 text-gray-600 cursor-pointer" />
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  0
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

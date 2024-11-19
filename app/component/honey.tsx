'use client';

import React, { useState, useEffect } from 'react';

const HotDealsSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set your target date here
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3); // 3 days from now

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full min-h-[600px] bg-[#faf7f2] relative">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <img
              src="/image/Honey jar watercolor clipart white background _ Premium AI-generated vector (1).jpeg" // Replace with your image path
              alt="Honey Jar with Dipper"
              className="w-full h-auto max-w-[500px] mx-auto"
            />
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <span className="text-lime-500 font-medium">Todays Hot Deals</span>
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#1b1b1b] leading-tight">
              Original Stock Honey Combo Package
            </h2>

            {/* Countdown Timer */}
            <div className="flex gap-6 justify-start mt-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold">
                    {String(timeLeft.days).padStart(2, '0')}
                  </span>
                </div>
                <p className="mt-2 text-sm font-medium">DAYS</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                </div>
                <p className="mt-2 text-sm font-medium">HRS</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                </div>
                <p className="mt-2 text-sm font-medium">MINS</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                </div>
                <p className="mt-2 text-sm font-medium">SECS</p>
              </div>
            </div>

            {/* Shop Now Button */}
            <button className="mt-8 bg-lime-500 text-white px-8 py-3 font-medium hover:bg-lime-600 transition-colors duration-300">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotDealsSection;
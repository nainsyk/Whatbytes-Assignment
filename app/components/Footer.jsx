'use client';
import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8 px-4 mt-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Filters Section */}
        <div>
          <h4 className="font-semibold mb-2">Filters</h4>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>All</li>
            <li>Electronics</li>
          </ul>
        </div>

        {/* About Us Section */}
        <div>
          <h4 className="font-semibold mb-2">About Us</h4>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div>
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-6">
        © 2024 American
      </div>
    </footer>
  );
}

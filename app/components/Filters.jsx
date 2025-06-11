'use client';
import React, { useState, useEffect } from 'react';

export default function Filters({ onFilterChange, filters }) {
  const [category, setCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [cacyroyCategory, setCacyroyCategory] = useState('All');
  const [dropdownPrice, setDropdownPrice] = useState('5000');

  const categories = ['All', 'Electronics', 'Clothing', 'Home'];

  // Sync with parent filters when they change
  useEffect(() => {
    if (filters) {
      setCategory(filters.category || 'All');
      setCacyroyCategory(filters.category || 'All');
      setPriceRange(filters.priceRange || [0, 1000]);
      setDropdownPrice(filters.priceRange?.[1]?.toString() || '5000');
    }
  }, [filters]);

  // Inform parent of filter changes
  useEffect(() => {
    const selectedCategory = cacyroyCategory !== 'All' ? cacyroyCategory : category;
    const selectedPriceMax = Math.min(priceRange[1], parseInt(dropdownPrice));

    onFilterChange({
      category: selectedCategory,
      priceRange: [0, selectedPriceMax],
    });
  }, [category, priceRange, cacyroyCategory, dropdownPrice]);

  return (
    <div className="flex flex-col space-y-6 w-64">
      {/* Blue Filters Card */}
      <div className="bg-blue-900 text-white p-4 rounded-lg">
        <h2 className="text-lg font-bold mb-4">Filters</h2>
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Category</h3>
          {categories.map((cat) => (
            <label key={cat} className="flex items-center mb-1">
              <input
                type="radio"
                name="category"
                className="mr-2 accent-white"
                checked={category === cat}
                onChange={() => setCategory(cat)}
              />
              {cat}
            </label>
          ))}
        </div>
        <div>
          <h3 className="font-semibold mb-2">Price Range</h3>
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
            className="w-full"
          />
          <div className="flex justify-between text-sm mt-1">
            <span>$0</span>
            <span>$1000</span>
          </div>
        </div>
      </div>

      {/* White Cacyroy Card */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-bold mb-4 text-gray-800">Cacyroy</h2>
        <div className="mb-4 space-y-2 text-gray-700">
          {categories.map((cat) => (
            <label key={cat} className="flex items-center">
              <input
                type="radio"
                name="cacyroy"
                className="mr-2 accent-blue-600"
                checked={cacyroyCategory === cat}
                onChange={() => setCacyroyCategory(cat)}
              />
              {cat}
            </label>
          ))}
        </div>
        <div>
          <h3 className="font-semibold mb-1 text-gray-700">Max Price</h3>
          <select
            value={dropdownPrice}
            onChange={(e) => setDropdownPrice(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1 w-full"
          >
            <option value="5000">5000</option>
            <option value="4000">4000</option>
            <option value="3000">3000</option>
          </select>
        </div>
      </div>
    </div>
  );
}

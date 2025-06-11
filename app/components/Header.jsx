'use client';
import React from 'react';
import { ShoppingCart, User, Search } from 'lucide-react'; 
import { useCartStore } from '../context/cartStore';

export default function Header({ onResetFilters, searchText, setSearchText }) {
  const cartItems = useCartStore((state) => state.items);

  return (
    <header className="flex items-center justify-between px-8 py-4 bg-blue-900 text-white shadow-md">
      <button onClick={onResetFilters}>
        <a href="/"><h1 className="h-10 text-3xl cursor-pointer">Whatbytes</h1></a>
      </button>

      <div className="flex items-center bg-blue-900 border-1 rounded-md px-2 w-1/2 max-w-md">
        <Search className="text-white mr-2" size={20} /> 
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search for products..."
          className="w-full p-2 text-white bg-blue-900 placeholder-white outline-none"
        />
      </div>

      <div className="flex items-center space-x-6">
      <a
  href="/pages/cart"
  className="flex items-center px-4 py-3 bg-blue-950 text-white rounded-md shadow hover:bg-blue-900 transition"
>
  <ShoppingCart size={20} className="mr-2" />
  <span className="text-white text-sm font-semibold">Cart</span>
  {cartItems.length > 0 && (
    <span className="ml-2 bg-white text-blue-900 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
      {cartItems.length}
    </span>
  )}
</a>

        <User size={24} className="text-white" />
      </div>
    </header>
  );
}

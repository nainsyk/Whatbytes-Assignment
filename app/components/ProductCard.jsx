'use client';
import React from 'react';
import { Star } from 'lucide-react';
import { useCartStore } from '../context/cartStore';
import { useRouter } from 'next/navigation'; 

export default function ProductCard({ product }) {
  const addToCart = useCartStore((state) => state.addItem);
  const router = useRouter();

  if (!product) return null;

  const handleCardClick = () => {
    router.push(`/pages/product/${product.id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center w-full max-w-xs text-center cursor-pointer hover:shadow-lg transition"
    >
      <img
        src={product.image}
        alt={product.title}
        className="h-32 w-auto object-contain mb-3"
      />

      <h3 className="text-lg font-semibold">{product.title}</h3>
      <p className="text-gray-800 font-medium text-base">${product.price}</p>

      {product.rating && (
        <div className="flex justify-center my-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className="mr-1"
              fill={i < product.rating ? '#1E3A8A' : 'none'}
              stroke={i < product.rating ? '#1E3A8A' : 'currentColor'}
            />
          ))}
        </div>
      )}

      <button
        onClick={(e) => {
          e.stopPropagation(); // prevent routing when clicking button
          addToCart({ ...product, quantity: 1 });
        }}
        className="mt-3 bg-blue-900 hover:bg-blue-600 text-white px-5 py-2 rounded text-sm font-semibold"
      >
        Add to Cart
      </button>
    </div>
  );
}

'use client';

import React from 'react';
import { useCartStore } from '../context/cartStore';
import { Trash2 } from 'lucide-react';

export default function CartItem({ item }) {
  const { updateQuantity, removeItem } = useCartStore();

  return (
    <div className="flex items-center border-b py-4">
      <img src={item.image} alt={item.title} className="w-20 h-20 object-cover mr-4" />
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="text-gray-600">${item.price}</p>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="px-2 py-1 border"
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="px-2 py-1 border"
        >
          +
        </button>
      </div>
      <button onClick={() => removeItem(item.id)} className="ml-4 text-red-500">
        <Trash2 size={20} />
      </button>
    </div>
  );
}

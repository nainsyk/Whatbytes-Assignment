'use client';
import React from 'react';

export default function ProductDetail({ params }) {
  const { id } = params;

  const products = [
    {
      id: '1',
      title: 'Running Shoes',
      price: 99,
      image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQfm_WoUvZcBjCy29nhw6JRuErl6goRmVgnDMUQzd6ykiWieeSoB782bPg__-4QFawnmcxG8ucCYk8lClinHpX2YrlZ5Rol7MkHgjH_F0a69YijnOqaO2G1FYc',
      category: 'Clothing',
      rating: 4,
      description: 'Comfortable and stylish running shoes perfect for workouts and casual wear.',
    },
    {
      id: '2',
      title: 'Smartwatch',
      price: 249,
      image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRspp5NtCLfNHMTzKWUS4iK3tORUuzmHJWQAxl9cktDbJKMT_XSXNd4rELuQG-x0mIhMyh_zXNkEEr7lEkAOgNKVNN8fdwpO6nkctsG3l4qELJ8XEu0LCuzow',
      category: 'Electronics',
      rating: 5,
      description: 'Stay connected and track your fitness with this feature-rich smartwatch.',
    },
    {
      id: '3',
      title: 'Wireless Headphones',
      price: 199,
      image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTZ1Pixd5Fwz-vZvRZ7Kc_0Dq-CfHVdmp9th8MAOE8SfOaEiwXLHMmcYj52cCKzGEPIAEONTXkoBaYHnX_Re-rrWGZL0pf8dd1X1pP2zF3y4WYg82hFxw_P5g',
      category: 'Electronics',
      rating: 4,
      description: 'Immerse yourself in high-quality sound with these wireless headphones.',
    },
    {
      id: '4',
      title: 'Backpack',
      price: 129,
      image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRIAtBNLB2uKo9fwiLCGWEQQHhxDVwd2mybkK6SRU7lNNH5mGlemSoIPGnNhQlBNUJE46Gy3YKEjXJRA4ulhWSipDg4gQ4JvQ7BLBTAqqSWefoXfuKjI5Tp3eA',
      category: 'Clothing',
      rating: 3,
      description: 'Spacious and durable backpack suitable for travel and daily use.',
    },
    {
      id: '5',
      title: 'Sunglasses',
      price: 149,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRC4_Uie3D623eAVDrV46dve44OK_0XH65UI5Io-RuV7dr-192-UMhpc5lLPH0K1UPPTE&usqp=CAU',
      category: 'Clothing',
      rating: 4,
      description: 'Stylish sunglasses that offer full UV protection and premium design.',
    },
    {
      id: '6',
      title: 'Digital Camera',
      price: 499,
      image: 'https://in.canon/media/image/2019/07/08/8d0db401031e4decbdf0d82dce54c796_G7+X+mkIII+BK+Front.png',
      category: 'Electronics',
      rating: 5,
      description: 'Capture your best moments with this high-performance digital camera.',
    },
    {
      id: '7',
      title: 'T-shirt',
      price: 29,
      image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTzSZrFugr2naKFbEk4j_KjjJdrbCEhi7zEsZ0V8TnHtcx-Q5GUMYTd7gtuoJyjykV_g0-1-N14Kxju8XlVMKrGMmW7xGjWMVdqoxVpXKCF-MjS1NtnSdD5oaVpjGjiLqBT_syHBQJ-&usqp=CAc',
      category: 'Clothing',
      rating: 4,
      description: 'Soft cotton T-shirt perfect for everyday casual wear.',
    },
    {
      id: '8',
      title: 'Smartphone',
      price: 699,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsnoocq6ORqcj4KBAUvvCRqyBrcpO-e-lCdA&s',
      category: 'Electronics',
      rating: 5,
      description: 'Latest-generation smartphone with fast performance and crystal-clear display.',
    },
  ];

  const product = products.find((item) => item.id === id);

  if (!product) return <div className="p-8 text-center text-red-500">Product not found</div>;

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Product Image */}
        <div className="bg-gray-100 rounded-lg p-4 shadow">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[400px] object-contain"
          />
        </div>

        {/* Right: Product Details */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>

          <p className="text-sm text-gray-600">
            <span className="font-semibold">Category:</span> {product.category}
          </p>

          <p className="text-2xl text-blue-600 font-semibold">${product.price}</p>

          <p className="text-blue-900 font-medium text-lg">
            {'⭐'.repeat(product.rating)}{' '}
            <span className="text-sm text-gray-500 ml-1">({product.rating}/5)</span>
          </p>

          <p className="text-gray-700 text-base leading-relaxed">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
}

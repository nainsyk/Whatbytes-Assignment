'use client';
import React, { useState, useEffect } from 'react';
import Header from '../app/components/Header';
import Footer from '../app/components/Footer';
import ProductCard from '../app/components/ProductCard';
import Filters from '../app/components/Filters';

const products = [
  {
    id: '1',
    title: 'Running Shoes',
    price: 99,
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQfm_WoUvZcBjCy29nhw6JRuErl6goRmVgnDMUQzd6ykiWieeSoB782bPg__-4QFawnmcxG8ucCYk8lClinHpX2YrlZ5Rol7MkHgjH_F0a69YijnOqaO2G1FYc',
    category: 'Clothing',
    rating: 4,
  },
  {
    id: '2',
    title: 'Smartwatch',
    price: 249,
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRspp5NtCLfNHMTzKWUS4iK3tORUuzmHJWQAxl9cktDbJKMT_XSXNd4rELuQG-x0mIhMyh_zXNkEEr7lEkAOgNKVNN8fdwpO6nkctsG3l4qELJ8XEu0LCuzow',
    category: 'Electronics',
    rating: 5,
  },
  {
    id: '3',
    title: 'Wireless Headphones',
    price: 199,
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTZ1Pixd5Fwz-vZvRZ7Kc_0Dq-CfHVdmp9th8MAOE8SfOaEiwXLHMmcYj52cCKzGEPIAEONTXkoBaYHnX_Re-rrWGZL0pf8dd1X1pP2zF3y4WYg82hFxw_P5g',
    category: 'Electronics',
    rating: 4,
  },
  {
    id: '4',
    title: 'Backpack',
    price: 129,
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRIAtBNLB2uKo9fwiLCGWEQQHhxDVwd2mybkK6SRU7lNNH5mGlemSoIPGnNhQlBNUJE46Gy3YKEjXJRA4ulhWSipDg4gQ4JvQ7BLBTAqqSWefoXfuKjI5Tp3eA',
    category: 'Clothing',
    rating: 3,
  },
  {
    id: '5',
    title: 'Sunglasses',
    price: 149,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRC4_Uie3D623eAVDrV46dve44OK_0XH65UI5Io-RuV7dr-192-UMhpc5lLPH0K1UPPTE&usqp=CAU',
    category: 'Clothing',
    rating: 4,
  },
  {
    id: '6',
    title: 'Digital Camera',
    price: 499,
    image: 'https://in.canon/media/image/2019/07/08/8d0db401031e4decbdf0d82dce54c796_G7+X+mkIII+BK+Front.png',
    category: 'Electronics',
    rating: 5,
  },
  {
    id: '7',
    title: 'T-shirt',
    price: 29,
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTzSZrFugr2naKFbEk4j_KjjJdrbCEhi7zEsZ0V8TnHtcx-Q5GUMYTd7gtuoJyjykV_g0-1-N14Kxju8XlVMKrGMmW7xGjWMVdqoxVpXKCF-MjS1NtnSdD5oaVpjGjiLqBT_syHBQJ-&usqp=CAc',
    category: 'Clothing',
    rating: 4,
  },
  {
    id: '8',
    title: 'Smartphone',
    price: 699,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsnoocq6ORqcj4KBAUvvCRqyBrcpO-e-lCdA&s',
    category: 'Electronics',
    rating: 5,
  },
];

export default function Home() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filters, setFilters] = useState({ category: 'All', priceRange: [0, 5000] });
  const [searchText, setSearchText] = useState('');
const resetFilters = () => {
    setFilters(defaultFilters);
    setSearchText('');
  };

  useEffect(() => {
    const filtered = products.filter((product) => {
      const matchesCategory =
        filters.category === 'All' || product.category === filters.category;

      const matchesPrice =
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1];

      const matchesSearch = product.title.toLowerCase().includes(searchText.toLowerCase());

      return matchesCategory && matchesPrice && matchesSearch;
    });

    setFilteredProducts(filtered);
  }, [filters, searchText]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header onResetFilters={resetFilters} searchText={searchText} setSearchText={setSearchText} />


      <main className="flex flex-1 container mx-auto px-4 py-6">
        <div className="mr-8 w-64">
          <Filters onFilterChange={setFilters} />
        </div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="col-span-full text-gray-500">No products found</p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
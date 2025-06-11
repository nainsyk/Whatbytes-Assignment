'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CartItem from '../../components/CartItem';
import { useCartStore } from '../../context/cartStore';

export default function Cart() {
  const items = useCartStore((state) => state.items);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="container mx-auto px-6 py-8 flex-1">
        <h1 className="text-4xl font-bold text-blue-900 mb-8 border-b pb-4">Your Shopping Cart</h1>

        {items.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            {/* Summary Section */}
            <div className="bg-white shadow-lg rounded-lg p-6 h-fit">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Order Summary</h2>
              <div className="flex justify-between items-center text-lg font-medium mb-4">
                <span>Total:</span>
                <span className="text-blue-700">${total.toFixed(2)}</span>
              </div>
              <button className="w-full mt-2 bg-blue-700 hover:bg-blue-800 text-white py-3 px-4 rounded-lg text-base font-semibold transition duration-200">
                Proceed to Checkout
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-500 text-lg mt-20">
            Your cart is empty. Start adding some products!
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

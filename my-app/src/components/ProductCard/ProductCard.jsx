
// 'use client'
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function ProductCard() {
//   const router = useRouter();
//   const [cart, setCart] = useState([]);

//   const products = [
//     { id: 1, name: 'Watch', description: 'Stylish watch' },
//     { id: 2, name: 'Perfume', description: 'Nice fragrance' },
//     { id: 3, name: 'Shoes', description: 'Comfortable shoes' },
//   ];

//   useEffect(() => {
//     const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
//     setCart(savedCart);
//   }, []);

//   const addToCart = (product) => {
//     const updatedCart = [...cart, product];
//     setCart(updatedCart);
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//     alert(`${product.name} added to cart`);
//   };

//   return (
//     <div className="min-h-screen p-6">
//       <h1 className="text-3xl font-bold mb-6">Products</h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {products.map((product) => (
//           <div key={product.id} className="border p-4 rounded shadow text-center">
//             <h2 className="text-xl font-semibold">{product.name}</h2>
//             <p className="mb-4">{product.description}</p>
//             <button
//               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//               onClick={() => addToCart(product)}
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>

//       <button
//         className="mt-6 bg-green-600 text-white px-4 py-2 rounded"
//         onClick={() => router.push('/productlist')}
//       >
//         Go to Cart
//       </button>
//     </div>
//   );
// }


// images
'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProductCard() {
  const router = useRouter();
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: 'Watch',
      description: 'Stylish watch',
      image: '/images/watch.jpg',
    },
    {
      id: 2,
      name: 'Perfume',
      description: 'Nice fragrance',
      image: 'perfume.png',
    },
    {
      id: 3,
      name: 'Shoes',
      description: 'Comfortable shoes',
      image: '/images/shoes.jpg',
    },
    {
        id: 4,
        name: 'Shoes',
        description: 'Comfortable shoes',
        image: '/images/shoes.jpg',
      },
  ];

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert(`${product.name} added to cart`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-8">
      <h1 className="text-5xl font-extrabold mb-12 text-center text-gray-900 tracking-tight">
        Our Premium Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 p-6 overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
              New
            </div>
            <div className="overflow-hidden rounded-2xl mb-5">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h2>
            <p className="text-gray-600 text-sm mb-4">{product.description}</p>
            <button
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 px-6 rounded-full font-semibold text-lg transform hover:scale-105 transition-all duration-200"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button
          className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white px-8 py-4 rounded-full text-xl font-semibold transform hover:scale-105 transition-all duration-200"
          onClick={() => router.push('/productlist')}
        >
          View Cart
        </button>
      </div>
    </div>
  );
}





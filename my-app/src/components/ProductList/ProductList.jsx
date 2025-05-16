// 'use client'
// import { useEffect, useState } from 'react';

// export default function ProductList() {
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
//     setCart(savedCart);
//   }, []);

//   return (
//     <div className="min-h-screen p-6">
//       <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
//       {cart.length === 0 ? (
//         <p>No products in cart.</p>
//       ) : (
//         <ul className="space-y-4">
//           {cart.map((item, index) => (
//             <li key={index} className="border p-4 rounded shadow">
//               <h2 className="text-xl font-semibold">{item.name}</h2>
//               <p>{item.description}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }





//dynamic routing
'use client';
import { useEffect, useState } from 'react';

export default function ProductList() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  return (
    <div className="min-h-screen p-6 bg-white">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cart.map((product, index) => (
            <div key={index} className="border p-4 rounded shadow text-center">
              <img src={product.image} className="h-40 w-full object-cover mb-2 rounded" />
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-500">{product.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

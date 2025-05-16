'use client'; // Optional, if you use client hooks inside

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const products = [
  { id: '1', name: 'Watch', description: 'Stylish watch', image: '/images/watch.jpg' },
  { id: '2', name: 'Perfume', description: 'Nice fragrance', image: 'perfume.png' },
  { id: '3', name: 'Shoes', description: 'Comfortable shoes', image: '/images/shoes.jpg' },
];

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.id;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Find the product by id from the array
    const foundProduct = products.find((p) => p.id === productId);
    setProduct(foundProduct);
  }, [productId]);

  if (!product) return <div>Product not found.</div>;

  return (
    <div className="max-w-md mx-auto p-6 border rounded shadow mt-6">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-60 object-cover rounded mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <p className="mb-4">{product.description}</p>
    </div>
  );
}

import { Star } from "lucide-react";

// Sample product data generator
const generateProducts = (count) => {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    description: "High-quality and stylish product for everyday use.",
    price: (Math.random() * 50 + 10).toFixed(2), // Random price between $10 - $60
    rating: (Math.random() * 2 + 3).toFixed(1), // Random rating between 3.0 - 5.0
    image: `/images/product${(index % 3) + 1}.jpg`, // Rotates between 3 images
  }));
};

const sampleProducts = generateProducts(32);

const ProductCard = ({ product }) => (
  <div className="bg-white rounded-lg shadow-md p-4">
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-48 object-cover rounded-lg"
    />
    <div className="mt-4 text-center">
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-500 text-sm">{product.description}</p>
      <div className="flex justify-center items-center gap-1 mt-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            size={18}
            className={
              index < Math.round(product.rating) ? "text-yellow-500" : "text-gray-300"
            }
          />
        ))}
        <span className="text-gray-600 text-sm">{product.rating}</span>
      </div>
      <p className="text-lg font-bold mt-2">${product.price}</p>
      <button className="mt-3 bg-purple-500 text-white px-4 py-2 rounded-lg w-full hover:bg-purple-700">
        Add to Cart
      </button>
    </div>
  </div>
);

const ProductPage = () => (
  <div className="max-w-6xl mx-auto p-6">
    <h1 className="text-3xl font-bold mb-6 text-center">Our Products</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {sampleProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

export default ProductPage;

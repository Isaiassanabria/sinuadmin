import { Toaster } from "react-hot-toast";
import Navbar from "../../components/ecommerce/Navbar";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/all.service";
import { TProductSchema } from "../../schemas/product.schema";
import { addToCart } from "../../services/cart.service";

const Ecommerce = () => {
  const [products, setProducts] = useState<Array<TProductSchema>>([]);

  useEffect(() => {
    const prds = getProducts();
    setProducts(prds);
  }, []);

  return (
    <div
      className="bg-gray-900 bg-cover bg-no-repeat min-h-screen"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1499123785106-343e69e68db1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80')",
      }}
    >
      <Toaster />
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
            <img
              src={product.image}
              alt="product"
              className="w-full h-64 rounded-md object-cover mb-4"
            />
            <p className="text-gray-700 mb-4">{product.description}</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-900 font-bold text-xl">
                  ${product.price}
                </p>
                <p className="text-gray-600">Stock: {product.stock}</p>
              </div>
              <button
                onClick={() =>
                  addToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: 1,
                  })
                }
                className="bg-yellow-700 text-lg hover:bg-yellow-900 text-white px-4 py-2 rounded-lg mt-4"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ecommerce;

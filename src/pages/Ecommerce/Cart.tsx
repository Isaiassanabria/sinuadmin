import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ICart } from "../../interfaces/cart.interface";
import { submitCart } from "../../services/cart.service";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState<ICart[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  const removeFromCart = (id: number) => {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const total = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  const handleSubmit = () => {
    submitCart();
    navigate("/store");
    setTimeout(() => {
      toast.success("Compra realizada con éxito!");
    }, 1000);
  };

  return (
    <div
      className="h-screen w-full bg-gray-900 bg-cover bg-no-repeat fixed"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1499123785106-343e69e68db1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80')",
      }}
    >
      <div className="p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-4">Mi Carrito</h2>
        {cart.length === 0 ? (
          <>
            <p className="text-gray-700">Tu carrito está vacío</p>
            <Link
              to="/store"
              className="underline text-blue-500 hover:text-blue-700 mt-4 block"
            >
              Ir a la tienda
            </Link>
          </>
        ) : (
          <>
            <ul>
              {cart.map((product) => (
                <li key={product.id} className="mb-4">
                  <div className="flex justify-between">
                    <div>
                      <img
                        src={product.image}
                        alt="product"
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <h3 className="text-xl font-bold">{product.name}</h3>
                      <p className="text-gray-900 font-bold">
                        ${product.price}
                      </p>
                      <p className="text-gray-600">
                        Cantidad: {product.quantity}
                      </p>
                      <p>Total: ${product.total}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(product.id as number)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Eliminar
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
            </div>
            <div className="flex items-center justify-between">
              <Link
                to="/store"
                className="underline text-blue-500 hover:text-blue-700 mt-4 block"
              >
                Ir a la tienda
              </Link>
              <button
                onClick={handleSubmit}
                className="mt-4 py-2 px-3 bg-yellow-600 rounded-md shadow-md text-white font-bold hover:bg-yellow-900"
              >
                Finalizar compra
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;

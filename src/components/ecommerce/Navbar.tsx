import { Link } from "react-router-dom";
import cun from "../../assets/cunf.png";

const ShoppingCartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="h-6 w-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 7m0 0h14m-14 0a1 1 0 102 0m10 0a1 1 0 102 0"
    />
  </svg>
);

const Navbar = () => {
  return (
    <nav className="backdrop-blur-sm bg-white/65 w-full sticky top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center">
            <img className="h-6 w-6" src={cun} alt="Logo" />
            <span className="ml-2 text-xl font-bold italic text-gray-900">
              CUN Store
            </span>
          </div>
          <div className="flex items-center">
            <Link
              to="/store/cart"
              type="button"
              className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              <ShoppingCartIcon />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

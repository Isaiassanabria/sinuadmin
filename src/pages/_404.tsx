import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-900 text-gray-100 p-6 text-center">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404: Not Found</h1>
      <div className="text-8xl mb-4">😢</div>
      <p className="text-2xl mb-6">It's gone :(</p>
      <Link
        to="/"
        className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Volver
      </Link>
    </section>
  );
};

export default NotFound;

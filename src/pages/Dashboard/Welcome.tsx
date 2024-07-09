import useAuth from "../../context/useAuth";

const Welcome = () => {
  const { auth } = useAuth();
  const { username } = auth.user;
  return (
    <div className="w-full h-full bg-yellow-600 text-white flex items-center justify-center">
      <div className="p-8 bg-black bg-opacity-50 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-4">Bienvenido</h1>
        <p className="text-2xl">{username}</p>
      </div>
    </div>
  );
};

export default Welcome;

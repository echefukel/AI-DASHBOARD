import { useAuth } from "../context/AuthContext";

function Header() {
  const { user } = useAuth();

  return (
    <div className="bg-gray-900 text-white p-4 flex flex-col md:flex-row items-center justify-between">
      <h1 className="text-lg md:text-xl  font-bold text-center md:text-left italic font-lato">
        Welcome, {user.displayName} ...
      </h1>
      <img
        src={user.photoURL}
        alt="User Avatar"
        className="w-12 h-12 rounded-full mt-2 md:mt-0"
      />
    </div>
  );
}

export default Header;

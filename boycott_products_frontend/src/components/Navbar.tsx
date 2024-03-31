import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <div className="flex items-center mt-4 py-2 px-10 justify-between">
      {/* Logo */}
      <div 
        onClick={() => navigate("/")}
        className="text-3xl font-bold text-transparent bg-clip-text bg-red-to-green-rtl-gradient via-black cursor-pointer"
      >
        Boycott Israel
      </div>
      {/* Nav Items and Submit Brand Button */}
      <div className="flex items-center gap-10">
        {/* Nav Items */}
        <ul className="flex flex-row gap-10 text-xl">
          <li className="cursor-pointer font-medium hover:text-gray-700">
            About Us
          </li>
          <li className="cursor-pointer font-medium hover:text-gray-700">
            Ranking Systems
          </li>
          <li className="cursor-pointer font-medium hover:text-gray-700">
            Subscribe
          </li>
          <li className="cursor-pointer font-medium hover:text-gray-700">
            Resources
          </li>
        </ul>
        {/* Submit Brand Button */}
        <button
          onClick={() => navigate('submit-brand')} 
          className="rounded-xl bg-red-to-green-rtl-gradient via-black shadow-lg overflow-hidden flex items-center justify-center py-2.5 px-4 text-lg text-white font-medium hover:shadow-xl transition-shadow duration-300 ease-in-out"
        >
          Submit Brand
        </button>
      </div>
    </div>
  );
};

export default Navbar
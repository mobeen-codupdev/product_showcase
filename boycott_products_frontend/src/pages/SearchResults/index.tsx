import Navbar from "../../components/Navbar";
import SearchBar from "../../components/SearchBar";

const SearchResults = () => {
  return (
    <div className="w-full h-screen relative text-left text-black font-outfit overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 bg-[url('/bg.png')] bg-cover bg-center opacity-10 z-0" />

      {/* Content */}
      <div className="relative z-10">
        {/* Navbar */}
        <Navbar />

        {/* Search bar */}
        <SearchBar />

        {/* Search Results */}
        <div className="w-full px-24 flex flex-col items-center justify-center space-y-12 mt-12">
          <div className="w-full flex items-center justify-start space-x-12">
            <img
              className="w-[314px] h-[235px] object-cover"
              alt=""
              src="/coke.png"
            />
            <div className="flex-grow flex items-center">
              <div className="rounded-2xl bg-[#ffe6e6] shadow-[0px_4px_12px_rgba(0,_0,_0,_0.25)] overflow-hidden flex items-center justify-center py-2.5 px-4 gap-4">
                <img className="w-10 h-10" src="/cross.svg" alt="" />
                <div className="uppercase font-semibold text-2xl">
                  <span>Do </span>
                  <span className="text-red-500">Not</span>
                  <span> buy</span>
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-red-500 uppercase font-semibold text-center text-4xl">
            why?
          </h1>

          <p className="w-full max-w-[1001px] text-xl text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;

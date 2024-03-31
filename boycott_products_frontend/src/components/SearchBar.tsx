import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate()
  const [showResults, setShowResults] = useState(false)

  return (
    <div className="flex justify-center mt-12">
      <div className="relative w-full max-w-4xl h-18 bg-[#f9f9f9] rounded-3xl shadow-xl">
        <div className="flex items-center pl-4 py-2.5 h-full">
          <img
            className="w-10 h-10 stroke-[#B5B5B5]"
            src="/search.svg"
            alt="Search"
          />
          <input
            type="text"
            placeholder="Search category or brand"
            className="ml-4 bg-transparent w-full h-full outline-none text-xl text-gray-600 placeholder-[#B5B5B5]"
            onChange={(event: ChangeEvent<HTMLInputElement>) => { event.target.value !== '' ? setShowResults(true) : setShowResults(false)}}
          />
        </div>

        {/* Search Results */}
        {showResults && (
          <div
            className="absolute mt-4 flex flex-col items-center justify-start bg-white text-xl text-[#888888] rounded-3xl shadow-[0px_4px_8px_rgba(0,_0,_0,_0.25)] w-full cursor-pointer py-6 space-y-4"
            onClick={() => {
              setShowResults(false)
              navigate('/search-results')
            }}
          >
            <div className="text-gray border-b border-[#888888] w-full px-4">Coke</div>
            <div className="text-gray border-b border-[#888888] w-full px-4">Diet coke</div>
            <div className="text-gray w-full px-4">Pepsi</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar
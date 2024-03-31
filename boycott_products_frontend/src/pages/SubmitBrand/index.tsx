import Navbar from "../../components/Navbar";

const SubmitBrand = () => {
  return (
    <div className="w-full h-screen relative text-left text-black font-outfit overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 bg-[url('/bg.png')] bg-cover bg-center opacity-10 z-0" />

      {/* Content */}
      <div className="relative z-10">
        {/* Navbar */}
        <Navbar />

        <div className="flex flex-col items-center justify-center py-10">
          <div className="text-6xl font-semibold text-orange-600 text-center mb-10">
            Submit a brand for review
          </div>
          {/* Input Fields Container */}
          <div className="space-y-4 w-full max-w-3xl">
            <div className="flex flex-col space-y-2">
              <input
                className="rounded-xl shadow-md appearance-none border border-gray-400 w-full py-4 px-3 text-gray-400 text-lg leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Your name"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <input
                className="rounded-xl shadow-md appearance-none border border-gray-400 w-full py-4 px-3 text-gray-400 text-lg leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Your email address"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <div className="relative inline-block w-full text-gray-700">
                <select
                  className="rounded-xl shadow-md appearance-none border border-gray-400 w-full py-4 px-3 text-gray-400 text-lg leading-tight focus:outline-none focus:shadow-outline cursor-pointer"
                  aria-label="Select"
                >
                  <option disabled selected>
                    Select reason
                  </option>

                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                  <svg
                    className="fill-current h-8 w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <input
                className="rounded-xl shadow-md appearance-none border border-gray-400 w-full py-4 px-3 text-gray-400 text-lg leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Brand name"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <input
                className="rounded-xl shadow-md appearance-none border border-gray-400 w-full py-4 px-3 text-gray-400 text-lg leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Country"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <input
                className="rounded-xl shadow-md appearance-none border border-gray-400 w-full py-4 px-3 text-gray-400 text-lg leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Website/Social Media"
              />
            </div>
          </div>
          {/* Additional Information */}
          <div className="mt-4 w-full max-w-3xl">
            <textarea
              className="rounded-xl shadow-md appearance-none border border-gray-400 w-full py-4 px-3 text-gray-400 text-lg leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Additional information"
              rows={5}
            ></textarea>
          </div>
          {/* Submit Button */}
          <div className="mt-10 bg-green-600 hover:bg-green-700 text-white font-medium py-4 px-20 rounded-xl shadow cursor-pointer transition-all duration-300">
            Submit for Review
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitBrand;

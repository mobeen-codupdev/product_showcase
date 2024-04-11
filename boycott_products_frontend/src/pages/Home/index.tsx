import Navbar from '../../components/Navbar'
import SearchBar from '../../components/SearchBar'

const Home = () => {
    return (
        <>
            <div className="w-full h-screen relative text-left text-black font-outfit">
                {/* Background Layer */}
                <div className="absolute inset-0 bg-[url('/bg.png')] bg-cover bg-center opacity-10 z-0" />
                {/* Content */}
                <div className="relative z-10">
                    {/* Navbar */}
                    <Navbar />

                    {/* Search bar */}
                    <SearchBar />

                    {/* Header */}
                    <section className="mt-20 mx-auto p-4 space-y-4">
                        <h3 className="text-5xl text-center font-semibold">
                            Every penny spent matters.
                        </h3>
                        <h2 className="text-5xl text-center font-semibold text-[#149954] uppercase">
                            Know your alternatives
                        </h2>
                    </section>

                    {/* Badges */}
                    <section className="flex justify-center mt-12 pb-12">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                            <div className="rounded-2xl w-[240px] md:w-fit bg-[#e7ffdf] shadow-[0px_4px_12px_rgba(0,_0,_0,_0.25)] overflow-hidden flex items-center justify-start py-2.5 px-4 gap-4">
                                <img
                                    className="w-10 h-10"
                                    src="/frame.svg"
                                    alt=""
                                />
                                <span className="uppercase font-semibold text-2xl">
                                    Okay to buy
                                </span>
                            </div>
                            <div className="rounded-2xl w-[240px] md:w-fit bg-[#fff8d4] shadow-[0px_4px_12px_rgba(0,_0,_0,_0.25)] overflow-hidden flex items-center justify-start py-2.5 px-4 gap-4">
                                <img
                                    className="w-10 h-10"
                                    src="/caution.svg"
                                    alt=""
                                />
                                <span className="uppercase font-semibold text-2xl">
                                    Caution
                                </span>
                            </div>
                            <div className="rounded-2xl w-[240px] md:w-fit bg-[#ffe6e6] shadow-[0px_4px_12px_rgba(0,_0,_0,_0.25)] overflow-hidden flex items-center justify-start py-2.5 px-4 gap-4">
                                <img
                                    className="w-10 h-10"
                                    src="/cross.svg"
                                    alt=""
                                />
                                <div className="uppercase font-semibold text-2xl">
                                    <span>Do </span>
                                    <span className="text-red-500">Not</span>
                                    <span> buy</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Home

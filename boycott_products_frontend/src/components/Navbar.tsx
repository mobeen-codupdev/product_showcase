import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setShowMenu(false)
            }
        }

        window.addEventListener('resize', handleResize)

        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div className="relative flex items-center pt-4 py-2 px-4 md:px-10 justify-between">
            {/* Logo */}
            <div
                onClick={() => navigate('/')}
                className="text-3xl font-bold text-transparent bg-clip-text bg-red-to-green-rtl-gradient via-black cursor-pointer"
            >
                Boycott Israel
            </div>

            <div className="md:hidden">
                <button
                    onClick={toggleMenu}
                    className="text-gray-700 focus:outline-none"
                >
                    <svg
                        className="w-8 h-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <linearGradient
                                id="redToGreenGradient"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="0%"
                            >
                                <stop
                                    offset="0%"
                                    style={{
                                        stopColor: '#E4312B',
                                        stopOpacity: 1,
                                    }}
                                />
                                <stop
                                    offset="100%"
                                    style={{
                                        stopColor: '#149954',
                                        stopOpacity: 1,
                                    }}
                                />
                            </linearGradient>
                        </defs>
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            stroke="url(#redToGreenGradient)"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            </div>

            {/* Dropdown Menu */}
            <div
                className={`${
                    showMenu ? 'absolute z-10' : 'hidden md:flex'
                } top-full right-0 mt-2 mr-4 w-full xs:w-1/2 md:w-auto bg-white md:bg-transparent shadow-xl md:shadow-none rounded-lg md:flex flex-col md:flex-row items-center gap-10`}
            >
                <ul className="flex flex-col md:flex-row gap-5 text-md md:text-xl p-5 md:p-0">
                    <li className="cursor-pointer font-medium hover:text-gray-700">
                        <a href="#about">About Us</a>
                    </li>
                    <li className="cursor-pointer font-medium hover:text-gray-700">
                        <a href="#ranking">Ranking Systems</a>
                    </li>
                    <li className="cursor-pointer font-medium hover:text-gray-700">
                        <a href="#subscribe">Subscribe</a>
                    </li>
                    <li className="cursor-pointer font-medium hover:text-gray-700">
                        <a href="#resources">Resources</a>
                    </li>
                </ul>

                <button
                    onClick={() => navigate('submit-brand')}
                    className="rounded-xl bg-red-to-green-rtl-gradient via-black shadow-lg overflow-hidden flex items-center justify-center py-2 px-4 text-md md:text-lg text-white font-medium hover:shadow-xl transition-shadow duration-300 ease-in-out xs:mx-5 mb-4 lg:mb-0"
                >
                    Submit Brand
                </button>
            </div>
        </div>
    )
}

export default Navbar

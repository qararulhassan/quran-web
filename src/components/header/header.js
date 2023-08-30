// Desc: Header component
import { Link } from "react-router-dom"
import { Bell, Headphone, Logo2, Search } from "../../assets/svgIcons";
import { NavPath } from "../../pages";

export const Header = () => {

    return (
        <div className="header-wrapper">
            <div className="header-container">
                <div className="grid grid-cols-15 gap-4 items-center">
                    <div className="col-span-1">
                        <Link to={NavPath({path: "surahsList"})} className="w-full aspect-square flex justify-center items-center rounded-full text-white mx-auto relative">
                            <Logo2 svgStyle="w-20 aspect-square" />
                        </Link>
                    </div>
                    <div className="col-span-12 grid grid-flow-col">
                        <p className="flex gap-4 items-center text-4xl font-medium">Quran</p>
                        <div className="flex gap-6 justify-end">
                            <form className="relative border border-gray-300 hover:border-teal-500 rounded-3xl block cursor-pointer w-96 h-full group transition duration-300">
                                <input type="text" placeholder="Search here for surah, ayah..." className="cursor-pointer outline-none rounded-full block w-[90%] mx-auto h-full" />
                                <Search svgStyle="w-6 aspect-square text-gray-600 group-hover:text-teal-500 transition duration-300 -scale-x-100 absolute top-1/2 -translate-y-1/2 right-4" strokeWidth="40" />
                            </form>
                            <div className="flex gap-4">
                                <a href="#!" className="border border-gray-300 rounded-full w-12 aspect-square inline-flex justify-center group"><Headphone svgStyle="w-6 aspect-square text-gray-600 group-hover:text-teal-500 transition duration-300 -scale-x-100" strokeWidth="40" /></a>
                                <a href="#!" className="border border-gray-300 rounded-full w-12 aspect-square inline-flex justify-center group"><Bell svgStyle="w-6 aspect-square text-gray-600 group-hover:text-teal-500 transition duration-300 -scale-x-100" strokeWidth="40" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 flex justify-end">
                        <a href="#!" className="bg-gradient-to-br from-teal-400 to-teal-500 hover:bg-gradient-to-bl text-white rounded-full px-8 py-3 inline-block transition duration-300 text-lg">Support</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
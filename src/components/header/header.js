// Desc: Header component
import { Link } from "react-router-dom"
import { Bell, Headphone, QuranLogo, Search } from "../../assets/svgIcons";
import { NavPath } from "../../pages";

export const Header = () => {

    return (
        <div className="header-wrapper py-8 px-12">
            <div className="header-container">
                <div className="grid grid-cols-15 gap-4 items-center">
                    <div className="col-span-13 grid grid-flow-col">
                        <Link to={NavPath({path: "surahsList"})} className="w-full flex items-center rounded-full text-white mx-auto relative">
                            <QuranLogo svgStyle="w-48 h-auto text-black" />
                        </Link>
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
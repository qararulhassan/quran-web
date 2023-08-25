// Desc: Navigation component
import React from "react";
import { Book, Cog, Donate, Heart, PowerOff, Store } from "../../assets/svgIcons";
import { Link } from "react-router-dom";


export const NavPath = (props) => {
    if (props.path === "surahsList") {
        return "/"
    }
}

export const SideNavigation = () => {
    return (
        <React.Fragment>
            <ul className="w-full grid text-center gap-8">
                <li><Link to={NavPath({path: "surahsList"})} className="inline-block"><Book svgStyle="w-9 aspect-square text-gray-600 hover:text-teal-500 transition duration-300 active [&.active]:text-teal-500" strokeWidth="20" /></Link></li>
                <li><Link to={NavPath({path: "surahsList"})} className="inline-block"><Heart svgStyle="w-8 aspect-square text-gray-600 hover:text-red-500 transition duration-300 [&.active]:text-red-500" strokeWidth="25" /></Link></li>
                <li><Link to={NavPath({path: "surahsList"})} className="inline-block"><Donate svgStyle="w-8 aspect-square text-gray-600 hover:text-teal-500 transition duration-300 [&.active]:text-teal-500" strokeWidth="25" /></Link></li>
                <li><Link to={NavPath({path: "surahsList"})} className="inline-block"><Store svgStyle="w-8 aspect-square text-gray-600 hover:text-teal-500 transition duration-300 [&.active]:text-teal-500" strokeWidth="25" /></Link></li>
            </ul>
            <ul className="w-full grid text-center gap-8">
                <li><Link to={NavPath({path: "surahsList"})} className="inline-block"><Cog svgStyle="w-9 aspect-square text-gray-600 hover:text-teal-500 transition duration-300 [&.active]:text-teal-500" strokeWidth="1.25" /></Link></li>
                <li><Link to={NavPath({path: "surahsList"})} className="inline-block"><PowerOff svgStyle="w-9 aspect-square text-gray-600 hover:text-teal-500 transition duration-300 [&.active]:text-teal-500" strokeWidth="1.25" /></Link></li>
            </ul>
        </React.Fragment>
    )
}
// Desc: Navigation component
import React from "react";
import { Book, Cog, Donate, Heart, Microphone, PowerOff, Store } from "../../assets/svgIcons";
import { Link, useLocation } from "react-router-dom";
import { NavPath } from "../../pages";

export const SideNavigation = () => {
    const location = useLocation();
    const isCurrentPath = (path) => location.pathname === path;
    return (
        <React.Fragment>
            <ul className="w-full grid text-center gap-8">
                <li><Link to={NavPath({path: "surahsList"})} className="inline-block"><Book svgStyle={`w-9 aspect-square ${isCurrentPath('/') ? 'text-teal-500' : 'text-gray-600'} hover:text-teal-500 transition duration-300`} strokeWidth="20" /></Link></li>
                <li><Link to={NavPath({path: "surahsList"})} className="inline-block"><Heart svgStyle={`w-8 aspect-square ${isCurrentPath('/bookmarks') ? 'text-teal-500' : 'text-gray-600'} hover:text-red-500 transition duration-300`} strokeWidth="25" /></Link></li>
                <li><Link to={NavPath({path: "surahsList"})} className="inline-block"><Donate svgStyle={`w-8 aspect-square ${isCurrentPath('/donate') ? 'text-teal-500' : 'text-gray-600'} hover:text-teal-500 transition duration-300`} strokeWidth="25" /></Link></li>
                <li><Link to={NavPath({path: "recitorsList"})} className="inline-block"><Microphone svgStyle={`w-8 aspect-square ${isCurrentPath('/audio') ? 'text-teal-500' : 'text-gray-600'} hover:text-teal-500 transition duration-300`} strokeWidth="25" /></Link></li>
                <li><Link to={NavPath({path: "surahsList"})} className="inline-block"><Store svgStyle={`w-8 aspect-square ${isCurrentPath('/apps') ? 'text-teal-500' : 'text-gray-600'} hover:text-teal-500 transition duration-300`} strokeWidth="25" /></Link></li>
            </ul>
            <ul className="w-full grid text-center gap-8 mb-12">
                <li><Link to={NavPath({path: "surahsList"})} className="inline-block"><Cog svgStyle="w-9 aspect-square text-gray-600 hover:text-teal-500 transition duration-300 [&.active]:text-teal-500" strokeWidth="1.25" /></Link></li>
                <li><Link to={NavPath({path: "surahsList"})} className="inline-block"><PowerOff svgStyle="w-9 aspect-square text-gray-600 hover:text-teal-500 transition duration-300 [&.active]:text-teal-500" strokeWidth="1.25" /></Link></li>
            </ul>
        </React.Fragment>
    )
}
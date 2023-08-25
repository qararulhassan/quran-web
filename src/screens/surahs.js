// Desc: Content component
import React from "react";
import { SurahsListing } from "../components/content/surahs";
import { SideNavigation } from "../components/navigation/navigation";

export const SurahsBody = () => {

    return (
        <div className="content-wrapper">
            <div className="content-container">
                <div className="grid grid-cols-16 xxl:grid-cols-15 gap-4 adjust-height">
                    <div className="col-span-1 flex flex-col justify-between pt-8 py-16">
                        <SideNavigation />
                    </div>
                    <div className="col-span-12 grid grid-flow-col">
                        <div className="bg-gray-100 rounded-t-[2em] p-16 relative">
                            <SurahsListing />
                        </div>
                    </div>
                    <div className="col-span-3">
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
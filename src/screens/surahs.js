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
                    <div className="col-span-15 grid grid-flow-col">
                        <div className="bg-slate-100 p-16 relative">
                            <SurahsListing />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
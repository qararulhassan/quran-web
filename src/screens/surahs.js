import React from "react";
import { SurahsListing } from "../components/content/surahs";
import { SideNavigation } from "../components/navigation/navigation";

export const SurahsBody = () => {

    return (
        <div className="flex flex-grow content-wrapper">
            <div className="content-container w-full">
                <div className="grid grid-cols-16 gap-4">
                    <div className="col-span-1 flex flex-col justify-between pb-12">
                        <SideNavigation />
                    </div>
                    <div className="col-span-15 bg-slate-100 flex gap-8 p-12 pb-0">
                        <div className="flex flex-col h-[calc(100vh-15vh)] relative w-full">
                            <SurahsListing />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
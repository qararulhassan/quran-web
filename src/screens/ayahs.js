import React from 'react';
import { SideNavigation } from '../components/navigation/navigation';
import { AyahsListing } from '../components/content/ayahs';
import { SideSurahsListing } from '../components/content/surahs';

export const AyahsBody = () => {
    return (
        <div className="content-wrapper">
            <div className="content-container">
                <div className="grid grid-cols-16 gap-4 adjust-height">
                    <div className="col-span-1 flex flex-col justify-between pt-8 py-16">
                        <SideNavigation />
                    </div>
                    <div className="col-span-15 bg-slate-100 flex">
                        <div className='m-16 mr-4 mb-0 max-w-sm w-full listing-window relative'>
                            <SideSurahsListing />
                        </div>
                        <div className="p-16 pl-4 pb-0 relative w-full">
                            <AyahsListing />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
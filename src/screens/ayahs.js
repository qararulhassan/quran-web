import React from 'react';
import { SideNavigation } from '../components/navigation/navigation';
import { AyahsListing } from '../components/content/ayahs';
import { SurahsPlayer } from '../components/content/waveform';

export const AyahsBody = () => {
    return (
        <div className="content-wrapper">
            <div className="content-container">
                <div className="grid grid-cols-16 gap-4 adjust-height">
                    <div className="col-span-1 flex flex-col justify-between pt-8 py-16">
                        <SideNavigation />
                    </div>
                    <div className="col-span-12 grid grid-flow-col">
                        <div className="bg-gray-100 rounded-t-[2em] p-16 relative">
                            <AyahsListing />
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div className="w-full aspect-square relative">
                            <SurahsPlayer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
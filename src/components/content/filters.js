// Desc: Top filters component
import { Down, Grid, List, Up } from "../../assets/svgIcons"

export const TopFilters = () => {

    return (
        <div className="top-filters-wrapper mb-16">
            <div className="top-filters-container">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-3 flex gap-8 items-center">
                        <Grid svgStyle="w-8 aspect-square hover:text-teal-500 cursor-pointer transition duration-300 active [&.active]:text-teal-500" />
                        <List svgStyle="w-9 aspect-square hover:text-teal-500 cursor-pointer transition duration-300 [&.active]:text-teal-500" strokeWidth="25" />
                    </div>
                    <div className="col-span-9 flex gap-8 justify-end">
                        <button type="button" className="grid gap-4 px-4 py-3 rounded-xl hover:bg-white transition duration-300 active [&.active]:bg-white">
                            <span className="text-gray-400 font-medium text-left text-sm">Sort by</span>
                            <span className="font-bold flex gap-6">Serial <Up svgStyle="w-4 aspect-square" strokeWidth="1" /></span>
                        </button>
                        <button type="button" className="grid gap-4 px-4 py-3 rounded-xl hover:bg-white transition duration-300 [&.active]:bg-white">
                            <span className="text-gray-400 font-medium text-left text-sm">Sort by</span>
                            <span className="font-bold flex gap-6">Alphabet <Down svgStyle="w-4 aspect-square" strokeWidth="1" /></span>
                        </button>
                        <button type="button" className="grid gap-4 px-4 py-3 rounded-xl hover:bg-white transition duration-300 [&.active]:bg-white">
                            <span className="text-gray-400 font-medium text-left text-sm">Sort by</span>
                            <span className="font-bold flex gap-6">Total Ayah <Down svgStyle="w-4 aspect-square" strokeWidth="1" /></span>
                        </button>
                        <button type="button" className="grid gap-4 px-4 py-3 rounded-xl hover:bg-white transition duration-300 [&.active]:bg-white">
                            <span className="text-gray-400 font-medium text-left text-sm">Sort by</span>
                            <span className="font-bold flex gap-6">Parah <Down svgStyle="w-4 aspect-square" strokeWidth="1" /></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
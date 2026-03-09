import NavLink from "./NavLink";
import NavBtns from "./NavBtns";

export default function Navbar(){
    return(
        <div className="flex items-center justify-between py-4 px-6 md:px-12 lg:px-16 xl:px-20 shadow-xl bg-first-color">
            <div className="flex tracking-wider gap-1 md:gap-2 whitespace-nowrap">
                <h2 className="font-bold text-3xl scale-y-105 text-text-color">Muhiris</h2>
                <h2 className="font-bold text-3xl scale-y-105 text-black">Doctor</h2>
            </div>
            <div className="hidden md:flex">
                <NavLink/>
            </div>
            <div>
                <NavBtns/>
            </div>
        </div>
    )
}
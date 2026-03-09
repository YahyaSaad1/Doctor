import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Dashboard(){
    return(
        <div className="flex">
            <Sidebar/>
            <Navbar/>
        </div>
    )
}
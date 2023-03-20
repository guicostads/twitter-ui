import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import './Default.css'

const Default = () => {
    return (
        <div className='layout'>
            <Sidebar />
            <div className="content">
                {/* children: */}
                <Outlet />
            </div>
        </div>
    )
}

export default Default
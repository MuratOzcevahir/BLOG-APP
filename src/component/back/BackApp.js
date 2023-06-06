import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './component/Navbar'
import Sidebar from './component/Sidebar'
import BackContext, { backContext } from '../../contex/back-contex/BackContext'
function BackApp() {
    if (checkCookie("user") == false) {
        window.location.href = "/login"
    }
    return (
        <>
            <Navbar />
            <Sidebar />
            <div className="content-wrapper">
                <Outlet />
            </div>
        </>
    )
}

export default BackApp
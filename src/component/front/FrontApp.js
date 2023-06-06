import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from './component/top-menu/Menu'
import Home from './page/Home'

function FrontApp() {

    document.getElementById("body").setAttribute("class","hold-transition layout-top-nav")
    return (

        <>
            <div className='wrapper'>
                <Menu />
                <Outlet />
            </div>

        </>
    )
}

export default FrontApp
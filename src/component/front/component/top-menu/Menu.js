import React from 'react'
import MenuItem from './MenuItem'

function Menu() {
    return (
        <>

            <nav className="main-header navbar navbar-expand-md navbar-light navbar-white">
                <div className="container">


                    <button className="navbar-toggler order-3" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse order-3 justify-content-between" id="navbarCollapse">
                        <ul className="navbar-nav">
                            <MenuItem link="/" title="Home" />
                            <MenuItem link="/blogs" title="Blogs" />
                            <MenuItem link="/contact" title="Contact" />
                        </ul>
                        <div>
                            WELCOME TO BLOG
                        </div>
                        <div className="input-group input-group-sm " style={{width:"250px"}}>
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                            <div className="input-group-append">
                                <button className="btn btn-navbar" type="submit">
                                    <i className="fas fa-search"></i>
                                </button>
                            </div>
                        </div>

                    </div>

                </div>

            </nav>


        </>

    )
}

export default Menu
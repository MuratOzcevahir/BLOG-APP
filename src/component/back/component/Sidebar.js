import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <span href="../../index3.html" className="text-white">
                    <Link to="/admin">

                        <span className="brand-text font-weight-light">Admin v1.5</span>
                    </Link>
                </span>
                <div className="sidebar">
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-copy"></i>
                                    <p>
                                        Blog İşlemleri
                                        <i className="fas fa-angle-left right"></i>
                                        <span className="badge badge-info right">3</span>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to="/admin/addblog" className="nav-link">
                                            <i className="far fa-star nav-icon"></i>
                                            <p>Blog Ekle </p>

                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/admin/listblog" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Blog Listesi </p>
                                        </Link>
                                    </li>
                                     <li className="nav-item">
                                        <Link to="/admin/listcomment" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Comment List</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
                <p>ad asd as das d</p>
            </aside>
        </>

    )
}

export default Sidebar
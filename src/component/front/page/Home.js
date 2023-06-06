import React, { useContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import PageTitle from '../component/PageTitle'
import ContentHolder from "../component/ContentHolder"
import { backContext } from '../../../contex/back-contex/BackContext'
import BlogItem from '../component/BlogItem'
function Home() {
    const [blogList, setblogList] = useState([])
    const ctx = useContext(backContext)
    useEffect(() => {

        ctx.dispatcher(
            {
                type: "GET_ALL_BLOG",
                callback: (blogs) => {
                    setblogList(blogs.data.sort(function(a,b){return b.id-a.id}));
                    console.log(blogs)

                }
            }
        )

    }, [])
    return (

        <>
            <div className="content-wrapper" >
                <PageTitle title="Home" description="her şey burada" />

                <ContentHolder>
                    <div className="row">
                        <div className="col-lg-8">
                            {
                                blogList.map((blogItem, i) => {
                                    return (

                                        <BlogItem key={i} blogid={blogItem.id} title={blogItem.Title} image={blogItem.Image} description={blogItem.Description} />

                                    )
                                })
                            }
                        </div>
                        <div className="col-lg-4">
                            <div className="card sticky-top">
                            <div className="card-body">
                            <div className="card-header">
                                        <h5 className="card-title m-0">New Blogs</h5>
                                    </div>
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title m-0">Featured</h5>
                                    </div>
                                    <div className="card-body">
                                        <h6 className="card-title">Special title treatment</h6>

                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div> <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title m-0">Featured</h5>
                                    </div>
                                    <div className="card-body">
                                        <h6 className="card-title">Special title treatment</h6>

                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div> <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title m-0">Featured</h5>
                                    </div>
                                    <div className="card-body">
                                        <h6 className="card-title">Special title treatment</h6>

                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

                </ContentHolder>
            </div>


        </>
    )
}

export default Home
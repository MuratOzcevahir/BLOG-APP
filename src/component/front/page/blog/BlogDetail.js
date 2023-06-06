import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { backContext } from '../../../../contex/back-contex/BackContext'
import ContentHolder from '../../component/ContentHolder'
import PageTitle from '../../component/PageTitle'
import Comment from './Comment'

function BlogDetail() {
    var bid = useParams();

    var ctx = useContext(backContext)
    const [foundBlog, setfoundBlog] = useState({})
    const [foundBlogid, setfoundBlogid] = useState(-1)

    useEffect(() => {


        ctx.dispatcher({
            type: "GET_BLOG", id: bid.blogid, callback: (blog) => {
                setfoundBlog(blog)

                setfoundBlogid(blog.id)

                console.log(blog.id + " blogdetail id")
            }
        })
    }, [])
    return (

        <>

            <PageTitle title={`Blog Detail ${bid.blogid + bid.blognum}`} description="" />

            <ContentHolder>
                <div className="card">
                    <div className="card-header">
                        <div className='d-flex justify-content-between'>

                            <h3 className="card-title">{foundBlog.Title}</h3>
                            <div className='d-flex align-items-start'>
                                <h6 className="card-title" style={{ fontSize: "12px" }}> 09/10/2023</h6>
                                <h6 className="card-title">/ {bid.blogid + bid.blognum} </h6>
                            </div>

                        </div>
                    </div>
                    <div className="card-body">


                        <div className="card card-primary">
                            <div className="card-header">
                                <h4 className="card-title w-100">

                                    {foundBlog.Description}
                                </h4>
                            </div>
                            <img src={foundBlog.Image} className="p-1" alt="" style={{ width: "100%" }} />

                            <div className="card-body">
                                <span>      {foundBlog.Content}</span>
                            </div>

                        </div>

                        <div className="card card-secondary">
                            <div className="card-header">
                                <h4 className="card-title w-100">
                                    Yorumlar
                                </h4>
                            </div>
                            <div className="card-body">
                                {console.log(foundBlogid +  " blogid detail html")}
                                <Comment blogid={foundBlogid} />

                            </div>
                        </div>
                    </div>

                </div>

            </ContentHolder>

        </>
    )
}

export default BlogDetail
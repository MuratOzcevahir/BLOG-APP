import React from 'react'
import { Link } from 'react-router-dom'

function BlogItem(prop) {
    return (
        <div className="card card-primary card-outline">
            <div className="card-body">
                <div className='row'>
                    <div className='col-lg-4'>
                        <img src={`${prop.image}`} alt="" width="100%" />
                    </div>
                    <div className='col-lg-8'>
                        <h3 >{prop.title}</h3>
                        <p className="card-text">
                            {
                                prop.description.length <= 200 &&
                                <>
                                    {prop.description.substring(0, 250).trim()}
                                    <Link to={`/blogdetail/${prop.blogid}/${prop.description.length}`} className="card-link"> yorum yap</Link>
                                </>
                            }
                            {
                                prop.description.length > 200 &&
                                <>
                                    {prop.description.substring(0, 250).trim() + "..."}
                                    <Link to={`/blogdetail/${prop.blogid}/${prop.description.length}`} className="card-link"> dahası</Link>

                                </>
                            }
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BlogItem
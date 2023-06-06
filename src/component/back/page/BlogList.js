import React, { useContext, useEffect, useState } from 'react'
import ContentTitle from '../component/ContentTitle'
import ContentHolder from '../component/ContentHolder'
import { backContext } from '../../../contex/back-contex/BackContext'
import Modal from '../component/Modal'
import { Link } from 'react-router-dom'
function BlogList() {
    var ctx = useContext(backContext)
    const [blogData, setblogData] = useState([])
    const [searchWord, setSearchWord] = useState("")
    const [loading, setLoading] = useState(true)
    const [selectedId, setselectedId] = useState("")
    useEffect(() => {
        ctx.dispatcher(
            {
                type: "GET_ALL_BLOG",
                callback: (data) => {
                    var fullData = data.data;
                    var filteredData = fullData.filter((blog) => {
                        if (searchWord == "" || searchWord == null || searchWord == undefined) {
                            return true;
                        }
                        if (blog.Title.toLowerCase().includes(searchWord.toLowerCase())) {
                            return true
                        } else {
                            return false
                        }

                    })

                    setblogData(filteredData);
                    setLoading(false)
                }
            }
        )
    }, [searchWord])
    return (
        <>
            <ContentTitle title="Blog Listesi" />
            <ContentHolder>
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Blog verileri</h3>
                        <div className="card-tools">
                            <div className="input-group input-group-sm">
                                <input onChange={(e) => {
                                    console.log("çlıştı")
                                    setSearchWord(e.target.value)
                                }} value={searchWord} type="text" name="table_search" className="form-control float-right" placeholder="Search" />


                            </div>
                        </div>
                    </div>
                    <div className="card-body table-responsive p-0">
                        <table className="table table-hover text-nowrap">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Başlık</th>
                                    <th>Açıklama</th>
                                    <th>İşlemler</th>
                                </tr>
                            </thead>
                            <tbody>
                                {

                                    loading == true ?
                                        <>
                                            <tr><td colSpan="4"></td></tr>
                                        </>
                                        :
                                        blogData.map((blogItem, i) => {

                                            return (

                                                <tr key={i}>
                                                    <td>{blogItem.id}</td>
                                                    <td>{blogItem.Title}</td>
                                                    <td>{blogItem.Description}</td>
                                                    <td>
                                                        <div className='btn-group'>
                                                            <Link to={`/admin/updateblog/${blogItem.id}`} type="button" className='btn btn-primary'>Güncelle</Link>
                                                            <button onClick={()=>{setselectedId(blogItem.id)}} type="button" className='btn btn-danger' data-toggle="modal" data-target="#deleteBlog">Sil</button>

                                                        </div>

                                                    </td>
                                                </tr>
                                            )
                                        })


                                }


                            </tbody>
                        </table>
                        <Modal id={selectedId} />
                    </div>
                </div>



            </ContentHolder>
        </>
    )
}

export default BlogList
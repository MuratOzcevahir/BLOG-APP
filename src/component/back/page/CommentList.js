import React, { useContext, useEffect, useState } from 'react'
import ContentTitle from '../component/ContentTitle'
import ContentHolder from '../component/ContentHolder'
import { backContext } from '../../../contex/back-contex/BackContext'
import Modal from '../component/Modal'
import { Link } from 'react-router-dom'
function CommentList() {
    var ctx = useContext(backContext)
    const [commentData, setCommentData] = useState([])
    const [foundComment, setfoundComment] = useState({})
    var foundCommentTest = {}
    const [commentId, setcommentId] = useState(-1)
    var testCommentId = -1
    const [action, setAction] = useState(false)
    const [loading, setLoading] = useState(true)

    const CommentDeleteHandler = (id) => {
        setAction(true)
        ctx.CommentTask({ type: "DELETE_COMMENT", id: id, callback: () => { } })
    }
    const IdDegistir = (id) => {
        testCommentId = id

    }
    const CommentUpdate = (id) => {

    }

    const CommentFind = (id) => {

        setAction(true)
        ctx.CommentTask({
            type: "ACCEPT_COMMENT", id: id
        })


    }
    useEffect(() => {
        ctx.dispatcher(
            {
                type: "GET_ALL_COMMENT",
                callback: (data) => {
                    setLoading(false)
                    setCommentData(data)
                    setAction(false)
                }
            }
        )

    }, [action])
    return (
        <>
            <ContentTitle title="Yorum Listesi" />
            <ContentHolder>
                {foundComment.id} -
                {`${foundComment.IsPublished}`} -
                {`${foundComment.UserComment}`}-
                {`${foundComment.BlogId}`}-
                {`${foundComment.AddedDate}`}-
                {`${foundComment.ConfirmedDate}`}-
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Yapılan Tüm yorumlar</h3>

                    </div>
                    <div className="card-body table-responsive p-0">
                        <table className="table table-hover text-nowrap">
                            <thead>
                                <tr>
                                    <th>BLOG ID</th>
                                    <th>Yorum</th>
                                    <th>Eklenme-Onay/tarihi</th>
                                    <th>İşlemler</th>
                                </tr>
                            </thead>
                            <tbody>
                                {


                                    commentData.map((commentItem, i) => {
                                        return (

                                            <tr key={i}>
                                                <td>{commentItem.BlogId}</td>
                                                <td >{commentItem.UserComment}</td>
                                                <td className='d-flex justify-content-between'>
                                                    <div>
                                                        {commentItem.AddedDate}
                                                    </div>
                                                    <div>
                                                        {`${commentItem.IsPublished}`}
                                                    </div>
                                                    <div>
                                                        {commentItem.ConfirmedDate}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className='btn-group'>
                                                        <button type="button" className='btn btn-primary'>Detay</button>
                                                        <button onClick={() => {
                                                            IdDegistir(commentItem.id);
                                                            CommentFind(commentItem.id)
                                                        }

                                                        } type="button" className='btn btn-warning'>Onay</button>
                                                        <button onClick={() => {
                                                            ctx.CommentTask({
                                                                type: "DELETE_COMMENT", id: commentItem.id
                                                            })
                                                            setAction(true)
                                                        }} type="button" className='btn btn-danger'>sil</button>
                                                    </div>
                                                    {foundComment.id}
                                                    {commentId}
                                                </td>
                                            </tr>
                                        )
                                    })


                                }


                            </tbody>
                        </table>

                    </div>
                </div>



            </ContentHolder>
        </>
    )
}

export default CommentList
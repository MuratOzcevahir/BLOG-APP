import React, { useContext, useEffect, useState } from 'react'
import { backContext } from '../../../../contex/back-contex/BackContext'

function Comment(prop) {

    console.log(prop.blogid + " blog id comment")
    var ctx = useContext(backContext)
    const [username, setUsername] = useState("")
    const [userComment, setUserComment] = useState("")
    const [totalComment, settotalComment] = useState(0)
    const [comments, setComments] = useState([])
    const [newComment, setnewComment] = useState(false)
    function SaveComment() {
        ctx.CommentTask({
            type: "ADD_COMMENT",
            data: {
                Username: username,
                UserComment: userComment,
                IsPublished: false,
                BlogId: prop.blogid,
                AddedDate: new Date().toLocaleString(),
                ConfirmedDate: "NOTYET"
            },
            completed: () => {
            }
        })
    }
    useEffect(() => {
        console.log("çalıştı");
        ctx.dispatcher({
            type: "GET_ALL_COMMENT",
            callback: (com) => {
                settotalComment(com.filter((comf) => { return comf.BlogId === prop.blogid }).length)

                console.log("topam yotum" + totalComment)
                setComments(com.sort((a, b) => { return b.id - a.id }).filter((comf) => { return comf.BlogId === prop.blogid && comf.IsPublished === true }))
                console.log(comments)
                setnewComment(false)
            }
        })
    }, [prop.blogid, newComment])

    return (
        <div className="card-body">
            <div className="tab-content">
                <div className="active tab-pane" id="activity">
                    <div className="post">

                        {
                            comments == null || comments == undefined ?
                                <>No comment found!</>
                                :
                                comments.map((commentItem, i) => {
                                    return (
                                        <div key={i}>
                                            <div className="user-block">
                                                <img className="img-circle img-bordered-sm" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="user image" />
                                                <span className="username">
                                                    {commentItem.Username}

                                                </span>
                                                <span className="description">

                                                    {
                                                        commentItem.Username === "murat" ?
                                                            commentItem.AddedDate + " admin"
                                                            :
                                                            commentItem.AddedDate

                                                    }</span>
                                            </div>
                                            <p>
                                                {commentItem.UserComment}
                                            </p>
                                            <hr></hr>
                                        </div>
                                    )
                                })

                        }


                        <div className='d-block align-items-center'>
                            <input onChange={(e) => { setUsername(e.target.value) }} value={username} className="form-control  mb-2 w-50" type="text" placeholder="Your name" />
                            <textarea onChange={(e) => { setUserComment(e.target.value) }} value={userComment} rows="4" className="form-control  mb-2" type="text" placeholder="Type a comment" >
                            </textarea>
                            <button onClick={() => {
                                setnewComment(true);
                                SaveComment()
                            }} type="button" className='btn btn-warning float-right w-25'>Gönder</button>
                        </div>
                    </div>
                </div>
                Onaylanmamış yorum {totalComment - comments.length}

            </div>
        </div >


    )
}

export default Comment
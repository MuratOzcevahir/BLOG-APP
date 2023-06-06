import React, { useContext, useEffect, useState } from 'react'
import ContentHolder from '../component/ContentHolder'
import ContentTitle from '../component/ContentTitle'
import Input from '../component/Input'
import { backContext } from '../../../contex/back-contex/BackContext'
import { useParams } from 'react-router-dom'
function UpdateBlog() {
    var selected = useParams("id")
    console.log(selected.id)
    var ctx = useContext(backContext)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [content, setContent] = useState("")
    const [selectedId, setselectedId] = useState("")
    useEffect(() => {

        ctx.dispatcher({
            type: "GET_BLOG", id: selected.id, callback: (foundBlog) => {

                console.log(foundBlog)
                setTitle(foundBlog.Title);
                setDescription(foundBlog.Description);
                setImage(foundBlog.Image);
                setContent(foundBlog.Content);
                setselectedId(foundBlog.id)
            }
        })
    }, [])

    const Save = () => {
        ctx.dispatcher({
            type: "UPDATE_BLOG",
            id: selectedId,
            data: {
                Title: title,
                Description: description,
                Content: content,
                Image: image
            },
            completed: () => {

                window.location.href = "/admin/listblog";
            }
        })
    }

    return (
        <>
            <ContentTitle title="Update Blog" />
            <ContentHolder>
                <div className="card card-warning">
                    <div className="card-header">
                        <h3 className="card-title">Update Blog</h3>
                    </div>
                    <div className="card-body">

                        <Input title="Blog Başlığı" name="title" set={setTitle} state={title} />
                        <Input title="Blog Açıklaması" name="desc" set={setDescription} state={description} />
                        <Input title="Blog Fotoroğafı" name="image" set={setImage} state={image} />

                        <div className="form-group">
                            <label html="content">İçerik</label>
                            <textarea onChange={(e) => { setContent(e.target.value) }} value={content} className="form-control" id="content" name="content" placeholder="eg; açıklama" rows="5" >
                            </textarea>
                        </div>
                        <button onClick={Save} type="button" className='btn btn-warning w-25'>Güncelle</button>
                    </div>

                </div>


            </ContentHolder>
        </>
    )
}

export default UpdateBlog
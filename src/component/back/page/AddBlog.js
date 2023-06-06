import React, { useContext, useState } from 'react'
import ContentHolder from '../component/ContentHolder'
import ContentTitle from '../component/ContentTitle'
import Input from '../component/Input'
import { backContext } from '../../../contex/back-contex/BackContext'
function AddBlog() {
    var ctx = useContext(backContext)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [content, setContent] = useState("")
    const Save = () => {
        ctx.dispatcher({
            type: "ADD_BLOG",
            data: {
                Title: title,
                Description: description,
                Content: content,
                Image: image
            },
            completed: ()=>{

                window.location.href ="/admin/listblog";
            }
        })
    }

    return (
        <>
            <ContentTitle title="Add BLog" />
            <ContentHolder>
                <div className="card card-primary">
                    <div className="card-header">
                        <h3 className="card-title">Add Blog</h3>
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
                        <button onClick={Save} type="button" className='btn btn-primary w-25'>Ekle</button>
                    </div>

                </div>


            </ContentHolder>
        </>
    )
}

export default AddBlog
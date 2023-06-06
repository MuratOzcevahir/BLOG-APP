import React, { useContext } from 'react'
import { backContext } from '../../../contex/back-contex/BackContext'

function Modal(prop) {

    var ctx = useContext(backContext)

    const DeleteHandler =()=>{
ctx.dispatcher({type : "DELETE_BLOG", id:prop.id,callback:()=>{

    window.location.href = "/admin/listblog"
}})

    }
    return (
        <div className="modal fade show" id="deleteBlog"   aria-modal="true" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">{prop.id}</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Bu işlem geri alınamaz kaydı silmek istediğinizden emin misiniz</p>
                    </div>
                    <div className="modal-footer justify-content-between">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Vazgeç</button>
                        <button onClick={DeleteHandler} type="button" className="btn btn-primary">Evet/sil</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
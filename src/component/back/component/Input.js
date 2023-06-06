import React from 'react'

function Input({name,title,set,state}) {
    return (

        <div className="form-group">
            <label htmlFor={name}>{title}</label>
            <input onChange={(e) => { set(e.target.value) }} value={state} type="text" className="form-control" id={name} name={name} placeholder="eg; Başlık" />
        </div>
    )
}

export default Input
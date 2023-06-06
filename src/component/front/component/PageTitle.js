import React from 'react'

function PageTitle(prop) {
    return (
        <div className="content-header">
            <div className="container">
                <div className="row mb-2">
                    <div className="col-sm-6">
                        <h1 className="m-0">{prop.title} <small>{prop.description}</small></h1>
                    </div>
                    <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"> {prop.title}</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageTitle
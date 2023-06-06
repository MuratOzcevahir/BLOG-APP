import React from 'react'

function ContentHolder(prop) {
    return (
        <>

            <div className="content">
                <div className="container">
                    {prop.children}
                </div>
            </div>
        </>
    )
}

export default ContentHolder
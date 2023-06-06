import React from 'react'
function ContentHolder(props) {
    return (
        <>
            <section className='content'>
                <div className='container-fluid'>
                    {props.children}
                </div>
            </section>
        </>


    )
}
export default ContentHolder
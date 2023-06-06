import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BackApp from './component/back/BackApp'
import AddBlog from './component/back/page/AddBlog'
import BlogList from './component/back/page/BlogList'
import CommentList from './component/back/page/CommentList'
import UpdateBlog from './component/back/page/UpdateBlog'
import FrontApp from './component/front/FrontApp'
import BlogDetail from './component/front/page//blog/BlogDetail'
import Blogs from './component/front/page/blog/Blogs'
import Contact from './component/front/page/Contact'
import Home from './component/front/page/Home'
import ErrorPage from './component/global/ErrorPage'
import Login from './Login'

function GlobalApp() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route path='/admin' element={<BackApp />}>
                        <Route path="/admin/addblog" element={<AddBlog />} />
                        <Route path="/admin/listblog" element={<BlogList />} />
                        <Route path="/admin/listcomment" element={<CommentList />} />
                        <Route path="/admin/updateblog/:id" element={<UpdateBlog />} />
                    </Route>
                    <Route path="/" element={<FrontApp />}>
                    <Route path="/" element={<Home />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/blogs" element={<Blogs />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/blogdetail/:blogid/:blognum" element={<BlogDetail />} />
                    </Route>
                    <Route path="*" element={<ErrorPage />} />


                </Routes>
            </BrowserRouter>
        </>
    )
}

export default GlobalApp
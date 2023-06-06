import React, { useState } from 'react'

function Login() {
    document.getElementById("root").setAttribute("class", "login-box")
    document.getElementById("body").setAttribute("class", "hold-transition login-page")
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")


    const LoginHandler = () => {

        if (username === "murat" && password === "123") {
            setCookie("user", "murat", 45)
            window.location.href = "/admin"
        }
    }
    return (
        <div className="login-box">
            <div className="login-logo">
                <b>BLOG</b>
            </div>
            <div className="card">
                <div className="card-body login-card-body">
                    <p className="login-box-msg">Enter the blog</p>

                    <div className="input-group mb-3">
                        <input onChange={(e) => { setusername(e.target.value) }} value={username} type="email" className="form-control" placeholder="Email" />
                        <div className="input-group-append">
                            <div className="input-group-text">
                                <span className="fas fa-envelope"></span>
                            </div>
                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <input onChange={(e) => { setpassword(e.target.value) }} value={password} type="password" className="form-control" placeholder="Password" />
                        <div className="input-group-append">
                            <div className="input-group-text">""
                                <span className="fas fa-lock"></span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <button onClick={LoginHandler} type="submit" className="btn btn-primary btn-block">Sign In</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login
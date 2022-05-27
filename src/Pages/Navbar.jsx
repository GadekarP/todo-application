import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg alert-info bg-info">
            <div className="container">
                <Link className="navbar-brand" to={"/"}>Task Tracker</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" to={"/"}>Home</Link>
                        <Link className="nav-link" to={"/login"}>Login</Link>
                        <Link className="nav-link" to={"/signup"}>Signup</Link>
                        <Link className="nav-link" to={"/todo"}>Todo</Link>
                    </div>
                </div>
            </div>
        </nav>

    )
}

import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ padding: '0px' }}>
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="#">
                            <p className='backk'>IEEE<br></br>MLRIT</p>
                        </NavLink>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/Commitees">Commitees</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/call for Papers">Call for Papers</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/Authors Info">Authors Info</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/Keynote Speakers">Keynote Speakers</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/Program Schedule">Program Schedule</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/Registration">Registration</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/Travel plan">Travel plan</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/Special Session">Special Session</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/Contact">Contact Us</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

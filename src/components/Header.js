import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

let Header = (props) => {
    return (
        <>
            <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`} style={{position: 'sticky',top:'0',width:'100%'}}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.brand}</Link>
                    {/* <a className="navbar-brand" href="/">{props.brand}</a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                                {/* <a className="nav-link" href="/">About</a> */}
                            </li>
                        </ul>
                        <button className={`btn mx-2 btn-outline-${props.mode === 'light'?'dark':'light'}`} type="submit" onClick={props.toggleMode}>{props.darkbtn}</button>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

        </>
    )
}

Header.propTypes = {
    brand: PropTypes.string.isRequired
}

Header.defaultProps = {
    brand: "Brandname"
}

export default Header;
import React,{useState} from 'react';
import PropTypes from 'prop-types';

let Header = (props) => {
    const [darkbtn, setDarkbtn] = useState("Dark Mode");
    let toggleDark = () => {
        if(darkbtn === "Dark Mode"){
            setDarkbtn("Light Mode");
        }
        else{
            setDarkbtn("Dark Mode");
        }
    }

    return (
        <>
            <nav className={darkbtn === "Dark Mode"? "navbar navbar-expand-lg bg-light navbar-light": "navbar navbar-expand-lg bg-dark navbar-dark"}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.brand}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Link</a>
                            </li>
                        </ul>
                        <button className={darkbtn === "Dark Mode"? " btn mx-2 btn-outline-dark": "btn mx-2 btn-outline-light"} type="submit" onClick={toggleDark}>{darkbtn}</button>
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
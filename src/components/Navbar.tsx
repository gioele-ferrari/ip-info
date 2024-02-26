import React from "react"

function Navbar() {
    return (
        <div className="app-navbar">
            <h1 className="app-logo fl-row">
                tracker
                <img src="./img/compass.png" width={25} height={25}  alt={""}></img>
            </h1>
            <div className="app-login fl-row">
                <a className="btn btn-md-primary disabled" href="#">
                    Login
                </a>
                <a className="btn btn-md-secondary disabled" href="#">
                    Sign up
                </a>
            </div>
      </div>
    );
}

export default Navbar
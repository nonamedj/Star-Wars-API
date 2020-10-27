import React from "react";

function Signup() {

    return (
        <div id="sign-up-section">
            <h2>Sign Up to SW API</h2>
            <p>For the latest on info.</p>
            <input type="email" className="form-control" id="sign-up-input" placeholder="Enter email address" />
            <button className="btn btn-primary" id="sign-up-button">Sign Up</button>
        </div>  
    )
}
export default Signup;
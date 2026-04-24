import React from "react";
import "./Sign.css";
function Sign() {
  return (
    <div className="signpage">
      <div className="container">
        <div className="sign">
          <div className="lefts">
            <img src="public/imgs/Side Image.png" alt="" />
          </div>
          <div className="rights">
            <div className="form">
              <form action="">
                <input type="text" placeholder="Name:" />
                <hr />
                <input type="text" placeholder="Email or Phone Number:" />
                <hr />
                <input type="text" placeholder="Password:" />
                <hr />
              </form>
              <div className="btw">
                <button className="bt1">Create an Account</button>
                <button className="btss">
                  <i class="fa-brands fa-google"></i>Sign up with Google
                </button>
                <p>Already have account? Log in</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sign;

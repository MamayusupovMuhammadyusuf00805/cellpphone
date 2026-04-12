import React from 'react'
import "./Sign.css"
function Sign() {
  return (
    <div className='signpage'>
        <div className="container">
            <div className="sign">
                <div className="lefts">
                    <img src="public/imgs/Side Image.png" alt="" />
                </div>
                <div className="rights">
                    <div className="form">
                        <h1>Create an account</h1>
                        <p>Enter your details below</p>
                        <p>Name:</p>
                        <hr />
                        <p>Email or Phone Number:</p>
                        <hr />
                        <p>Password</p>
                        <hr />
                   <div className="btw">
                         <button>Create an Account</button>
                        <button> <i class="fa-brands fa-google"></i>Sign up with Google</button>
                   </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sign
import React from 'react'
import "./Log.css"
function Log() {
  return (
    <div className='logpage'>
         <div className="container">
            <div className="sign">
                <div className="lefts">
                    <img src="public/imgs/Side Image.png" alt="" />
                </div>
                <div className="rights">
                    <div className="form">
                        <h1>Log in to Exclusive</h1>
                        <p>Enter your details below</p>
                        <p>Email or Phone Number:</p>
                        <hr />
                        <p>Password</p>
                        <hr />
                   <div className="btw">
                         <button>Create an Account</button>
                        <button> Forget Password?</button>
                   </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Log
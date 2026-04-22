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
                 <form action="">
                   <h2>Log in to Exclusive</h2>
                   <p>Enter your details below</p>
                    <input type="text" placeholder='Email or Phone Number:'/>
                    <hr />
                    <input type="text" placeholder='Password'/>
                    <hr />
                      <button className='log'>Log In</button>
                      <button className='log1'>Forget Password?</button>
                 </form>
               
                </div>
            </div>
        </div>
    </div>
  )
}

export default Log
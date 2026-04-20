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
                   
                    <input type="text" placeholder='Email or Phone Number:'/>
                    <input type="text" placeholder='Password'/>
                      <button>Log In</button>
                 </form>
               
                </div>
            </div>
        </div>
    </div>
  )
}

export default Log
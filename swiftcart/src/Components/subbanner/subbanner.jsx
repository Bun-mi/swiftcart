import React from 'react'
import "./subbanner.css"
import { Link } from 'react-router-dom';


const Subbanner = () => {
  return (
    <div className='bannersub'>
        <form className="subs">
            <h1>Get Exclusive Offers On Your Email</h1>
            <p>Subscribe to our newsletter and stay updated</p>
            <div className="subbtn">
            <input type="email" className="subtxt" placeholder="Enter Email Address" />
            <button>Subcribe</button>
            </div>   
            <div className="termrad">
                <input type="radio" className="subrad" required/>
                <small>I agree to Jumia’s Privacy and Cookie Policy. You can unsubscribe from newsletters at any time.</small>
            </div>
            <br />
            <Link className='termapt'>I accept the legal terms</Link>  
        </form>
    </div>
  )
}

export default Subbanner;
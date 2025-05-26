import React from 'react'
import "./cntactwork.css"
import call from "../../assets/Image/customer care.jpg"

const Cntactwork = () => {
  return (
    <div className="contact-case">
      <div className="contact-box">
        <div className="head-contact">
            <h2>CONTACT US</h2>
        </div>
        <div className="contact-info">
            <div className="contact-info-frst">
                <h3>If you have inquiries or need assistance, do not hesitate to chat with us. We are available Monday to Sunday (8am to 7pm). Public Holidays between 9am and 5pm.</h3>
                <div className="contact-dets">
                    <div className='cntact-btn' >Chat with us</div>
                    <div className='cntact-btn' >Call us</div>
                </div>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium magnam consectetur in?</h3>
            </div>
            <div className="contact-info-img">
                <img src={call} alt="A woman calling" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Cntactwork
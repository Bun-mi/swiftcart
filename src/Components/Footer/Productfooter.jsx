import React from 'react';
import { Link } from 'react-router-dom'; // now actually needed
import './Productfooter.css';
import logoi from '../../assets/Image/pngtree-shop-logo-design-with-a-handshake-in-bag-png-image_4749125.png'; // now actually needed

const Productfooter = () => {
  return (
    <footer>
      <section className="ftsect">
        <div className="ourcoy">
            <Link className="logocsei" to={"/"}>
                <img className="logoi" src={logoi} />
                SWIFT CART
            </Link>
        </div>
        <div className="ftlist">
          <ul>
            <li className="list-title">OUR COMPANY</li>
            <li><Link to="/about">About Swiftcart</Link></li>
            <li><Link to="/careers">Swiftcart Careers</Link></li>
            <li><Link to="/terms">Terms and Conditions</Link></li>
            <li><Link to="/press">Press</Link></li>
          </ul>
        </div>
        <div className="ftlist">
          <ul>
            <li className="list-title">HELP</li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/support">Support Center & FAQ</Link></li>
            <li><Link to="/protection">Purchase Protection</Link></li>
          </ul>
        </div>
        <div className="ftlist">
          <ul>
            <li className="list-title">MAKE MONEY WITH SWIFTCART</li>
            <li><Link to="/sell">Sell on Swiftcart</Link></li>
            <li><Link to="/consultant">Become a Sales Consultant</Link></li>
            <li><Link to="/blog">Our Blog</Link></li>
            <li><Link to="/partner">Partner with Swiftcart</Link></li>
          </ul>
        </div>
        <div className="ftlist">
          <ul>
            <li className="list-title">USEFUL LINKS</li>
            <li><Link to="/report-product">Report a Product</Link></li>
            <li><Link to="/refund-policy">Return and Refund Policy</Link></li>
            <li><Link to="/pickup">Pickup Stations</Link></li>
            <li><Link to="/report-activity">Report Suspicious Activity</Link></li>
          </ul>
        </div>
        <div className="cntact ftlist">
            <ul>
                <li className="list-title">Join us</li>
            </ul>
        </div>
        <div className="pay ftlist">
            <ul>
                <li className="list-title">PAYMENT METHODS & DELIVERY PARTNERS</li>

            </ul>
        </div>
      </section>
      <div className="cpright">
          Copyright © 2025 - All Right Reserved.
      </div>
    </footer>
  );
};

export default Productfooter;

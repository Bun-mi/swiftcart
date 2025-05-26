import React from "react";
import { Link } from "react-router-dom";
import "./btmnavi.css"


function Bottomnav() {
    return[
        <>
        <nav className="sec">
            <div className="cse">
                <Link to="/" className="categors">Recommended</Link>
                <Link to="/appliance" className="categors">Appliances</Link>
                <Link to="/health&beauty" className="categors">Health & Beauty</Link>
                <Link to="/fashion" className="categors">Fashion</Link>
                <Link to="/baby" className="categors">Baby Products</Link>
                <Link to="/electronics" className="categors">Electronics</Link>
                <Link to="/gaming" className="categors">Gaming</Link>
                <Link to="/home" className="categors">Home & Offices</Link>
                <Link to="/pet&supplies" className="categors">Pet Supplies</Link>
            </div>
        </nav>
        </>
    ]
}

export default Bottomnav
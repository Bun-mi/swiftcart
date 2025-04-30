import { Link } from "react-router-dom";
import "./topnavi.css"
import logo from "../../assets/Image/pngtree-shop-logo-design-with-a-handshake-in-bag-png-image_4749125.png"

function Topnavigate(){
    return(
        <>
            <nav className="frst">
                <div className="logowrk">
                    <Link className="logocse" to={"/"}>
                        <img className="logo" src={logo} />
                        SWIFT CART
                    </Link>
                </div>
                <div className="midser">
                    <div className="navimenu">
                        <Link className="navlnk">About</Link>
                        <Link className="navlnk"> Delivery</Link>
                        <Link className="navlnk">News</Link>
                        <Link className="navlnk">Brands</Link>
                        <Link to="/" className="navlnk">Shop</Link>
                        <Link to="/contact" className="navlnk">Contact</Link>
                    </div>
                    <div className="sear">
                        <input type="text" className="seartxt" placeholder="Search Products" />
                    </div>
                </div>
                <div className="acc">
                    <div className="userdv">
                        <Link className="user"> MY ACCOUNT</Link>
                    </div>
                    <div className="cartdv">
                        <Link></Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Topnavigate;
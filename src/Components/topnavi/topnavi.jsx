import { Link } from "react-router-dom";
import "./topnavi.css"
import logo from "../../assets/Image/pngtree-shop-logo-design-with-a-handshake-in-bag-png-image_4749125.png"
import CartIcon from "../Carticon";


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
                        <Link to="/register" className="navbar-link">
                            Register
                        </Link>
                        <Link to="/login" className="navbar-link">
                            Login
                        </Link>
                    </div>
                    {/* {!user ? (
                        <>
                            <Link to="/register" className="navbar-link">
                            Register
                            </Link>
                            <Link to="/login" className="navbar-link">
                            Login
                            </Link>
                        </>
                        ) : (
                        <>
                            <span className="navbar-welcome">Hello, {user.fullName}</span>
                            <button onClick={logout} className="navbar-button logout">
                            Logout
                            </button>
                        </>
                    )} */}
                    {/* <div className="cartdv"
                        onClick={handleCartClick}
                        role="button"
                        tabIndex={0}>
                        <CartIcon count={cart.length} />
                    </div> */}
                </div>
            </nav>
        </>
    )
}

export default Topnavigate;
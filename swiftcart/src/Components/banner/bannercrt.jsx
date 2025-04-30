import { Link } from "react-router-dom";
import "./bannercrt.css"
import React from "react";
import imgbanner from "../../assets/Image/9777054.jpg"


function Bannercart(){
    return(
    <>
        <Link>
            <div className="banner">
                <img className="imgbanner" src={imgbanner} />
            </div>
        </Link>        
    </>
    )
}

export default Bannercart
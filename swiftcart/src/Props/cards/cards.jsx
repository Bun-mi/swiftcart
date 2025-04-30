import React from 'react';
import { Link } from 'react-router-dom';
import './cards.css';

const Cards = ({ image, title, price, discountPrice, description }) => {
  return (
    <div className="strcrd">
      <Link to="/product" className="bxcrd">
        <div className="imgcrd">
          <img className="stkimg" src={image} alt={title} />
        </div>

        <div className="strdts">
          <h5>{title}</h5>
        </div>

        <div className="hdcrd">
          <div className="price"> 
            <h3>{price}</h3>
            <p>{discountPrice}</p>
          </div>
          <div className="crt">{/* Add to cart icon/button here */}</div>
        </div>

        <div className="strrate">     
          <small>{description}</small>
        </div>
      </Link>
    </div>
  );
};

export default Cards;

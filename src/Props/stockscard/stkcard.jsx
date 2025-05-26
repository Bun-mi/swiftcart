import React, {useEffect, useState} from 'react'
import Cards from '../cards/cards';
import products from '../../Data/products';
import "./stkcard.css"
import { Link } from 'react-router-dom';


const ProductList = ({title}) => {
  
    return (
      <section className="product-list-wrapper">
        <div className="sect-title-more">
          <h2 className="section-title">{title}</h2>
          <div className="smore">
              <Link>See more</Link>
          </div>
        </div>
        <div className="product-list-container">
        {products && products.length > 0 ? (
          products.map((product) => (
            <Cards
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              discountPrice={product.discountPrice}
              description={product.description}
            />
          ))
        ) : (
          <p>No products found.</p>
        )}
        </div>
      </section>
    );
  };

export default ProductList;
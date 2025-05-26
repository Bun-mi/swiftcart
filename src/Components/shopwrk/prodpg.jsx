import ProductList from "../../Props/stockscard/stkcard"
import "./prodpg.css"
import React from 'react'

const Prodsam = () => {
  return (
    <div className="sampage">
        <div className="sampage-tp">
            <ProductList
            title={"HOT🔥"}
            />
            <ProductList
            title={"Health & Beauty"}
            />
            <ProductList
            title={"Fashion"}
            />
            <ProductList
            title={"Electronics"}
            />
        </div>
        <button className="smorebtn">More</button>
    </div>
  )
}

export default Prodsam
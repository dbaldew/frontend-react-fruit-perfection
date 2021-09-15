import React from "react";

function Product({img, alt, title, description}) {
    return (
        <article className="product">
            <img src = {img} alt={alt}/>
            <h2 className="product-name">{title}</h2>
            <p className="product-description"><i>{description}</i></p>
        </article>
    )
}

export default Product;
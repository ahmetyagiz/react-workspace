import React from 'react'

function Product(props) {
    return (
        <div>
            <div>PRODUCT INFORMATIONS</div>
            <div>
                <div>Name: {props.productName}</div>
                <div>Price: {props.price}₺</div>
            </div>
        </div>

    )
}

export default Product
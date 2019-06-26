import React from 'react'
import styles from './Product.module.css'

function Product(props) {
    return (
        <div className={styles.productContainer}>
            <div className={styles.productName}>{props.name}</div>
            <div className={styles.productFooter}>
                <div className={styles.price}>$ {props.price}</div>
                <button className={styles.addButton} onClick={props.onAdd.bind(this, { name: props.name, price: props.price })}>Add to cart</button>
            </div>
        </div>
    )
}

export default Product
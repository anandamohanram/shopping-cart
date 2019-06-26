import React, { Component } from 'react'
import {Product} from '../../component'
import styles from './ProductList.module.css'
export class ProductList extends Component {
    render() {
        return (
            <div className={styles.productListContainer}>
                {/* TODO: map from state */}
                <Product name="NAME" price="23" />
                <Product name="NAME" price="23" />
                <Product name="NAME" price="23" />
                <Product name="NAME" price="23" />
            </div>
        )
    }
}

export default ProductList

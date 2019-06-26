import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Product } from '../../component'
import styles from './ProductList.module.css'
export class ProductList extends Component {
    render() {
        return (
            <div className={styles.productListContainer}>
                {this.props.products.map((product, index) =>
                    <Product key={index} name={product.name} price={product.price} />
                )}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    products: state.productsReducer,
    cart: state.shoppingCartReducer
})

export default connect(mapStateToProps)(ProductList)

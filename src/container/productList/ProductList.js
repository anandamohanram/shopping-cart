import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Product } from '../../component'
import { bindActionCreators } from 'redux'
import styles from './ProductList.module.css'
import { addProduct } from '../../store/action/actions'
export class ProductList extends Component {

    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd = (product) => {
        this.props.addProduct(product);
    }


    render() {
        const itemsInCart = this.props.cart.products.reduce((quantity, nextProduct) => quantity + nextProduct.qty, 0)
        return (
            <>
                {itemsInCart === 0
                    ? <div className={styles.message}>Your Shopping cart is empty. Please add items to cart</div>
                    : <div className={styles.message}>You have {itemsInCart} items in your cart!</div>}
                <div className={styles.productListContainer}>
                    {this.props.products.map((product, index) =>
                        <Product key={index} name={product.name} price={product.price} onAdd={this.handleAdd} />
                    )}
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    products: state.productsReducer,
    cart: state.shoppingCartReducer
})


const mapDispatchToProps = dispatch => {
    return bindActionCreators({ addProduct: addProduct }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
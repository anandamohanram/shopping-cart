import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { removeProduct } from '../../store/action/actions'
import styles from './ShoppingCart.module.css'

export class ShoppingCart extends Component {

    constructor(props) {
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
    }


    handleRemove = (product) => {
        this.props.removeProduct(product);
    }

    roundDecimal = (value) => {
        return Number(Math.round(value + 'e2') + 'e-2').toFixed(2);
    }

    render() {
        return (
            this.props.cart.products.length ?
            <div className={styles.tableWrapper}>
                <table className={styles.cartTable}>
                    <tbody>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                        {this.props.cart.products.map((product, index) =>
                            <tr key={product.name}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.qty}</td>
                                <td>$ {this.roundDecimal(product.tot)}</td>
                                <td><button onClick={this.handleRemove.bind(this, product)}><span>Remove</span></button></td>
                            </tr>
                        )}
                        <tr>
                            <th colSpan={3}>Grand Total</th>
                            <th> $ {this.roundDecimal(this.props.cart.total)} </th>
                        </tr>
                    </tbody>
                </table>
                </div>
                :
                <div>Your shopping cart is empty</div>
        )
    }
}

const mapStateToProps = state => ({
    cart: state.shoppingCartReducer
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ removeProduct: removeProduct }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)

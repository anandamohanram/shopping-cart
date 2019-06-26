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
        return (
            <div className={styles.productListContainer}>
                {this.props.products.map((product, index) =>
                    <Product key={index} name={product.name} price={product.price} onAdd={this.handleAdd} />
                )}
            </div>
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
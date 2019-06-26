import { ADD_PRODUCT, REMOVE_PRODUCT } from '../action/actionTypes'

const initialState = { products: [], total: 0 }

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case ADD_PRODUCT:
            let index = state.products.findIndex((product) => product.name === payload.name);
            if (index === -1) {
                //add new product
                let newItem = Object.assign({}, { name: payload.name, price: payload.price, qty: 1, tot: payload.price })
                let updatedArray = [...state.products, newItem];
                return { products: updatedArray, total: state.total + payload.price }
            }
            else {
                //update qty of existing product
                let updatedArray = state.products.map((product) => {
                    if (product.name === payload.name) {
                        return Object.assign({}, { name: payload.name, price: payload.price, qty: product.qty + 1, tot: product.tot + payload.price })
                    }
                    else {
                        return product
                    }
                })
                return { products: updatedArray, total: state.total + payload.price }
            }

        case REMOVE_PRODUCT:
            //remove product
            let updatedArray = state.products.filter(product => product.name !== payload.name);
            return { products: updatedArray, total: updatedArray.reduce((grandTotal, nextProduct) => grandTotal + nextProduct.tot, 0) }

        default:
            return state
    }
}

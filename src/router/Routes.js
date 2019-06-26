import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { ProductList, ShoppingCart } from '../container'


export class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={ProductList} />
                <Route exact path='/cart' component={ShoppingCart} />
            </Switch>
        )
    }
}

export default Routes

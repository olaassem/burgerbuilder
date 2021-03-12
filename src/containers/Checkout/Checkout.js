import React, { Component } from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {

    state= {
        ingredients: {
            salad: 1,
            bacon: 1,
            meat: 1,
            cheese: 1
        }
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    
    
    checkoutContinuedHandler = () => {
        const queryParams = [];
        for ( let i in this.state.ingredients ) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        }

        const queryString = queryParams.join('&');

        this.props.history.replace({
            pathname: '/checkout',
            search: '?' + queryString
        });
    }


    render() {
        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients}
                checkoutCancelled={this.checkoutCancelledHandler}
                checkoutContinued={this.checkoutContinuedHandler} />
            </div>
        )
    }
}

export default Checkout;
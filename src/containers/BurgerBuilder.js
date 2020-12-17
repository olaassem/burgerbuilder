import React, { Component } from 'react';

import Aux from '../hoc/Aux';
import Burger from '../components/Burger/Burger';


class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }

    render () {       //must use render() method with class components
        return (      // then return something
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <div> Burger Controls</div>
            </Aux>
        ); 
    }
}


export default BurgerBuilder;
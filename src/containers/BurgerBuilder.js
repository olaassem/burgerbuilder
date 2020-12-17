import React, { Component } from 'react';

import Aux from '../hoc/Aux';
import Burger from '../components/Burger/Burger';


class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
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
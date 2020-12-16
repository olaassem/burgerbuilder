import React, { Component } from 'react';

import Aux from '../hoc/Aux';
import Burger from '../components/Burger/Burger';


class BurgerBuilder extends Component {
    render () {       //must use render() method with class components
        return (      // then return something
            <Aux>
                <Burger />
                <div> Burger Controls</div>
            </Aux>
        ); 
    }
}


export default BurgerBuilder;
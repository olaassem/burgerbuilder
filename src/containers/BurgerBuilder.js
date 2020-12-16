import React, { Component } from 'react';

import Aux from '../hoc/Aux';

class BurgerBuilder extends Component {
    render () {       //must use render() method with class components
        return (      // then return something
            <Aux>
                <div>Burger Image</div>
                <div> Burger Controls</div>
            </Aux>
        ); 
    }
}


export default BurgerBuilder;
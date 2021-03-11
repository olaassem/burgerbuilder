import React from 'react';

import classes from './CheckoutSummary.css';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

const checkOutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope you enjoy your burger.</h1>
            <div style={{width: '100%', margin:'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button 
                btnType="Success"
                clicked>CONTINUE
            </Button>
            <Button 
                btnType="Danger"
                clicked>CANCEL
            </Button>
        </div>
    )
}

export default checkOutSummary;
import React from 'react';

import classes from './Order.css';

const order = ( props ) => {
    //transform ingredients from obj to array
    
    const ingredients = [];
    for(let ingredientName in props.ingredients ) {
        // console.log(ingredientName);
         ingredients.push({
             name: ingredientName,
             //props.ingredients[ingredientName] is the VALUE
             amount: props.ingredients[ingredientName]
        });
    }
     
    const ingredientOutput = ingredients.map( ing => {
        return <span
                    key={ing.name}
                    style={{ 
                        textTransform: 'capitalize',
                        display: 'inline-block',
                        margin: '0 8px',
                        border: '1px solid grey',
                        padding: '5px'
                    }}>
                {ing.name}: {ing.amount}
            </span>
    });
     

    return (
        <div className={classes.Order}>
            <p>Ingredients: { ingredientOutput }</p>
            <p>Price: <strong>USD { Number.parseFloat(props.price).toFixed(2) }</strong></p>
        </div>
    );
};
 
export default order;

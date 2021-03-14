import React from 'react';

const input = ( props ) => {
    let inputElement = '';

    switch (props.inputType) {
        case ('input'):
            inputElement = <input {...props} />;
            break;
    
        case ('textarea'):
            inputElement = <textarea {...props} />;
            break;
        
        default:
            inputElement = <input {...props} />;
    }
    return (
        <div>
            <label>{ props.label }</label>
         </div>
    )
};
 
export default input;


<input className={classes.Input} type="text" name="name" placeholder="Your Name" />
<input className={classes.Input} type="text" name="email" placeholder="Your Email" />
<input className={classes.Input} type="text" name="street" placeholder="Your Street" />
<input className={classes.Input} type="text" name="city" placeholder="Your City" />
<input className={classes.Input} type="text" name="zipcode" placeholder="Your Zipcode" />
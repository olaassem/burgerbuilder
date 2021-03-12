import React, { Component } from 'react';

import classes from './ContactData.css';

import Button from '../../../components/UI/Button/Button';

class ContactData extends Component {
    state = { 
        name: '',
        email: '',
        address: {
            street: '',
            city: '',
            zipcode: ''
        }   
     }

    render() { 
        return ( 
            <div className={classes.ContactData}>
                <h4>Enter Your Contact Data</h4>
                <form>
                    <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
                    <input className={classes.Input} type="text" name="email" placeholder="Your Email" />
                    <input className={classes.Input} type="text" name="street" placeholder="Your Street" />
                    <input className={classes.Input} type="text" name="city" placeholder="Your City" />
                    <input className={classes.Input} type="text" name="zipcode" placeholder="Your Zipcode" />
                    <Button btnType="Success">ORDER</Button>
                </form>
            </div>
         );
    }
}
 
export default ContactData;
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
        },
        loading: false   
     }

     orderHandler = (e) => {
        e.preventDefault();
        console.log(this.props.ingredients);

        this.setState({loading: true});

        const order = { 
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer:{
                name: 'Roger',
                address: {
                    street: '123 Shady Tree',
                    city: 'Shadeville',
                    zipcode: 67875
                },
                email: 'redhat@email.com',
                deliveryMethod: 'fastest'
            }
        };

        axios.post('/orders.json', order)
            .then( response => {
                this.setState({
                    loading: false, 
                    purchasing: false
                });
            })
            .catch( error => {
                this.setState({
                    loading: false, 
                    purchasing: false
                });
            })
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
                    <Button 
                        clicked={this.orderHandler} 
                        btnType="Success">
                            ORDER
                    </Button>
                </form>
            </div>
         );
    }
}
 
export default ContactData;
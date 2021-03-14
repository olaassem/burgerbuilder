import React, { Component } from 'react';
import axios from '../../../axios-orders';

import classes from './ContactData.css';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

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
            price: this.props.price,
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
                    loading: false
                });
                this.props.history.push('/');
            })
            .catch( error => {
                this.setState({
                    loading: false
                });
            })
     }

    render() { 
        let form = (
            <form>
                <Input inputtype="input" type="text" name="name" placeholder="Your Name" />
                <Input inputtype="input" type="text" name="email" placeholder="Your Email" />
                <Input inputtype="input" type="text" name="street" placeholder="Your Street" />
                <Input inputtype="input" type="text" name="city" placeholder="Your City" />
                <Input inputtype="input" type="text" name="zipcode" placeholder="Your Zipcode" />
                <Button 
                    clicked={this.orderHandler} 
                    btnType="Success">
                        ORDER
                </Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }
        return ( 
            <div className={classes.ContactData}>
                <h4>Enter Your Contact Data</h4>
                { form }
            </div>
         );
    }
}
 
export default ContactData;
import React, { Component } from 'react';
import axios from '../../../axios-orders';

import classes from './ContactData.css';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
    state = { 
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your name'
                },
                value: ' '
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: ' '
            },
            zipcode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZipCode'
                },
                value: ' '
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: ' '
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Email'
                },
                value: ' '
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: fastest, displayValue: Fastest},
                        {value: cheapest, displayValue: Cheapest}
                    ]
                },
                value: ' '
            },
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
                <Input elementConfig="..." elementConfig="..." value="..." />
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
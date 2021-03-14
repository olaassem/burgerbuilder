import React, {Component} from 'react';

import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Order from '../../components/Order/Order';

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }
    componentDidMount () {
        axios.get('/orders.json')
            .then( response => {
                //we get back an obj with ids as properties
                //we want to turn it into an array
                console.log(response.data);
                const fetchedOrders= [];
                for (let key in response.data) {

                    console.log(response.data);
                    console.log(response.data[key]);

                    fetchedOrders.push({
                        ...response.data[key],
                        id: key
                    });

                    console.log(fetchedOrders)
                }
                this.setState({ 
                    loading: false,
                    orders: fetchedOrders 
                });
            })
            .catch( error => {
                this.setState({ loading: false });
            })
    }

    render() { 
        return ( 
            <div>
                <Order />
                <Order />
            </div>
         );
    }
}
 
export default withErrorHandler(Orders, axios);
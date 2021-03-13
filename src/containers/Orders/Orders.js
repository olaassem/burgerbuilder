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
        axios.get('/.json')
            .then( response => {
                //we get back an obj with ids as properties
                //we want to turn it into an array
                console.log(response.data);
                const fetchedOrders= [];
                for (let key in response.data) {
                    fetchedOrders.push({
                        ...response.data[key],
                        id: key
                    });
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
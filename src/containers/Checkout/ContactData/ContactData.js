import React from 'react';

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
            <div>
                <h4>Enter Your Contact Data</h4>
                <form>
                    <input type="text" name="name" placeholder="Your Name" />
                    <input type="text" name="email" placeholder="Your Email" />
                    <input type="text" name="street" placeholder="Your Street" />
                    <input type="text" name="city" placeholder="Your City" />
                    <input type="text" name="zipcode" placeholder="Your Zipcode" />
                    <Button btnType="Success">ORDER</Button>
                </form>
            </div>
         );
    }
}
 
export default ContactData;
import axios from 'axios';

axios.create({
    baseURL: 'https://burgerbuilder-678a0-default-rtdb.firebaseio.com/'
});

export default instance;
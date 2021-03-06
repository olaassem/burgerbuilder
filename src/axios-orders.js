import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder1111-default-rtdb.firebaseio.com/'
});

export default instance;
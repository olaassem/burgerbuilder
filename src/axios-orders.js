import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://thisismyburgerrrr-default-rtdb.firebaseio.com/'
});

export default instance;
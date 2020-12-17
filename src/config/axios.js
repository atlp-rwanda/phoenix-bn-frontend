import axios from 'axios';

export default function axiosConfig(){
    axios.defaults.baseURL = 'http://localhost:5000/api/v1';
}
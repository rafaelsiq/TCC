import axios from "axios";
import loginPageConstants from '../../constants/loginPage.json'
let token = localStorage.getItem('token').toString().replace('JWT ', '');
axios.defaults.headers.common = {'authorization': token}
const api = axios.create({
    baseURL: loginPageConstants.baseURL,
});

export default api;
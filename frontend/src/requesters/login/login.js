import axios from "axios";
import loginPageConstants from '../../constants/loginPage.json'
const api = axios.create({
    baseURL: loginPageConstants.baseURL,
});

export default api;
import axios from "axios";
import loginPageConstants from '../../constants/loginPage.json'
let token = localStorage.getItem('token')?.toString()?.replace('JWT ', '');

axios.defaults.headers.common = { 'authorization': token }
const api = axios.create({
    baseURL: loginPageConstants.baseURL,
});

export function SwitchAdStatus(adId, newState) {
    return api.patch('/api/v1/users/ads/' + adId, { status: newState })
}
export function FindAllAds(userId) {
    return api.get('/api/v1/users/ads/all/')
}
export function CreateAd(Ad) {
    return api.post('/api/v1/users/ads/', Ad)
}
export async function UpdateAdImage(adId,url){
    await api.patch('/api/v1/users/ads/' + adId, { fileURL: url})
}
export function SingUpUser(user){
    return api.post('api/v1/users/signup', user)
}
export function LoginUser(user){
    return api.post('api/v1/users/login', user)
}

export default api;
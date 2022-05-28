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
    return api.get('/api/v1/users/ads/all/'+userId)
}
export function FindAdToDisplay(userId) {
    return api.get('/api/v1/users/ads/all/display/'+userId)
}
export  function CreateAd(Ad) {
    return api.post('/api/v1/users/ads/', Ad)
}
export function UpdateAdImage(adId,url){
    return api.patch('/api/v1/users/ads/' + adId, { fileURL: url})
}
export function SingUpUser(user){
    return api.post('api/v1/users/signup', user)
}
export function LoginUser(user){
    return api.post('api/v1/users/login', user)
}
export function SponsorRequestReport(){
    return api.get('api/v1/users/ads/report/sponsor/'+localStorage.getItem('userId'))
}
export function StreamerRequestReport(){
    return api.get('api/v1/users/ads/report/streamer/'+localStorage.getItem('userId'))
}
export function getAdById(adId){
    return api.get('api/v1/users/ads/'+adId)
}
export function getUserById(userId){
    return api.get('api/v1/users/'+userId)
}
export default api;
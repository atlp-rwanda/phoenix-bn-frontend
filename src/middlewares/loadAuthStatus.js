import { LOGINSUCESS } from '../actions/actionTypes';
import store from '../store'

const LoadFromLocalStorage = () =>{
    return new Promise((resolve,reject)=>{
        let userInfo =localStorage.getItem('userInfo');
        if(userInfo){
            store.dispatch({type:LOGINSUCESS,payload:JSON.parse(userInfo)})
            return resolve();
        }else{
            return resolve();
        }
    })
}
export default LoadFromLocalStorage;
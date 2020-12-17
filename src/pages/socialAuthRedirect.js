import React,{ useEffect} from 'react'
import Navigation from '../components/common/TopNav'
import Footer from '../components/common/Footer'
import { useParams } from 'react-router-dom'
import { httpRequest } from './../helpers/httpRequest'
import { useDispatch } from 'react-redux'
import  { LOGIN }  from './../actions/actionTypes'

const socialAuth =(props)=> {
    const params = useParams();
    const AuthStatus = (params.token)? 'success':'failed';
    const dispatch = useDispatch();
    useEffect(async()=>{
        if(params.token){
            const {response} = await httpRequest('get','users/me/'+atob(params.token),{});
            if(response){
                const UserInfo = response.data.data;
                dispatch({type:LOGIN,payload:UserInfo});
                localStorage.setItem('userInfo',JSON.stringify(response.data.data));
                props.history.push('/dashboard')
            }
        }
    })
    return (
        <div>
             <div className='w-screen overflow-hidden'>
            <Navigation/>
            <div className='main p-4 py-36'>
                <div className='mx-auto w-full text-center'>
                    {AuthStatus=='failed'? <p className='text-red-500'></p>:''}
                </div>
            </div> 
            <Footer/>
          </div>
        </div>
    )
}

export default socialAuth;
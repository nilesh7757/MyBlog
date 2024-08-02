"use client"
import React ,{useEffect, useState} from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
const SignUp =  () => {
    const router = useRouter()
    const onSignUp = async ()=>{
        try {
            const response = await axios.post("/api/users/signup",user)
            if(response.data.success){
                alert("Login Succesfull")
                router.push(`/${user.username}`)
            }
            else{
                alert(`${response.data.message}`)
            }
            
            
        } catch (error) {
            console.log("Failed")
        }
    }
    const [user,setuser] = useState({
        username:"",
        password:"",
        email:"",
    })

    const [enable,setenable] = useState(false)
    useEffect(()=>{
        if(user.email.length>0 && user.password.length >0 && user.username.length > 0){
            setenable(true)
        }
        else{
            setenable(false)
        }
    },[user])
  return (
    <div className=''>
      <div  className=' w-fit flex flex-col mx-auto'>
        <label htmlFor="username">Username:</label>
        <input className='border-black border-2 rounded-md' type="text" name="username" id="username" value={user.username} onChange={(e) => setuser({...user,username:e.target.value})} />
        <label htmlFor="password">Password:</label>
        <input className='border-black border-2 rounded-md' type="password" name="password" id="password" value={user.password} onChange={(e) => setuser({...user,password:e.target.value})} />
        <label htmlFor="email">Email:</label>
        <input className='border-black border-2 rounded-md' type="email" name="email" id="username" value={user.email} onChange={(e) => setuser({...user,email:e.target.value})} />
        <button type="submit" className='px-3  mt-3 w-fit mx-auto rounded-md py-1 border-black border-2' onClick={onSignUp}>Sign Up</button>
      </div>
    </div>
  )
}

export default SignUp

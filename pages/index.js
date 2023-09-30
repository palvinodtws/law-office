import React, { useEffect, useState } from 'react'
import Login from '../components/Login/Index'
import supabase from '../components/Utils/SupabaseClient';
import Dashboard from './dashboard'
export default function index() {

  const [session,setSession] = useState()

  useEffect(()=>{
    getSession()
  },[])

  async function getSession(){
    const { data, error } = await supabase.auth.getSession();
// console.log(data,'data')
setSession(data.session)
  }
// console.warn("session-->",session)
  return (
    <div>
      {session? <Dashboard/>:<Login/>}
     

    </div>
  )
}


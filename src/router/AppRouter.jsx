<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Location } from "../pages/Location";
import { Time } from "../pages/Time";
import { Country } from "../pages/Country";
import { More } from "../pages/More";
import { Header } from "../components/Header";
import { Searched } from "../components/Searched";
import { IP_Context } from "../context/UserIpAdress";
import axios from "axios"
=======
import React from 'react'
import { Route, Routes,Navigate } from 'react-router-dom'
import { Location } from '../pages/Location'
import { Time } from '../pages/Time'
import { Country } from '../pages/Country'
import { More } from '../pages/More'
import { Header } from '../components/Header'
import { Searched } from '../components/Searched'
import { IP_Context } from '../context/UserIPAddress'
import { useState,useEffect } from 'react'
import axios from 'axios'

>>>>>>> 4fee121e12178e242047e4be01a3e8ae2b33c05d
export const AppRouter = () => {
const [userIp , setUserIp ] = useState("101.44.220.0")
const [ipres  , setIpres] = useState("")

const getData = async() =>{
// const API_KEY ="51b186a83e332967038eabf5570a87a47d27f4a9"

  const [userip, setuserip] = useState("101.44.220.0")
  const [ipres, setipres] = useState("")

<<<<<<< HEAD
try{
const {data} = await axios(`https://api.getgeoapi.com/v2/ip/${userIp}?api_key=ce8da27a71bbd6207e763e45b233a50b72fc0532`)
setIpres(data)
}catch(error){
  console.log(error)
=======
//data çelir
  const getData=async()=>{

    try {

      const response =await axios(`https://api.getgeoapi.com/v2/ip/${userip}?api_key=6fe716c83dcc675fd1459099f2107edf17efb97c`)
      console.log(response.data)
      setipres(response.data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {

    if(userip){
      getData();
    }

  }, [userip])
  

  return (
    <>
    
    <IP_Context.Provider value={{userip, setuserip,ipres, setipres}}>

    <Header/>
    
    <Routes>
        {/* <Route path='/'  element={<Home/>}/> */}
        <Route index element={<Location />}/>
        <Route path='time' element={<Time/>}/>
        <Route path='country' element={<Country/>}/>
        <Route path='more' element={<More/>}/>
        <Route path="*" element={<Navigate to="/" />} />
      {/* </Route> */}
    </Routes>
    
    <Searched/>

    </IP_Context.Provider>


    </>
  )
>>>>>>> 4fee121e12178e242047e4be01a3e8ae2b33c05d
}
}

useEffect(() => {

if(userIp){
    getData()
}
}, [userIp])





    return (
        <>
            <IP_Context.Provider value={{userIp , setUserIp, ipres, setIpres}}>
                <Header />

                <Routes>
                    {/* <Route path='/'  element={<Home/>}/> */}
                    <Route index element={<Location />} />
                    <Route path="time" element={<Time />} />
                    <Route path="country" element={<Country />} />
                    <Route path="more" element={<More />} />
                    <Route path="*" element={<Navigate to="/" />} />
                    {/* </Route> */}
                </Routes>

                <Searched />
            </IP_Context.Provider>
        </>
    );
};

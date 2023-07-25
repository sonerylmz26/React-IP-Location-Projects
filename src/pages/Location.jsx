import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
<<<<<<< HEAD
import { IP_Context } from '../context/UserIpAdress'
=======
import { IP_Context } from '../context/UserIPAddress'
>>>>>>> 4fee121e12178e242047e4be01a3e8ae2b33c05d


export const Location = () => {

  const {ipres} = useContext(IP_Context)
  console.log(ipres)
  const {city, postcode,area, country, location} = ipres


  const {ipres} = useContext(IP_Context)

  const {city,postcode,area,country,location} = ipres;

  return (

    

    <div className='col-sm-4 col-md-4 m-auto cardTable'>
        <table className='table table-borderless table-dark text-center m-auto' width={25}>
        <thead>
        <tr>
          <th>City</th>
          <td>{city?.name}</td>
        </tr>
        <tr>
          <th>Postcode</th>
          <td>{postcode}</td>
        </tr>
        <tr>
          <th>Area</th>
          <td>{area?.name} {area?.code}</td>
        </tr>
        <tr>
          <th>Country</th>
<<<<<<< HEAD
          <td> <img style={{width:"20px"}} src={country?.flag?.file} alt="" /> {country?.name}</td>
=======
          <td>{country?.flag?.emoji} {country?.name} {country?.code}</td>
>>>>>>> 4fee121e12178e242047e4be01a3e8ae2b33c05d
        </tr>
        <tr>
          <th>Location</th>
          <td>{location?.latitude} - {location?.longitude}</td>
        </tr>
      </thead>
        </table>
    </div>
        
    
  )
}

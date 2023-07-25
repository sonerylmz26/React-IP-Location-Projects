import React, { useContext } from 'react'
<<<<<<< HEAD
import { IP_Context } from '../context/UserIpAdress'
=======
import { IP_Context } from '../context/UserIPAddress'
>>>>>>> 4fee121e12178e242047e4be01a3e8ae2b33c05d

export const Country = () => {

  const {ipres} = useContext(IP_Context)

  const {country,currency} = ipres;

  return (
    
    <div className='col-sm-4 col-md-4 m-auto cardTable'>
    <table className='table table-borderless table-dark text-center m-auto' width={25}>
      <thead>
        <tr>
          <th>Capital</th>
          <td>{country?.capital}</td>
        </tr>
        <tr>
          <th>Population</th>
          <td>{country?.population}</td>
        </tr>
        <tr>
          <th>Phone Code</th>
          <td>+{country?.phone_code}</td>
        </tr>
        <tr>
          <th>Curreny</th>
          <td>{currency?.code}-{currency?.name}</td>
        </tr>
        <tr>
          <th></th>
          <td></td>
        </tr>
      </thead>
    </table>
</div>

  )
}
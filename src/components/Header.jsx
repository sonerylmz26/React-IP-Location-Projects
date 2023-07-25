<<<<<<< HEAD
import React, { useContext, useState } from 'react'
import { FcSearch } from 'react-icons/fc'
import {AiOutlineWifi} from 'react-icons/ai'
import { NavigationBars } from './NavigationBars'
import { IP_Context } from '../context/UserIpAdress'
=======
import React, { useContext,useState } from 'react'
import { FcSearch } from 'react-icons/fc'
import {AiOutlineWifi} from 'react-icons/ai'
import { NavigationBars } from './NavigationBars'
import { IP_Context } from '../context/UserIPAddress'
>>>>>>> 4fee121e12178e242047e4be01a3e8ae2b33c05d



export const Header = () => {

<<<<<<< HEAD
const {userIp, setUserIp} = useContext(IP_Context)
const [inputData , setInputData ] = useState("")


const handleKeyDown = (e) => {

// if(inputData !== "" && (e.keyCode === 13)){
// handleSubmit()

//   }

  if(e.keyCode === 13){
    e.preventDefault()
     handleSubmit()
   
      }


}


const handleSubmit =(e) => {
  // e.preventDefault()

  if(inputData){
    setUserIp(inputData)
    setInputData("")

  }



}
=======
  const {userip, setuserip} = useContext(IP_Context)
  const [inputdata, setinputdata] = useState("")

  
  const handleKeyDown=(e)=>{
    

    if((inputdata !== "") && (e.keyCode === 13)){
      
      e.preventDefault();

      handleSubmit();

    }
  }


  const handleSubmit=(e)=>{

    //e.preventDefault();

    if(inputdata){
      setuserip(inputdata)

      setinputdata("")
    }
  }

>>>>>>> 4fee121e12178e242047e4be01a3e8ae2b33c05d

  return (
    <>

    <div className='container m-auto text-center p-4 search'>

      <div className='text-center  p-5'>
      <h3>With Your IP Address Country Information</h3>

      </div>
      
      <div className='row'>
        
        <div className='col wifiIcon'>
        <AiOutlineWifi 
          size={25}/>
        </div>
          
          
        <div className='col-sm-4'>
          <form action="">

          <input 
          type="text"
          placeholder='Your IP Address'
<<<<<<< HEAD
          required 
          onChange={(e)=> setInputData(e.target.value)}onKeyDown={handleKeyDown}
          />
      

=======
          required
          value={inputdata}
          onChange={(e)=>setinputdata(e.target.value)}
          onKeyDown={handleKeyDown}
          />
          
>>>>>>> 4fee121e12178e242047e4be01a3e8ae2b33c05d
          </form>
          
        </div>
          
        <div className='col btnSearch'>
          <FcSearch 
          size={30}
          type='button'
<<<<<<< HEAD
onClick={handleSubmit}


=======
          onClick={handleSubmit}
>>>>>>> 4fee121e12178e242047e4be01a3e8ae2b33c05d
          />
        </div>
          

      </div>
    </div>


    <NavigationBars/>
    
    </>
  )
}

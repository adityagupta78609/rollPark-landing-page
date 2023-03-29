import React from 'react'
import "./Rollpark.css"



 
  
  export const myRollpark1 = document.querySelector(".my-rollpark")

  export const myStyle1 = document.querySelector(".my-style")
  
  export const myButton1 = document.querySelector(".my-button")
const NavbarRoll = () => {








  return (
    <div className='flex p-3 my-style style1' >
      <div className="flex nav-container1 justify-center text-3xl my-rollpark rollpark1" >Rollpark</div>
      <div className="nav-container2 text-lg flex " style={{
        "width":"40vw"
      }}>
        <ul className='flex items-center'style={{
          "justifyContent":"space-between",
          "width":"100%"
        }} >
            <li><a href="#">Why Rollpark</a></li>
            <li><a href="#">Case Studies</a></li>
            <li><a href="#">Installation</a></li>
            <li><a href="#">Company</a></li>
            <li><a href="#">Specs</a></li>
        </ul>
      </div>
      <div className="nav-container3 flex justify-center" style={{
        "width":"30vw"
      }}>
<ul className='flex space-x-4 text-lg items-center'>
    <li><a href="#">FAQ</a></li>
    <li><a href="#"><button className=" p-2  rounded-3xl text-white my-button button1"  >Get a Quote</button></a></li>
</ul>
      </div>


      
    </div>
  )
}

export default NavbarRoll

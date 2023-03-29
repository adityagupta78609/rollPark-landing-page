import React, { useState } from 'react'

const RightSection = () => {

    const [display,setDisplay] =useState(false);
    const addImage = () =>{
        setDisplay(true);
    }
    const deleteImage = () => {
       
    }
    const submit = () => {
      let image = document.getElementById('insertImage');
      let imageValue = image.value; 
      console.log(imageValue);
    }

  return (
    <>
      <div className="right flex flex-center my-3 mx-auto">

        {  display === true && <>
        <form action="">
            <label htmlFor="insertImage">Select File &nbsp;</label>
                <input type="file" name="insertImage" id="insertImage"
                multiple accept="image/*,.pdf" />
                <button id="submit" 
                onClick={()=>{submit()}}
                className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </>

        } 
        
            <button type="button" onClick = {() => { addImage() }}className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">ADD</button>
            <button type="button" onClick ={() => { deleteImage() }} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">DELETE</button>


          </div>
    </>
    )
      }

export default RightSection

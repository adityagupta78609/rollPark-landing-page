import React from 'react'

// classes for Icon
// value1,value2,vale3 for values of 3 td 
// style1 ,style2,style3 are styles for respective elements

const Row = ({classes,value1,value2,value3,style1,style2,style3}) => {

const form1 ="text-xl font-bold"
const form2 ="text-xl font-normal text-slate-400"


  return (
    <tr>
      <td className='text-green-600 text-2xl'>
        <i className={classes}/>
      </td>
      {
          style1==1 ?<td className={form1}>{value1}</td> :<td className={form2}>{value1}</td>
        }
      {
          style2==1 ?<td className={form1}>{value2}</td> :<td className={form2}>{value2}</td>
        }
      {
          style3==1 ? <td className={form1}>{value3}</td> :<td className={form2}>{value3}</td>
        }
      
      
      
      </tr>
  )
}

export default Row

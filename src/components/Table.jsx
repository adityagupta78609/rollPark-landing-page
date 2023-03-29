import React from 'react'
import Row from './Row'
import "./Table.css"
const Table = () => {
  return (
    <div className='flex justify-center items-center'>
      
      <table>
        <tr className='text-2xl font-bold' >
        <td style={{
            "borderBottom":"1px solid black"
        }}></td>
        <td style={{
            "borderBottom":"1px solid black"
        }}>Asphalt</td>
        <td className='text-green-600 ' style={{
            "borderBottom":"1px solid black"
        }}>Rollpark</td>
        <td style={{
            "borderBottom":"1px solid black"
        }}>Gravel</td>
        </tr>
        
        <Row classes="fa-solid fa-droplet" value1="Impervious" value2="Permeable" value3="Permeable" style1="0" style2="1" style3="1"/>
        <Row classes="fa-solid fa-wallet" value1="Expensive" value2="Less expensive" value3="Comparable Cost" style1="0" style2="1" style3="0"/>
        <Row classes="fa-solid fa-arrows-rotate" value1="Cannot be reused" value2="Re-usable" value3="Not usually reused" style1="0" style2="1" style3="0"/>
        <Row classes="fa-solid fa-hourglass" value1="15 years life" value2="7+ years life" value3="5-7 years life" style1="0" style2="0" style3="0"/>
        <Row classes="fa-solid fa-clock" value1="2-3 weeks per acre" value2="1 week per acre" value3="-1 week per acre" style1="0" style2="1" style3="0"/>
        <Row classes="fa-solid fa-wheelchair-move" value1="ADA accessible" value2="ADA accessible" value3="Not ADA accessible" style1="0" style2="1" style3="0"/>
        <Row classes="fa-solid fa-feather" value1="No LEED" value2="Up to 7 LEED" value3="No LEED" style1="0" style2="1" style3="0"/>
        <Row classes="fa-solid fa-lock" value1="Cannot be rented" value2="Rentable" value3="Cannot be rented" style1="0" style2="1" style3="0"/>
        <Row classes="fa-solid fa-truck" value1="Easy Maintenance" value2="Moderate Maintenance" value3="Difficult Maintenance" style1="0" style2="0" style3="0"/>
      </table>
    </div>
  )
}

export default Table

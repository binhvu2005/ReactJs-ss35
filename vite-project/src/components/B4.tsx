
import React, { useState } from 'react'
export default function Condition() {
    const [active,setAtive]= useState<boolean>(true)
 const handleChange = () =>{
    setAtive(!active)
 }
  return (
    <div>
      {active?"tiêu đề" :""} <br />
      <button onClick={handleChange}> {active?"ẩn" :"hiện"}</button>
    </div>
  )
}

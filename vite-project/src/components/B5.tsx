import React, { useState } from 'react'

export default function B5() {
    const [value,setvalue]=useState<string>("")
    const handchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setvalue(e.target.value)
    }
  return (
    <div>
      <input type="text" onChange={handchange}/><br />
      {value}
    </div>
  )
}

import React, {useState} from 'react'

export default function B8() {
    const [value, setvalue]= useState<string>('')
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setvalue(e.target.value)
    }
  return (
    <div>
      thành phố : {value} <br />
      <select name="" id="" onChange={handleChange}>
        <option value="">--Chọn--</option>
        <option value="lc">lc</option>
        <option value="hn">hn</option>
        <option value="tb">tb</option>
      </select>
    </div>
  )
}

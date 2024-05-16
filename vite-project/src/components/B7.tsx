import React, {useState} from 'react'

export default function B7() {
    const [value, setvalue] = useState<string>('')
    const handchange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setvalue(e.target.value)
    }
  return (
    <div>
      <textarea name="" id="" onChange={handchange}></textarea>
      <p>số kí tự: {value.length}</p>
    </div>
  )
}

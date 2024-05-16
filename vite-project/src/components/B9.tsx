import React, {useState} from 'react'

export default function B9() {
    const [value,setvalue] = useState<string>("")
const handchange = (e:React.ChangeEvent<HTMLInputElement>)=> {
    setvalue(e.target.value)
}
  return (
    <div>
      giới tính : {value} <br />
      <input type="radio" name="sex" id="" value={'Nam'} onChange={handchange}/>Nam <br />
      <input type="radio" name="sex" id="" value={'Nữ'} onChange={handchange}/>Nữ<br />
      <input type="radio" name="sex" id="" value={'Khác'} onChange={handchange}/>Khác
    </div>
  )
}

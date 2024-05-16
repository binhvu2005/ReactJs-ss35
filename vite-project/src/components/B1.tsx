import React, { useState } from 'react'

export default function B1() {
    const [name,setName] = useState<String>("Nguyễn Văn A")
    
  return (
    <div>
      <h1>họ và tên: {name}</h1>
    </div>
  )
}

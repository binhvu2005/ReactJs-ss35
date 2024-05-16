import React, { useState } from 'react'

export default function B3() {
    const [color, setcolor] = React.useState<string>('red')
    const handleClick = () => {
        setcolor('blue')
    }
  return (
    <div>
      <p style={{color:color}}>Tiêu đề văn bản</p>
      <button onClick={handleClick}>thay đổi màu</button>
    </div>
  )
}

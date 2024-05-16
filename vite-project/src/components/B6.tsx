import React from 'react'

export default function B6() {
    const [count, setcount] = React.useState<number>(0)
    const handclick = () => {
        setcount(count + 1)
    }
  return (
    <div>
      <p>số lần click : {count}</p><br />
      <button onClick={handclick}>click</button>
    </div>
  )
}

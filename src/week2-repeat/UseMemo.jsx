import React, { useMemo, useState } from 'react'

const UseMemo = () => {

    const [ip, setip] = useState('');
    const [res,setRes] = useState(0)

    function clicked(){
        setRes(square);
    }

const square = useMemo(()=>{
    return Number(ip)*Number(ip)
},[ip])
  return (
    <div>
        <h1>{res}</h1>
      <input type="number" value={ip} onChange={(e)=>{setip(e.target.value)}} name="" id="" />
      <button onClick={clicked}>square</button>
    </div>
  )
}

export default UseMemo

import React, { useEffect, useState } from 'react'

const Timer = () => {

    const [time, setTime] = useState(0)
    const [run,setRun] = useState(false);

    useEffect(()=>{
        let interval;
        if(run){
            interval = setInterval(()=>{
                setTime(t=>t+1);
            },100)
        }

        return (()=>{
            clearInterval(interval);
        })
    },[run])

    function start(){
        setRun(true);
    }

    function stop(){
        setRun(false);
    }
    function restart(){
        setTime(0);
        setRun(false);
    }
    function formatTime(){
        return time<10?'0'+time:time
    }
  return (
    <div>
        <h1>{formatTime()}</h1>
        <button onClick={()=>{start()}}>start</button>
        <button onClick={()=>{restart()}}>reset</button>
        <button onClick={()=>{stop()}}>stop</button>
      
    </div>
  )
}

export default Timer

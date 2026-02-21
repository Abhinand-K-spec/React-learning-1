import React  from 'react'
import { useCounter } from './counterContext'

const Counter = () => {

    const {state,dispatch} = useCounter()

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={()=>{dispatch({type:'inc'})}}>+</button>
      <button onClick={()=>{dispatch({type:'dec'})}}>-</button>
    </div>
  )
}

export default Counter

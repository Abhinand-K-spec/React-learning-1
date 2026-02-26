import React from 'react'
import { useLearningCounter } from './CounterContext'

const Counter = () => {

    const {state,dispatch} = useLearningCounter()
  return (
    <>
      <h1>Count:{state.count}</h1>
      <button onClick={()=>{dispatch({type:'inc'})}}>+</button>
      <button onClick={()=>{dispatch({type:'dec'})}}>-</button>
    </>
  )
}

export default Counter

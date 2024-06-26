import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, reset, incrementByAmount } from "./counterSlice"
import { useState } from "react";

const Counter = () => {
    const count = useSelector((state)=>state.counter.count);
    const dispatch=useDispatch();
    const [incrementAmount, setIncrementAmount]=useState(0);
    const addValue = Number(incrementAmount) || 0 ;

    const resetAll =()=>{
      setIncrementAmount(0);
      dispatch(reset());
    }

  return (
    <>
      <div>
        <button onClick={()=> dispatch(decrement())}>-</button>
        <button onClick={()=> dispatch(increment())} >+</button>
        {count}
      </div>
      <div>
        <input type="text" value={incrementAmount} onChange={e=>setIncrementAmount(e.target.value)}/>
        <button onClick={()=>dispatch(incrementByAmount(addValue))}>Add Amount</button>
      </div>
      <div>
        <button onClick={resetAll}>Reset</button>
      </div>
    </>
  )
}

export default Counter

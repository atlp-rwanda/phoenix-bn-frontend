import React from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../actions/counter'
import { DECREMENT } from '../actions/actionTypes'

export default function CounterButtons() {
    const dispatch = useDispatch();
    const incrementCounter = () => {
        dispatch(increment(2));
    }
    const decrementCounter = () => {
        dispatch({ type: DECREMENT, payload: 1 });
    }
    return (
        <div>
            <button onClick={incrementCounter}>Increment</button>
            <button onClick={decrementCounter}>Decrement</button>
        </div>
    )
}

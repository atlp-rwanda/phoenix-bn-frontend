import React from 'react';
import Buttons from './CounterButtons'
import { useSelector } from 'react-redux'

const landingPage = () => {
    const counter = useSelector(store => store.counter)
    return (
        <div>
            <h1>Welcome to Barefoot Nomad - Making company global travel and accommodation easy and convenient</h1>
            <div>
                <h1>Counter : {counter}</h1>
                <Buttons />
            </div>
        </div>
    )
}

export default landingPage


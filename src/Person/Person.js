import React from 'react';
import './Person.css'

const person=(props) => {
    
    return (
        <div className='Person'>
    <p onClick={props.click}>My name is {props.name}. I'm {props.age} years old</p>
    <p>{props.children}</p>
    <input type='text' onChange={props.chnaged} value={props.name}></input>
    </div>
    )
    
};

export default person;
import React from 'react';
import App from './Employee_Tile';
 
const Emp = (props) =>{
    console.log(props)
    return(
        <>
            {props.employees.map((item,index)=><App key={index} {...item}/>)}
        </>
    )

}

export default Emp;
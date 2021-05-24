import React from 'react';
import './Employee_Tile';
 
const Emp = (props) =>{
    console.log(props)
    return(
        <>
            {props.employees.map((item,index)=><Employee_Tile key={index} {...item}/>)}
        </>
    )

}


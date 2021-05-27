import React, { useState } from 'react'

const EmployeeFilter = (props) =>{
    const[age,setage] = useState("")
    const array = [12,23,32,34,43,45,54,56,65,67,76,20,22,24,25,26,78,87,89,98,90,100,10];

    const handlechange = (e) => {
        setage(e.target.value)
        props.saveAge(e.target.value)
    }

    return(
        <>
          <p>Age of the employee:</p>
          <select value={age} onChange={handlechange}>
              {array.map((item,index) => <option key = {index} value ={item}>{item}</option>)}
          </select>
        </>
    )
}

export default EmployeeFilter;
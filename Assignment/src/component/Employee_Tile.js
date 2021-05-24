import React from 'react'
import MyApp from '../App'

const App = (props) =>{
    console.log(props)
    return(
        <>
          <p>ID:{props.id}</p>
          <span>Emp_Name:{props.name}</span>
          <span>Emp_Age:{props.age}</span>
        </>
    );
}

export default App
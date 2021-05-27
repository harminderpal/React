
import React,{useState} from 'react'

const EmployeForm = (props)=> {
//render()
const [name, setname] = useState('')
const [age, setage]   = useState('')
const id= Math.random().toString()

const handlenamechange = (e) =>{
    setname(e.target.value)
}

const handleagechange = (e) =>{
    setage(e.target.value)
}

const handleSubmit = (e) =>{
    e.preventDefault()
    props.valuesEntered(name,age,id)
    setname('')
    setage('')
}



return (
    <form onSubmit={handleSubmit} >       
     <div>
        <input type="text"  placeholder="name" value={name} onChange={handlenamechange} />
      
        <input type="number"  placeholder="age" value={age} onChange={handleagechange} />
        <input type="text"  placeholder="id" value={id} onChange={handlenamechange} />
     
      <button type="submit" >Submit</button>
      </div>
    </form>
  );
}

export default EmployeForm;
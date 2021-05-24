import React from 'react';
import Employee_Data from './component/Employee_Data';

class Emp_Data extends React.Component{
    render (){
const employees = [
    {
        id: 'e1',
        name: 'Akhil',
        age: 20
    },
    {
        id: 'e2',
        name: 'Aman',
        age: 21
    },
    {
        id: 'e3',
        name: 'Vikas',
        age: 22
    },
    {
        id: 'e4',
        name: 'Harminder',
        age: 23
    },
    {
        id: 'e5',
        name: 'Deeksha',
        age: 24
    },
    {
        id: 'e6',
        name: 'Punit',
        age: 25
    }
];
    const MyApp = () =>{
    return(
       <> <div>
            <h1>Employees Data</h1>
            <Employee_Data employees ={employees}/>
        </div>
        </>
    );
}
    }
}
export default MyApp
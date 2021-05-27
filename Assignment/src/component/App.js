import React from 'react';
import Emp from './component/Employee_Data';
// import NewEmployee from './component/NewEmployee';
import Employe from './component/Employee';
import NewEmployee from './component/NewEmployee';


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
        const valuesEntered=(a,b,c) =>{
            console.log("Entered name:",a)
            console.log("Entered age:",b)
            console.log("Entered id:",c)
        }
    return(
       <> <div>
            <h1>Employees Data</h1>
            <Emp employees ={employees}/>
        </div>
        </>
    );
    }
 
export default MyApp;
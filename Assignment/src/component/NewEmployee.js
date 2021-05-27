import React, { useState } from 'react';
// import EmployeForm from './EmployeeForm';
import EmployeForm from './EmployeeForm';


const NewEmployee =(props) => {
   
    return (
        <>
            <EmployeForm valuesEntered ={props.valuesEntered} />
        </>
    );
}
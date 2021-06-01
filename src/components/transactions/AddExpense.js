import React, {useCallback, useRef, useState} from 'react';
import {Button} from "react-bootstrap";


const AddExpense = () => {
    const [newExpense, setNewExpense] = useState({
        name : '', item : '' , cost : '', category :'' })



   console.log(newExpense)

    return (
        <div  className='add-expense-container'>
              <input  type='text' name='name' />
              <input  type='text' name='item' placeholder='item'/>
              <input  type='text' name='cost' placeholder='price'/>
              <input  type='text' name='category' placeholder='category'/>
             <Button  className=' btn btn-success' >Add Expense</Button>
        </div>
    );
};

export default AddExpense;

import React, {useCallback, useRef, useState} from 'react';
import {Button} from "react-bootstrap";
import {addCategory, addCost, addItem, addName} from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";


const AddExpense = () => {
const dispatch = useDispatch()
const state = useSelector(state => state.formReducer.expenseForm.nameF)
    console.log(state)




    return (
        <div  className='add-expense-container'>
            <form >
              <input  type='text' name='name' onChange={(e) =>dispatch(addName(e.target.value)) } />
              <input  type='text' name='item' onChange={e =>dispatch(addItem(e.target.value)) }/>
              <input  type='text' name='cost' onChange={e =>dispatch(addCategory(e.target.value)) }/>
              <input  type='text' name='category' onChange={e =>dispatch(addCost(e.target.value)) }/>
            </form>
             <Button  className=' btn btn-success' >Add Expense</Button>
        </div>
    );
};

export default AddExpense;

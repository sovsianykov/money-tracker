import React from 'react';
import { FileMinus } from "react-bootstrap-icons";
import {useDispatch} from "react-redux";
import {removeExpense} from "../../redux/actions";

const ExpenseItem = ({exp}) => {
    const dispatch = useDispatch()
   const  removeHandler = () =>{
        dispatch(removeExpense(exp.id))
   }

    return (
        <div className='expense-item' onClick={removeHandler }>
            <FileMinus className='remove' />
       <span>{exp.item}</span><h5 className='middle'> {exp.cost}uah</h5><span>{exp.name}</span>
        </div>
    );
};

export default ExpenseItem;

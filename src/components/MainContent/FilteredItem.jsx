import React from 'react';
import {useDispatch} from "react-redux";
import { filterByParam } from "../../redux/actions";

const ExpenseItem = ({exp}) => {
    const dispatch = useDispatch()
    const  filterHandler = () =>{
        dispatch(filterByParam(exp.param))
    }
    console.log(exp.id)
    return (
        <div className='expense-item' onClick={filterHandler }>
            <span>{exp.item}</span><h5 className='middle'> {exp.cost}uah</h5><span>{exp.name}</span>
        </div>
    );
};

export default ExpenseItem;

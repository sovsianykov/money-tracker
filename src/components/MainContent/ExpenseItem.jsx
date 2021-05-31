import React from 'react';

const ExpenseItem = ({exp}) => {
    return (
        <div className='expense-item'>
       <span>{exp.item}</span><h7 className='middle'> {exp.cost}uah</h7><span>{exp.name}</span>
        </div>
    );
};

export default ExpenseItem;
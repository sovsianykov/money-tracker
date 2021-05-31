import React from 'react';

const ExpenseList = ({children}) => {
    return (
        <div className='expense-list'>
            {children}
        </div>
    );
};

export default ExpenseList
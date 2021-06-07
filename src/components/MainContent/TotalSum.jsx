import React from 'react';
import './mainContent.scss'

const TotalSum = ({ children,onClick }) => {
    return (
        <div className='total-sum'>
            <h3>total {children} uah</h3>
            <button onClick={ onClick } className='btn-success btn-sum'>Get sum</button>
        </div>
    );
};

export default TotalSum;
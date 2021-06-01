import React from 'react';

const ExchangeRate = ({rate}) => {
    return (
        <div className='er-container'>
            <div className="digits">
                 UAH exchange rate - {rate}
            </div>
        </div>
    );
};

export default ExchangeRate;
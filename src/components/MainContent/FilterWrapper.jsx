import React from 'react';
import filter from '../assets/icons/filter.png'

const FilterWrapper = () => {
    return (

            <div className="filter-wrapper">
                <input type="text" className='filter-input'/>
                 <div className="filterBtn">
                     <div className="pic-colder">
                         <img src={filter} alt=''/>
                     </div>
                 </div>
            </div>

    );
};

export default FilterWrapper;

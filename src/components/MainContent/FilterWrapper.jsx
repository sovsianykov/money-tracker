import React from 'react';
import filter from '../assets/icons/filter.png'

const FilterWrapper = ({onChange}) => {
    return (

            <div className="filter-wrapper">
                {/*<input type="text" className='filter-input'/>*/}

                <select className='filter-input'
                        name="s2"
                        onChange={onChange}
                >
                    <option value="select">select </option>
                    <option value="wear">wear</option>
                    <option value="meal">meal</option>
                    <option value="transport">transport</option>
                    <option value="education">education</option>
                    <option value="home">home</option>
                </select>

                 <div className="filterBtn">
                     <div className="pic-colder">
                         <img src={filter} alt=''/>
                     </div>
                 </div>
            </div>

    );
};

export default FilterWrapper;

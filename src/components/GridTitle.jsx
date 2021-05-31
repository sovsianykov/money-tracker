import React from 'react';
import './MainContent/mainContent.scss'

const GridTitle = ({children}) => {
    return (
        <div className='grid-title'>
          <h4>  {children} </h4>
        </div>
    );
};

export default GridTitle;
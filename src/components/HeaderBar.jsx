import React from 'react';
import {Button  } from "react-bootstrap";
import MainGrid from "./MainContent/MainGrid";

const HeaderBar = () => {
    return (
        <div className='container-main'>
            <MainGrid/>
          <div className="side-bar">
              <Button className='btn-side btn-success ' >Theme1</Button>
              <Button className='btn-side btn-success '>Theme2</Button>
              <Button className='btn-side btn-success  '>Theme3</Button>
          </div>
        </div>
    );
};

export default HeaderBar;

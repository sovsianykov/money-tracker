import React from 'react';
import {Button  } from "react-bootstrap";
import MainGrid from "./MainContent/MainGrid";

const SideBar = () => {
    return (
        <div className='container-main'>
            <MainGrid/>
          <div className="side-bar">
              <Button className='btn-side btn-success ' >Theme1</Button>
              <Button className='btn-side btn-success '>Theme2</Button>
              <Button className='btn-side btn-success  '>Theme3</Button>
              <Button className='btn-side btn-success '>Theme4</Button>
              <Button className='btn-side btn-success '>Theme5</Button>
              <Button className='btn-side btn-success '>Theme6</Button>
          </div>

        </div>
    );
};

export default SideBar;
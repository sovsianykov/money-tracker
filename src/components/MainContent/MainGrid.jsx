import React from 'react';
import {Row, Col} from "react-bootstrap";
import './mainContent.scss'
import FilterWrapper from "./FilterWrapper";
const MainGrid = () => {
    return (
        <div className='main-grid'>
            <Row>
                <Col xs={4} md={3}>
                    <div className="box">
                        <FilterWrapper/>
                    </div>
                </Col>
                <Col xs={4} md={3}>
                    <div className="box">
                        <FilterWrapper/>
                    </div>
                </Col>
                <Col xs={4} md={3}>
                    <div className="box">
                        <FilterWrapper/>
                    </div>
                </Col>
                <Col xs={4} md={3}>
                    <div className="box">
                        <FilterWrapper/>
                    </div>
                </Col>

            </Row>


        </div>
    );
};

export default MainGrid;
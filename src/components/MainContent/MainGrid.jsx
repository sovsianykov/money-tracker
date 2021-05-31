import React from 'react';
import {Row, Col} from "react-bootstrap";
import './mainContent.scss'
import FilterWrapper from "./FilterWrapper";
import GridTitle from "../GridTitle";
import ExpenseList from "./Expense-list";
import ExpenseItem from "./ExpenseItem";
import {expenses} from "../../Content/content";
import {Button} from "bootstrap";

const MainGrid = () => {
    return (
        <div className='main-grid'>
            <Row>
                <Col  md={3}>
                    <GridTitle>salary</GridTitle>
                    <FilterWrapper/>
                    <div className="box">
                    </div>
                </Col>
                <Col  md={3}>
                    <GridTitle>expenses</GridTitle>
                    <FilterWrapper/>
                    <div className="box">
                        <ExpenseList>
                            { expenses ? expenses.map(exp => (
                                <ExpenseItem key={exp.id} exp={exp} />
                            )) : ''}
                        </ExpenseList>
                    </div>
                </Col>
                <Col  md={3}>
                    <GridTitle>categories</GridTitle>
                    <FilterWrapper/>

                    <div className="box">
                    </div>
                </Col>
                <Col  md={3}>
                    <GridTitle>utility</GridTitle>
                    <FilterWrapper/>
                    <div className="box">
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default MainGrid;

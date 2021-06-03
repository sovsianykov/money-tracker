import React, {useEffect} from 'react';
import {Row, Col} from "react-bootstrap";
import './mainContent.scss'
import FilterWrapper from "./FilterWrapper";
import GridTitle from "../GridTitle";
import ExpenseList from "./Expense-list";
import ExpenseItem from "./ExpenseItem";
// import {expenses} from "../../Content/content";
import {Button} from "bootstrap";
import {useSelector} from "react-redux";


const MainGrid = () => {
    const expenses = useSelector(state => state.myReducer.expenses)
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
                            { expenses ? expenses.map((exp,i) => (
                                <ExpenseItem key={i} exp={exp} />
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

import React, {useEffect} from 'react';
import {Row, Col} from "react-bootstrap";
import './mainContent.scss'
import FilterWrapper from "./FilterWrapper";
import GridTitle from "../GridTitle";
import ExpenseList from "./Expense-list";
import ExpenseItem from "./ExpenseItem";

import { useDispatch, useSelector } from "react-redux";
import {allSum, filterByParam} from "../../redux/actions";
import FilteredItem from "./FilteredItem";


const MainGrid = () => {

    const dispatch=useDispatch()
    const expenses = useSelector(state => state.myReducer.expenses)
    const categorised = useSelector(state => state.myReducer.categorised)
    const allS = useSelector(state => state.myReducer.allExpensesSum)
    return (
        <div className='main-grid'>
            <Row>
                <Col  md={1} sm={1}>
                    <GridTitle>salary</GridTitle>
                    <div className="box">
                    </div>
                </Col>
                <Col  md={4} sm={4} >
                    <GridTitle>all expenses</GridTitle>
                    <div className="box">
                        <ExpenseList>
                            { expenses ? expenses.map((exp,i) => (
                                <ExpenseItem key={i}  exp={exp} />
                            )) : ''}
                        </ExpenseList>
                    </div>
                </Col>
                <Col  md={4} sm={4}>
                    <GridTitle>filtered by category</GridTitle>
                    <FilterWrapper onChange={e => dispatch(filterByParam(e.target.value))}/>
                    <div className="box categorized">
                    <ExpenseList>
                        { categorised ? categorised.map((exp,i) => (
                            <FilteredItem key={i}  exp={exp} />
                        )) : ''}
                    </ExpenseList>
                    </div>
                </Col>
                <Col  md={3}>
                    <GridTitle>utility</GridTitle>
                    <div className="box">
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default MainGrid;

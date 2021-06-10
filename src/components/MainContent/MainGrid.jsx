import React, {useCallback, useEffect} from 'react';
import {Row, Col} from "react-bootstrap";
import './mainContent.scss'
import FilterWrapper from "./FilterWrapper";
import GridTitle from "../GridTitle";
import ExpenseList from "./Expense-list";
import ExpenseItem from "./ExpenseItem";

import { useDispatch, useSelector } from "react-redux";
import {allCategorySum, allSum, filterByParam} from "../../redux/actions";
import FilteredItem from "./FilteredItem";
import TotalSum from "./TotalSum";


const MainGrid = () => {

    const dispatch=useDispatch()
    const expenses = useSelector(state => state.myReducer.expenses)
    const categorised = useSelector(state => state.myReducer.categorised)
    const allS = useSelector(state => state.myReducer.allExpensesSum)
    const categoryS = useSelector(state => state.myReducer.allCategorySum)
    useEffect(()=>{
        dispatch(allSum());
        dispatch(allCategorySum())
    },[dispatch])
    const allSumHandler = useCallback(()=>{
        dispatch(allSum())
    },[dispatch])
    const categorySumHandler = useCallback(()=>{
        dispatch(allCategorySum())
    },[dispatch])
    return (
        <div className='main-grid'>
            <Row>
                <Col xs={12} md={1} sm={12}>
                    <GridTitle>salary</GridTitle>
                    <div className="box">
                    </div>
                </Col>
                <Col xs={12} md={4} sm={12} >
                    <GridTitle>all expenses</GridTitle>
                    <div className="box">
                        <ExpenseList>
                            { expenses ? expenses.map((exp,i) => (
                                <ExpenseItem key={i}  exp={exp} />
                            )) : ''}
                        </ExpenseList>
                    </div>
                    <TotalSum  onClick={allSumHandler}>{allS}</TotalSum>
                </Col>
                <Col xs={12} md={4} sm={12}>
                    <GridTitle>filtered by category</GridTitle>
                    <FilterWrapper onChange={e => dispatch(filterByParam(e.target.value))}/>
                    <div className="box categorized">
                    <ExpenseList>
                        { categorised ? categorised.map((exp,i) => (
                            <FilteredItem key={i}  exp={exp} />
                        )) : ''}
                    </ExpenseList>
                    </div>
                    <TotalSum  onClick={categorySumHandler}>{categoryS}</TotalSum>
                </Col>
                <Col xs={12}  md={3} sm={12}>
                    <GridTitle>utility</GridTitle>
                    <div className="box">
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default MainGrid;

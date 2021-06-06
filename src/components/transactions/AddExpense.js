import React, { useCallback, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import {
  addCategory,
  addCost,
  addExpense,
  addItem,
  addName,
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const AddExpense = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.myReducer.name);
  const item = useSelector((state) => state.myReducer.item);
  const cost = useSelector((state) => state.myReducer.cost);
  const category = useSelector((state) => state.myReducer.category);
  const handleSubmit = useCallback(() => {
    let id = `${name}+${item}+${Date.now()}`;
    let newExpense = {
      id: id,
      name: name,
      item: item,
      cost: cost,
      category: category,
    };

    dispatch(addExpense(newExpense));
  },[category, cost, dispatch, item, name]);

  return (
    <div className="add-expense-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => dispatch(addName(e.target.value))}
        />
        <input
          type="text"
          placeholder="item"
          onChange={(e) => dispatch(addItem(e.target.value))}
        />
        <input
          type="text"
          placeholder="cost"
          onChange={(e) => dispatch(addCost(e.target.value))}
        />
        <select className='select filter-input'
          name="s1"
          onChange={(e) => dispatch(addCategory(e.target.value))}
        >
          <option value="select">select </option>
          <option value="wear">wear</option>
          <option value="meal">meal</option>
          <option value="transport">transport</option>
          <option value="education">education</option>
          <option value="home">home</option>
        </select>
      </form>
      <Button className=" btn btn-success" onClick={handleSubmit}>
        Add Expense
      </Button>
    </div>
  );
};

export default AddExpense;

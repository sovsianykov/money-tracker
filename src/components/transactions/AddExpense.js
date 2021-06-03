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
  const handleSubmit = () => {
    let id = `${name}+${item}`;
    let newExpense = {
      id: id,
      name: name,
      item: item,
      cost: cost,
      category: category,
    };

    dispatch(addExpense(newExpense));
  };

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
        <input
          type="text"
          placeholder="category"
          onChange={(e) => dispatch(addCategory(e.target.value))}
        />

      </form>
      <Button className=" btn btn-success" onClick={handleSubmit}>
        Add Expense
      </Button>
    </div>
  );
};

export default AddExpense;

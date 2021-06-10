import React from "react";
import PageContent from "./components/Contetnt";
import HeaderBar from "./components/HeaderBar";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddExpense from "./components/transactions/AddExpense";

const MyLayout = Layout(PageContent, HeaderBar);

function App() {
  return (
    <>
      <Router>
        <Route path="/" component={MyLayout} />
        <Route path="/add-expense/" component={AddExpense} />
      </Router>
    </>
  );
}
export default App;

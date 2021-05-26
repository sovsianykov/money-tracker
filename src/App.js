import React from 'react';
import  PageContent  from './components/Contetnt';
import SideBar from "./components/SideBar";
import Layout from './components/Layout';

const MyLayout = Layout( PageContent,SideBar );





function App() {
    return (
        <div>
         <MyLayout/>
        </div>
    )

}
export default App
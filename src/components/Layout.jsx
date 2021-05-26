import React from 'react';


const Layout = (Component1,Component2) =>props => {

  return (
      <div>
        <Component1/>
        <Component2/>
      </div>
  )
};

export default Layout;

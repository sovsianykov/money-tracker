import React from 'react';


const Layout = (Component1,Component2) =>props => {
    
  return (
      <>
        <Component1/>
        <Component2/>
      </>
  )
};

export default Layout;
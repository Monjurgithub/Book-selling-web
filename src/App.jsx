import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './compoment/Header';
import Footer from './compoment/Footer/Footer';


const App = () => {
  return (
    <div>
      <Header></Header>
      <div className='min-h-[calc(100vh-136)]'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;

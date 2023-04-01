import React from 'react';
import Header from './components/Navbar/Header';
import Blogs from './components/Blogs/Blogs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Blogs></Blogs>
      <ToastContainer/>
    </div>
  );
};

export default App;
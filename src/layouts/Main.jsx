import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './shared/Footer/Footer';
import Header from './shared/Header/Header';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
    return (
      <div className="relative">
        <Header />
        <ToastContainer />
        <Outlet />

        <Footer />
      </div>
    );
};

export default Main;
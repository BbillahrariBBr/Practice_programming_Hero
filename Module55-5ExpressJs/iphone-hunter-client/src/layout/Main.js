import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <h2>My  i-Phone Hunter</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;
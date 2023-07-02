import React, { Suspense } from 'react';
import Headder from '../Pages/Headder';
import { Outlet } from 'react-router-dom';
export const Layout = () => {
  return (
    <>
      <Headder />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

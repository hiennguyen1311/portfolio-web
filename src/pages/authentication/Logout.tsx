import { clearStore } from '@reducers';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Logout: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearStore());
  }, []);

  return <Navigate to="../login" replace />;
};

export default Logout;

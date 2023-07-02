import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Home } from './Pages/Home';
import { Login } from './Pages/Login';
import { Register } from './Pages/Register';
import { PrivateRoute } from './Pages/PrivateRoute';

// import { deletContactsValue } from '../redux/contactSlice';
import { useEffect } from 'react';
import {
  fetchContacts,
  // deleteContacts,
} from 'redux/contacts/contactsOperations';
import { fetchCurrentUser } from 'redux/users/usersOperations';

export const App = () => {
  const dispatch = useDispatch();

  const addContactFulfilled = useSelector(
    state => state.contacts.addContactFulfilled
  );
  const userloggedIn = useSelector(state => state.auth.isLoggedIn);

  // const deleteContactFulfilled = useSelector(
  //   state => state.contacts.deleteContactFulfilled
  // );

  // const deletName = evt => {
  //   dispatch(deleteContacts(evt.target.id));
  // };

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    if (userloggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, userloggedIn]);

  useEffect(() => {
    if (addContactFulfilled) {
      dispatch(fetchContacts());
    }
  }, [dispatch, addContactFulfilled]);

  // useEffect(() => {
  //   if (deleteContactFulfilled) {
  //     dispatch(fetchContacts());
  //   }
  // }, [dispatch, deleteContactFulfilled]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="contacts" element={<Home />} />
          <Route
            path="register"
            element={
              <PrivateRoute>
                <Register />
              </PrivateRoute>
            }
          />
          <Route
            path="login"
            element={
              <PrivateRoute>
                <Login />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

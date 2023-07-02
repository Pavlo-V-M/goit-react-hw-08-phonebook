// import * as contactsActions from './contactsAction';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// export const fetchContacts = () => async dispatch => {
//   dispatch(contactsActions.fetchContactsRequest());
//   try {
//     const contacts = await fetchContact();
//     console.log(contacts.data);
//     dispatch(contactsActions.fetchContactsSuccess(contacts.data));
//   } catch (error) {
//     dispatch(contactsActions.fetchContactsError(error));
//   }
// };

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    return error.message;
  }
});

export const addContacts = createAsyncThunk(
  'contacts/addContact',
  async credentials => {
    console.log(credentials);
    try {
      const { data } = await axios.post('/contacts', credentials);
      console.log(data);
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

export const patchContacts = createAsyncThunk(
  'contacts/patchContact',
  async id => {
    try {
      const { data } = await axios.patch(`/contacts/${id}`);
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

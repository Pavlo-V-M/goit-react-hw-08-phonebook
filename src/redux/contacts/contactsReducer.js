// import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
// import * as contactsAction from './contactsAction';
import {
  fetchContacts,
  addContacts,
  deleteContacts,
} from './contactsOperations';

// const entities = createReducer([], {
//   [fetchContacts.fulfilled]: (_, action) => action.payload,
// });

// const isLoading = createReducer(false, {
//   [fetchContacts.pending]: () => true,
//   [fetchContacts.fulfilled]: () => false,
//   [fetchContacts.rejected]: () => false,
// });

// const error = createReducer(null, {
//   [fetchContacts.rejected]: (_, action) => action.payload,
//   [fetchContacts.pending]: () => null,
// });

// const addContactFulfilled = createReducer(false, {
//   [addContacts.pending]: () => false,
//   [addContacts.fulfilled]: () => true,
//   [addContacts.rejected]: () => false,
// });

// const deleteContactFulfilled = createReducer(false, {
//   [deleteContacts.pending]: () => false,
//   [deleteContacts.fulfilled]: () => true,
//   [deleteContacts.rejected]: () => false,
// });

// export default combineReducers({
//   entities,
//   isLoading,
//   error,
//   addContactFulfilled,
//   deleteContactFulfilled,
// });

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    entities: [],
    isLoading: false,
    error: null,
    addContactFulfilled: false,
    deleteContactFulfilled: false,
  },
  extraReducers: {
    [fetchContacts.fulfilled]: (state, action) => {
      return { ...state, entities: action.payload };
    },
    [fetchContacts.pending]: (state, _) => {
      return { ...state, isLoading: true, error: null };
    },
    [fetchContacts.rejected]: (state, action) => {
      return { ...state, isLoading: false, error: action.payload };
    },
    [addContacts.pending]: (state, _) => {
      return { ...state, addContactFulfilled: false };
    },
    [addContacts.fulfilled]: (state, action) => {
      state.entities.push(action.payload);
      state.addContactFulfilled = true;
    },
    [addContacts.rejected]: (state, _) => {
      return { ...state, addContactFulfilled: false };
    },
    [deleteContacts.pending]: (state, _) => {
      return { ...state, deleteContactFulfilled: false };
    },
    [deleteContacts.fulfilled]: (state, _) => {
      return { ...state, deleteContactFulfilled: true };
    },
    [deleteContacts.rejected]: (state, _) => {
      return { ...state, deleteContactFulfilled: false };
    },
  },
});

// export const { contactsSlice } = contactsSlice.actions;

import { addContact, deleteContact, filterContacts } from "./actions";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    items: [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],
    filter: ""
  }

export const contactsReducer = createReducer(initialState, {
    [addContact]: (state, action) => {
      console.log(state);
        state.items.push(action.payload);
    },
    [deleteContact]: (state, action) => {
      return { items: state.items.filter(contact => contact.id !== action.payload),
        filter: state.filter}
    },
    [filterContacts]: (state, action) => {
      state.filter = action.payload
    },

})
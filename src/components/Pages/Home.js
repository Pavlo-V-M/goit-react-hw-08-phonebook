import Phonebook from '../Phonebook/Phonebook';
import Contacts from '../Contacts/Contacts';
import Filter from '../Filter/Filter';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contacts/contactsOperations';
import css from './Pages.module.css';

export const Home = () => {
  const dispatch = useDispatch();
  const deletName = evt => {
    dispatch(deleteContacts(evt.target.id));
  };
  return (
    <div className="bookcontacts bookcontactsWrap">
      <h1 className={css.title}>PhoneBook</h1>
      <Phonebook />
      <h1>Contacts</h1>
      <Filter />
      <Contacts onClick={deletName} />
    </div>
  );
};

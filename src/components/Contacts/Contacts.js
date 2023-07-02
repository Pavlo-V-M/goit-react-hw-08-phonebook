import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteContacts,
  fetchContacts,
} from 'redux/contacts/contactsOperations';
import css from './Contacts.module.css';

const Contacts = () => {
  const filterValue = useSelector(state => state.valueFilter);
  const contactsValue = useSelector(state => state.contacts.entities);
  const deleteContactTrue = useSelector(
    state => state.contacts.deleteContactFulfilled
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (deleteContactTrue) {
      dispatch(fetchContacts());
    }
  }, [dispatch, deleteContactTrue]);

  const visibleContacts = () => {
    const normalizeFilter = filterValue.toLowerCase();
    return contactsValue.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
  };

  const visibleContactsArray = visibleContacts();

  return (
    <ul className={css.list}>
      {contactsValue.length > 0 ? (
        visibleContactsArray.map(({ id, name, phone }) => (
          <li className={css.item} key={id}>
            {name}: {phone}
            <button
              className={css.delete_btn}
              type="submit"
              id={id}
              onClick={evt => dispatch(deleteContacts(evt.target.id))}
            >
              Delet
            </button>
          </li>
        ))
      ) : (
        <p className={css.item}> No contacts added </p>
      )}
    </ul>
  );
};

export default Contacts;

import { useState } from 'react';
import css from './Phonebook.module.css';
// import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/contacts/contactsOperations';

export default function Phonebook() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contactsValue = useSelector(state => state.contacts.entities);

  const chahgeInputName = name => {
    const checkName = name.toLowerCase();
    contactsValue.forEach(({ name }) => {
      if (name.toLowerCase() === checkName) {
        alert(`${name} is already in contacts`);
        return;
      }
    });
  };

  const handleSubmitName = evt => {
    evt.preventDefault();

    const checkName = name.toLowerCase();

    contactsValue.forEach(({ name }) => {
      if (name.toLowerCase() === checkName) {
        alert(`${evt.currentTarget.value} is already in contacts`);
        return;
      }
    });

    dispatch(
      addContacts({
        name,
        number,
      })
    );
    setName('');
    setNumber('');
  };

  const handleChangeName = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'number':
        return setNumber(value);

      default:
        break;
    }

    chahgeInputName(name);
  };

  return (
    <form className={css.form} onSubmit={handleSubmitName}>
      <label className={css.label}>
        Name
        <input
          value={name}
          className={css.input}
          type="text"
          placeholder="Enter full name"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleChangeName}
          required
        />
      </label>
      <label className={css.label}>
        Number
        <input
          value={number}
          className={css.input}
          type="tel"
          placeholder="123-45-67"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleChangeName}
          required
        />
      </label>
      <button className={css.form_btn} type="submit">
        Add
      </button>
    </form>
  );
}

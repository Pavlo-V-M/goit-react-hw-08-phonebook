import css from './Pages.module.css';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperations';

const Navigation = () => {
  const userloggedIn = useSelector(state => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  return userloggedIn ? (
    <div className={css.nav}>
      <NavLink
        to="/contacts"
        className={css.link}
        onClick={() => dispatch(fetchContacts())}
      >
        Contacts
      </NavLink>
    </div>
  ) : (
    <div className={css.nav}>
      <NavLink to="register" className={css.link}>
        Register
      </NavLink>
      <NavLink to="/login" className={css.link}>
        Login
      </NavLink>
    </div>
  );
};

export default Navigation;

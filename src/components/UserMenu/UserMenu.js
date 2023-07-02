import css from './User.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from 'redux/users/usersOperations';
import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function UserMenu() {
  const userloggedIn = useSelector(state => state.auth.isLoggedIn);
  console.log(userloggedIn);
  const userName = useSelector(state => state.auth.user.name);
  console.log(userName);
  const dispatch = useDispatch();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  return userloggedIn ? (
    <div className={css.nav}>
      <p className={css.text}>{userName}</p>
      <Link to={backLinkLocationRef.current}>
        <button className={css.btn} onClick={() => dispatch(logoutUser())}>
          Logout
        </button>
      </Link>
    </div>
  ) : (
    <div className={css.nav}>
      <p className={css.text}>Register or login</p>
    </div>
  );
}

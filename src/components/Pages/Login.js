import css from './Pages.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/users/usersOperations';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);

      default:
        break;
    }
  };

  const handleSubmitName = evt => {
    evt.preventDefault();
    dispatch(
      loginUser({
        email,
        password,
      })
    );

    setEmail('');
    setPassword('');
  };

  return (
    <form className={css.form__Login} onSubmit={handleSubmitName}>
      <label className={css.label}>
        Email
        <input
          value={email}
          className={css.input}
          type="email"
          placeholder="Enter your email"
          name="email"
          onChange={handleChange}
          required
        />
      </label>
      <label className={css.label}>
        Password
        <input
          value={password}
          className={css.input}
          type="text"
          placeholder="Enter your password"
          name="password"
          onChange={handleChange}
          required
        />
      </label>
      <button className={css.form_btn} type="submit">
        Login
      </button>
    </form>
  );
};

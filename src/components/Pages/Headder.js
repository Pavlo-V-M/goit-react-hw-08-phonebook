import css from './Pages.module.css';
import Navigation from './Navigation';
import UserMenu from '../UserMenu';

const Headder = () => {
  return (
    <div className={css.headder}>
      <Navigation />
      <UserMenu />
    </div>
  );
};
export default Headder;

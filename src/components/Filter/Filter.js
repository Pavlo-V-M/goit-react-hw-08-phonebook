import React from 'react';
import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getFilterValue, setFilterValue } from 'redux/filterSlice';

const Filter = () => {
  const filterValue = useSelector(getFilterValue);
  const dispatch = useDispatch();

  return (
    <label className={css.label}>
      Find contacs by name
      <input
        className={css.input}
        type="text"
        name="filter"
        title="Find contacs by name"
        value={filterValue}
        onChange={evt => dispatch(setFilterValue(evt.currentTarget.value))}
      />
    </label>
  );
};

export default Filter;

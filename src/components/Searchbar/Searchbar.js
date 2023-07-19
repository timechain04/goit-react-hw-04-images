import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import { ReactComponent as SearchIcon } from './search.svg';
import css from './Searchbar.module.css';

export default function Searchbar ({ onSubmit }) {
  const [value, setValue] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    const searchValue = value.trim();
    if (!searchValue) {
      Notiflix.Notify.info('Please write some value');
    }
    onSubmit(searchValue);
    setValue('');
  };

  return (
    <header className={css.Searchbar}>
      <form onSubmit={handleSubmit} className={css.SearchForm}>
        <button type="submit" className={css.Button}>
        <SearchIcon width="20" height="20" />
          <span className={css.ButtonLabel}>Search</span>
        </button>
        <input
          className={css.Input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={evt => setValue(evt.target.value)}
          value={value}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};



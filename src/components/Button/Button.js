import PropTypes from 'prop-types';
import css from './Button.module.css';

export default function Button ({ onShowMore }) {
  return (
    <div className={css.Container}>
      <button className={css.Button} type="button" onClick={onShowMore}>
        Load more
      </button>
    </div>
  );
};

Button.propTypes = {
  onShowMore: PropTypes.func.isRequired,
};


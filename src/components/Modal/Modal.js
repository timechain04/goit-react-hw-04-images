import { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

export default function Modal ({ closeModal, largeImage })  {
  const keyDownCallback = useCallback(
    evt => {
      if (evt.code === 'Escape') {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    window.addEventListener('keydown', keyDownCallback);
    return () => {
      window.removeEventListener('keydown', keyDownCallback);
    };
  }, [keyDownCallback]);

  const handleBackdropClick = evt => {
    if (evt.currentTarget === evt.target) {
      closeModal();
    }
  };
  return (
    <div className={css.Overlay} onClick={handleBackdropClick}>
      <div className={css.Modal}>
        <img className={css.Image} src={largeImage} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  largeImage: PropTypes.string.isRequired,
};

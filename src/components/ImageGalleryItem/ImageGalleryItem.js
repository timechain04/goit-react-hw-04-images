import PropTypes from 'prop-types';
import css from './imageGalleryItem.module.css';

export default function ImageGalleryItem ({ image, onModal }) {
  const { largeImageURL, webformatURL, tags } = image;
  return (
    <li className={css.Item} onClick={() => onModal(largeImageURL)}>
      <img className={css.Image} src={webformatURL} alt={tags} />
    </li>
  );
};
ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
  onModal: PropTypes.func.isRequired,
};


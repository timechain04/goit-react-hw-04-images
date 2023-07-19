import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';

export default function ImageGallery ({ images, onModal }) {
  return (
    <ul className={css.ImageGallery}>
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} onModal={onModal} />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
      tags: PropTypes.string,
    })
  ),
  onModal: PropTypes.func.isRequired,
};


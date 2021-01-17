import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';

export function ImageGallery({ images, onOpenModal }) {
  return (
    <ul className="ImageGallery">
      {images.map(({ id, webformatURL, tags }) => (
        <ImageGalleryItem
          key={id}
          id={id}
          webformatURL={webformatURL}
          onOpenModal={onOpenModal}
          tags={tags}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array,
  onOpenModal: PropTypes.func,
};

export default ImageGallery;

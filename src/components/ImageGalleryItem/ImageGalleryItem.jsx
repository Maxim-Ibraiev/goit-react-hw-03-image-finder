import PropTypes from 'prop-types';

export function ImageGalleryItem({
  webformatURL,
  onOpenModal,
  largeImageURL,
  tags,
}) {
  return (
    <>
      <li
        className="ImageGalleryItem"
        onClick={() => onOpenModal({ largeImageURL, tags })}
      >
        <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
      </li>
    </>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  onOpenModal: PropTypes.func,
  id: PropTypes.number,
  tags: PropTypes.string,
};

export default ImageGalleryItem;

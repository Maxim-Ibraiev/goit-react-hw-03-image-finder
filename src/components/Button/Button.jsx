import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';

export default function Button({ text = 'Load more', onLoadMore, loading }) {
  return (
    <div className="ButtonContainer">
      {loading ? (
        <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
      ) : (
        <button className="Button" type="button" onClick={onLoadMore}>
          {text}
        </button>
      )}
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  onLoadMore: PropTypes.func,
  loading: PropTypes.bool,
};

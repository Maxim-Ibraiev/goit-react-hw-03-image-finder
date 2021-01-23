import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';

export class Modal extends Component {
  static propTypes = {
    largeImage: PropTypes.object,
    onToggleModal: PropTypes.func,
    onCloseModal: PropTypes.func,
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = e => {
    if (e.code === 'Escape') this.props.onToggleModal();
  };

  render() {
    const {
      largeImage: { largeImageURL, tags },
      onToggleModal,
    } = this.props;

    return (
      <div className="Overlay" onClick={onToggleModal}>
        <Loader
          className="loaderPosition"
          type="BallTriangle"
          color="#00BFFF"
          height={150}
          width={150}
        />
        <div className="Modal">
          <img src={largeImageURL} alt={tags} />
        </div>
      </div>
    );
  }
}

export default Modal;

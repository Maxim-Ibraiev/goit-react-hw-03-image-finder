import { Component } from 'react';
import SearchBar from '../SearchBar';
import ImageGallery from '../ImageGallery';
import Modal from '../Modal';
import Button from '../Button';
import { fetchImages } from '../../service/fetch';

class App extends Component {
  state = {
    images: [],
    querySearch: '',
    page: 1,
    modalIsOpen: false,
    largeImage: {},
    loading: false,
  };

  async componentDidUpdate(preProps, nextState) {
    const { querySearch, page } = this.state;

    if (nextState.querySearch !== this.state.querySearch) {
      this.setState({ images: [] });
      this.handleFetch(querySearch);
    } else if (nextState.page !== this.state.page) {
      await this.handleFetch(querySearch, page);
      this.handleScroll();
      this.setState({ loading: false });
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const queryInput = e.target[1].value;

    this.setState({ querySearch: queryInput });
  };

  handleOpenModal = ({ largeImageURL, tags }) => {
    this.handleToggleModal();
    this.setState({ largeImage: { largeImageURL, tags } });
  };

  handleToggleModal = () => {
    this.setState(prevState => ({ modalIsOpen: !prevState.modalIsOpen }));
  };

  handleFetch = async (query, page) => {
    const addData = await fetchImages(query, page);

    this.setState(prevState => {
      const { images } = prevState;
      const content = [...images, ...addData];

      return { images: content, queryInput: '' };
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => {
      const nextPage = prevState.page + 1;

      return {
        page: nextPage,
        loading: true,
      };
    });
  };

  handleScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  render() {
    const { images, modalIsOpen, largeImage, loading } = this.state;

    return (
      <div>
        <SearchBar onSubmit={this.handleSubmit} />

        {images.length > 0 && (
          <>
            <ImageGallery images={images} onOpenModal={this.handleOpenModal} />

            <Button loading={loading} onLoadMore={this.handleLoadMore} />
          </>
        )}

        {modalIsOpen && (
          <Modal
            largeImage={largeImage}
            onToggleModal={this.handleToggleModal}
          />
        )}
      </div>
    );
  }
}

export default App;

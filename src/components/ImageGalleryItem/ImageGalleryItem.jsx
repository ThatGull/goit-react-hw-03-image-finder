import ImageGalleryItemStyled from './ImageGalleryItem.styled';
import Modal from 'components/Modal/Modal';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  static propTypes = {
    props: PropTypes.arrayOf(PropTypes.object.isRequired),
  };

  state = {
    isModalOpen: false,
    imageUrl: '',
    imageTag: '',
  };

  openModal = event => {
    this.setState({
      imageUrl: event.target.getAttribute('data-url'),
      imageTag: event.target.getAttribute('data-tag'),
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { images } = this.props;
    return (
      <>
        {images.map(image => {
          return (
            <ImageGalleryItemStyled key={image.id}>
              {this.state.isModalOpen && (
                <Modal
                  closeModal={this.closeModal}
                  image={this.state.imageUrl}
                  imageTag={this.state.imageTag}
                />
              )}

              <img
                className="galleryImg"
                src={image.webformatURL}
                alt={image.tags}
                data-tag={image.tags}
                data-url={image.largeImageURL}
                onClick={this.openModal}
              />
            </ImageGalleryItemStyled>
          );
        })}
      </>
    );
  }
}

export default ImageGalleryItem;

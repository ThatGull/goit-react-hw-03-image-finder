import ImageGalleryStyled from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({ searchResult }) => {
  return (
    <ImageGalleryStyled>
      <ImageGalleryItem images={searchResult} />
    </ImageGalleryStyled>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  searchResult: PropTypes.arrayOf(PropTypes.object.isRequired),
};

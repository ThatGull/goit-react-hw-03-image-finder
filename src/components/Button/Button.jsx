import { ButtonBox } from './Button.styled';
import PropTypes from 'prop-types';

const Button = props => {
  const { handleLoadMore } = props;
  return (
    <ButtonBox>
      <button type="button" onClick={handleLoadMore}>
        Load more
      </button>
    </ButtonBox>
  );
};

export default Button;

Button.propTypes = {
  props: PropTypes.node,
};

import SearchbarStyled from './SearchBar.styled';
import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  static propTypes = {
    props: PropTypes.node,
  };

  state = {
    inputValue: '',
  };

  handleChange = event => {
    const inputValue = event.currentTarget.value.trim();
    this.setState({ inputValue });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.inputValue === '') {
      toast.error('Empty input');
      return;
    }
    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: '' });
  };

  render() {
    const style = { fontSize: '180%', transition: 'font-size 0.5s' };
    const { inputValue } = this.state;
    return (
      <SearchbarStyled>
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <FaSearch style={style} />
          </button>

          <input
            className="SearchForm-input"
            type="text"
            value={inputValue}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </SearchbarStyled>
    );
  }
}

export default SearchBar;

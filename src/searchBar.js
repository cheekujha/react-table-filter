import React from 'react';
import PropTypes from 'prop-types';

/**
 * SearchBar search input component
 * @extends React
 */
class SearchBar extends React.Component {
  /**
   * constructor
   * @param {Object} props
   */
  constructor(props) {
    super(props);
  }

  /**
   * _searchInputChanged
   * @param  {Event} e
   */
  _searchInputChanged = (e) => {
    const newValue = e.target.value;

    this._callSearchChanged(newValue);
  }

  /**
   * _callSearchChanged function called to update the filters according to search
   * @param  {String} val
   */
  _callSearchChanged = (val) => {
    this.props.searchChanged && this.props.searchChanged(val);
  }

  /**
   * render
   * @return {JSX}
   */
  render() {
    return (
      <div className="search-parent filter-list-item">
        <input className="search-input" type="text" placeholder="search" onChange={this._searchInputChanged}/>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchChanged: PropTypes.func.isRequired,
};

export default SearchBar;

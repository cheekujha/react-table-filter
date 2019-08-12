import React from 'react';
import PropTypes from 'prop-types';

/**
 * SelectAllItem Select all list item
 * @extends React
 */
class SelectAllItem extends React.Component {
  /**
   * constructor
   * @param {Object} props
   */
  constructor(props) {
    super(props);
  }

  /**
   * _selectAllClicked
   */
  _selectAllClicked = () => {
    this.props.filterClicked();
  }

  /**
   * render
   * @return {JSX}
   */
  render() {
    const checkBoxClass = [this.props.selected ? 'selected ' : '', 'filter-check-box'].join('');
    return (<div className="filter-list-item" onClick={this._selectAllClicked}>
      <div className={ checkBoxClass } ></div>
      <div className="filter-label select-all-label">Select All</div>
    </div>);
  }
}

SelectAllItem.propTypes = {
  filterClicked: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default SelectAllItem;

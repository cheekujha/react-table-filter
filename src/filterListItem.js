import React from 'react';
import PropTypes from 'prop-types';

/**
 * FilterListItem
 * @extends React
 */
class FilterListItem extends React.Component {
  /**
   * constructor
   * @param {Object} props
   */
  constructor(props) {
    super(props);
  }

  /**
   * _checkBoxClicked function called when list item is clicked
   */
  _checkBoxClicked = () => {
    this.props.filterClicked(this.props.index);
  }

  /**
   * render
   * @return {JSX}
   */
  render() {
    const checkBoxClass = [this.props.selected ? 'selected ' : '', 'filter-check-box'].join('');
    return (<div className="filter-list-item ripple" onClick={this._checkBoxClicked}>
      <div className={ checkBoxClass } ></div>
      <div className="filter-label">{this.props.label}</div>
    </div>);
  }
}


FilterListItem.propTypes = {
  filterClicked: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  label: PropTypes.any.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default FilterListItem;

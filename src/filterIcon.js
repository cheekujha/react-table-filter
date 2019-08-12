import React from 'react';
import PropTypes from 'prop-types';

/**
 * FilterIcon
 * @extends React
 */
class FilterIcon extends React.Component {
  /**
   * constructor
   * @param {Object} props
   */
  constructor(props) {
    super(props);
  }

  /**
   * _iconClicked filter icon clicked
   */
  _iconClicked = () => {
    this.props.iconClicked && this.props.iconClicked();
  }

  /**
   * render
   * @return {JSX}
   */
  render() {
    const className = [this.props.selected ? 'selected ': '', 'table-filter-icon'].join('');
    return (<div onClick={ this._iconClicked } className={ className }></div>);
  }
}


FilterIcon.propTypes = {
  iconClicked: PropTypes.func.isRequired, // Function to be called when filter icon is clicked
  selected: PropTypes.bool,
};

export default FilterIcon;

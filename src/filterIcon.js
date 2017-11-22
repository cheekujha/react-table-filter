import React from 'react';
import PropTypes from 'prop-types';

class FilterIcon extends React.Component {
	constructor(props){
		super(props);

		this._initMethods();

		this.state = {};
	}

	_initMethods(){
		this._iconClicked = this._iconClicked.bind(this);
	}

	_iconClicked(){
		this.props.iconClicked && this.props.iconClicked();
	}

	render(){
		const className = [this.props.selected ? "selected ": "", "table-filter-icon"].join('');
		return (<div onClick={ this._iconClicked } className={ className }></div>);
	}
}


FilterIcon.propTypes = {
	iconClicked: PropTypes.func.isRequired, // Function to be called when filter icon is clicked
	selected: PropTypes.bool,
}

export default FilterIcon
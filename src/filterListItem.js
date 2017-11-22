import React from 'react';
import PropTypes from 'prop-types';

class FilterListItem extends React.Component {
	constructor(props){
		super(props);

		this._initMethods();
		this.state = {};
	}

	/*Bind Functions to Context*/
	_initMethods(){
		this._checkBoxClicked = this._checkBoxClicked.bind(this);
	}

	_checkBoxClicked(){
		this.props.filterClicked(this.props.index);
	}

	render(){
		const checkBoxClass = [this.props.selected ? "selected " : "", "filter-check-box"].join('');
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
}

export default FilterListItem
import React from 'react';
import PropTypes from 'prop-types';
import constants from './lib/constants'


class SelectAllItem extends React.Component{
	constructor(props){
		super(props);
		this.state = {};

		this._initMethods();
	}

	/*Bind Functions to Context*/
	_initMethods(){
		this._selectAllClicked = this._selectAllClicked.bind(this);
	}

	_selectAllClicked(){
		this.props.filterClicked();
	}

	render(){
		const checkBoxClass = [this.props.selected ? "selected " : "", "filter-check-box"].join('');
		return (<div className="filter-list-item" onClick={this._selectAllClicked}>
					<div className={ checkBoxClass } ></div>
					<div className="filter-label select-all-label">{constants.SELECT_ALL_LABEL}</div>
				</div>);
	}
}

SelectAllItem.propTypes = {
	filterClicked: PropTypes.func.isRequired,
	selected: PropTypes.bool.isRequired,
}

export default SelectAllItem

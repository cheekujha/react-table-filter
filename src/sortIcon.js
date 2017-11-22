import React from 'react';
import {
	isUndefined
} from './lib/util';
import PropTypes from 'prop-types';

class SortIcon extends React.Component{
	constructor(props){
		super(props);
		this.state = {};

		this._initMethods();
	}

	/*Bind Functions to Context*/
	_initMethods(){
		this._sortClicked = this._sortClicked.bind(this);
	}

	_sortClicked(){
		this.props.sort();
	}

	render(){
		const sortClass = !isUndefined(this.props.sortType) ? (' ' + this.props.sortType) : '';
		return (<div className={["sort-parent clear-fix", sortClass].join('')} onClick={ this._sortClicked }>
					<div className="dsc table-filter-arrow"></div>
					<div className="asc table-filter-arrow"></div>
				</div>);
	}
}

SortIcon.propTypes = {
	sort: PropTypes.func.isRequired,
	sortType: PropTypes.string,
}

export default SortIcon
import React from 'react'
import {
	isUndefined
} from './lib/util';
import createReactClass from 'create-react-class';

const SortIcon = createReactClass({
	getInitialState(){
		return {
		};
	},

	componentWillMount(){
		// console.log('------', this.props.children);
	},

	componentDidMount(){

	},

	_sortClicked(){
		this.props.sort();
	},

	render(){
		const sortClass = !isUndefined(this.props.sortType) ? (' ' + this.props.sortType) : '';
		return (<div className={["sort-parent clear-fix", sortClass].join('')} onClick={ this._sortClicked }>
					<div className="dsc table-filter-arrow"></div>
					<div className="asc table-filter-arrow"></div>
				</div>);
	}
});

// TODO - Write Proptypes Definition
// SortIcon.propTypes = {
// }

export default SortIcon
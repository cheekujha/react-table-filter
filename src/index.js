import React from 'react';
import Template from './template.js';
import {
	isUndefined, 
	isTypeArray, 
	isTypeString
} from './lib/util';
import {
	filterAction,
	filtersReset
} from './lib/filter';
import {
	sortAction
} from './lib/sort';
import createReactClass from 'create-react-class';

const TableFilter = createReactClass({
	getInitialState(){
		this.filterIcons = {};
		this.childrenIntances;
		let stateData = this._createData(this.props.rows);

		return {
			initialData: stateData.initialData,
			filteredData: stateData.filteredData,
			sortKey: undefined
		}
	},

	// This method to be done with web worker
	/**
	 * [_createData The data passed via props is copied to another array(to avoid mutation). // TODO - only one level
	 * of mutation is prohibited right now.
	 *  New properties are attached that will be used for filtering purpose]
	 * @param  {Array}  rows [Data passed through props]
	 * @return {Object}      [Created Data to be used in Filtering]
	 */
	_createData(rows = []){
		let initialData = [];
		let filteredData = [];
		rows.map((item) => {
			initialData.push(Object.assign({}, item));
			filteredData.push(Object.assign({}, item));
		});

		return {
			initialData,
			filteredData
		};
	},
	
	_filterRows: function(value=undefined, key=undefined, addFilter=true, valueFunc=undefined){
		let filteredData = this.state.filteredData;
		if(!isUndefined(value) && !isUndefined(key)){
			
			const result = filterAction(filteredData, {key, value}, addFilter, valueFunc);
			if(!isUndefined(result)){
				const filteredArray = result.filteredArray,
					dataWithFilter = result.dataWithFilter;
				
				this.setState({
					filteredData: dataWithFilter
				});

				this.insideCall = true;
				this.props.onFilterUpdate && this.props.onFilterUpdate(filteredArray);
			}
		}
	},

	_resetRows: function(filterValues=[], key=undefined, selectAll=true, valueFunc=undefined){
		if(!isUndefined(key)){
			let filteredData = this.state.filteredData;
			const result = filtersReset(filteredData, filterValues, key, selectAll, valueFunc);
			if(!isUndefined(result)){
				const filteredArray = result.filteredArray,
					dataWithFilter = result.dataWithFilter;
				
				this.setState({
					filteredData: dataWithFilter
				});

				this.insideCall = true;
				this.props.onFilterUpdate && this.props.onFilterUpdate(filteredArray);
			}
		}
	},

	_sortRows: function(sortType=undefined, options={}){
		if(!isUndefined(sortType)){
			let filteredData = this.state.filteredData;
			const result = sortAction(filteredData, sortType, options);

			let filteredArray = [];

			this.setState({
				filteredData: result,
				sortKey: options.key
			});

			result.map((item) => {
				if(isUndefined(item.appliedFilters) || Object.keys(item.appliedFilters).length === 0){
					let itemCopy = Object.assign({}, item);
					delete itemCopy['appliedFilters'];
					filteredArray.push(itemCopy);
				}
			});

			this.insideCall = true;
			this.props.onFilterUpdate && this.props.onFilterUpdate(filteredArray);
		}
	},

	reset(rows){
		let stateData = this._createData(rows);
		this.setState({
			initialData: stateData.initialData,
			filteredData: stateData.filteredData
		});
	},

	render: Template
});

// TODO - Write Proptypes Definition
// TableFilter.propTypes = {

// }

export default TableFilter
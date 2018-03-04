import { Component } from 'react';
import Template from './template.js';
import {
	isUndefined, 
	isTypeArray, 
	isTypeString
} from './lib/util';
import {
	filterAction,
	filterActions,
	filtersReset
} from './lib/filter';
import {
	sortAction
} from './lib/sort';
import PropTypes from 'prop-types';

/**
 * Root Filter Component. This Component attaches filter icon and list to the table heads
 */
class TableFilter extends Component {
	constructor(props){
		super(props);
		this.filterIcons = {};
		this.childrenIntances;
		let stateData = this._createData(this.props.rows);

		this._initMethods();

		this.state = {
			initialData: stateData.initialData,
			filteredData: this.props.filteredData?this.props.filteredData:stateData.filteredData,
			sortKey: undefined
		}
	}

	/*Bind Functions to Context*/
	_initMethods(){
		this._filterRows = this._filterRows.bind(this);
		this._resetRows = this._resetRows.bind(this);
		this._sortRows = this._sortRows.bind(this);
		this._filterMulipleRows = this._filterMulipleRows.bind(this);
		this.reset = this.reset.bind(this);
	}

	// This method to be done with web worker
	/**
	 * [_createData The data passed via props is copied to another array(to avoid mutation). // TODO - only one level
	 * of mutation is prohibited right now.
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
	}

	_filterMulipleRows(addFilterArray=[], removeFilterArray=[] , valueFunc=undefined){
		let filteredData = this.state.filteredData;

		if(!isUndefined(addFilterArray)){

			let result = filterActions(filteredData, removeFilterArray, false, valueFunc);

			result = filterActions(result.dataWithFilter, addFilterArray, true, valueFunc);

			if(!isUndefined(result)){
				const filteredArray = result.filteredArray,
					dataWithFilter = result.dataWithFilter;
				
				this.setState({
					filteredData: dataWithFilter
				});

				this.insideCall = true;
				this.props.onFilterUpdate && this.props.onFilterUpdate(filteredArray, dataWithFilter);
			}

		}
	}
	
	/**
	 * [_filterRows Function passed as a prop to FilterList Componenet and called in case a filter is applied 
	 * or removed]
	 * @param  {[type]}  value     [Filter value]
	 * @param  {[type]}  key       [Filter key]
	 * @param  {Boolean} addFilter [Add or remove fitler]
	 * @param  {[type]}  valueFunc(optional) [Function passed to calculate the value of an item]
	 */
	_filterRows(value=undefined, key=undefined, addFilter=true, valueFunc=undefined){
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
				this.props.onFilterUpdate && this.props.onFilterUpdate(filteredArray, dataWithFilter);
			}
		}
	}

	/**
	 * [_resetRows Function called to reset selected the filters.]
	 * @param  {Array}   filterValues [Array of values for which filter is to be removed]
	 * @param  {[type]}  key          [Key of the filter to be removed]
	 * @param  {Boolean} selectAll    [description]
	 * @param  {[type]}  valueFunc    [description]
	 * @return {[type]}               [description]
	 */
	_resetRows(filterValues=[], key=undefined, selectAll=true, valueFunc=undefined){
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
	}

	/**
	 * [_sortRows Function to sort the values according to a filter]
	 * @param  {[type]}  sortType              [description]
	 * @param  {[type]}  options.valueFunc     [(optional) Function to calculate the value of the item]
	 * @param  {Boolean} options.caseSensitive [Case Sensitive or not]
	 * @param  {[type]}  options.key           [Key to sort by]
	 */
	_sortRows(sortType=undefined, {valueFunc=undefined, caseSensitive=false, key=undefined} = {}){
		if(!isUndefined(sortType)){
			let filteredData = this.state.filteredData;
			const result = sortAction(filteredData, sortType, {valueFunc, caseSensitive, key} );

			let filteredArray = [];

			this.setState({
				filteredData: result,
				sortKey: key,
				sortType: sortType
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
	}

	/**
	 * [reset Function called from parent(main code) to load/reset date of the filters]
	 * @param  {[type]} rows [Array of items]
	 */
	reset(rows){
		let stateData = this._createData(rows);
		this.setState({
			initialData: stateData.initialData,
			filteredData: stateData.filteredData
		});
	}

	render(){
		return Template.call(this);
	}
} 

TableFilter.propTypes = {
	rows: PropTypes.array.isRequired, // Filterable Data
	onFilterUpdate: PropTypes.func.isRequired, // Function to be called with updated data when filters are applied or removed
	rowClass: PropTypes.string // Optional class to be attached to row elements
}

export default TableFilter

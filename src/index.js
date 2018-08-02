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
		this.currentFilters = this.props.initialFilters || {};
		let rows = this._applyInitialFilters(this.props.rows);
		let stateData = this._createData(rows);

		this._initMethods();

		this.state = {
			initialData: stateData.initialData,
			filteredData: stateData.filteredData,
			sortKey: undefined
		}
	}

	/*Bind Functions to Context*/
	_initMethods(){
		this._filterRows = this._filterRows.bind(this);
		this._resetRows = this._resetRows.bind(this);
		this._sortRows = this._sortRows.bind(this);
		this._filterMulipleRows = this._filterMulipleRows.bind(this);
		this._applyInitialFilters = this._applyInitialFilters.bind(this);
		this._getValueFunctionForKey = this._getValueFunctionForKey.bind(this);
		this.reset = this.reset.bind(this);
	}

	/**
	 * [_applyInitialFilters If initial filters are provided we apply the filters to given data to maintain filter state]
	 * @param  {Array}  rows [Data on which filters will be applied]
	 * @return {Array}       [Data with filter props applied]
	 */
	_applyInitialFilters(rows=[]){
		const currentFilters = this.currentFilters;
		if( !isUndefined(currentFilters) && Object.keys(currentFilters).length > 0 ){
			
			const filterKeys = Object.keys(currentFilters);
			let filteredArray;
			filterKeys.map((currKey) => {
				const filterValues = currentFilters[currKey];
				let filterToApply = filterValues.map((currValue) => {
					return {
						key: currKey,
						value: currValue
					};
				});
				
				const result = filterActions(rows, filterToApply, true, this._getValueFunctionForKey(currKey));
				filteredArray = result.filteredArray;
				rows = result.dataWithFilter;
			});

			this.props.onFilterUpdate && this.props.onFilterUpdate(filteredArray, currentFilters);
		}

		return rows;
	}

	/**
	 * [_getValueFunctionForKey Method to get the itemDisplayValueFunc(if any) provided to individual filter list element]
	 * @param  {String} filterKey [key]
	 * @return {Function}    [Value function for that filter list]
	 */
	_getValueFunctionForKey(filterKey){
		let valueFunc;
		this.props.children.map((child, index) => {
			if(!isUndefined(child) && !isUndefined(child.props.filterkey, true) && child.props.filterkey === filterKey){
				valueFunc = child.props.itemDisplayValueFunc;
			}
		});

		return valueFunc;
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

			removeFilterArray.map((filterItem) => {
				this._updateCurrentFilter(filterItem.value, false, filterItem.key);
			});

			addFilterArray.map((filterItem) => {
				this._updateCurrentFilter(filterItem.value, true, filterItem.key);
			});

			let result = filterActions(filteredData, removeFilterArray, false, valueFunc);

			result = filterActions(result.dataWithFilter, addFilterArray, true, valueFunc);

			if(!isUndefined(result)){
				const filteredArray = result.filteredArray,
					dataWithFilter = result.dataWithFilter;
				
				this.setState({
					filteredData: dataWithFilter
				});
				this.props.onFilterUpdate && this.props.onFilterUpdate(filteredArray, this._getCurrentFilters());
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
			this._updateCurrentFilters([value], addFilter, key);
			const result = filterAction(filteredData, {key, value}, addFilter, valueFunc);
			if(!isUndefined(result)){
				const filteredArray = result.filteredArray,
					dataWithFilter = result.dataWithFilter;
				
				this.setState({
					filteredData: dataWithFilter
				});
				this.props.onFilterUpdate && this.props.onFilterUpdate(filteredArray, this._getCurrentFilters());
			}
		}
	}

	/**
	 * [_updateCurrentFilter Method to update current filter configuration, used to maintain state if component is unmounted]
	 * @param  {String}  filter [Filter value to add/remove]
	 * @param  {Boolean} add    [add/remove filter option]
	 * @param  {String}  key    [Filter key]
	 */
	_updateCurrentFilter(filter, add=true, key=undefined){
		if(!isUndefined(key, true) && !isUndefined(filter, true)){
			if(isUndefined(this.currentFilters[key])){
				this.currentFilters[key] = [];
			}

			if(add){
				if(this.currentFilters[key].indexOf(filter) < 0){
					this.currentFilters[key].push(filter)
				}
			}else{
				if(this.currentFilters[key].indexOf(filter) >= 0){
					const index = this.currentFilters[key].indexOf(filter);
					this.currentFilters[key] = [...this.currentFilters[key].slice(0, index), ...this.currentFilters[key].slice(index + 1)];
				}
			}
		}
	}

	/**
	 * [_updateCurrentFilters Mehtod to update current filter configuration with multiple values]
	 * @param  {Array}   filters [Array of filters to add/remove]
	 * @param  {Boolean} add     [add/remove filter option]
	 * @param  {String}  key     [Filter key]
	 */
	_updateCurrentFilters(filters=[], add=true, key){
		if(!isUndefined(filters) && !isUndefined(key)){
			filters.map((filterItem) => {
				this._updateCurrentFilter(filterItem, add, key);
			});
		}
	}

	/**
	 * [_getCurrentFilters get method for current filter configuration]
	 * @return {Object} [current filter configuration]
	 */
	_getCurrentFilters(){
		return this.currentFilters;
	}

	/**
	 * [_resetRows Function called to reset the selected filters.]
	 * @param  {Array}   filterValues [Array of values for which filter is to be removed]
	 * @param  {String}  key          [Key of the filter to be removed]
	 * @param  {Boolean} selectAll    [option to select all / remove all]
	 * @param  {Function}  valueFunc  [Get value function for filter]
	 */
	_resetRows(filterValues=[], key=undefined, selectAll=true, valueFunc=undefined){
		if(!isUndefined(key)){
			let filteredData = this.state.filteredData;
			this._updateCurrentFilters(filterValues, !selectAll, key);
			const result = filtersReset(filteredData, filterValues, key, selectAll, valueFunc);
			if(!isUndefined(result)){
				const filteredArray = result.filteredArray,
					dataWithFilter = result.dataWithFilter;
				
				this.setState({
					filteredData: dataWithFilter
				});
				this.props.onFilterUpdate && this.props.onFilterUpdate(filteredArray, this._getCurrentFilters());
			}
		}
	}

	/**
	 * [_sortRows Function to sort the values according to a filter]
	 * @param  {String}  sortType              [description]
	 * @param  {[type]}  options.valueFunc     [(optional) Function to calculate the value of the item]
	 * @param  {Boolean} options.caseSensitive [Case Sensitive or not]
	 * @param  {[String]}  options.key         [Key to sort by]
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

			this.props.onFilterUpdate && this.props.onFilterUpdate(filteredArray, this._getCurrentFilters());
		}
	}
	
	/**
	 * [reset Function called from parent(main code) to load/reset data of the filters]
	 * @param  {Array}  rows         [Array of items]
	 * @param  {Boolean} resetFilters [Option to reset current filters]
	 */
	reset(rows, resetFilters=true){
		if(!resetFilters){
			rows = this._applyInitialFilters(rows);
		}else{
			this.currentFilters = {};
		}

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
	rowClass: PropTypes.string, // Optional class to be attached to row elements
	initialFilters: PropTypes.array // Initial filter configuration if any(provided as a parameter in onFilterUpdate)
}

export default TableFilter

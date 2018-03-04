'use strict'

import {
	isUndefined,
	isTypeString,
	getValForKey
} from './util';


export const filterActions = (inputArray=[], filterArray=[], addFilter=true, valueFunc=undefined) => {
	let filteredArray = [];
	let dataWithFilter = inputArray.map((item) => {
		let itemCopy = Object.assign({}, item);

		let i,l;

		if(isUndefined(itemCopy.appliedFilters)){
			itemCopy.appliedFilters = {};
		}

		for(i=0,l=filterArray.length; i<l; i=i+1){
			const filterItem = filterArray[i];
			let key =  filterItem.key,
				value = filterItem.value;

			if(isUndefined(value)){
				value = "";
			}

			let itemValue = getValForKey(item, key);
			if(!isUndefined(valueFunc)){
				itemValue = valueFunc(itemValue);
			}

			if(isUndefined(itemValue)){
				itemValue = "";
			}

			if(isTypeString(itemValue)){
				itemValue = itemValue.trim();
			}

			if(addFilter){
				if(itemValue === value){
					if(!itemCopy.appliedFilters[key]){
						itemCopy.appliedFilters[key] = 0;
					}
					itemCopy.appliedFilters[key] += 1;
				}
			}
			else{
				if(itemValue === value){
					itemCopy.appliedFilters[key] -= 1;
					if(itemCopy.appliedFilters[key] === 0){
						delete itemCopy.appliedFilters[key];
					}
				}
			}
		}
			
		if(Object.keys(itemCopy.appliedFilters).length === 0){
			delete itemCopy['appliedFilters'];
			filteredArray.push(Object.assign({}, itemCopy));
		}

		return itemCopy;
	});

	return {
		filteredArray,
		dataWithFilter
	};
}

/**
 * [Function to apply a filter to an Array]
 * @param  {Array}   inputArray [Array to be filtered]
 * @param  {Object}  filter     [{key, value} filter key and value]
 * @param  {Boolean} addFilter  
 * @param  {Function}  valueFunc  [Function to calculate value of the property(optional)]
 * @return {Object} 
 *         filteredArray [Filtered items after appying filter]
 *         dataWithFilter [inputArray along with modification due to applied filters]            			 			
 */
export const filterAction = (inputArray=[], filter={}, addFilter=true, valueFunc=undefined) => {
	let key = filter.key,
		value = filter.value;

	if(isUndefined(value)){
		value = "";
	}
	if(!isUndefined(key)){

		let filteredArray = [];
		let dataWithFilter = inputArray.map((item) => {
			let itemCopy = Object.assign({}, item);
			let itemValue = getValForKey(item, key);

			if(!isUndefined(valueFunc)){
				itemValue = valueFunc(itemValue);
			}

			if(isUndefined(itemValue)){
				itemValue = "";
			}

			if(isUndefined(itemCopy.appliedFilters)){
				itemCopy.appliedFilters = {};
			}

			if(isTypeString(itemValue)){
				itemValue = itemValue.trim();
			}

			if(addFilter){
				if(itemValue === value){
					if(!itemCopy.appliedFilters[key]){
						itemCopy.appliedFilters[key] = 0;
					}
					itemCopy.appliedFilters[key] += 1;
				}
			}
			else{
				if(itemValue === value){
					itemCopy.appliedFilters[key] -= 1;
					if(itemCopy.appliedFilters[key] === 0){
						delete itemCopy.appliedFilters[key];
					}
				}
			}

			if(Object.keys(itemCopy.appliedFilters).length === 0){
				delete itemCopy['appliedFilters'];
				filteredArray.push(Object.assign({}, itemCopy));
			}
			
			return itemCopy;
		});
		
		return {
			filteredArray,
			dataWithFilter
		};
	}

	return;
}

/**
 * [Function to reset certain values for a filter]
 * @param  {Array}   inputArray [Array to be filtered]
 * @param  {Array}   values     [Filter values to reset]
 * @param  {[type]}  key        [Filter key]
 * @param  {Boolean} selectAll
 * @param  {Function}  valueFunc  [Function to calculate value of the property(optional)]
 * @return {[type]}
 */
export const filtersReset = (inputArray=[], values=[], key=undefined, selectAll=true, valueFunc=undefined) => {

	let filteredArray = [];
	let dataWithFilter = inputArray.map((item) => {
		let itemCopy = Object.assign({}, item);

		if(isUndefined(itemCopy.appliedFilters)){
			itemCopy.appliedFilters = {};
		}

		let itemValue = getValForKey(itemCopy, key);

		if(!isUndefined(valueFunc)){
			itemValue = valueFunc(itemValue);
		}

		if(isUndefined(itemValue)){
			itemValue = '';
		}

		if(isTypeString(itemValue)){
			itemValue = itemValue.trim();
		}

		if(values.indexOf(itemValue) >= 0){
			if(selectAll){
				delete itemCopy.appliedFilters[key];
			}else{
				if(!itemCopy.appliedFilters[key]){
					itemCopy.appliedFilters[key] = 0;
				}
				itemCopy.appliedFilters[key]++;
			}
		}

		if(Object.keys(itemCopy.appliedFilters).length === 0){
			delete itemCopy['appliedFilters'];
			filteredArray.push(Object.assign({}, itemCopy));
		}
		
		return itemCopy;
	});
	
	return {
		filteredArray,
		dataWithFilter
	};
}
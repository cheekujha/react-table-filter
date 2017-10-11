'use strict'

import {
	isUndefined,
	isTypeString,
	getValForKey
} from './util';

/**
 * [description]
 * @param  {Array}   inputArray [description]
 * @param  {Object}  filter     [description]
 * @param  {Boolean} addFilter  [description]
 * @return {[type]}             [description]
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
					itemCopy.appliedFilters[key]++;
				}
			}
			else{
				if(itemValue === value){
					itemCopy.appliedFilters[key]--;
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
'use strict'

export const isUndefined = (str, emptyStringCheck) => {
	if(typeof str === "undefined" || str === null || str === "undefined" || str === "null"){
		return true
	}
	if(emptyStringCheck && typeof str === "string" && str.toString().trim().length === 0){
		return true;
	}
	return false;
}

export const isTypeArray = (val) => {
	return Object.prototype.toString.call(val) === "[object Array]" ? true : false;
}

export const isTypeString = (val) => {
	return Object.prototype.toString.call(val) === "[object String]" ? true : false;
}

export const getValForKey = (obj, key) => {
	if(!isUndefined(key)){
		if(isTypeString(key)){
			const keyArray = key.split('.');

			if(keyArray.length === 1){
				return obj[key];
			}else{
				let finalValue = obj;
				let i, l;
				for(i=0, l=keyArray.length; i < l; i=i+1){
					const currKey = keyArray[i];
					const currValue = finalValue[currKey];

					if(!isUndefined(currValue)){
						finalValue = currValue;
					}else{
						finalValue = undefined;
						break;
					}
				}
				
				return finalValue;
			}
		}else{
			return obj[key];
		}
	}
	return;
}

export default {
	isUndefined,
	isTypeArray,
	isTypeString,
	getValForKey
}
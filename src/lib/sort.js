'use strict';

import {
  isUndefined,
  isTypeString,
  getValForKey,
} from './util';

/**
 * Function to sort an array (asc or dsc) w.r.t to an filter
 * @param  {Array}   inputArray            Array to be sorted
 * @param  {String}  type                  asc or dsc
 * @param  {Function}  options.valueFunc     Function to calculate value of an item(optional)
 * @param  {Boolean} options.caseSensitive Whether case sensitive or not
 * @param  {String}  options.key           Filter Key
 * @return {Array}                        Sorted array
 */
export const sortAction = (inputArray=[], type=undefined, {valueFunc=undefined, caseSensitive=false, key=undefined} ={}) => {
  if (!isUndefined(type)) {
    const inputCopy = [...inputArray];

    const sortFunc = (a, b) => {
      let aValue; let bValue;

      if (!isUndefined(key)) {
        aValue = getValForKey(a, key);
        bValue = getValForKey(b, key);
      } else {
        aValue = a;
        bValue = b;
      }

      if (!isUndefined(valueFunc)) {
        aValue = valueFunc(aValue);
        bValue = valueFunc(bValue);
      } else {
        if (!isNaN(Number(aValue)) && !isNaN(Number(bValue))) {
          aValue = Number(aValue);
          bValue = Number(bValue);
        }

        if (isTypeString(aValue)) {
          aValue = aValue.trim();
          if (!caseSensitive) {
            aValue = aValue.toUpperCase();
          }
        }

        if (isTypeString(bValue)) {
          bValue = bValue.trim();
          if (!caseSensitive) {
            bValue = bValue.toUpperCase();
          }
        }
      }

      if (isUndefined(aValue)) {
        aValue = '';
      }

      if (isUndefined(bValue)) {
        bValue = '';
      }

      let result = 0;

      if (aValue < bValue) {
        result = -1;
      } else {
        result = 1;
      }

      if (type === 'asc') {
        return result;
      } else {
        return -(result);
      }
    };

    return inputCopy.sort(sortFunc);
  }
  return inputArray;
};

export default sortAction;

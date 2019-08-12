'use strict';

import {
  isUndefined,
  isTypeString,
  getValForKey,
} from './util';

import {
  sortAction,
} from './sort';
import {
  BLANK_LABEL,
  ASC_VALUE,
} from './constants';

export const filterActions = (inputArray=[], filterArray=[], addFilter=true, valueFunc=undefined) => {
  const filteredArray = [];
  const dataWithFilter = inputArray.map((item) => {
    const itemCopy = Object.assign({}, item);

    let i; let l;

    if (isUndefined(itemCopy.appliedFilters)) {
      itemCopy.appliedFilters = {};
    }

    for (i=0, l=filterArray.length; i<l; i=i+1) {
      const filterItem = filterArray[i];
      const key = filterItem.key;
      let value = filterItem.value;

      if (isUndefined(value)) {
        value = '';
      }

      let itemValue = getValForKey(item, key);
      if (!isUndefined(valueFunc)) {
        itemValue = valueFunc(itemValue);
      }

      if (isUndefined(itemValue)) {
        itemValue = '';
      }

      if (isTypeString(itemValue)) {
        itemValue = itemValue.trim();
      }

      if (addFilter) {
        if (itemValue === value) {
          if (!itemCopy.appliedFilters[key]) {
            itemCopy.appliedFilters[key] = 0;
          }
          itemCopy.appliedFilters[key] += 1;
        }
      } else {
        if (itemValue === value) {
          itemCopy.appliedFilters[key] -= 1;
          if (itemCopy.appliedFilters[key] === 0) {
            delete itemCopy.appliedFilters[key];
          }
        }
      }
    }

    if (Object.keys(itemCopy.appliedFilters).length === 0) {
      delete itemCopy['appliedFilters'];
      filteredArray.push(Object.assign({}, itemCopy));
    }

    return itemCopy;
  });

  return {
    filteredArray,
    dataWithFilter,
  };
};

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
  const key = filter.key;
  let value = filter.value;

  if (isUndefined(value)) {
    value = '';
  }
  if (!isUndefined(key)) {
    const filteredArray = [];
    const dataWithFilter = inputArray.map((item) => {
      const itemCopy = Object.assign({}, item);
      let itemValue = getValForKey(item, key);

      if (!isUndefined(valueFunc)) {
        itemValue = valueFunc(itemValue);
      }

      if (isUndefined(itemValue)) {
        itemValue = '';
      }

      if (isUndefined(itemCopy.appliedFilters)) {
        itemCopy.appliedFilters = {};
      }

      if (isTypeString(itemValue)) {
        itemValue = itemValue.trim();
      }

      if (addFilter) {
        if (itemValue === value) {
          if (!itemCopy.appliedFilters[key]) {
            itemCopy.appliedFilters[key] = 0;
          }
          itemCopy.appliedFilters[key] += 1;
        }
      } else {
        if (itemValue === value) {
          itemCopy.appliedFilters[key] -= 1;
          if (itemCopy.appliedFilters[key] === 0) {
            delete itemCopy.appliedFilters[key];
          }
        }
      }

      if (Object.keys(itemCopy.appliedFilters).length === 0) {
        delete itemCopy['appliedFilters'];
        filteredArray.push(Object.assign({}, itemCopy));
      }

      return itemCopy;
    });

    return {
      filteredArray,
      dataWithFilter,
    };
  }

  return;
};

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
  const filteredArray = [];
  const dataWithFilter = inputArray.map((item) => {
    const itemCopy = Object.assign({}, item);

    if (isUndefined(itemCopy.appliedFilters)) {
      itemCopy.appliedFilters = {};
    }

    let itemValue = getValForKey(itemCopy, key);

    if (!isUndefined(valueFunc)) {
      itemValue = valueFunc(itemValue);
    }

    if (isUndefined(itemValue)) {
      itemValue = '';
    }

    if (isTypeString(itemValue)) {
      itemValue = itemValue.trim();
    }

    if (values.indexOf(itemValue) >= 0) {
      if (selectAll) {
        delete itemCopy.appliedFilters[key];
      } else {
        if (!itemCopy.appliedFilters[key]) {
          itemCopy.appliedFilters[key] = 0;
        }
        itemCopy.appliedFilters[key]++;
      }
    }

    if (Object.keys(itemCopy.appliedFilters).length === 0) {
      delete itemCopy['appliedFilters'];
      filteredArray.push(Object.assign({}, itemCopy));
    }

    return itemCopy;
  });

  return {
    filteredArray,
    dataWithFilter,
  };
};

/**
 * createFiltersFromItems calculate current filter's list items and state
 * @param  {Array} dataArray            Input Item list
 * @param  {String} filterkey
 * @param  {Function} itemDisplayValueFunc
 * @param  {Function} itemSortValueFunc
 * @return {Object}
 */
export const createFiltersFromItems = (dataArray, filterkey, itemDisplayValueFunc, itemSortValueFunc) => {
  const filteredData = dataArray ? [...dataArray] : [];
  const usedKeys = [];
  let filterList = [];

  let selectState = true;

  filteredData.map((item) => {
    let itemKey = getValForKey(item, filterkey);
    let orinigalValue = itemKey;

    if (!isUndefined(itemDisplayValueFunc)) {
      itemKey = itemDisplayValueFunc(itemKey);
    }

    const appliedFilters = item.appliedFilters || {};
    let displayName = itemKey;

    if (isUndefined(itemKey)) {
      displayName = BLANK_LABEL;
      itemKey = '';
      orinigalValue = displayName;
    } else if ((isTypeString(itemKey))) {
      itemKey = itemKey.trim();
      if (itemKey.length === 0) {
        displayName = BLANK_LABEL;
        orinigalValue = displayName;
      }
    }

    if (usedKeys.indexOf(itemKey) === -1) {
      if (!isUndefined(appliedFilters) && Object.keys(appliedFilters).length > 0) {
        if (Object.keys(appliedFilters).length === 1 && Object.keys(appliedFilters)[0] === filterkey) {
          selectState = false;
          filterList.push({
            'key': itemKey,
            'display': displayName,
            'selected': false,
            'visible': true,
            'orinigalValue': orinigalValue,
          });
        } else {
          filterList.push({
            'key': itemKey,
            'display': displayName,
            'selected': true,
            'visible': false,
            'orinigalValue': orinigalValue,
          });
        }
      } else {
        filterList.push({
          'key': itemKey,
          'display': displayName,
          'selected': true,
          'visible': true,
          'orinigalValue': orinigalValue,
        });
      }

      usedKeys.push(itemKey);
    } else {
      const filterIndex = usedKeys.indexOf(itemKey);
      let filterItem = filterList[filterIndex];
      if (Object.keys(appliedFilters).length === 0) {
        if (!filterItem.selected || !filterItem.visible) {
          filterItem = Object.assign({}, filterItem, {'selected': true, 'visible': true});
          filterList[filterIndex] = filterItem;
        }
      }

      if (Object.keys(appliedFilters).length === 1 && Object.keys(appliedFilters)[0] === filterkey) {
        selectState = false;
        filterItem = Object.assign({}, filterItem, {'selected': false, 'visible': true});
        filterList[filterIndex] = filterItem;
      }
    }
  });

  filterList = sortAction(filterList, ASC_VALUE, {
    valueFunc: itemSortValueFunc,
    key: 'orinigalValue',
  });

  return {
    filterList,
    selectState,
  };
};

/**
 * calculateFilterProps calculate single filterList props from input data and other parameters
 * @param  {Array} filteredData          input data
 * @param  {String} filterkey            object key for the current filter
 * @param  {Function} itemDisplayValueFunc
 * @param  {Function} itemSortValueFunc
 * @param  {String} sortKey              current sort key if any
 * @param  {String} sortType
 * @return {Object}
 */
export const calculateFilterProps = ({
  filteredData,
  filterkey,
  itemDisplayValueFunc,
  itemSortValueFunc,
  sortKey,
  sortType,
}) => {
  const {filterList, selectState} = createFiltersFromItems(filteredData, filterkey, itemDisplayValueFunc, itemSortValueFunc);
  const sortTypeState = (!isUndefined(sortKey) && (sortKey === filterkey) ) ? sortType : undefined;

  return {
    filterList: filterList,
    selectAllFilters: selectState,
    sortType: sortTypeState,
  };
};

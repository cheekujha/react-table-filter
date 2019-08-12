import React from 'react';
import FilterListItem from './filterListItem';
import SelectAllItem from './selectAllItem';
import SearchBar from './searchBar';
import EventStack from './lib/eventStack';
import FilterIcon from './filterIcon';
import SortIcon from './sortIcon';
import PropTypes from 'prop-types';
import {
  ASC_VALUE,
  DSC_VALUE,
} from './lib/constants';
import {
  isUndefined,
} from './lib/util';

/**
 * FilterList List of options displayed in the header of the table
 * @extends React
 */
class FilterList extends React.Component {
  /**
   * constructor
   * @param {Object} props
   */
  constructor(props) {
    super(props);

    this.appliedSearchFilters = undefined;
    this.searchValue = undefined;
    this.state = {
      showFilter: false,
      searchEnabled: false,
    };
  }

  /**
   * componentWillUnmount
   */
  componentWillUnmount() {
    /* Remove body click listener*/
    EventStack.unsub('click', this._handleOutsideClick);
  }

  /**
   * _handleOutsideClick Function to hide open filter list when click is done anywhere else
   * @param  {Event} e
   */
  _handleOutsideClick = (e) => {
    if (!this.filterIconNode.contains(e.target)) {
      this._hideFilter();
    }
  }

  /**
   * _filterIconClicked function handles click on filter icon
   * @param  {Event} e
   */
  _filterIconClicked = (e) => {
    const filterState = this.state.showFilter;
    const newState = !filterState;

    if (newState) {
      this._displayFilter();
    } else {
      this._hideFilter();
    }
  }

  /**
   * _displayFilter function handles display of filter list
   */
  _displayFilter = () => {
    /* Body Click listener added*/
    EventStack.sub('click', this._handleOutsideClick);
    this.setState({
      showFilter: true,
    });
  }

  /**
   * _hideFilter function hides filter list
   */
  _hideFilter = () => {
    /* Body Click listener removed*/
    EventStack.unsub('click', this._handleOutsideClick);
    this.setState({
      showFilter: false,
      searchEnabled: false,
    });
  }

  /**
   * _filterUpdated method called when a filter list item is clicked
   * @param  {Number} index Index of the filter clicked
   */
  _filterUpdated = (index) => {
    const allFilters = this.props.filterList;
    if (!isUndefined(allFilters[index])) {
      const newFilterState = !allFilters[index]['selected'];
      this._filterData(allFilters[index]['key'], !newFilterState);
    }
  }

  /**
   * [=_selectAllClicked method called when a select all item is clicked
   */
  _selectAllClicked = () => {
    const selectAllState = this.props.selectAllFilters;
    const newSelectAllState = !selectAllState;
    const searchState = this.state.searchEnabled;
    // const searchValue = this.searchValue;

    if (searchState) {
      return;
    }

    const visibleFiltersValues = this.props.filterList.filter((filterItem) => {
      if (newSelectAllState) {
        return (filterItem.visible && !filterItem.selected);
      } else {
        return (filterItem.visible && filterItem.selected);
      }
    }).map((filterItem) => {
      return filterItem.key;
    });

    this._resetData(visibleFiltersValues, newSelectAllState);
  }

  /**
   * _filterData Method calls parent props filter mehtod when filters are changed
   * @param  {String}  filterValue Filter value
   * @param  {Boolean} addFilter   Add/Remove
   */
  _filterData = (filterValue=undefined, addFilter=true) => {
    this.props.filterRows(filterValue, this.props.filterkey, addFilter, this.props.itemDisplayValueFunc);
  }

  /**
   * _resetData Method calls parent props reset mehtod
   * @param  {Array}   filterValues Array of filter values
   * @param  {Boolean} selectAll    Add/Remove
   */
  _resetData = (filterValues=[], selectAll=true) => {
    this.props.resetRows(filterValues, this.props.filterkey, selectAll, this.props.itemDisplayValueFunc);
  }

  /**
   * _sortClicked description
   */
  _sortClicked = () => {
    const currentSortType = this.props.sortType;
    let newSortType;
    if (isUndefined(currentSortType) || currentSortType === DSC_VALUE) {
      newSortType = ASC_VALUE;
    } else {
      newSortType = DSC_VALUE;
    }

    this.props.sortRows(newSortType, {
      itemSortValueFunc: this.props.itemSortValueFunc,
      caseSensitive: (this.props.casesensitive === 'true') ? true : false,
      key: this.props.filterkey,
    });
  }

  /**
   * _searchChanged Method called when search is triggered
   * @param  {String} searchValue [Search value]
   */
  _searchChanged = (searchValue) => {
    const propKey = this.props.filterkey;
    this.searchValue = searchValue;


    const prevAppliedFilters = this.appliedSearchFilters;
    if (!isUndefined(searchValue, true)) {
      this.setState({
        searchEnabled: true,
      });

      searchValue = searchValue.toLowerCase();
      const filterList = this.props.filterList;

      const filtersToApply = filterList.filter((filterItem) => {
        const filterKey = filterItem.key.toString().toLowerCase();
        if (filterKey.indexOf(searchValue) < 0 && filterItem.visible) {
          return true;
        }
        return false;
      }).map((filterItem) => {
        return {
          key: propKey,
          value: filterItem.key,
        };
      });
      this.appliedSearchFilters = filtersToApply;
      this.props.filterMultipleRows(filtersToApply, prevAppliedFilters, this.props.itemDisplayValueFunc);
    } else {
      this.setState({
        searchEnabled: false,
      });

      this.appliedSearchFilters = [];
      this.props.filterMultipleRows([], prevAppliedFilters, this.props.itemDisplayValueFunc);
    }
  }

  /**
   * render
   * @return {JSX}
   */
  render() {
    const filterState = this.state.showFilter;
    const showSearch = this.props.showsearch === 'false' ? false : true;

    const filterListItemHtml = [];
    let filterListHtml;

    if (this.props.filterList.length > 1) {
      if (filterState) {
        const searchBarHtml = showSearch ? <SearchBar searchChanged={ this._searchChanged }/> : null;

        this.props.filterList.map((filterItem, index) => {
          if (filterItem.visible) {
            if (this.state.searchEnabled) {
              const filterKey = filterItem.key.toString().toLowerCase();
              if (filterKey.indexOf(this.searchValue.toLowerCase()) >= 0) {
                return filterListItemHtml.push(<FilterListItem key={'item_'+index} filterClicked={this._filterUpdated} index={index} label={filterItem.display} selected={filterItem.selected}/>);
              } else {
                return null;
              }
            } else {
              filterListItemHtml.push(<FilterListItem key={'item_'+index} filterClicked={this._filterUpdated} index={index} label={filterItem.display} selected={filterItem.selected}/>);
            }
          }
        });


        const filterListClass = [(this.props.alignleft === 'true') ? 'align-left ' : '', 'filter-list'].join('');

        filterListHtml = (<div className={ filterListClass }>
          { searchBarHtml }
          <SortIcon sort={ this._sortClicked } sortType={ this.props.sortType }/>
          <SelectAllItem filterClicked={this._selectAllClicked} selected={this.props.selectAllFilters}/>
          { filterListItemHtml }
        </div>);
      }

      const filterActive = !this.props.selectAllFilters || filterState;
      return (<div className="table-filter-parent" ref={ (node) => {
        this.filterIconNode = node;
      } }>
        <FilterIcon iconClicked={ this._filterIconClicked } selected={filterActive}/>
        { filterListHtml }
      </div>);
    } else {
      return (<div style={ {display: 'none'} }></div>);
    }
  }
}

FilterList.propTypes = {
  filterRows: PropTypes.func.isRequired,
  resetRows: PropTypes.func.isRequired,
  sortRows: PropTypes.func.isRequired,
  sortType: PropTypes.string,
  filterkey: PropTypes.string.isRequired,
  itemDisplayValueFunc: PropTypes.func,
  itemSortValueFunc: PropTypes.func,
  casesensitive: PropTypes.string,
  filterMultipleRows: PropTypes.func.isRequired,
  showsearch: PropTypes.string,
  alignleft: PropTypes.string,
  filterList: PropTypes.array,
  selectAllFilters: PropTypes.bool,
};

export default FilterList;

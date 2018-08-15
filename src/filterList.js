import React from 'react';
import FilterListItem from './filterListItem';
import SelectAllItem from './selectAllItem';
import SearchBar from './searchBar';
import {
	isUndefined, 
	isTypeString,
	getValForKey
} from './lib/util';
import EventStack from './lib/eventStack';
import FilterIcon from './filterIcon';
import {
	sortAction
} from './lib/sort';
import {
	BLANK_LABEL,
	ASC_VALUE,
	DSC_VALUE
} from './lib/constants';
import SortIcon from './sortIcon';
import PropTypes from 'prop-types';

class FilterList extends React.Component {
	constructor(props){
		super(props);

		this._initMethods();
		const { filterList, selectState } = this._calculateFilterState(this.props.filteredData);
		this.appliedSearchFilters = undefined;
		this.searchValue = undefined;
		this.state = {
			filterList: filterList,
			showFilter: false,
			selectAllFilters: selectState,
			sortType: undefined,
			searchEnabled: false
		};
	}

	/*Bind functions to react context*/
	_initMethods(){
		this._handleOutsideClick = this._handleOutsideClick.bind(this);
		this._calculateFilterState = this._calculateFilterState.bind(this);
		this._filterIconClicked = this._filterIconClicked.bind(this);
		this._displayFilter = this._displayFilter.bind(this);
		this._hideFilter = this._hideFilter.bind(this);
		this._filterUpdated = this._filterUpdated.bind(this);
		this._selectAllClicked = this._selectAllClicked.bind(this);
		this._filterData = this._filterData.bind(this);
		this._resetData = this._resetData.bind(this);
		this._sortClicked = this._sortClicked.bind(this);
		this._searchChanged = this._searchChanged.bind(this);
	}

	componentWillUnmount(){
		/*Remove body click listener*/
		EventStack.unsub('click', this._handleOutsideClick, document);
	}

	/**
	 * [_handleOutsideClick Function to hide open filter list when click is done anywhere else]
	 */
	_handleOutsideClick(e){
		if(!this.filterIconNode.contains(e.target)){
			this._hideFilter();
		}
	}

	componentWillReceiveProps(nextProps){
		const { filterList, selectState } = this._calculateFilterState(nextProps.filteredData);

		const sortTypeState = (!isUndefined(nextProps.sortKey) && (nextProps.sortKey === this.props.filterkey) ) ? nextProps.sortType : undefined;

		this.setState({
			filterList: filterList,
			selectAllFilters: selectState,
			sortType: sortTypeState
		});
	}

	/**
	 * [_calculateFilterState Function calculates current filter state to display]
	 * @param  {Array} dataArray [Data passed from parent on which filter is to be applies]
	 */
	_calculateFilterState(dataArray){
		let filteredData = dataArray ? [...dataArray] : [];
		const filterkey = this.props.filterkey;
		let usedKeys = [];
		let filteredUsedKeys = [];
		let filterList = [];

		let selectState = true;

		filteredData.map((item) => {
			let itemKey = getValForKey(item, filterkey)
			let orinigalValue = itemKey;

			if(!isUndefined(this.props.itemDisplayValueFunc)){
				itemKey = this.props.itemDisplayValueFunc(itemKey);
			}

			const appliedFilters = item.appliedFilters || {};
			let displayName = itemKey;

			if(isUndefined(itemKey)){
				displayName = BLANK_LABEL;
				itemKey = "";
				orinigalValue = displayName;
			}else if((isTypeString(itemKey))){
				itemKey = itemKey.trim();
				if(itemKey.length === 0){
					displayName = BLANK_LABEL;
					orinigalValue = displayName;
				}
			}
			
			if(usedKeys.indexOf(itemKey) === -1){
				if(!isUndefined(appliedFilters) && Object.keys(appliedFilters).length > 0){
					if(Object.keys(appliedFilters).length === 1 && Object.keys(appliedFilters)[0] === filterkey){
						selectState = false;
						filterList.push({
							"key": itemKey,
							"display": displayName,
							"selected": false,
							"visible": true,
							"orinigalValue": orinigalValue
						});
					}else{
						filterList.push({
							"key": itemKey,
							"display": displayName,
							"selected": true,
							"visible": false,
							"orinigalValue": orinigalValue
						});
					}
				}else{
					filterList.push({
						"key": itemKey,
						"display": displayName,
						"selected": true,
						"visible": true,
						"orinigalValue": orinigalValue
					});
				}

				usedKeys.push(itemKey);
			}else{
				const filterIndex = usedKeys.indexOf(itemKey);
				let filterItem = filterList[filterIndex];
				if(Object.keys(appliedFilters).length === 0){
					if(!filterItem.selected || !filterItem.visible){
						filterItem = Object.assign({}, filterItem, {"selected": true, "visible": true});
						filterList[filterIndex] = filterItem;
					}
				}

				if(Object.keys(appliedFilters).length === 1 && Object.keys(appliedFilters)[0] === filterkey){
					selectState = false;
					filterItem = Object.assign({}, filterItem, {"selected": false, "visible": true});
					filterList[filterIndex] = filterItem;
				}
			}
		});

		filterList = sortAction(filterList, ASC_VALUE, {
			valueFunc: this.props.itemSortValueFunc,
			key: 'orinigalValue'
		});

		return {
			filterList,
			selectState
		};
	}

	_filterIconClicked(e){
		const filterState = this.state.showFilter;
		const newState = !filterState;

		if(newState){
			this._displayFilter();
		}else{
			this._hideFilter();
		}
		
	}

	_displayFilter(){
		/*Body Click listener added*/
		EventStack.sub('click', this._handleOutsideClick, document);
		this.setState({
			showFilter: true
		});
	}

	_hideFilter(){
		/*Body Click listener removed*/
		EventStack.unsub('click', this._handleOutsideClick, document);
		this.setState({
			showFilter: false,
			searchEnabled: false
		});
	}

	/**
	 * [_filterUpdated method called when a filter list item is clicked]
	 * @param  {Number} index [Index of the filter clicked]
	 */
	_filterUpdated(index){
		let allFilters = this.state.filterList;
		if(!isUndefined(allFilters[index])){
			const newFilterState = !allFilters[index]['selected'];
			this._filterData(allFilters[index]['key'], !newFilterState);
		}
	}

	/**
	 * [_selectAllClicked method called when a select all item is clicked]
	 */
	_selectAllClicked(){
		const selectAllState = this.state.selectAllFilters;
		const newSelectAllState = !selectAllState;
		const searchState = this.state.searchEnabled;
		// const searchValue = this.searchValue;

		if(searchState){
			return;
		}

		const visibleFiltersValues = this.state.filterList.filter((filterItem) => {
			if(newSelectAllState){
				return (filterItem.visible && !filterItem.selected);
			}else{
				return (filterItem.visible && filterItem.selected);
			}
		}).map((filterItem) => {
			return filterItem.key;
		});

		this._resetData(visibleFiltersValues, newSelectAllState);		
	}

	/**
	 * [_filterData Method calls parent props filter mehtod when filters are changed]
	 * @param  {String}  filterValue [Filter value]
	 * @param  {Boolean} addFilter   [Add/Remove]
	 */
	_filterData(filterValue=undefined, addFilter=true){
		this.props.filterRows(filterValue, this.props.filterkey, addFilter, this.props.itemDisplayValueFunc);
	}

	/**
	 * [_resetData Method calls parent props reset mehtod]
	 * @param  {Array}   filterValues [Array of filter values]
	 * @param  {Boolean} selectAll    [Add/Remove]
	 */
	_resetData(filterValues=[], selectAll=true){
		this.props.resetRows(filterValues, this.props.filterkey, selectAll, this.props.itemDisplayValueFunc);
	}

	/**
	 * [_sortClicked description]
	 * @return {[type]} [description]
	 */
	_sortClicked(){
		const currentSortType = this.state.sortType;
		let newSortType;
		if(isUndefined(currentSortType) || currentSortType === DSC_VALUE){
			newSortType = ASC_VALUE;
		}else{
			newSortType = DSC_VALUE;
		}

		this.props.sortRows(newSortType, {
			itemSortValueFunc: this.props.itemSortValueFunc,
			caseSensitive: this.props.caseSensitive,
			key: this.props.filterkey
		});
	}

	/**
	 * [_searchChanged Method called when search is triggered]
	 * @param  {String} searchValue [Search value]
	 */
	_searchChanged(searchValue){
		let searchState = false;
		let propKey = this.props.filterkey;
		this.searchValue = searchValue;
		

		const prevAppliedFilters = this.appliedSearchFilters;
		if(!isUndefined(searchValue, true)){

			this.setState({
				searchEnabled: true
			});

			searchValue = searchValue.toLowerCase();
			let filterList = this.state.filterList;
			searchState = true;
			
			const filtersToApply = filterList.filter((filterItem) => {
				const filterKey = filterItem.key.toString().toLowerCase();
				if(filterKey.indexOf(searchValue) < 0 && filterItem.visible){
					return true;
				}
				return false;
			}).map((filterItem) => {
				return {
					key: propKey,
					value: filterItem.key
				}
			});
			this.appliedSearchFilters = filtersToApply;
			this.props.filterMultipleRows(filtersToApply, prevAppliedFilters, this.props.itemDisplayValueFunc);
		}else{

			this.setState({
				searchEnabled: false
			});

			this.appliedSearchFilters = [];
			this.props.filterMultipleRows([], prevAppliedFilters, this.props.itemDisplayValueFunc);
		}
	}

	render(){
		const filterState = this.state.showFilter,
			filterkey = this.props.filterkey,
			showSearch = this.props.showSearch === false ? false : true;

		let filterListItemHtml = [],
			filterListHtml;
		

		if(this.state.filterList.length > 1){
			if(filterState){
				const searchBarHtml = showSearch ? <SearchBar searchChanged={ this._searchChanged }/> : null;

				this.state.filterList.map((filterItem, index) => {
					if(filterItem.visible){
						if(this.state.searchEnabled){
							const filterKey = filterItem.key.toString().toLowerCase();
							if(filterKey.indexOf(this.searchValue.toLowerCase()) >= 0){
								return filterListItemHtml.push(<FilterListItem key={"item_"+index} filterClicked={this._filterUpdated} index={index} label={filterItem.display} selected={filterItem.selected}/>);
							}else{
								return null;
							}
						}else{
							filterListItemHtml.push(<FilterListItem key={"item_"+index} filterClicked={this._filterUpdated} index={index} label={filterItem.display} selected={filterItem.selected}/>);
						}
					}
				});


				const filterListClass = [ (this.props.alignleft === true) ? "align-left " : "",  "filter-list"].join('');

				filterListHtml = (<div className={ filterListClass }>
									{ searchBarHtml }
									<SortIcon sort={ this._sortClicked } sortType={ this.state.sortType }/>
									<SelectAllItem filterClicked={this._selectAllClicked} selected={this.state.selectAllFilters}/>
									{ filterListItemHtml }
								</div>);
			}

			const filterActive = !this.state.selectAllFilters || filterState;
			return (<div className="table-filter-parent" ref={ (node) => {this.filterIconNode = node;} }>
						<FilterIcon iconClicked={ this._filterIconClicked } selected={filterActive}/>
						{ filterListHtml }
					</div>);
		}else{
			return (<div style={ {display: "none"} }></div>);
		}
	}
}

FilterList.propTypes = {
	initialData: PropTypes.array.isRequired,
	filteredData: PropTypes.array.isRequired,
	filterRows: PropTypes.func.isRequired,
	resetRows: PropTypes.func.isRequired,
	sortRows: PropTypes.func.isRequired,
	sortKey: PropTypes.string,
	sortType: PropTypes.string,
}

export default FilterList

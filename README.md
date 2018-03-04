# react-table-filter

> Module creates Excel like Column Filters for Table. The filter list contains all the unique items present in every column. See image below for example.

![alt text](https://user-images.githubusercontent.com/13845950/34553583-42f475c0-f14e-11e7-87f0-7d9704545bb9.png)

## Demo

[https://cheekujha.github.io/react-table-filter/](https://cheekujha.github.io/react-table-filter/)

## Install
You need to have react and react-dom as dependencies in your project.

1. With [npm](https://npmjs.org/) installed, run

```
$ npm install react-table-filter --save
```

2. At this point you can import react-table-filter and its styles in your application as follows:

```js
import TableFilter from 'react-table-filter';

// Be sure to include styles at some point, probably during your bootstraping
// In JS
import react-table-filter/lib/styles.css;

// In SCSS
@import "path-to-node_modules/react-table-filter/lib/styles.css";

// Or directly import css
<link href="path-to-react-table-filter/lib/styles.css" rel="stylesheet" />

```

## Usage

1. Wrap header columns (th / td) with TableFilter as shown below.
```
<TableFilter 
  rows={data} 
  onFilterUpdate={this._filterUpdated}
  filteredData={filteredData}>
  <th filterkey="name">
    Name
  </th>
  <th filterkey="season">
    Season
  </th>
  <th filterkey="number">
    Number
  </th>
</TableFilter>
```
Not Required Props on TableFilter

filteredData - Filters state to restore it. You can take it from second parameter of onFilterUpdate()

Required Props on TableFilter

rows - Initial Array of Items

onFilterUpdate - Function called with updated filtered data when filters are added/removed. This function is used to show updated data by your application. Ex:

```
filterUpdated = (newData, filtersState) => {
		this.setState({
			"upddatedData": newData,
			"filtersState" : filtersState
		});
	}
```

Requied Props on th/td (Header columns)

filterkey - The key by which that column is to be filtered(key as present in rows data)

Only the Columns with "filterkey" prop present will be considered for filtering.

## Reset Items after Initialization

If you want to reset Items after component mount. Make as reference to "TableFilter" node and call "reset" method as shown below.

```
<TableFilter 
  rows={data} 
  onFilterUpdate={this._filterUpdated}
  ref={ (node) => {this.tableFilterNode = node;}>
  
this.tableFilterNode.reset(newData);
```
## API

### Properties

#### TableFilter

Name | Type | Default | Required | Description 
:--- | :--- | :------ | :------- | :----------
rows | array | | true | Items for the Filter
filteredData | array | | true | Items for restore filters state
onFilterUpdate | function(updatedData, filtersState) | | true | Function called with filtered data
rowClass | string | | false | Any additional class to be added to table row contaning header columns

#### TableFilter Ref Methods

Name | Type | Description 
:--- | :--- | :----------
reset | function(items) | Function called to reset items after component has been mounted


#### Cloumn Headers(td/th)

Name | Type | Default | Required | Description 
:--- | :--- | :------ | :------- | :----------
filterkey | string | | false | Key by which the Column should be filtered(Key as present in single Item)
itemDisplayValueFunc | function(itemValue) | | false | Optional Function that returns the Value that is displayed in the filter list for each item(Default is the item value - Item[key])
itemSortValueFunc | function(itemValue) | | false | Optional Function that returns the Value that is used while sorting (Default is the item value - Item[key])
alignleft | boolean | false | false | Decides while side filter list should be aligned w.r.t Column
caseSensitive | boolean | false | false | Case Sensitivity during sort
showSearch | boolean | true | false | Display/Hide the search input

## License

ISC


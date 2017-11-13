# react-table-filter

> Module creates Excel like Column Filters for Table. The filter list contains all the unique items present in every column. See image below for example.

![alt text](https://user-images.githubusercontent.com/3127722/32687714-9d29ac44-c6e8-11e7-969e-8697a55d42d5.png)

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
  onFilterUpdate={this._filterUpdated}>
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
Required Props on TableFilter

rows - Initial Array of Items

onFilterUpdate - Function called with updated filtered data when filters are added/removed. This function is used to show updated data by your application. Ex:

```
filterUpdated = (newData) => {
		this.setState({
			"upddatedData": newData
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

## License

ISC


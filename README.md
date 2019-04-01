# react-graphic-timeline


[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Description
Create graphic timelines for your react apps

## Install
`yarn add react-graphic-timeline`

`npm install react-graphic-timeline`

## Usage

```javascript
import React from 'react'

import TimeLine from 'react-graphic-timeline'

export default function MyApp() {
    return (
        <TimeLine data={myData} start="2009-03-10" end="2009-03-21" />
    )
}
```

## Props
### `data -> array -> Required` 

Example:

```javascript
[
  {
    id: 3424,
    title: 'Mexico',
    color: '#0A764F',
    data: {
      '10/03/2009': 15,
      ...
    }
  },
  ...
]
```
```
{
  id: number,
  title: 'String',
  color: [hex, rgb, rgba, any valid css background-color propery value],
  data: {
      'DD/MM/YYYY': number,
  ...
}
```
The date object key can be of any format by default `DD/MM/YYYY` (No suported by [momentjs](https://momentjs.com/)) but more readable.

### `start -> array -> Required` 

Exmple:
`"2009-03-10"`

Must be in any format supported by [momentjs valid date](https://momentjs.com/docs/#/parsing/string/)

### `end -> array -> Required` 

Exmple:
`"2009-03-21"`

Must be in any format supported by [momentjs valid date](https://momentjs.com/docs/#/parsing/string/)

Exmple: `"2009-03-10"`

Must be in any format supported by [momentjs valid date](https://momentjs.com/docs/#/parsing/string/)

### `interval -> number`

`Default 1000ms`

The interval in miliseconds between date update. 

### `format -> string`

This [momentjs valid format](https://momentjs.com/docs/#/parsing/string-format/) it is going to be used as Counter date format.

### `addition -> object`
```
Default 
{
  amount: 1,
    unit: 'days'
}
```

#### `amount -> number`
The Counter change by unit
Example with `amount = 2`:
```
First date: 01/02/2019
Second date: 03/02/2019
Third date: 05/02/2019
```

Example with `amount = 3`:
```
First date: 01/02/2019
Second date: 04/02/2019
Third date: 07/02/2019
```

#### `unit -> string`
valid [momentjs add function](https://momentjs.com/docs/#/manipulating/add/) parameter

Example with `unit = years`:
```
First date: 01/02/2019
Second date: 01/02/2020
Third date: 01/02/2021
```

Example with `amount = months`:
```
First date: 01/02/2019
Second date: 01/03/2019
Third date: 01/04/2019
```

## Styles

You can modify styles by overwrite the following classes

### Counter: `.GraphicTimelineCounter`
### List: `.GraphicTimelineList`
### Row: `.GraphicTimeLineRow`
#### Row Title `.GraphicTimeLineRow h1`
#### Row value `.GraphicTimeLineRow p`


## Dependencies

### moment

[momentjs](https://momentjs.com/) is used for management of dates.


### react-flip-move
[react-flip-move](https://github.com/joshwcomeau/react-flip-move) is used for reorder animation of items.



## Contributing
If you want to contribute to this project you can create an issue and work in i, feel free to do Code Review in open PR or
create your own PR.

You can check at [GitHub issues](https://github.com/JonatanSCS/react-graphic-timeline/issues) and work on one of them or create a new one.

We need help with:
* New Features
* Customization
* Coding best practices
* Code standardization
* Solving Bugs
* Style Themes
* Any other thing that help `react-graphic-timeline`


### Contributors
* [JonatanSCS](https://github.com/JonatanSCS)


## License

MIT © [JonatanSCS](https://github.com/JonatanSCS)

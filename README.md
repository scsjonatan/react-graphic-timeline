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

## Dependencies

### moment

[momentjs](https://momentjs.com/) is used for management of dates.


### react-flip-move
[react-flip-move](https://github.com/joshwcomeau/react-flip-move) is used for reorder animation of items.


## License

MIT © [JonatanSCS](https://github.com/JonatanSCS)

import React from 'react'

import ExampleComponent from 'graphic'

import { data } from './data'

import './index.css'

export default function App() {
  return (
    <div className="Container">
      <h1>Random Numbers by Country</h1>
      <div>
        <h2>Default</h2>
        <ExampleComponent
          data={data}
          start="2009-03-10"
          end="2009-03-21"
        />
      </div>
       <div className="Container__Styles">
        <h2>Custom styles</h2>
        <ExampleComponent
          data={data}
          start="2009-03-10"
          end="2009-03-21"
        />
      </div>
      
    </div>
  )
}

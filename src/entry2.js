import React from 'react'
import ReactDOM from 'react-dom'
import $ from './assets/jquery'

const App = () => {
  console.log($)
  return (
    <div>
      <div>entry2</div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
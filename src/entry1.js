import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  let Page1 = null

  import(/* webpackChunkName: "page1" */'./routes/page1').then(comp => {
    Page1 = comp
  })

  return (
    <div>
      <div>App</div>
      <Page1 />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import noteReducer from './reducers/noteReducer'

const store = createStore(noteReducer)

store.dispatch({
  type: 'NEW_NOTE',
  data: {
    content: 'sovelluksen tila talletetaan storeen',
    important: true,
    id: 1
  }
})

store.dispatch({
  type: 'NEW_NOTE',
  data: {
    content: 'tilanmuutokset tehdään actioneilla',
    important: false,
    id: 2
  }
})

class App extends React.Component {
  render() {
    return(
      <div>
        <ul>
          {store.getState().map(note=>
            <li key={note.id}>
              {note.content} <strong>{note.important ? 'tärkeä' : ''}</strong>
            </li>
          )}
         </ul>
      </div>
    )
  }
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
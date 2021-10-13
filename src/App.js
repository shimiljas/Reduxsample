import React from 'react'
import {Provider} from 'react-redux'
import store from './store'
import Todo from './Todo'
function App() {
  console.log(store.getState(),"todo")
  return (
    <Provider store={store}>
      <div className="App">
         <Todo/>
      </div>
    </Provider>
  );
}

export default App;

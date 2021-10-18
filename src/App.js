import React from 'react'
import {Provider} from 'react-redux'
import configureStore from './store'
import { PersistGate } from 'redux-persist/integration/react'
import Todo from './screen/Todo'
import Post from './screen/Post'
function App() {
  const store=configureStore()
  console.log(store,"todo")
  return (
     <Provider store={store.store}>
        <PersistGate loading={null} persistor={store.persistor}>
        <div className="App">
          <Post/>
        </div>
      </PersistGate>
     </Provider>
  );
}

export default App;

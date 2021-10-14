import React from 'react'
import {Provider} from 'react-redux'
import configureStore from './store'
import { PersistGate } from 'redux-persist/integration/react'
import Todo from './Todo'
function App() {
  const store=configureStore()
  console.log(store,"todo")
  return (
     <Provider store={store.store}>
        <PersistGate loading={null} persistor={store.persistor}>
        <div className="App">
          <Todo/>
        </div>
      </PersistGate>
     </Provider>
  );
}

export default App;

import React from 'react'
import {Provider} from 'react-redux'
import configureStore from './store'
import { PersistGate } from 'redux-persist/integration/react'
import Todo from './screen/Todo'
import Post from './screen/Post'
import PostDetail from './screen/PostDetail'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UseReducer from './screen/UseReducer'
function App() {
  return(
    <UseReducer/>
  )
  // const store=configureStore()
  // console.log(store,"todo")
  // return (
  //    <Provider store={store.store}>
  //       <PersistGate loading={null} persistor={store.persistor}>
  //       <div className="App">
  //       <Router>
  //        <Switch>
  //         <Route exact path="/"  component={Post}/>
  //          <Route path="/post/:id"  component={PostDetail}/>
  //         </Switch>
  //       </Router>
  //       </div>
  //     </PersistGate>
  //    </Provider>
  // );
}

export default App;

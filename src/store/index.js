import { createStore,applyMiddleware } from "redux";
import logger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


import reducer from '../reducer'
import { composeWithDevTools } from 'redux-devtools-extension';


const persistConfig = {
    key: 'root',
    storage,
    whitelist:['todos']
}
   

const persistedReducer = persistReducer(persistConfig, reducer)
//composeWithDevTools(applyMiddleware(logger))
export default () => {
    let store = createStore(persistedReducer,applyMiddleware(logger))
    let persistor = persistStore(store)
    return { store, persistor }
  }
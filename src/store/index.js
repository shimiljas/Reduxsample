import { createStore,applyMiddleware } from "redux";
import logger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';

import reducer from '../reducer'
import { composeWithDevTools } from 'redux-devtools-extension';

import createSagaMiddleware from 'redux-saga'
import rootSaga from '../saga'

// const storage = createSensitiveStorage({
//     keychainService: "myKeychain",
//     sharedPreferencesName: "mySharedPrefs"
//   });

const persistConfig = {
    key: 'root',
    storage,
    whitelist:['todos']
}
   

const persistedReducer = persistReducer(persistConfig, reducer)

const sagaMiddleware = createSagaMiddleware()
//composeWithDevTools(applyMiddleware(logger))
export default () => {
    let store = createStore(persistedReducer,applyMiddleware(sagaMiddleware,thunk,logger))
    let persistor = persistStore(store)
    sagaMiddleware.run(rootSaga)
    return { store, persistor }
  }

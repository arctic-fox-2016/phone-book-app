import {createStore} from 'redux'
import rootReducer from '../reducers'

export default function configureStore(initialState) {
  const store = createStore(rootReducer,initialState)
  //createStore module dari redux

    if(module.hot){
      module.hot.accept('../reducers',()=>{
        const nextReducer = require('../reducers').default
        store.replaceReducer(nextReducer)
      })
  }
  
  return store
}

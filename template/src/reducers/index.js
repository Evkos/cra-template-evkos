import { combineReducers } from 'redux'
import defaultReducer from './default-reducer'

export default combineReducers({
  state: defaultReducer,
})
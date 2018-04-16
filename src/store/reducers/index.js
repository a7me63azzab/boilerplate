import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as notificationsReducer} from 'reapop'

const rootReducer = combineReducers({
  router: routerReducer,
  notifications: notificationsReducer()
})
export default rootReducer

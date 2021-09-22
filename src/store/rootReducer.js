/* rootReducer is our master list of reducers */

import postList from './postList'
/* pull in each reducer slice */
import { combineReducers } from 'redux'

// combine and export where it will be used in configureStore...
export default combineReducers({
  [postList.constants.MODULE_NAME]: postList.reducer,
})

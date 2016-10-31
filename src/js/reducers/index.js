import { combineReducers } from 'redux'
import * as actions from '../actions';

const defaultInitState = {
  isSearching: false,
  defaultKey: '二极管'
};

const searchReducer = (state=defaultInitState, action) => {
  switch (action.type){
    case actions.ITEMS:
    return {
      'results': {
        type: action.type,
        items: action.results
      }
    }

    default:
      return state
  }
}

const rootReducer = combineReducers({
  searchReducer
})

export default rootReducer

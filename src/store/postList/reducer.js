import produce from 'immer'
import * as c from './constants'

const initialState = {
  postData: [],
  afterKey: ""
}

export default function reduce (state = initialState, action = {}) {
  return produce(state, draft => {
    switch (action.type) {
      case c.UPDATE_POSTS:
        draft.postData = [...draft.postData, ...action.postData]
        draft.afterKey = action.afterKey
        break
      default:
        return state
    }
  })
};

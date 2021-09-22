/*
orderlist/actions.js
*/

import * as c from './constants'

/* ACTION CREATORS */
export function fetchPosts (afterKey) {
  return {
    type: c.FETCH_POSTS,
    afterKey
  }
}

export function updatePosts (postData, afterKey) {
  return {
    type: c.UPDATE_POSTS,
    postData,
    afterKey
  }
}

export function updateSearchResults (postData, afterKey) {
  return {
    type: c.UPDATE_POSTS,
    postData,
    afterKey
  }
}

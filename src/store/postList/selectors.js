import { MODULE_NAME } from './constants'
import { createSelector } from 'reselect'

export const postStateTree = state => state[MODULE_NAME]

export const getPostList = (state) => {
  const postState = postStateTree(state)
  return postState.postData
}

export const getAfterKey = (state) => {
  const postState = postStateTree(state)
  return postState.afterKey
}

import { all } from 'redux-saga/effects'

import postList from './postList'
const { sagas: { fetchPostActionWatcher } } = postList

// yield all -> allows the sagas to be exectued in parallel (rather than waiting for the 1st to execute before the 2nd)
export default function * rootSaga () {
  yield all([
    fetchPostActionWatcher(),
  ])
}

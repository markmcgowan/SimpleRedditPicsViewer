import { put, takeEvery } from 'redux-saga/effects'
import * as a from './actions'
import * as c from './constants'

export function * fetchPostsGet (action) {
  const fetchUrl = action.afterKey ? `http://www.reddit.com/r/pics/.json?after=`+action.afterKey+`&jsonp=` : `http://www.reddit.com/r/pics/.json?jsonp=`
  try {
      const res = yield fetch(fetchUrl);
      const data = yield res.json();
      const afterKey = data.data.after
      const postData = data.data.children
      yield put(a.updatePosts(postData, afterKey))
  } catch (err) {
      console.error(err);
  }
}

export function * fetchPostActionWatcher () {
  yield takeEvery(c.FETCH_POSTS, fetchPostsGet)
}

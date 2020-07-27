import { all, fork } from 'redux-saga/effects'
import contactSaga from '../components/contact/saga'


export default  function* () {
    yield all([
        fork(contactSaga),
    ])
  }
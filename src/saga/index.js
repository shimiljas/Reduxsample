import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {postdetail} from '../api'
import {POST_ID} from '../action'

function* fetchPostDetail(action) {
    console.log(action,"actionon saga")
    try{
        let data= yield call(postdetail,action.payload)
        console.log(data,"from saga")
    }catch(err){

    }
}

function* postDetailSaga() {
    console.log("herere-----------<><")
    yield takeLatest(POST_ID, fetchPostDetail);
  }

export default postDetailSaga;
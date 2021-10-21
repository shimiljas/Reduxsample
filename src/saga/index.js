import { createAction } from 'redux-actions';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {postdetail} from '../api'
import {POST_ID,POST_DETAIL_SUCCESS,POST_DETAIL_FAILURE} from '../action'



const postDetailSuccs=createAction(POST_DETAIL_SUCCESS)
const postDetailFailure=createAction(POST_DETAIL_FAILURE)

function* fetchPostDetail(action) {
    try{
        let data= yield call(postdetail,action.payload)
        yield put({type:POST_DETAIL_SUCCESS,payload:data})
    }catch(err){
        yield put(postDetailFailure(err))
    }
}

function* postDetailSaga() {
    console.log("herere-----------<><")
    yield takeLatest(POST_ID, fetchPostDetail);
  }

export default postDetailSaga;
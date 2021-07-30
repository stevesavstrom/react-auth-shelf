import { put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* editSaga (){
	yield takeEvery('EDIT_ITEM', editItem);
}

function* editItem (action){
	try {
		yield call(axios.put, `/api/shelf/${action.payload.id}`, action.payload);
		console.log(`What is in the PUT payload`, action.payload.id);
		yield put({type: 'GET_SHELF'});
	} catch(error){
		console.log(`problem editing item`, error);
	}
}

export default editSaga;

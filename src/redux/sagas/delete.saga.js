import { put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* deleteSaga () {
    yield takeEvery('DELETE_ITEM', deleteItem);
}

function* deleteItem (action){
    try {
        yield call(axios.delete, `/api/shelf/${action.payload}`);
        console.log(`What is in the DELETE payload`, action.payload);
        yield put({ type: 'GET_SHELF' });
    } catch(error){
        console.log(`Problem DELETING`, error);
    }
}

export default deleteSaga;
	
import { put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* addSaga(){
    yield takeEvery('ADD_ITEM', postItem);
}

function* postItem(action) {
// POST an item to the shelf
    try {
        yield call(axios.post, '/api/shelf', action.payload);
        yield put({ type: 'GET_SHELF' });
    }catch (error){
        console.log(`Error POSTing item to shelf from add.saga.js`, error);
    }
}

export default addSaga;


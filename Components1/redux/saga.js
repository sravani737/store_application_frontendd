import {takeEvery} from  'redux-saga/effects'
import {USER_LIST} from '../../components/Constans'

function UserList(){
 console.warn('saga middleware called')
}
function* SagaData(){
    yield takeEvery(USER_LIST,UserList)
}
export default SagaData;
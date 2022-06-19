import {userReducer} from './user'
import {numberReducer} from './number'

function reducer(state, action) {
	let newState = numberReducer(state, action)
	return userReducer(newState, action)
}

export default reducer
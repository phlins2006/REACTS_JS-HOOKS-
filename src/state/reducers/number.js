 export function numberReducer(state, action) {
	switch(action.type) {
		case 'numberAdd2': 
			return {...state, number: state.number + 2}
		case 'numberMultiply7':
			return {...state, number: state.number * 7}
		case 'numberDivide25':
			return {...state, number: state.number / 25}
		case 'numberMultiply7':
			return {...state, number: state.number * 7}
		case 'numberRound':
			return {...state, number: Math.round(state.number)}
		case 'numberAdd':
			return {...state, number: state.number + action.payLoad}
		default: 
			return state
	}
}

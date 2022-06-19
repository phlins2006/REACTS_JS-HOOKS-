import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { initialState, reducer } from '../../state'
import {numberAdd2, login} from '../../state/actions'

const UseReducer = (props) => {

	const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

			<div className="center">
				{state.user ? <span className="text">{state.user.name}</span>: <span className="text">Sem Usuário</span>}
				<span className="text">{state.number}</span>
				<div>
					{/* login */}
					<button className="btn" onClick={() => login(dispatch, 'Pedro')}>Login</button>
					{/* + 2 */}
					<button className="btn" onClick={() => numberAdd2(dispatch)}>+2</button>
					{/* multiplicar por 7 */}
					<button className="btn" onClick={() => dispatch({type: 'numberMultiply7'})}>* 7</button>
					{/* dividir por 25 */}
					<button className="btn" onClick={() => dispatch({type: 'numberDivide25'})}>/ 25</button>
					{/* arredondar */}
					<button className="btn" onClick={() => dispatch({type: 'numberRound'})}>arredondar</button>
					{/* adicionar número qualquer */}
					<button className="btn" onClick={() => dispatch({type: 'numberAdd', payLoad: - 10})}>adicionar</button>
				</div>
			</div>
        </div>
    )
}

export default UseReducer

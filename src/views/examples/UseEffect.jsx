import React, {useState, useEffect} from 'react'
import SectionTitle from '../../components/layout/SectionTitle'
import PageTitle from '../../components/layout/PageTitle'

function calculateFactorial(num) {
	const n = parseInt(num)
	if(n < 0) return -1
	if(n === 0) return 1
	// calculando o fatorial usando recursividade
	return calculateFactorial(n - 1) * n
}

const UseEffect = (props) => {

	// exercício 1
	const [number, setNumber] = useState(0)
	const [factorial, setFactorial] = useState(1)
	
	useEffect(() => {
		//sempre q a dependência [number] for alterada ele chama o setFactorial(calculateFactorial(number))
		setFactorial(calculateFactorial(number))
	}, [number])

	// exercicio 2
	const [num, setNum] = useState(0)
	const [type, setType] = useState('par')

	useEffect(() => {
		setType(num % 2 === 0 ? 'par' : 'impar')
	}, [num])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

			<SectionTitle title="Exercício #01"/>
				<div className="center">
					<input type="number" className="input" value={number} onChange={e => setNumber(e.target.value)}/>
					<div>
						<span className="text">Fatorial: </span>
						<span className="text red">{factorial === -1 ? 'Não existe': factorial}</span>
					</div>
				</div>

			<SectionTitle title="Exercício #02"/>
				<div className="center">
					<input type="number" 					className="input"
						value={num} onChange={e => setNum(e.target.value)}
					></input>
					<div>
						<span className="text">Par ou impar: </span>
						<span className="text red">{type}</span>
					</div>
				</div>
			
        </div>
    )
}

export default UseEffect

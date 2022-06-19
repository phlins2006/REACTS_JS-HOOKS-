import React, { useState } from 'react'
import SectionTitle from '../../components/layout/SectionTitle'
import PageTitle from '../../components/layout/PageTitle'

const UseState = (props) => {

	const [count, setCount] = useState(0)
	const [name, setName] = useState("")

    return (
        <div>
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />

			{/* exercício 1 */}
			<SectionTitle title="Exercício #01" />
			<div className="center">
				<span className="text">{count}</span>
				<div>
					<button className="btn" onClick={() => setCount(count + 1)}>+ 1</button>
					<button className="btn" onClick={() => setCount(count - 1)}>- 1</button>
					{/* quando vc declara um parâmetro ele recebe o valor do state atual */}
					<button className="btn" onClick={() => setCount(current => current + 1000)}>1000</button>
				</div>
			</div>

			{/* exercício 2 */}
			<SectionTitle title="Exercício #02" />
			<input type="text" className="input"  value={name} onChange={e =>  setName(e.target.value)}/>
			<span className="text">{name}</span>
        </div>
    )
}

export default UseState
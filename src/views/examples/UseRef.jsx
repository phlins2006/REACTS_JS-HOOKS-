import React, { useState, useEffect, useRef } from 'react'
import SectionTitle from '../../components/layout/SectionTitle.jsx'
import PageTitle from '../../components/layout/PageTitle'

const merge = function(s1, s2) {
	return [...s1].map((e, i) => `${e}${s2[i] || ""}`).join("")
}

const UseRef = (props) => {

	const [value1, setValue1] = useState("")
	const [value2, setValue2] = useState("")
	const count = useRef(0)

	const myInput1 = useRef(null)
	const myInput2 = useRef(null)

	/* td vez q o count é renderizado ele acrescenta + 1
		count.current = count.current + 1 
	*/
	//por isso deve ser usado o useEffect caso nn queira a renderização td hora

	//limitando a redenrização e alternando o foco em input1 e input2
	useEffect(() => {
		count.current++ 
		myInput2.current.focus()
	}, [value1])
	
	useEffect(() => {
		count.current++
		myInput1.current.focus()
	}, [value2])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
			
			<SectionTitle title="Exercício #01" />
			<div className="center">
				<span>mostrando o alternâncio entre os input usando .focus()</span>
				
				<div>
					<span className="text">Valor: </span>
					<span className="text">[<strong className=" text red">{merge(value1, value2)}</strong></span>
					<span className="text">]</span>
				</div>
				
				<input type="text" className="input" 
				ref={myInput1} value={value1} onChange={e => setValue1(e.target.value)}/>
			</div>

			<SectionTitle title="Exercício #02" />
			<div className="center">
				<input type="text" 
				ref={myInput2}
				value={value2}
				className="input"onChange={e => setValue2(e.target.value)}></input>
			</div>
        </div>
    )
}

export default UseRef

import { useState } from 'react'

// caso o useCounter dentro de userCustom nn tiver nenhum valor inicial ele começa com 100
export const useCounter = (initialValue = 100) => {
	const [count, setCount] = useState(initialValue)

	function inc() {
		setCount(count + 1)
	}

	function dec() {
		setCount(count - 1)
	}

	return [count, inc, dec]
}
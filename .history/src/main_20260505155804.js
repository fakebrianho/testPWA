import './style.css'

import { setupCounter } from './counter.js'

const userButton = document.querySelector('#user')


setupCounter(document.querySelector('#counter'))

async function testHelloServerless() {
	try {
		const response = await fetch('/api/users')
		const data = await response.json()
		console.log('Serverless response:', data)
		document.querySelector('#counter').textContent = data.message
	} catch (error) {
		console.error('Failed to call /api/hello:', error)
	}
}

window.addEventListener('click', testHelloServerless)

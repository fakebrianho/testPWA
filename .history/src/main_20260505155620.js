import './style.css'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { setupCounter } from './counter.js'



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

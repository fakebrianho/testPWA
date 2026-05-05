import './style.css'

import { setupCounter } from './counter.js'

const userButton = document.querySelector('#users')
const installationButton = document.querySelector('#installations')

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
async function getUsers(){
  try{
    const response = await fetch('/api/users')
    const data = await response.json()
    console.log('User Data:', data) 
  }catch(error){
    console.error('Failed to call users', error)
  }
}
async function getInstallations(){
  try {
    const response = await fetch('/api/')
  }
}

window.addEventListener('click', testHelloServerless)
userButton.addEventListener('click', getUsers)
installationButton.addEventListener('click', console.log('hi'))

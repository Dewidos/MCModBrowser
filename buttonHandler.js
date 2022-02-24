const button = document.querySelector('button#testbutton')

let trackMouse = false
let x = 0,
	y = 0

const moveButton = (ev, button) => {
	if (ev instanceof MouseEvent && button instanceof HTMLButtonElement) {
		const buttonStyles = getComputedStyle(button)

		const topPos = parseFloat(buttonStyles.top.replace(/[\D]/g, ''))
		const leftPos = parseFloat(buttonStyles.left.replace(/[\D]/g, ''))

		button.style.left = `${leftPos + (ev.x - x)}px`
		button.style.top = `${topPos + (ev.y - y)}px`

		x = ev.x
		y = ev.y
	}
}

button.addEventListener('mousedown', ev => {
	trackMouse = true
	x = ev.x
	y = ev.y
})

button.addEventListener('mousemove', ev => {
	if (trackMouse) moveButton(ev, button)
})

window.addEventListener('mouseup', ev => {
	trackMouse = false
	x = 0
	y = 0
})

button.addEventListener('click', ev => {
	//button.classList.toggle('buttonOn')
})

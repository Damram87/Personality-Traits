const blueSquare = document.getElementById('blue')
const greenSquare = document.getElementById('green')
const redSquare = document.getElementById('red')
const yellowSquare = document.getElementById('yellow')



blueSquare.addEventListener("click", function traits() {
	const ul = document.createElement('ul')
	ul.innerHTML = `
		<ul>
			<li>Enthusiastic</li>
			<li>Sympathetic</li>
			<li>Communicative</li>
			<li>Compassionate</li>
			<li>Idealistic</li>
			<li>Sincere</li>
			<li>Imaginative</li>
		
		</ul>`
		document.getElementById('blue').appendChild(ul)
		ul.classList.add("blue2")
	
	//blueSquare.innerHTML = "Enthusiastic, sympathetic, communicative, compassionate, idealistic, sincere and imaginative."
	
})

greenSquare.addEventListener("click", function traits() {
	const ul = document.createElement('ul')
	ul.innerHTML = `
		<ul>
			<li>Perfectionist</li>
			<li>Analytical</li>
			<li>Conceptual</li>
			<li>Cool</li>
			<li>Calm</li>
			<li>Inventive</li>
			<li>Logical</li>
		
		</ul>`
		document.getElementById('green').appendChild(ul)
		ul.classList.add("green")
	
	//greenSquare.textContent = "perfectionistic, analytical, conceptual, cool, calm, inventive and logical"
})

redSquare.addEventListener("click", function traits() {
	const ul = document.createElement('ul')
	ul.innerHTML = `
		<ul>
			<li>Energetic</li>
			<li>Passionate</li>
			<li>Ambitious</li>
			<li>Impulsive</li>
		</ul>`
		document.getElementById('red').appendChild(ul)
		ul.classList.add("red")
	//redSquare.textContent = "energetic, passionate, ambitious and impulsive"
})

yellowSquare.addEventListener("click", function traits() {
	const ul = document.createElement('ul')
	ul.innerHTML = `
		<ul>
			<li>Uplifting</li>
			<li>Dynamic</li>
			<li>Optimistic</li>
			<li>Creative</li>
			<li>Mentally Active</li>
		</ul>`
		document.getElementById('yellow').appendChild(ul)
		ul.classList.add("yellow")
	
	//yellowSquare.textContent = "upifting, dynamic, optimtistic, creative and mentally active"
})
const elWrapper = document.getElementById('wrapper');
elWrapper.addEventListener('click', changeContent);

function changeContent() {

	const arrShutter = document.querySelectorAll('.closable');
	arrShutter.forEach( item => item.classList.toggle('closed'));

	const timerOpen = setTimeout(openScreen, 750);

	console.log('clicked');
}

function openScreen() {
	const arrContent = document.querySelectorAll('.changeable');
	arrContent.forEach(item => item.classList.toggle('changed'));

	const arrShutter = document.querySelectorAll('.closable');
	arrShutter.forEach(item => item.classList.toggle('closed'));
}
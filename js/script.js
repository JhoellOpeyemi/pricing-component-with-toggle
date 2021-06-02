const checkboxToggle = document.querySelector('.toggle input');
const toggleIndicator = document.querySelector('.toggle-indicator');
const basicPrice = document.querySelector('.basic-price');
const proPrice = document.querySelector('.pro-price');
const masterPrice = document.querySelector('.master-price');

checkboxToggle.addEventListener('click', () => {
	toggleIndicator.classList.toggle('annually');

	if (toggleIndicator.classList.contains('annually')) {
		basicPrice.innerText = '199.99';
		proPrice.innerText = '249.99';
		masterPrice.innerText = '399.99';
	} else {
		basicPrice.innerText = '19.99';
		proPrice.innerText = '24.99';
		masterPrice.innerText = '39.99';
	}
});

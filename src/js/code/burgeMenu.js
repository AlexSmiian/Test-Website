
// Open menu
export function openBurgerMenu (){
	const openBurger = document.querySelector('.burger__content')
	openBurger.style.display = 'block';
	console.log('+')
}

// Close menu
export function closeBurgerMenu(){
	
	const openBurger = document.querySelector('.burger__content')

	openBurger.style.display = 'none';
}
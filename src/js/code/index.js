	import {openBurgerMenu,closeBurgerMenu} from './burgeMenu'
	import {openForm} from './openForm'
	

 export function startApp(){
	const burgerOpen = document.querySelector('[data-open_burger]');
	const burgerClose = document.querySelector('[data-close_burger]');
	const openFormBtn = document.querySelectorAll('[data-btn_test]')




	burgerOpen.addEventListener('click',openBurgerMenu,false)
	burgerClose.addEventListener('click',closeBurgerMenu,false)
	// open form
	openFormBtn.forEach(el=>el.addEventListener('click',openForm,false))


}
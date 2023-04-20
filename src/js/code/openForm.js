import {updatePage} from "./updatePage"

// Open form 
export function openForm (){
	const wrapper = document.querySelector('.wrapper__container')
	const mainForm = document.querySelector('.wrapper__form')
	const burger = document.querySelector('.burger__content')
	wrapper.classList.add('hide')
	burger.style.display = 'none'
	mainForm.style.display = 'block'

	updatePage()
	
}

import {updatePage} from "./updatePage"

// Open form 
export function openForm (){
	const wrapper = document.querySelector('.wrapper__container')
	const mainForm = document.querySelector('.wrapper__form')

	wrapper.classList.add('hide')
	
	mainForm.style.display = 'block'

	updatePage()
	
}

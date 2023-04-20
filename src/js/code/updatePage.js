import {itemSelection} from './itemSelection'
import {timer} from './timer'
import { showData } from './showData'

let currentStep = 0


// Растояние шага
let progressStep = 100 / 14

// const pageForm = document.querySelector(`#page${currentStep+1}`)
// 	const btnStep = pageForm.querySelector('[data-btn__step]')

export function updatePage(){


	const pageForm = document.querySelector(`#page${currentStep+1}`)
	const btnStep = pageForm.querySelector('[data-btn__step]')
	const lineProgress = pageForm.querySelector('.span--progress')
	const btnTel = document.querySelector('[ data-btn--timer]')

	const steps = document.querySelectorAll('.step')
		
	if(currentStep === 0){
		
		steps[currentStep].style.display = 'flex'
		lineProgress.style.width = `${progressStep}%`
	}else if(currentStep){
		steps.forEach(item=>{
			item.style.display = 'none'
		})
	
		steps[currentStep].style.display = 'flex'
		if(currentStep < 14){
	
	
			lineProgress.style.width = `${(progressStep * currentStep) + progressStep}%`
		}
		
	
	}
	
	if(currentStep < 13){
		
		btnStep.addEventListener('click',()=>{

			currentStep++
	
			updatePage()
			
		},false)

	}else if(currentStep == 13){

		currentStep++

			setTimeout(()=>{
				updatePage()
			},3000)
	
			
	}else if(currentStep == 14){
		

		const header = document.querySelector('.iq_title--h1__header')
		header.innerHTML = "Готово!"
		
		timer()
		btnTel.addEventListener('click',()=>{
	
			currentStep++
		
			updatePage()
			showData()
		})

	}
	
	itemSelection(currentStep)
	

	
}



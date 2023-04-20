




export function itemSelection(count) {

		const pageForm = document.querySelector(`#page${count+1}`)

	 	const	inputs = pageForm.querySelectorAll('.input__form')
		const items = pageForm.querySelectorAll('.square')
		const labels = pageForm.querySelectorAll('label')
		const btnStep = pageForm.querySelector('[data-btn__step]')
	

	
	// Input iteration and binding to label, as well as button activation and highlighting.
	if(count < 5 || count == 7 || count > 8 &&  count < 11){
		inputs.forEach(item=>{
			item.addEventListener('click',()=>{
	
				inputs.forEach(input => {
								if (input !== item) {
									input.checked = false;
									labels.forEach(label => {
										if (label.getAttribute('for') === input.id) {
											label.style.background = 'rgba(242,	243,	243, 0.15)'
										}
									})
								}
							})
								item.checked = true
								labels.forEach(label => {
									if (label.getAttribute('for') === item.id) {
										label.style.background = 'rgba(255, 199, 0, 1)'
	
										btnStep.classList.remove('btn_step')
										btnStep.classList.add('active--yellow')
										btnStep.removeAttribute('disabled')
									}
								})
							
			})
		})
		
	}else{
		// Selecting an element and activating the button
		items.forEach(item=>{
			item.addEventListener('click',()=>{
	
					items.forEach(element=>{
						if(item === element){
							item.classList.add('active__item--border')
							btnStep.classList.remove('btn_step')
							btnStep.classList.add('active--yellow')
							btnStep.removeAttribute('disabled')
						}
				
						if(item !== element){
							element.classList.remove('active__item--border')
						}
					})
					
			})
	
		})
	}






}



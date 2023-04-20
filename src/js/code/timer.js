




export function timer(){
let	minutes = 9;
let seconds = 60




	const timerShow = document.querySelector('.time')

		setInterval(() => {

	
			seconds--;
	
	
			if(seconds === 0 ){
				seconds = 60;
				minutes--
					
			}
			if(seconds < 10){
				timerShow.textContent = ` 0${minutes} : 0${seconds}`
			}else{

				timerShow.textContent = ` 0${minutes} : ${seconds}`
			}
			
	   if(minutes === 0 & seconds === 0){
			clearInterval(timer);
			timerElement.textContent = "00:00";
		 }

		}, 1000);
}

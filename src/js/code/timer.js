




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


/*
 seconds < 10 ? get('[data-seconds]').innerHTML = `0${seconds}` : get('[data-seconds]').innerHTML = seconds;
    seconds++;

    if(seconds === 60){
        seconds = 0;
        minutes < 10 ? get('[data-min]').innerHTML = `0${minutes}` :get('[data-min]').innerHTML = minutes;

        minutes++

    }

    if(minutes  === 60){
        minutes = 0;
        hour < 10 ? get('[data-hours]').innerHTML = `0${hour}` :get('[data-hours]').innerHTML = hour;

        hour ++
    }



*/
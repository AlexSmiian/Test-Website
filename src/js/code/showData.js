const url = 'https://swapi.dev/api/people/1/'

 async function getData (){
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error('Ошибка получения данных: ' + response.status);
		}
		const data = await response.json();
		showData(data)
	} catch (error) {
		console.error('Произошла ошибка:', error);
	}
}
getData()



export function showData (data){
    console.log(data)
	const dataContainer	= document.querySelector("[data--content]")
		for( const props in data){
			if(!Array.isArray(data[props])){
				dataContainer.insertAdjacentHTML('beforeend',

                `   
                <div class="data__container">
                <div class="data__key"> ${props}: </div>
                <div class="data__value" >  ${data[props]}</div> 
                </div>
               `
                )
                
			}else{
            
                const valueDiv = data[props].map((value) =>`<div>${value}</div>`).join('\n')
                dataContainer.insertAdjacentHTML('beforeend',
                `
                <div class="data__container">
                <div class="data__key"> ${props}:</div>
                <div class="data__value"> <div> ${valueDiv}</div></div>
                </div>
                `
                )
            }
		}
 }
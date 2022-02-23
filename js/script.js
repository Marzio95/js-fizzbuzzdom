const containerBox = document.querySelector(".container")

for (let i = 1; i <= 100; i++) {
    let element = `<div class="box">${i}</div>`;
    containerBox.innerHTML += element; 
    console.log(i);
    
   if (i % 3 == 0 && i % 5 == 0) {
    let element = `<div class="box">FizzBuzz</div>`;   
    containerBox.innerHTML += element;
   }else if (i % 3 == 0) {
        element = `<div class="box">Fizz</div>`
        containerBox.innerHTML += element;
    } else if (i % 5 == 0) {
        let element = `<div class="box">Buzz</div>`;   
        containerBox.innerHTML += element;        
    } else {
        let element = `<div class="box">${i}</div>`;
        containerBox.innerHTML += element;
    }


}
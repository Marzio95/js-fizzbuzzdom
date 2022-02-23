const containerBox = document.querySelector(".container")

for (let i = 1; i < 101; i++) {
    let element = `<div class="box">${i}</div>`;
    containerBox.innerHTML += element; 
   
}
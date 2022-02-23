const containerBox = document.querySelector(".container")

for (let i = 1; i <= 100; i++) {
    let element = `<div class="box">${i}</div>`;
    containerBox.innerHTML += element;
    console.log(i);

    if (i % 3 == 0 && i % 5 == 0) {
        element = `<div class="box fizz_buzz">FizzBuzz</div>`;
        containerBox.innerHTML += element;
    } else if (i % 3 == 0) {
        element = `<div class="box fizz">Fizz</div>`
        containerBox.innerHTML += element;
    } else if (i % 5 == 0) {
        element = `<div class="box buzz">Buzz</div>`;
        containerBox.innerHTML += element;
    } else {

    }


}
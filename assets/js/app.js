function calc(){
let mass = +mInput.value;
let h = +hInput.value;

if(h > 3){
    h = h / 100;  
}

let index = mass / (h ** 2);
index = Math.round(index * 10)/10;

if(index <= 16) {
    Diagn.innerHTML = ('К сожалению у Вас выраженный дефицит массы тела.');
}
if(index > 16 && index <= 18.5) {
    Diagn.innerHTML = ('К сожалению у Вас недостаточная масса тела.');
}
if(index > 18.5 && index <= 25) {
    Diagn.innerHTML = ('У Вас нормальная масса тела.');
}
if(index > 25 && index <= 30) {
    Diagn.innerHTML = ('К сожалению у Вас  избыточная масса тела (предожирение).');
}
if(index > 30 && index <= 35) {
    Diagn.innerHTML = ('К сожалению у Вас  ожирение 1 степени.');
}
if(index > 35 && index <= 40) {
    Diagn.innerHTML = ('К сожалению у Вас  ожирение 2 степени.');
}
if(index > 40) {
    Diagn.innerHTML = ('К сожалению у Вас  ожирение 3 степени.');
}

resultPlace.innerHTML = index;

}
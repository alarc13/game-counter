//Constants 
const MAX_LENGTH_MATRIX = 12;

//Global variables
let matrixClone = [];

//Create an Item <p>
function createItem(id){
    var circle = document.createElement('p');
    circle.className = 'item'
    circle.id = id;
    circle.style.backgroundColor = 'white';
    circle.innerHTML = 'O';
    return circle;
} 

//Create a Container <div>
function createContainer() {
    var div = document.createElement('div');
    div.className = 'itemContainer';
    return div;
}

//Create the matrix []
function createDefaultMatrix(container){
    for(var i=0; i<MAX_LENGTH_MATRIX; i++){
        container.appendChild(createItem(i));
    }
    return document.querySelector('.mainContainer').appendChild(container);
}

//Event to select item 
function selectItem(item) {
    item.style.backgroundColor = 'Green'
    if (!matrixClone.includes(item.id)){
        matrixClone.push(item.id);
    }
    return matrixClone
}

//Create element <input>
function createButton(){
    var button = document.querySelector('.btn-start');
    button.style.backgroundColor = 'green';
    button.style.color = 'white';
    return button;
}

//Main startGame
function startGame() {
    createButton();
    let seconds = document.querySelector('.seconds').innerHTML;
    var interval = setInterval(() => { 
        if(isZero(seconds) && isLength(matrixClone)){
            seconds--;
            if (!isZero(seconds) && isLength(matrixClone)){
                alert('Vuelve a intentarlo')
                clear(interval)
            }
        }else{
            alert('Lo has logrado')
            clear(interval)
        }
        document.querySelector('.seconds').textContent = seconds;
        },1000)
return seconds;
}

//Clear setInterval 
function clear(interval){
    clearInterval(interval);
}

//Is older than zero 
function isZero(seconds){
    return seconds > 0;
}

//Is the length of array equals to Matrix 
function isLength(array){
    return array.length != MAX_LENGTH_MATRIX;
}

//Is time equals to default 60''
function isTime() {
   return document.querySelector('.seconds').innerHTML == 60;
}

//Generate default Matrix []
createDefaultMatrix(createContainer());

//Listen all the events of Matrix []
document.querySelectorAll('.item').forEach(item => item.addEventListener('click',() => !isTime() ? selectItem(item) : 0));

alert('Para jugar presiona start')
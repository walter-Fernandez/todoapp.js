
//creating variables
let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
//counter for each task
var counter = 0;


addToDoButton.addEventListener('click', function(){ //creating an event(1)

    var paragraph = document.createElement('p'); //every time I click an element is going to be created (2)
    paragraph.classList.add('paragraph-styling'); // change the font size and margin(5)
    //creating an if statement to count 1 to counter every time we add a task
    if (inputField.value.length<=0){ // if there is nothing in the input
       console.log("no");
    }else{ // else add 1  to the task
       paragraph.innerText =   counter++ + '.' + inputField.value;

    }

    toDoContainer.appendChild(paragraph); //append  the value in the input to the ToDoContainer id space
    inputField.value = ""; // after click the button the value in the input disappear
    //first click on the task and this is crossed by a line
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";//task is crossed by a line
    })
    //bouble click on the task and this disappear
    paragraph.addEventListener('dblclick', function(){
        counter --;//rest one number if the task is deleted
        toDoContainer.removeChild(paragraph);//remove the task after double click
    })
})





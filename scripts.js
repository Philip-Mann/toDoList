// getting <li> from the DOM
const listItem = document.getElementById("1");
// adding an event listener to the <li>
listItem.addEventListener('click', () => {
    // console.log('clicked');
    if(listItem.classList.contains('complete')) {
        listItem.classList.remove('complete');
    } else {
        listItem.classList.add('complete');
    }
});

// getting <button> from the DOM
const submitButton = document.getElementById("submit");
// adding event listener to the <button>
submitButton.addEventListener('click', () => {
    // toDo is the value of <input>
    const toDo = document.getElementById('text').value;
    // console.log('todo:', toDo);
    // creating new <li> that will have the value of toDo
    const newToDo = document.createElement('li');
    // getting the <ul> from the DOM
    const list = document.getElementById('list');

    // creating new <li> with the value of todo
    newToDo.innerText = toDo;
    // adding eventListener to add a class="complete" to newToDo's <li>
    newToDo.addEventListener('click', () => {
        newToDo.classList.add('complete');
    });
    // adding newToDo to <ul>
    list.appendChild(newToDo);
    document.getElementById('text').value;
});
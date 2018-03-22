function onReady() {
    const ADDTODO_FORM = document.getElementById('addToDoForm');
    const NEWTODO_TEXT = document.getElementById('newToDoText');
    const TODO_LIST = document.getElementById('toDoList');

    addToDoForm.addEventListener('submit', event => {
      event.preventDefault();

      // get the text
      let title = NEWTODO_TEXT.value;

      //create a new li
      let newLi = document.createElement('li');

      //create a new input
      let checkbox = document.createElement('input');
      //set the input's type to checkbox
      checkbox.type = 'checkbox';

      // create a delete button
      let deleteBtn = document.createElement('button');
      deleteBtn.innerText = "Delete"
      deleteBtn.classList = "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent delete-btn";

      deleteBtn.addEventListener('click', function() {
        event.preventDefault(); //Prevents default reload behavior

        // delete the current LI
        TODO_LIST.removeChild(this.parentElement);
      });


      //set the title
      newLi.textContent = title;

      //attach the checkbox to the li
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteBtn);

      //attach the li to the ul
      TODO_LIST.appendChild(newLi);

      //empty the input
      NEWTODO_TEXT.value = '';
    });
}

window.onload = function() {
  onReady();
};

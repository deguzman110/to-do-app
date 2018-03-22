function onReady() {
    const addToDoForm = document.getElementById('addToDoForm');
    const newToDoText = document.getElementById('newToDoText');
    const toDoList = document.getElementById('toDoList');
    const deleteButton = document.getElementById('deleteButton'); //accesses the element deleteButton

    addToDoForm.addEventListener('submit', event => {
      event.preventDefault();

      // get the text
      let title = newToDoText.value;

      //create a new li
      let newLi = document.createElement('li');

      //create a new input
      let checkbox = document.createElement('input');

      //set the input's type to checkbox
      checkbox.type = 'checkbox';

      //set the title
      newLi.textContent = title;

      //attach the checkbox to the li
      newLi.appendChild(checkbox);

      //attach the li to the ul
      toDoList.appendChild(newLi);

      //empty the input
      newToDoText.value = '';
    });

    //deleteButton function
    //adds click event listner on delete button
    deleteButton.addEventListener('click', function() {
      event.preventDefault(); //Prevents default reload behavior

      // for every li, as long as there are list items at i position, it will remove it.
      for (i = toDoList.children.length - 1; i >= 0; i--) {
        if (toDoList.children[i].children[0]) {
          toDoList.removeChild(toDoList.children[i])
        }
      }
    });
}

window.onload = function() {
  onReady();
};

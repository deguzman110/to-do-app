function onReady() {
  let id = 0; //1. Let id = 0
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id++ //2. Third property of id, 3. Increment the id variable
    });
    newToDoText.value = '';

    renderTheUI();
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo){
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      //4a. Create a delete button
      const deleteBtn = document.createElement('button'); //Creates button
      deleteBtn.innerText = "Delete"; //Inputs "Delete" text inside button
      deleteBtn.classList = "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent delete-btn"; //Stylizes button

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);

      //4b. Append delete button to newLi
      newLi.appendChild(deleteBtn);

      //4c. Register an event listener
      deleteBtn.addEventListener('click', event => {
        event.preventDefault(); //Prevents default behavior
        toDoList.removeChild(newLi); //Removes li from html
        const removeToDo = toDo.id;
        //5. Remove todo from ToDos array, comparing toDo.id with the id of each item in the toDoList
        const newToDos = toDos.filter(toDo => toDo.id !== removeToDo);
        toDos = newToDos; //New array of lis after removing
        //6. Within the event listener, call renderTheUI to update the UI
        renderTheUI();
      });
    });
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI();
}

window.onload = function() {
  onReady();
};

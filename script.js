document.getElementById('submit-button')
.addEventListener('click', event => {
  event.preventDefault(); 
  const todoInput = document.querySelector('.todo-input');
  const text = todoInput.value; 
  const todo = createTodo(text); 
  
  displayTodo(todo); 
  todoInput.value = ""
});


function displayTodo(todo) { 
  const todoList = document.querySelector('.todo-list');
  todoList.appendChild(todo); 
}

function createTodo(text) { 
  const todo = document.createElement('p'); 
  todo.textContent = text; 

  todo.addEventListener('click', () => {
    todo.style.textDecoration = "line-through"
  });
  todo.addEventListener('dblclick', () => {
    todo.remove(); 
  });

  return todo; 
}



document.querySelector('.todo-form')
.addEventListener('submit', event => {
  event.preventDefault(); 

  const todoInput = document.querySelector('.enter-todo'); 
  const text = todoInput.value; 
  const todo = createTodo(text); 

  document.querySelector('.todo-list').appendChild(todo); 
  todoInput.value = ""; 
});

function createTodo(text) { 
  const todoParagraph = document.createElement('p');
  todoParagraph.textContent = text; 

  todoParagraph.addEventListener('click', () => {
    todoParagraph.style.textDecoration = "line-through"
  });
  todoParagraph.addEventListener('dblclick', () => {
    todoParagraph.remove(todoParagraph);
  });
 return todoParagraph; 
}


let todoList = JSON.parse(localStorage.getItem('todoList')) || [
    {
      item: 'To-Do work',
      dueDate: 'due date'
    },
  ];

  displayItems();

  function addTodo() {
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    todoList.push({ item: todoItem, dueDate: todoDate });
    inputElement.value = '';
    dateElement.value = '';
    saveTodoList();
    displayItems();
  }

  function saveTodoList() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }

  function displayItems() {
    let containerElement = document.querySelector('.todo-container');
    let newHtml = '';
    for (let i = 0; i < todoList.length; i++) {
      let { item, dueDate } = todoList[i];
      newHtml += `
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class='btn-delete' onclick="deleteTodoItem(${i})">Delete</button>
      `;
    }
    containerElement.innerHTML = newHtml;
  }

  function deleteTodoItem(index) {
    todoList.splice(index, 1);
    saveTodoList();
    displayItems();
  }
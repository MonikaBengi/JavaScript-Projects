/* get_todos(): read tasks from localStorage */
function get_todos() {
  // make an array container
  var todos = new Array();

  // read saved JSON string
  var todos_str = localStorage.getItem('todo');

  // if there is saved data, convert JSON string -> array
  if (todos_str !== null) {
    todos = JSON.parse(todos_str);
  }
  return todos;
}

/* add(): push new task, save to localStorage */
function add() {
  // grab input value
  var task = document.getElementById('task').value;

  // ignore empty input
  if (!task.trim()) return false;

  // get current tasks, append, save
  var todos = get_todos();
  todos.push(task);
  localStorage.setItem('todo', JSON.stringify(todos));

  // clear input and refresh view
  document.getElementById('task').value = '';
  show();
  return false;
}

/* remove(): delete one task by its index (id) */
function remove() {
  // "this" is the clicked button; its id matches the array index
  var id = this.getAttribute('id');

  // get array, remove exactly one item at that index, save back
  var todos = get_todos();
  todos.splice(id, 1); // JS array method per brief
  localStorage.setItem('todo', JSON.stringify(todos));

  // re-render the list
  show();
  return false;
}

/* show(): render all tasks + wire up each little 'x' button */
function show() {
  // read tasks to display
  var todos = get_todos();

  // build a simple unordered list
  var html = '<ul>';
  for (var i = 0; i < todos.length; i++) {
    // each button gets class="remove" and id=index (per brief)
    html += '<li>' +
              '<span>' + todos[i] + '</span>' +
              '<button class="remove" id="' + i + '">x</button>' +
            '</li>';
  }
  html += '</ul>';

  // paint to the page
  document.getElementById('todos').innerHTML = html;

  // attach a click listener to every .remove button (per brief)
  var buttons = document.getElementsByClassName('remove');
  for (var j = 0; j < buttons.length; j++) {
    buttons[j].addEventListener('click', remove);
  }
}

/* click handler for the Add Item button (per brief: DOM eventListener) */
document.getElementById('add').addEventListener('click', add);

/* keep things visible even after reload (reads from localStorage) */
show();

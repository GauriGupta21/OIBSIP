// window.addEventListener('load', () => {
// 	const form = document.querySelector("#new-task-form");
// 	const input = document.querySelector("#new-task-input");
// 	const list_el = document.querySelector("#tasks");

// 	form.addEventListener('submit', (e) => {
// 		e.preventDefault();

// 		const task = input.value;

// 		const task_el = document.createElement('div');
// 		task_el.classList.add('task');

// 		const task_content_el = document.createElement('div');
// 		task_content_el.classList.add('content');

// 		task_el.appendChild(task_content_el);

// 		const task_input_el = document.createElement('input');
// 		task_input_el.classList.add('text');
// 		task_input_el.type = 'text';
// 		task_input_el.value = task;
// 		task_input_el.setAttribute('readonly', 'readonly');

// 		task_content_el.appendChild(task_input_el);

// 		const task_actions_el = document.createElement('div');
// 		task_actions_el.classList.add('actions');

// 		const task_edit_el = document.createElement('button');
// 		task_edit_el.classList.add('edit');
// 		task_edit_el.innerText = 'Edit';

// 		const task_delete_el = document.createElement('button');
// 		task_delete_el.classList.add('delete');
// 		task_delete_el.innerText = 'Delete';

// 		task_actions_el.appendChild(task_edit_el);
// 		task_actions_el.appendChild(task_delete_el);

// 		task_el.appendChild(task_actions_el);

// 		list_el.appendChild(task_el);

// 		input.value = '';

// 		task_edit_el.addEventListener('click', (e) => {
// 			if (task_edit_el.innerText.toLowerCase() == "edit") {
// 				task_edit_el.innerText = "Save";
// 				task_input_el.removeAttribute("readonly");
// 				task_input_el.focus();
// 			} else {
// 				task_edit_el.innerText = "Edit";
// 				task_input_el.setAttribute("readonly", "readonly");
// 			}
// 		});

// 		task_delete_el.addEventListener('click', (e) => {
// 			list_el.removeChild(task_el);
// 		});
// 	});
// });
let form = document.querySelector("#new-task-form");
let input = document.querySelector("#new-task-input");
let list = document.querySelector("#tasks");
form.addEventListener("submit", (e) => {
  // console.log("hi");
  e.preventDefault();
  let task = input.value;
  console.log(task);
  let task_el = document.createElement("div");
  task_el.classList.add("task");
  let content_el = document.createElement("div");
  content_el.classList.add("content");
  let task_input = document.createElement("input");
  task_input.classList.add("text");
  task_input.setAttribute("readonly", "readonly");
  task_input.value = input.value;
  content_el.appendChild(task_input);
  task_el.appendChild(content_el);

  let action = document.createElement("div");
  action.classList.add("actions");

  let edit = document.createElement("button");
  edit.classList.add("edit");
  edit.innerText = "Edit";
  action.appendChild(edit);

  let deletee = document.createElement("button");
  deletee.classList.add("delete");
  deletee.innerText = "Delete";
  action.appendChild(deletee);

  let done = document.createElement("button");
  done.classList.add("done");
  done.innerText = "Done";
  action.appendChild(done);

  task_el.appendChild(action);

  //   task_el.innerHTML = task;
  list.appendChild(task_el);

  input.value = "";
  edit.addEventListener("click", () => {
    if (edit.innerHTML == "Edit") {
      task_input.removeAttribute("readonly");
      task_input.classList.add("qwe");
      edit.innerHTML = "SAVE";
    } else {
      task_input.setAttribute("readonly", "readonly");
      edit.innerHTML = "Edit";
      task_input.classList.remove("qwe");
    }
  });
  deletee.addEventListener("click", () => {
    list.removeChild(task_el);
  });

  done.addEventListener("click", () => {
    task_el.classList.add("strike");
  });
});

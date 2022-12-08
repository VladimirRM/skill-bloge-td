const createAppTitle = (title) => {
  const appTitle = document.createElement("h1");
  appTitle.innerHTML = title;
  return appTitle;
};

const createTodoForm = () => {
  const form = document.createElement("form");
  const input = document.createElement("input");
  const addButton = document.createElement("button");
  const wrapper = document.createElement("div");

  form.classList.add("form-group", "mb-3");
  input.classList.add("form-control");
  input.placeholder = "Add Todo";
  button.classList.add("btn", "btn-primary");
  wrapper.classList.add("input-group-append");

  wrapper.append(addButton);
  form.append(input);
  form.append(wrapper);

  return {
    form,
    input,
    addButton,
  };
};

const createTodoList = () => {
  const list = document.createElement("ul");
  list.classList.add("list-group");

  return list;
};

const createTodoItem = (name) => {
  const todoItem = document.createElement("li");
  const btnWrapper = document.createElement("div");
  const doneBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");

  todoItem.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );
  doneBtn.classList.add("btn", "btn-success");
  deleteBtn.classList.add("btn", "btn-success");
  todoItem.textContent = name;
  doneBtn.textContent = "Done";
  deleteBtn.textContent = "Delete";

  btnWrapper.append(doneBtn, deleteBtn);
  todoItem.append(btnWrapper);

  return {
    item,
    doneBtn,
    deleteBtn,
  };
};


const createTodoApp = ()=>{
    
}

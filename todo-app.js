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

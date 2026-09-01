const addTask = document.querySelector("#addTask");
const addInput = document.querySelector("#addInput");
const tasks = document.querySelector("#tasks");

addTask.addEventListener("submit", (e) => {
  e.preventDefault();

  const value = addInput.value;

  function adicionar() {
    const newDiv = document.createElement("div");
    newDiv.classList.add("tarefa");
    tasks.append(newDiv);

    const newLi = document.createElement("li");
    newLi.textContent = value;
    newDiv.append(newLi);

    const newButton = document.createElement("button");
    newButton.textContent = "Remover";
    newButton.classList.add("remove");
    newDiv.append(newButton);

    newButton.addEventListener("click", () => {
      newDiv.classList.add("desativado");
    });
  }

  adicionar();
});

const inputEl = document.querySelector(".todo__input");
const todoTasksEl = document.querySelectorAll(".todo__task");
const errorMessageEl = document.querySelector(".todo__error-message");
const todoTasksList = document.querySelector(".todo__tasks");
const tasks =
  localStorage.getItem("tasks") === null
    ? []
    : JSON.parse(localStorage.getItem("tasks"));

renderToDoTasks(tasks);

inputEl.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    handleTaskSubmit(event);
  }
});

inputEl.addEventListener("click", function (event) {
  if (inputEl.value === "") {
    return;
  }
  handleTaskSubmit(event);
});

function handleTaskSubmit(event) {
  event.preventDefault();

  const task = inputEl.value;

  if (tasks.indexOf(task) === -1) {
    errorMessageEl.style.display = "none";
    tasks.push(task);
    inputEl.value = "";

    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderToDoTasks(tasks);
  } else {
    errorMessageEl.style.display = "block";
  }
}

function renderToDoTasks(tasks) {
  todoTasksList.innerHTML = "";

  tasks.forEach((task, index) => {
    const taskEl = document.createElement("div");
    taskEl.className = "todo__task";

    const paragraphEl = document.createElement("p");
    paragraphEl.innerText = `${index + 1}. ${task}`;

    const deleteEl = document.createElement("a");
    deleteEl.className = "todo__task-delete";
    deleteEl.innerText = "Delete";
    deleteEl.addEventListener("click", function (event) {
      //   let currentText = event.target.previousSibling.innerText;
      //   currentText = currentText.substring(currentText.indexOf(" ") + 1);
      tasks.splice(tasks.indexOf(task), 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      renderToDoTasks(tasks);
    });

    taskEl.appendChild(paragraphEl);
    taskEl.appendChild(deleteEl);

    todoTasksList.appendChild(taskEl);
  });
}

// todoTasksEl.forEach((todoTaskEl) =>
//   todoTaskEl.addEventListener("click", (event) => {
//     console.log(event.target.innerText);
//   })
// );

// Alternativni nacin
// todoTasksEl[0].addEventListener("click", (event) => {
//   console.log(event.target);
// });
// todoTasksEl[1].addEventListener("click", (event) => {
//   console.log(event.target);
// });
// todoTasksEl[2].addEventListener("click", (event) => {
//   console.log(event.target);
// });



/*function inputKeyDown(event){
    event.preventDefault();
    console.log(event);
}*/ //tako se može uz html povezat enter

//console.log(todoTasksEl);

/*todoTasksEl.forEach((todoTaskEl) => 
    todoTaskEl.addEventListener("click", (event) => {
        console.log(event.target.innerText);
    })
);    */

const vehicle = {
    brand: "Ferrari",
    color: "red",
    getSummary: function(){
        return `I'm ${this.color} ${this.brand}!`;
    }
};

const vehicle2 = vehicle;
vehicle2.color = "yellow";

console.log(vehicle);
console.log(vehicle2);
console.log(vehicle.getSummary());
console.log(vehicle2.getSummary());

function Vehicle(brand, model, color){
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.getSummary = function(){
        return `I'm ${this.color} ${this.brand} ${this.model}!`;
    }
}

const vehicle = new Vehicle("ford", "Mustang", "red");
const vehicle2 = new Vehicle("Titanic", "boat", "yellow");

console.log(vehicle);
console.log(vehicle2);
console.log(vehicle.getSummary());
console.log(vehicle2.getSummary());
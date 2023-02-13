const inputEl = document.querySelector(".todo__input");
const todoTasksEl = document.querySelectorAll(".todo__task");
const errorMessageEl = document.querySelector(".todo__error-message")
const todoTasksLists = document.querySelector(".todo__tasks");
const tasks = [];

inputEl.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();

        const task = inputEl.value;

        const elementExists = tasks.indexOf(task) === -1;

        if (elementExists) {
            errorMessageEl.style.display = "none";
            tasks.push(task);
            inputEl.value = "";

            renderToDoTasks(tasks);
        } else {
            errorMessageEl.style.display = "block";
        }
     

    }

});


function renderToDoTasks(tasks){
    todoTasksLists.innerHTML = "";

    tasks.forEach((task, index) => {
        const taskEl = document.createElement("div");
        taskEl.className = "todo__task";
       
        const paragraphEl = document.createElement("p");
        paragraphEl.innerText = `${index +1}.${task}`;
    
        const deleteEl = document.createElement("a");
        deleteEl.className = "todo__task-delete";
        deleteEl.innerText = "Delete";

        deleteEl.addEventListener("click", function (event) {
            //let currentText = event.target.previousSibling.innerText;
            //currentText = currentText.substring(currentText.indexOf(" ") + 1);
            tasks.splice(tasks.indexOf(task), 1);
            renderToDoTasks(tasks);
        });
        
        taskEl.appendChild(paragraphEl);
        taskEl.appendChild(deleteEl);

      //  taskEl.innerText = ++index + '. ' + task;
        //taskEl.innerText = `${index +1}.${task}`;

        todoTasksLists.appendChild(taskEl);

        
        });

    /*            e.target.removeChild(e.firstElementChild);
*/

}



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


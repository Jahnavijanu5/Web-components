class ToDoList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.tasks = [];
  }

  connectedCallback() {
    this.render();
    this.shadowRoot
      .querySelector("#add-task")
      .addEventListener("click", () => this.addTask());
  }

  addTask() {
    const taskInput = this.shadowRoot.querySelector("#task-input");
    const task = taskInput.value.trim();
    if (task) {
      this.tasks.push(task);
      taskInput.value = "";
      this.render();
    }
  }

  removeTask(index) {
    this.tasks.splice(index, 1);
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
        <style>
          .task-container {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 5px;
          }
          button {
            padding: 5px;
            background-color: #ff4b5c;
            color: white;
            border: none;
            border-radius: 3px;
            cursor: pointer;
          }
          button:hover {
            background-color: #e63946;
          }
          input {
            padding: 5px;
            border: 1px solid #ccc;
            border-radius: 3px;
          }
          ul {
            padding-left: 0;
            list-style: none;
          }
          li {
            padding: 5px 0;
          }
        </style>
        <div>
          <h3>My To-Do List</h3>
          <input type="text" id="task-input" placeholder="Add a task..." />
          <button id="add-task">Add Task</button>
          <ul>
            ${this.tasks
              .map(
                (task, index) => `
                <li class="task-container">
                  <span>${task}</span>
                  <button onclick="this.getRootNode().host.removeTask(${index})">Remove</button>
                </li>`
              )
              .join("")}
          </ul>
        </div>
      `;
  }
}

customElements.define("to-do-list", ToDoList);

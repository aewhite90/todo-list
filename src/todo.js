function Project(name) {
  (this.name = name), (this.tasks = []);
}

function Task(name, desc, dueDate, project, complete) {
  (this.name = name),
    (this.desc = desc),
    (this.dueDate = dueDate),
    (this.project = project),
    (this.complete = false);
}

export { Project, Task };

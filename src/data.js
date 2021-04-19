import {
  renderProject,
  renderTask,
  clearTasks,
  taskHeader,
  clearProject,
} from "./uiHandler";
import { isToday, isThisWeek } from "date-fns";

let taskify;

const projectListShow = (e) => {
  clearTasks();
  let project = e.target.id;
  taskHeader(project);
  const ind = taskify.findIndex((e) => e.name === project);
  if (ind > -1) {
    taskify[ind].tasks.forEach((i) => renderTask(i));
  }

  if (project === "all") {
    taskify.forEach((e) => {
      e.tasks.forEach((j) => renderTask(j));
    });
  }

  if (project === "today") {
    taskify.forEach((e) => {
      e.tasks.forEach((j) => {
        const dueDate = new Date(j.dueDate);
        if (isToday(dueDate)) {
          renderTask(j);
        }
      });
    });
  }

  if (project === "this-week") {
    taskify.forEach((e) => {
      e.tasks.forEach((j) => {
        const dueDate = new Date(j.dueDate);
        if (isThisWeek(dueDate)) {
          renderTask(j);
        }
      });
    });
  }
};

const saveProject = () => {
  localStorage.setItem("taskify", JSON.stringify(taskify));
};

const loadLocal = () => {
  taskify = JSON.parse(localStorage.getItem("taskify"));
  if (taskify === null) taskify = [{ name: "none", tasks: [] }];
  taskify.forEach((e) => renderProject(e));
  return taskify;
};

const updateProject = (newProject) => {
  if (taskify.some((e) => e.name == newProject.name)) return false;
  taskify.push(newProject);
  saveProject();
};

const updateTask = (newTask, project) => {
  const ind = taskify.findIndex((e) => e.name === project);
  taskify[ind].tasks.push(newTask);
  saveProject();
};

const optionList = (select) => {
  taskify.forEach((e) => {
    let option = document.createElement("option");
    option.value = e.name;
    option.id = e.name;
    option.textContent = e.name;
    select.appendChild(option);
  });
};

const deleteProject = (e) => {
  console.log(e.target.id);
  let project = e.target.id;
  const ind = taskify.findIndex((e) => e.name === project);
  taskify.splice(ind, 1);
  saveProject();
  clearProject();
  taskify.forEach((e) => renderProject(e));
};

const deleteTask = (e) => {
  console.log(e.target.id);
  console.log(e.target.name);
  let task = e.target.id;
  let project = e.target.name;
  const indProj = taskify.findIndex((e) => e.name === project);
  const indTask = taskify[indProj].tasks.findIndex((e) => e.name === task);
  console.log(taskify[indProj]);
  taskify[indProj].tasks.splice(indTask, 1);
  saveProject();
  clearTasks();
  taskify[indProj].tasks.forEach((i) => renderTask(i));
};

export {
  updateProject,
  updateTask,
  saveProject,
  loadLocal,
  projectListShow,
  optionList,
  deleteProject,
  deleteTask,
};

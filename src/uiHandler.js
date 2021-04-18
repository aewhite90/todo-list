import { Project, Task } from './todo';
import { updateProject, updateTask, projectListShow, optionList, deleteProject, deleteTask } from './data';
import { format, parseISO } from 'date-fns';

const taskHeader = (project) => {
  const head = document.querySelector('.project-title');
  const menuBtn = document.querySelector('.mobile-menu');
  const projectDiv = document.querySelector('.projects');

  if (menuBtn.offsetWidth !== 0) {
    projectDiv.style.display = 'none';
  };

  while (head.firstChild) {
    head.removeChild(head.firstChild)
  }

  const taskHeader = document.createElement('h2');
  taskHeader.textContent = project;

  head.appendChild(taskHeader);
}

const renderProject = (newProject) => {
  const projectListItem = document.createElement('li');
  projectListItem.textContent = newProject.name;
  const projectList = document.querySelector('.user-defined-projects');
  projectListItem.setAttribute('id',newProject.name);
  projectListItem.addEventListener('click', projectListShow);
  const deleteIcon = document.createElement('div');
  deleteIcon.classList.add('delete-project');
  deleteIcon.addEventListener('click', deleteProject);
  deleteIcon.id = newProject.name;

  projectListItem.appendChild(deleteIcon);

  projectList.appendChild(projectListItem);
}

const addProject = (e) => {
  const projectName = document.querySelector('.project-input').value;
  console.log(projectName);
  const newProject = new Project(projectName);

  const update = updateProject(newProject);

  if (update === false) {
    alert('Please enter a unique project name');
  } else {
    renderProject(newProject);
    cancelEntry(e);
  }
}

const renderTask = (newTask) => {
  const taskList = document.querySelector('.task-list');

  const taskItem = document.createElement('li');
  taskItem.classList.add('task-list-item');
  const taskTitle = document.createElement('div');
  taskTitle.classList.add('task-title');
  const name = document.createElement('span');
  name.textContent = newTask.name;
  const desc = document.createElement('p');
  desc.textContent = newTask.desc;
  desc.classList.add('task-desc');
  const date = document.createElement('span');
  const workingDate = parseISO(newTask.dueDate);
  date.textContent = format(workingDate, 'MM/dd/yyyy');
  const deleteIcon = document.createElement('div');
  deleteIcon.classList.add('delete-task');
  deleteIcon.addEventListener('click', deleteTask);
  deleteIcon.id = newTask.name;
  deleteIcon.name = newTask.project;

  taskTitle.appendChild(name);
  taskTitle.appendChild(desc);

  taskItem.appendChild(taskTitle);
  taskItem.appendChild(date);

  taskItem.appendChild(deleteIcon);

  taskList.appendChild(taskItem);
}

const addTask = (e) => {
  const taskName = document.querySelector('.task-input').value;
  const taskDesc = document.querySelector('.task-details').value;
  const taskProject = document.querySelector('.task-project').value;
  const taskDueDate = document.querySelector('.due-date').value;
  const newTask = new Task(taskName, taskDesc, taskDueDate, taskProject);

  renderTask(newTask);

  updateTask(newTask, taskProject);

  cancelEntry(e);
}

const cancelEntry = (e) => {
  if (e.target.id === 'project-cancel' || e.target.id === 'project-add') {
    document.querySelector('.user-defined-projects').removeChild(document.querySelector('.input-item'));
  } else {
    document.querySelector('.task-list').removeChild(document.querySelector('.task-form'));
  }
}

const newProject = () => {
  const projectList = document.querySelector('.user-defined-projects');

  const newProjName = document.createElement('li');
  newProjName.classList.add('input-item');
  const projInput = document.createElement('input');
  projInput.setAttribute('type','text');
  projInput.setAttribute('placeholder','Project Name');
  projInput.classList.add('project-input');

  const btnCont = document.createElement('div');
  btnCont.classList.add('btn-container');
  const addBtn = document.createElement('button');
  const cancelBtn = document.createElement('button');
  addBtn.classList.add('add-btn');
  addBtn.setAttribute('id','project-add');
  cancelBtn.classList.add('cancel-btn');
  cancelBtn.setAttribute('id','project-cancel');
  btnCont.appendChild(addBtn);
  btnCont.appendChild(cancelBtn);

  newProjName.appendChild(projInput);
  newProjName.appendChild(btnCont);

  projectList.appendChild(newProjName);
  addBtn.addEventListener('click', addProject);
  cancelBtn.addEventListener('click', cancelEntry);
}

const newTask = () => {
  const taskList = document.querySelector('.task-list');

  const newTaskName = document.createElement('li');
  newTaskName.classList.add('input-item');
  newTaskName.classList.add('task-form');
  const newTaskInput = document.createElement('input');
  newTaskInput.setAttribute('type','text');
  newTaskInput.setAttribute('placeholder','Task');
  newTaskInput.classList.add('task-input');
  const newTaskDesc = document.createElement('input');
  newTaskDesc.setAttribute('type','text');
  newTaskDesc.setAttribute('placeholder','Task Details');
  newTaskDesc.classList.add('task-details');
  const taskProject = document.createElement('select');
  taskProject.setAttribute('type','select');
  taskProject.classList.add('task-project');
  taskProject.setAttribute('placeholder','Project');
  optionList(taskProject);
  const dueDate = document.createElement('input');
  dueDate.setAttribute('type','date');
  dueDate.classList.add('due-date');

  const btnCont = document.createElement('div');
  btnCont.classList.add('task-btn-container');
  const addBtn = document.createElement('button');
  const cancelBtn = document.createElement('button');
  addBtn.classList.add('add-btn');
  addBtn.setAttribute('id','task-add');
  cancelBtn.classList.add('cancel-btn');
  cancelBtn.setAttribute('id','task-btn');
  btnCont.appendChild(addBtn);
  btnCont.appendChild(cancelBtn);

  newTaskName.appendChild(newTaskInput);
  newTaskName.appendChild(newTaskDesc);
  newTaskName.appendChild(taskProject);
  newTaskName.appendChild(dueDate);
  newTaskName.appendChild(btnCont);

  taskList.appendChild(newTaskName);
  addBtn.addEventListener('click', addTask);
  cancelBtn.addEventListener('click', cancelEntry);
}

const showNav = () => {
  const projectDiv = document.querySelector('.projects');
  if (projectDiv.style.display === 'none') {
    projectDiv.style.display = 'flex';
  } else {
    projectDiv.style.display = 'none';
  }
}

const clearProject = () => {
  const projList = document.querySelector('.user-defined-projects');
  while (projList.firstChild) {
    projList.removeChild(projList.firstChild);
  }
}

const clearTasks = () => {
  const taskList = document.querySelector('.task-list');
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild)
  }
}

export { newProject, newTask, showNav, renderTask, renderProject, clearTasks, taskHeader, clearProject };

import { newProject, newTask, showNav } from './uiHandler'
import { loadLocal, projectListShow } from './data'

let taskify;

(function() {
  const projectBtns = Array.from(document.querySelectorAll('.project-name'));

  projectBtns.forEach(btn => {
    btn.addEventListener('click', projectListShow);
  })

  const newProjectBtn = document.querySelector('.add-project');
  newProjectBtn.addEventListener('click', newProject);

  const newTaskBtn = document.querySelector('.new-task-btn');
  newTaskBtn.addEventListener('click', newTask);

  const menuBtn = document.querySelector('.mobile-menu');
  menuBtn.addEventListener('click', showNav);

  loadLocal();
})();

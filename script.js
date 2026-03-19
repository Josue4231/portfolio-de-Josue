/*Filtre du bloc projetc*/

function filterProjects(category) {
  let projects = document.querySelectorAll('.bloc');

  projects.forEach(project => {
    project.style.display = 'none';
  });

  if (category === 'all') {
    projects.forEach(project => {
      project.style.display = 'block';
    });
  } else {
    let selected = document.querySelectorAll('.' + category);
    selected.forEach(project => {
      project.style.display = 'block';
    });
  }
}
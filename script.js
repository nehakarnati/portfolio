function showSection(id) {
    document.querySelectorAll('.section').forEach(section => {
      section.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    const projects = document.querySelectorAll('.project');
  
    projects.forEach(project => {
      project.addEventListener('click', function (event) {
        // Prevent toggling when clicking on a link or image inside the description
        if (event.target.tagName === 'A' || event.target.tagName === 'IMG') {
          return;
        }
  
        // Close all other projects
        projects.forEach(p => {
          if (p !== this) {
            p.classList.remove('active');
          }
        });
  
        // Toggle the clicked project
        this.classList.toggle('active');
      });
    });
  });
  

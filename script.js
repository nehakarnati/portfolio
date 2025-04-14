function showSection(id) {
    document.querySelectorAll('.section').forEach(section => {
      section.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.project').forEach(project => {
      project.addEventListener('click', function () {
        // Close all others
        document.querySelectorAll('.project').forEach(p => {
          if (p !== this) p.classList.remove('active');
        });
        // Toggle current
        this.classList.toggle('active');
      });
    });
  });
  
document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      var subjectName = document.querySelector('input[name="subject-name"]').value;
  
      if (subjectName === '') {
        alert('Por favor, introduce el nombre de la materia.');
      } else {
        // Guarda la materia en el LocalStorage
        var subjects = JSON.parse(localStorage.getItem('subjects')) || [];
        subjects.push(subjectName);
        localStorage.setItem('subjects', JSON.stringify(subjects));
  
        alert('Materia agregada con éxito.');
  
        // Actualiza la lista de materias
        updateSubjectsList();
      }
    });
  
    function updateSubjectsList() {
      var subjects = JSON.parse(localStorage.getItem('subjects')) || [];
      var subjectsList = document.querySelector('#subjects-list');
  
      // Limpia la lista de materias
      subjectsList.innerHTML = '';
  
      // Agrega cada materia a la lista
      subjects.forEach(function(subject) {
        var listItem = document.createElement('li');
        listItem.textContent = subject;
        subjectsList.appendChild(listItem);
      });
    }
  
    // Actualiza la lista de materias al cargar la página
    updateSubjectsList();
  });
  
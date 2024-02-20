document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      var firstname = document.querySelector('input[name="firstname"]').value;
      var lastname = document.querySelector('input[name="lastname"]').value;
      var avatar = document.querySelector('input[name="avatar"]').value;
      var subject = document.querySelector('select[name="subject"]').value;
      var grade = document.querySelector('input[name="grade"]').value;
  
      if (firstname === '' || lastname === '' || avatar === '' || subject === '' || grade === '') {
        alert('Por favor, completa todos los campos.');
      } else {
        // Guarda el estudiante en el LocalStorage
        var students = JSON.parse(localStorage.getItem('students')) || [];
        students.push({ firstname: firstname, lastname: lastname, avatar: avatar, subject: subject, grade: grade });
        localStorage.setItem('students', JSON.stringify(students));
  
        alert('Estudiante registrado con éxito.');
  
        // Actualiza la lista de estudiantes
        updateStudentsList();
      }
    });
  
    function updateStudentsList() {
      var students = JSON.parse(localStorage.getItem('students')) || [];
      var studentsList = document.querySelector('#students-list');
  
      // Limpia la lista de estudiantes
      studentsList.innerHTML = '';
  
      // Agrega cada estudiante a la lista
      students.forEach(function(student) {
        var listItem = document.createElement('li');
        listItem.textContent = student.firstname + ' ' + student.lastname + ' - ' + student.subject + ' - ' + student.grade;
        studentsList.appendChild(listItem);
      });
    }
  
    // Actualiza la lista de estudiantes al cargar la página
    updateStudentsList();
  
    // Carga las materias del LocalStorage
    var subjects = JSON.parse(localStorage.getItem('subjects')) || [];
    var subjectSelect = document.querySelector('select[name="subject"]');
  
    // Agrega cada materia al select
    subjects.forEach(function(subject) {
      var option = document.createElement('option');
      option.value = subject;
      option.textContent = subject;
      subjectSelect.appendChild(option);
    });
  });
  

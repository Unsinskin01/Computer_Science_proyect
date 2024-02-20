document.addEventListener('DOMContentLoaded', function() {
  var searchInput = document.querySelector('#search');

  searchInput.addEventListener('input', function() {
    var searchValue = searchInput.value.toLowerCase();

    // Filtra los estudiantes basándose en el valor de búsqueda
    var students = JSON.parse(localStorage.getItem('students')) || [];
    var filteredStudents = students.filter(function(student) {
      return student.firstname.toLowerCase().includes(searchValue) || student.lastname.toLowerCase().includes(searchValue);
    });

    // Actualiza la lista de estudiantes
    updateStudentsList(filteredStudents);
  });

  function updateStudentsList(students) {
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
  updateStudentsList(JSON.parse(localStorage.getItem('students')) || []);
});

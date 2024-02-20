
 // Obtén el formulario
var form = document.querySelector('.modal-content');

// Añade un evento 'submit' al formulario
form.addEventListener('submit', function(event) {
  // Evita el comportamiento predeterminado del formulario
  event.preventDefault();

  // Obtén el nombre de usuario y la contraseña
  var username = document.querySelector('input[name="uname"]').value;
  var password = document.querySelector('input[name="psw"]').value;

  // Valida el nombre de usuario y la contraseña
  if (username === '' || password === '') {
    alert('Por favor, introduce un nombre de usuario y una contraseña.');
  } else {
    alert('Nombre de usuario y contraseña validados con éxito.');
    
    // Cierra el modal
    document.getElementById('id01').style.display='none';
  }
});

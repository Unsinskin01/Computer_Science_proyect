var subMenu = document.querySelector('.submenu');
var openSubmenu = document.querySelector('.open_submenu');
  oppenSubMenu.addEvenListener('click', function(){
    subMenu.classList.toggle('show');
  })
  document.addEventListener('click', function(e){
    if(subMenu.classList.contains('show') && !subMenu.contains(e.target) && !openSubmenu.contains(e.target)) {
      subMenu.classList.remove('show');
    }
  })
      //  document.getElementById('controlEscolarForm').addEventListener('submit', function(event) {
       //     event.preventDefault();

          //  window.location
           // var nombre = document.getElementById('nombre').value;
           // var apellido = document.getElementById('apellido').value;
         //   var edad = document.getElementById('edad').value;
          //  var materia = document.getElementById('materia').value;
           // var calificacion = document.getElementById('calificacion').value;

           // var table = document.getElementById('alumnosTable').getElementsByTagName('tbody')[0];
           // var newRow = table.insertRow(table.rows.length);
           // var cell1 = newRow.insertCell(0);
           // var cell2 = newRow.insertCell(1);
           // var cell3 = newRow.insertCell(2);
           // var cell4 = newRow.insertCell(3);
          //  var cell5 = newRow.insertCell(4);

          //  cell1.innerHTML = nombre;
           // cell2.innerHTML = apellido;
         //   cell3.innerHTML = edad;
           // cell4.innerHTML = materia;
            //cell5.innerHTML = calificacion;

            //document.getElementById('nombre').value = '';
            //document.getElementById('apellido').value = '';
            //document.getElementById('edad').value = '';
            //document.getElementById('materia').value = '';
            //document.getElementById('calificacion').value = '';
        //});
        
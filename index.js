
document.getElementById('miFormulario').addEventListener('submit', function(event) {
        
          var nombre = document.getElementById("nombre").value;
          var apellido = document.getElementById("apellido").value;
          var email = document.getElementById("email").value;
          var número = document.getElementById("número").value;
        
          if (nombre == "") {
            alert("Por favor, ingresa tu nombre.");
            return false;
          }
      
          if (apellido == "") {
            alert("Por favor, ingresa tu apellido.");
            return false;
          }
        
          if (email == "") {
            alert("Por favor, ingresa tu email.");
            return false;
          } else {
            var emailRegex = /^\S+@\S+\.\S+$/;
            if (!emailRegex.test(email)) {
              alert("Por favor, ingresa un email válido.");
              return false;
            }
            return true;
          } 
          if (número == "") {
            alert("Por favor, ingresa tu número.");
            return false;
          }
        }
    )
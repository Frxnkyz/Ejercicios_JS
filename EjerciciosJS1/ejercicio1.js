/***************************************
*JS de Ejercicio1.html
* Autor : Francisco Romero Zarco
****************************************/
        
        function mostrarMensaje() {
            
            console.log("Hola mundo");

            
            alert("Hola mundo");

            
            document.getElementById("mensaje").innerHTML = "Hola mundo";
        }

        
        document.getElementById("triggerButton").onclick = mostrarMensaje;

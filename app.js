/*MODO ESTRICTO*/
'use strict';


window.addEventListener('load', function () {

    var objFormulario = document.querySelector('#formulario1');

    var objCaja2 = document.querySelector('#caja2');
    objCaja2.style.display = "none";
  
    objFormulario.addEventListener('submit', function () {

        let Card = document.querySelector('#Card').value;
        let CVC = document.querySelector('#CVC').value;
        let FirstName = document.querySelector('#FirstName');
        let LastName = document.querySelector('#LastName');
        let City = document.querySelector('#City');

        let state = document.querySelector("#state");
        let user = state.options[state.selectedIndex].value;
        let user1 = state.options[state.selectedIndex].text;
        console.log(user, user1);

        //alertas
        if (user == 0) {
            alert("por favor selecciona un estado");
        }

        if (Card == "") {
            alert("No ha ingresado un número de tarjeta")

        }

        else if (/^([0-9])*$/.test(Card)) {
            alert("El valor " + Card + " no es una letra");

        }

     
       


        // parte 2

        var off_payment_method = document.getElementsByName('options');
        var ischecked_method = false;
        for (var i = 0; i < off_payment_method.length; i++) {
            if (off_payment_method[i].checked) {
                ischecked_method = true;
                break;
            }
        }
        if (!ischecked_method) { //payment method button is not checked
            alert("Please choose Offline Payment Method");
        }



    });

});

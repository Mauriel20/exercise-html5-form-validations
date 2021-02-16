/*MODO ESTRICTO*/
'use strict';


window.addEventListener('load', function () {

    var objFormulario = document.querySelector('#formulario1');

    var objCaja2 = document.querySelector('#caja2');
    objCaja2.style.display = "none";

    objFormulario.addEventListener('submit', function () {

        let Card = document.querySelector('#Card').value;
        let CVC = document.querySelector('#CVC').value;
        let FirstName = document.querySelector('#FirstName').value;
        let LastName = document.querySelector('#LastName').value;
        let City = document.querySelector('#City').value;
        let postal = document.querySelector('#Postalcode').value;

        let state = document.querySelector("#state");
        let user = state.options[state.selectedIndex].value;
        let user1 = state.options[state.selectedIndex].text;
        console.log(user, user1);

        //alertas
        if (user == 0) {
            alert("por favor selecciona un estado");
        } else {
            user = true;
        }


        if (Card == "") {
            alert("No ha ingresado un número de tarjeta");

        } else {
            Card = true;
        }


        if (FirstName == "") {
            alert("No ha ingresado su nombre");

        } else {
            FirstName = true;
        }

        if (LastName == "") {
            alert("No ha ingresado su apellido");

        } else {
            LastName = true;
        }

        if (City == "") {
            alert("No ha ingresado su ciudad");

        } else {
            City = true;
        }


        if (postal == "") {
            alert("No ha ingresado su codigo postal");

        } else {
            postal = true;
        }

        if (user === true && Card === true && FirstName === true && LastName === true && City === true && postal === true) {
           document.getElementById("strong").innerHTML = "Todo se ha completado correctamente";
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
            alert("No ha seleccionado un metodo de pago");
        }



    });

});

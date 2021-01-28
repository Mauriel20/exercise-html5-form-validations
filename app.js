/*MODO ESTRICTO*/
'use strict';


window.addEventListener('load', function () {

    var objFormulario = document.querySelector('#formulario1');

    var objCaja2 = document.querySelector('#caja2');
    objCaja2.style.display = "none";

    objFormulario.addEventListener('submit', function () {

        let Card = document.querySelector('#Card');
        let CVC = document.querySelector('#CVC');
        let FirstName = document.querySelector('#FirstName');
        let LastName = document.querySelector('#LastName');
        let City = document.querySelector('#City');

        let state = document.querySelector("#state");
        let user = state.options[state.selectedIndex].value;
        let user1 = state.options[state.selectedIndex].text;
        console.log(user, user1);

        if (user == 0) {
            alert("por favor selecciona un estado");
        }


        /*function validateForm() {

           /* var list = document.querySelectorAll('input[name="options"]');
            for (var item of list) {
                item.checked = true;
            }
            
            let radios = document.querySelectorAll('input[type="radio"]');

            for (var item of list) {
                item.checked = true;
                alert("Must check some option!"); 

            }
            
            let formValid = false;

            var i = 0;
            while (!formValid && i < radios.length) {
                if (radios[i].checked) formValid = true;
                i++;
            }

            if (!formValid) { alert("Must check some option!"); }
            return formValid;
        }

        */

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

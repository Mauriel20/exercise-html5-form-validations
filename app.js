/*MODO ESTRICTO*/
    'use strict';


window.addEventListener('load', function(){
    
    var objFormulario = document.querySelector('#formulario1');
    
    var objCaja2 = document.querySelector('#caja2');
    objCaja2.style.display = "none";
    
    objFormulario.addEventListener('submit', function(){
        
        let Card = document.querySelector('#Card');
        let CVC = document.querySelector('#CVC');
        let FirstName = document.querySelector('#FirstName');
        let LastName = document.querySelector('#LastName');
        let City = document.querySelector('#City');

        let state = document.querySelector("#state");
        let user = state.options[state.selectedIndex].value;
        let user1 = state.options[state.selectedIndex].text;
        console.log(user, user1);

        if (user == 0){
            alert("por favor selecciona un estado");
        }
        
    });
    
});
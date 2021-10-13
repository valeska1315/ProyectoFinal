function calcularLBS(elEvento){
    elEvento.preventDefault();

    var respd = 0

    if(document.getElementById('cbox1').checked){
        respd=respd+1;      
    }
    if(document.getElementById('cbox2').checked){
        respd=respd+1;      
    }
    if(document.getElementById('cbox3').checked){
        respd=respd+1;      
    }
    if(document.getElementById('cbox4').checked){
        respd=respd+1;      
    }
    if(document.getElementById('cbox5').checked){
        respd=respd+1;      
    }
    if(document.getElementById('cbox6').checked){
        respd=respd+1;      
    }
    if(document.getElementById('cbox7').checked){
        respd=respd+1;      
    }
    if(document.getElementById('cbox8').checked){
        respd=respd+1;      
    }

    var negativo = 5;

        if(respd < negativo){
        window.location.href = "Resultado1.html";     
    }else{
        window.location.href = "Resultado2.html";     
    }

    resultado.textContent = respuesta.toFixed(2)
}


    var boton = document.querySelector("#inputFormulario");
    boton.addEventListener("submit", calcularLBS);
    


window.onload = function(){
    document.getElementById("weight").focus();

}


function criarBotaoVoltar(){
    var botaoVoltar = document.createElement("button");
    botaoVoltar.innerHTML = "Voltar";
    botaoVoltar.addEventListener("click", function(){
        location.reload();
    })
    

    return botaoVoltar;
}

function calcularLitrosPorDia(){   
    var divResultado = document.getElementById("result");

    var pesoUsuario = document.querySelector("input").value;
    let ml = 35;
    let resultadoEmLitros = (ml * pesoUsuario);


   console.log(resultadoEmLitros);

   divResultado.innerHTML = `<span>Você deverá beber <strong> ${resultadoEmLitros}ml</strong> de água por dia!</span>
   <span>Isso equivale a <strong>${resultadoEmLitros/1000}lt</strong>!</span>`;
   divResultado.appendChild(criarBotaoVoltar());

}


document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      calcularLitrosPorDia();
    }
});



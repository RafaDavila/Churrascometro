/* carne - 400g por pessoa + de 6 horas - 650
cerveja - 1200 ml por pessoa + 6 horas - 2000ml
 Refrigerante/ agua - 1000ml por pessoa + 6 horas 1500ml

 crianças valem por 0,5*/

 let inputAdultos = document.getElementById("adultos");
 let inputCriancas = document.getElementById("criancas");
 let inputDuracao = document.getElementById("duracao");

 let resultado = document.getElementById("resultado");

 function calcular() {

    console.log("Calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;


    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebidas = bebibasPP(duracao) * adultos + (bebibasPP(duracao)/2 * criancas);

    resultado.innerHTML = `<p>${qtdTotalCarne/1000} kg de Carne`;
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja/ 355)} Latas de Cerveja`;
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas/ 2000)} Garrafas de bebidas`;


 }

    function carnePP(duracao){
        if(duracao >= 6){
            return 650;
        }else{
            return 400;
        }
    }

    function cervejaPP(duracao){
        if(duracao >= 6){
            return 2000;
        }else{
            return 1200;
        }
    }

    function bebibasPP(duracao){
        if(duracao >= 6){
            return 1500;
        }else{
            return 1000;
        }
    }
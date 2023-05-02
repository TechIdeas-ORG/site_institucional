function calcularAumento() {

    var receitaMensal = Number(inputReceitaBruta.value);
    var receitaAnual = receitaMensal * 12

    var ganhoMensal = receitaMensal * 1.7

    var lucroMensal = ganhoMensal - receitaMensal


    var rendimentoVestuario = receitaMensal * 19 / 100
    var rendimentoSupermercado = receitaMensal * 17 / 100
    var rendimentoCosmeticos = receitaMensal * 14 / 100
    var rendimentoRestaurante = receitaMensal * 13 / 100


if(receitaMensal> 0){
div_geral.innerHTML = `R$${ganhoMensal.toFixed(2)}`
div_vestuarios.innerHTML =`R$${rendimentoVestuario.toFixed(2)}`
div_mercados.innerHTML =`R$${rendimentoSupermercado.toFixed(2)}`
div_alimenticio.innerHTML =`R$${rendimentoRestaurante.toFixed(2)}`
div_cosmeticos.innerHTML = `R$${rendimentoCosmeticos.toFixed(2)}`
}
else if (receitaMensal<=0){
    alert(`Verifique se o campo esta correto`)
    div_geral.innerHTML = ``
div_vestuarios.innerHTML =``
div_mercados.innerHTML =``
div_alimenticio.innerHTML =``
div_cosmeticos.innerHTML = ``
}
if (receitaMensal>=999999999){
    alert(`Receita muito grande, contate o nosso suporte, para calcularmos corretamente`)
    div_geral.innerHTML = ``
div_vestuarios.innerHTML =``
div_mercados.innerHTML =``
div_alimenticio.innerHTML =``
div_cosmeticos.innerHTML = ``
}

}
function orientar(){
    var msg_exclamacao = document.querySelector('.msg_exclamacao');
    var button = document.querySelector('.material-symbols-outlined')

    if(msg_exclamacao.style.display === 'block') {
        button.style.color = '#3BDB43';
        msg_exclamacao.style.display = 'none';
    } else {
        msg_exclamacao.style.display = 'block';
        button.style.color = '#0A600E';
    }

}
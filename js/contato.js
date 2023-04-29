function envioMensagem(){
    var nome = ipt_nome.value
    var email = ipt_email.value
    var telefone = ipt_telefone.value
    var mensagem = ipt_mensagem.value

    var erro = "não"

    if(email.endsWith("@gmail.com") || email.endsWith("@outlook.com") || email.endsWith("@hotmail.com")){}
    else{alert("Por favor, verifique se você escreveu seu email corretamente, aceitamos apenas gmail, hotmail e outlook")
    erro = "sim"}

    if(email == "@gmail.com" || email == "@hotmail.com" || email == "@outlook.com")
    {alert("Por favor, insira algo antes do @ na entrada do email.")
    erro = "sim"}

    if(nome == "")
    {alert("Por favor insira o seu nome.")
    erro = "sim"}

    if(telefone=="")
    {alert("Por favor, insira um número de telefone.")
    erro = "sim"}

    if(mensagem == "")
    {alert("Verifique se você realmente digitou a sua mensagem.")
    erro = "sim"}

    if(erro == "sim")
    {alert("Corrija o(s) dado(s) para prosseguirmos com o envio da sua mensagem.")}
    else
    {alert("Mensagem enviada! Agradecemos o seu contato! ;)")}
}
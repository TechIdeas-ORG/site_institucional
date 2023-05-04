const MAX = 166; // MAX que o gráfico pode chegar
const MIN = 50; // MIN que o gráfico pode chegar
const QUANT_ELEMENTS = 4;

var data; // 166 --- 100%
const colors = ['#FAFF00', '#00B2FF', '#FF8A00', '#FF0000'];
const elements = {
    0: {
        grafico: graf1, // Define a Chave (grafico) como o elemento com id graf1
        ambiente: ambiente1, // Define a Chave (ambiente) como o elemento com id ambiente1
        valor: Math.floor(Math.random() * (MAX - MIN)) + MIN,
        // MAX - MIN = 116 * 0 até 1, caso dê um 116 * 1 = 116 + MIN = 116 + 50 = 166
        // Caso dê 0, 116 * 0 = 0 + MIN = 0 + 50 = 50
        // Gerando dados Randomicos, para ilustracao do grafico!
        // math.floor e uma função para arredondar numeros decimais
        // math.radnom gera numero aleatorios entre 0 e 1
    },
    1: {
        grafico: graf2, // Define a Chave (grafico) como o elemento com id graf2
        ambiente: ambiente2, // Define a Chave (ambiente) como o elemento com id ambiente2
        valor: Math.floor(Math.random() * (MAX - MIN)) + MIN,
    },
    2: {
        grafico: graf3, // Define a Chave (grafico) como o elemento com id graf3
        ambiente: ambiente3, // Define a Chave (ambiente) como o elemento com id ambiente3
        valor: Math.floor(Math.random() * (MAX - MIN)) + MIN,
    },
    3: {
        grafico: graf4, // Define a Chave (grafico) como o elemento com id graf4
        ambiente: ambiente4, // Define a Chave (ambiente) como o elemento com id ambiente4
        valor: Math.floor(Math.random() * (MAX - MIN)) + MIN,
    },
}

function setData(){
    const QUARTIS = MAX/QUANT_ELEMENTS; // Define o período máximo das cores
    // A cor mais fraca (colors[0]) vai estar entre 0 e MAX/QUANT_ELEMENTS (41.5)
    // A segunda cor mais fraca (colors[1]) vai estar entre 41.5 e MAX/QUANT_ELEMENTS * 2 (83)
    // A terceira cor mais fraca (colors[2]) vai estar entre 83 e MAX/QUANT_ELEMENTS * 3 (124.5) ...
    
    for(let i = 0; i < QUANT_ELEMENTS; i++){
        var val = elements[i]['valor'];
        elements[i]['grafico'].style.height = val + 'px'; // Define o grafico com index i com altura do tamanho do valor gerado aleatóriamente
        elements[i]['ambiente'].innerHTML = val; // Define o texto do ambiente com index i como o valor gerado aleatóriamente
        
        if(val <= QUARTIS){ // 0 a 41.5
            var ambiente = elements[i]['ambiente'];
            ambiente.style.background = colors[0];
        }else if(val <= QUARTIS * 2){ // 41.5 a 83
            var ambiente = elements[i]['ambiente'];
            ambiente.style.background = colors[1];
        }else if(val <= QUARTIS * 3){ // 83 a 124.5
            var ambiente = elements[i]['ambiente'];
            ambiente.style.background = colors[2];
        }else if(val <= QUARTIS * 4){ // 124.5 a 166
            var ambiente = elements[i]['ambiente'];
            ambiente.style.background = colors[3];
        }
        
        elements[i]['valor'] = Math.floor(Math.random() * (MAX - MIN)) + MIN; // Gerar um novo valor aleatório para o ambiente e gráfico da posição i do json elements
    }

}

setData(); // Chama a função quando carregar a página para gerar assim que o usuário entrar

setInterval(()=>{ // While em 2° Plano com um intervalo de 5000 ms (5s)
    setData(); // Chama a função para gerar dados a cada 5s
}, 5000)
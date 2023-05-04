const MAX = 166;
const MIN = 50;
const QUANT_ELEMENTS = 4;

var data; //166 --- 100%
const colors = ['#FAFF00', '#00B2FF', '#FF8A00', '#FF0000'];
const elements = {
    0: {
        grafico: graf1,
        ambiente: ambiente1,
        valor: Math.floor(Math.random() * (MAX - MIN)) + MIN,
    },
    1: {
        grafico: graf2,
        ambiente: ambiente2,
        valor: Math.floor(Math.random() * (MAX - MIN)) + MIN,
    },
    2: {
        grafico: graf3,
        ambiente: ambiente3,
        valor: Math.floor(Math.random() * (MAX - MIN)) + MIN,
    },
    3: {
        grafico: graf4,
        ambiente: ambiente4,
        valor: Math.floor(Math.random() * (MAX - MIN)) + MIN,
    },
}

function setData(){
    const QUARTIS = MAX/QUANT_ELEMENTS;
    
    for(let i = 0; i < QUANT_ELEMENTS; i++){
        var val = elements[i]['valor'];
        elements[i]['grafico'].style.height = val + 'px';
        elements[i]['ambiente'].innerHTML = val;
        
        if(val <= QUARTIS){
            var ambiente = elements[i]['ambiente'];
            ambiente.style.background = colors[0];
        }else if(val <= QUARTIS * 2){
            var ambiente = elements[i]['ambiente'];
            ambiente.style.background = colors[1];
        }else if(val <= QUARTIS * 3){
            var ambiente = elements[i]['ambiente'];
            ambiente.style.background = colors[2];
        }else if(val <= QUARTIS * 4){
            var ambiente = elements[i]['ambiente'];
            ambiente.style.background = colors[3];
        }
        
        elements[i]['valor'] = Math.floor(Math.random() * (MAX - MIN)) + MIN;
    }

}

setData();

setInterval(()=>{
    setData();
}, 5000)
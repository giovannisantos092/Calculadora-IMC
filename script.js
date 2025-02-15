function calcular() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');
    
    if (nome !== '' && altura !== '' && peso !== '') {
    const valorIMC = (peso / (altura * altura)).toFixed(1);
    
    let situacao = '';

    if (valorIMC <= 18.5) {
        situacao = 'Abaixo do peso';
    }else  if(valorIMC <= 24.9){
        situacao = 'Peso normal';       
    }else if(valorIMC <=29.9){
        situacao = 'Sobrepeso';
    }else if (valorIMC <=34.9){
        situacao ='Obesidade grau 1';
    }else if (valorIMC <=39.9){
        situacao =  'Obesidade grau 2 (severa)';
    }else if (valorIMC >= 40){
        situacao = 'Obesidade grau 3 (morbida)';
    }
    resultado.textContent = `${nome} seu imc é ${valorIMC} e sua situação esta classificada como:${situacao}`
    }else {
        resultado.textContent = 'preencha todas as informações'
    }
}

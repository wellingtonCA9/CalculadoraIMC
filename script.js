const firstDiv = document.querySelector('.first-step');
const secondDiv = document.querySelector('.second-step');
const finalDiv = document.querySelector('.final-step');

function go(currentStep, nextStep){
    let dNone, dBlock;
    if(currentStep == 1){
        dNone = firstDiv;
    }
    else if(currentStep == 2){
        dNone = secondDiv;
    }
    else{
        dNone = finalDiv;
    }
    dNone.style.display = 'none';

    if(nextStep == 1){
        dBlock = firstDiv;
    }
    else if(nextStep == 2){
        dBlock = secondDiv;
    }
    else{
        dBlock = finalDiv;
    }
    dBlock.style.display = 'block';
}

function validate(){
    const peso = document.getElementById('peso');
    const altura = document.getElementById('altura');
    if(!peso.value || !altura.value){
        console.log("Valores incorretosValo");
    }
    else{
        let imc = peso.value / (altura.value * altura.value);
        const result = document.getElementById("resultado");
        if(imc < 18.5){
            console.log("Magreza | Obesidade: 0");
            result.innerHTML = "Magreza | Obesidade: 0";
        }
        else if(imc >= 18.5 && imc < 25){
            console.log("Normal | Obesidade: 0");
            result.innerHTML = "Normal | Obesidade: 0";
        }
        else if(imc >= 25 && imc < 30){
            console.log("Sobrepeso | Obesidade: I");
            result.innerHTML = "Sobrepeso | Obesidade: I";
        }
        else if(imc >= 30 && imc < 40){
            console.log("Obesidade | Obesidade: II");
            result.innerHTML = "Obesidade | Obesidade: II";
        }
        else{
            console.log("Obesidadde grave | Obesidade: III");
            result.innerHTML = "Obesidadde grave | Obesidade: III";
        }
        go(2,3)
    }
}
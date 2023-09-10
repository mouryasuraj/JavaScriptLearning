// Logic

// select button, input

const form = document.querySelector('form')
const clear = document.querySelector('.clear')
const height = document.querySelector('#height')
const weight = document.querySelector('#weight')
const range = document.querySelector('.range');
// Events on Forms

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const valOfHeight = parseInt(document.querySelector('#height').value)
    const valOfWeight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('.showBMI')

    if(valOfHeight === '' || valOfHeight <= 0){
        results.innerHTML = `Please enter a valid height in cm`
    }else if(valOfWeight === '' || valOfWeight <= 0){
        results.innerHTML = `Please enter a valid weight in kg`
    }else{
        const bmi = (valOfWeight / ((valOfHeight * valOfHeight)/10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;
        if(bmi<18.5){
            range.innerHTML = 'Under Weight'
        }else if(bmi>=18.5 && bmi<25){
            range.innerHTML = 'Normal Weight'
        }else if(bmi>=25 && bmi<30){
            range.innerHTML = 'Over Weight'
        }else if(bmi>=30){
            range.innerHTML = 'Obesity'
        }
    }
})

// Event on clear button
clear.addEventListener('click', ()=>{
    range.innerHTML = ''
    height.value = '';
    weight.value = '';
})
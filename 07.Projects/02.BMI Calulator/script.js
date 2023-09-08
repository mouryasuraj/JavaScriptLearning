// Logic

// select button, input

const form = document.querySelector('form')
const clear = document.querySelector('.clear')
const height = document.querySelector('#height')
const weight = document.querySelector('#weight')
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
        results.innerHTML = `<span>${bmi}</span>`
    }
})

// Event on clear button
clear.addEventListener('click', ()=>{
    height.value = '';
    weight.value = '';
})
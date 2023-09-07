// Logic

// select all button and body tag
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body');


// forEach
buttons.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        let bgColorOfCurrentElem = e.target.id;
        body.style.backgroundColor = bgColorOfCurrentElem;
    })
})

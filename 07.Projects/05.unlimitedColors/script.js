// Logic

// random color
const randomColor = () => {
   const hex = '0123456789ABCDEF';
   let color = '#'
   for(let i=0; i<6; i++){
    color += hex[Math.floor(Math.random() * 16)]
   }
   return color;
}



// function to startChangingColor
let intervalId;
const startChangingColor = ()=>{
    const changingColor =()=>{
        document.body.style.backgroundColor = randomColor();
    }
    if(!intervalId){
        intervalId = setInterval(changingColor, 1000)
    }
}

// function to stopChangingColor
const stopChangingColor = ()=>{
    clearInterval(intervalId);
    intervalId  = null;
}


// select

document.querySelector('#start').addEventListener('click',startChangingColor);
document.querySelector('#stop').addEventListener('click',stopChangingColor);
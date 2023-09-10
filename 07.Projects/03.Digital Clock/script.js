// Logic

// select

const time = document.querySelector('.time');

// Show time
setInterval(()=>{
    const date = new Date();
    time.innerHTML = date.toLocaleTimeString();
}, 1000)
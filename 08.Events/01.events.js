// In javascript events run in sequence


//onclick  doesn;t provide more features than eventListener. So this is not the prefered way to use events
// document.getElementById('owl').onclick = ()=>{
//     alert('Owl')
// }

// below functions are used in early days
// attachEvent()
//jquery = on


//go through below topics on MDN
// type, timestamp, dafaultPrevented
// target, toElement, srcElement, currentTarget,
//clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode 



// addEventListener
// document.getElementById('owl').addEventListener('click', ()=>{
//     alert('owl clicked')
// })




// Stop Propagation


// Propagation(third parameter of addEventListener)
//Below code have three parameters. third one is taking boolean values, where false is the dafault value. false is also known as bubbling and true is also known as capturing.These are called propagation



// ex:
// here we will get first 'clicked on owl' then clicked on UL --- It is using bubbling method

// document.getElementById('images').addEventListener('click', ()=>{
//     console.log('cliked on UL')
// },false)
// document.getElementById('owl').addEventListener('click', ()=>{
//     console.log('clicked on owl')
// },false)


// ex:
// here we will get first 'clicked on UL' then clicked on owl --- It is using capturing method

// document.getElementById('images').addEventListener('click', ()=>{
//     console.log('cliked on UL')
// },true)
// document.getElementById('owl').addEventListener('click', ()=>{
//     console.log('clicked on owl')
// },true)

// But if i want to click only on child node and it doesn't affect the parent so we can use stopPropagation() method 
// document.getElementById('images').addEventListener('click', ()=>{
//     console.log('cliked on UL')
// },false)
// document.getElementById('owl').addEventListener('click', (e)=>{
//     console.log('clicked on owl')
//     e.stopPropagation();//stopPropagation()
// },false)




// preventDefault
// It will prevent the default behaviour of node

document.getElementById('google').addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('clicked on google');
})



// ex : TO remove any node
const images = document.querySelector('#images');
images.addEventListener('click',(e)=>{
    console.log(e.target.tagName);
    if(e.target.tagName === 'IMG' || e.target.tagName === 'A'){
        console.log(e.target.id);
        const removeIt = e.target.parentNode;
        // One way to remove element
        removeIt.remove();
        // another way to remove element
        // removeIt.parentNode.removeChild(removeIt)
    }

})
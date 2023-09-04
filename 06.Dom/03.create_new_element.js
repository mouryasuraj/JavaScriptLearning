const days = document.querySelector('.parent');
// console.log(days);
// console.log(days.children); //it will give all the children of parent class in the form of HTMLCollection
// console.log(days.children[0]);//It will give first element
// console.log(days.children[0].innerHTML);//Monday

// we can also iterate through HTMLCOllection and NOdeLIst using for loop
// for(let i=0; i<days.children.length; i++){
//     console.log(days.children[i].innerHTML);
// }

// days.children[1].style.color = 'orange';

// Parent to child
// console.log(days.firstElementChild);
// console.log(days.children[1].nextElementSibling.innerHTML);
// console.log(days.children[1].previousElementSibling.innerHTML);
// console.log(days.lastElementChild);

// child to parent
// const dayOne = document.querySelector('.day');
// console.log(dayOne);
// console.log(dayOne.parentElement);
// dayOne.parentElement.style.backgroundColor = 'red';



// Nodes
// console.log('Nodes: ', days.childNodes);
// console.log('Nodes: ', days.children[0].childNodes);









// How element is created

// let doc = {
    //     createElm:function(elem){
        //     return `<${elem}></${elem}>`
//     }
// }

// const suraj = doc.createElm('suraj')
// console.log(suraj);


// How to created NodeList

/*
const div = document.createElement('div')
console.log(div);
div.className = 'main';
// div.id = 'main-box';
div.id = Math.floor(Math.random() * 10 + 1);
div.setAttribute('title', 'Main-box');
// div.textContent = 'Main Box'//this is not the preferred way
const text = document.createTextNode('Main-box')
div.appendChild(text);
div.style.backgroundColor = 'green';
div.style.padding = '10px';
div.style.width = '300px';
div.style.height = '300px';
div.style.display = 'flex';
div.style.alignItems = 'center';
div.style.justifyContent = 'center';
div.style.margin = 'auto';
// AppendChild
document.body.appendChild(div)
*/



// Created function to create any html elements
const createElements =(elem, id, clas, width, height, text, bgclr, clr)=>{
    const div = document.createElement(elem)
    div.className = clas;
    div.id = id;
    div.setAttribute('title', 'Main-box');
    const textNode = document.createTextNode(text)
    div.appendChild(textNode);
    div.style.backgroundColor = bgclr;
    div.style.color = clr;
    div.style.padding = '10px';
    div.style.width = width;
    div.style.height = height;
    div.style.display = 'flex';
    div.style.alignItems = 'center';
    div.style.justifyContent = 'center';
    div.style.margin = '20px auto';
    document.body.appendChild(div)
}

createElements('h1','heading','head','fit-content','fit-content', 'Heading', 'skyblue', 'red');
createElements('p','firstPara','para','300px','fit-content', 'This is the first para created through javaScript', 'red', 'skyblue');
createElements('div','main-box','main','500px','300px', 'Main-box', 'cyan', 'red');


// Dom selectors

let title = document.getElementById('title');
// It will print whole element who's id is 'title'
//<h1 class="heading" id="title">Dom Learning</h1>
// now, we get the element. we can manipulate this element using lot of methods available in document Object. 
// Ex:

// one way to access attributes available in element
console.log(title.id);  //title
console.log(title.className);  //heading
// another way to access attributes available in element
console.log(title.getAttribute('id'));  //title
console.log(title.getAttribute('class'));  //title
// setAttribut
console.log(title.setAttribute('class', 'test'));  //Note: It will override the class. If you want to add new class or don't want to override.Then use below syntax
console.log(title.setAttribute('class', 'test heading'));  //Here both test and heading class will be set as value in class attribute
console.log(title.getAttribute('class'));  //Now we will get both the class :test heading

// we can manipulate styles like this:
title.style.backgroundColor = 'green';
title.style.padding = '15px 30px';
title.style.borderRadius = '15px';
title.style.cursor = 'pointer';

console.log(title)



// Interesting
// How to chage content in Element
console.log(title.innerHTML)  //It will show all the content including HTMl
console.log(title.textContent) //It will show all the content. If any element is hidden then textContent will show all the content.
console.log(title.innerText)//It will show only available or visible text

// querySelector: It will give only first element
document.querySelector('h1');
document.querySelector('#title');
document.querySelector('.heading');
document.querySelector('input[type="password"]');
document.querySelector('p:first-child');

// We can store in anaother variable and apply querySelector on this.
let unOrderredList = document.querySelector('ul')
let turnGreen = unOrderredList.querySelector('li')
turnGreen.style.backgroundColor = 'green';
turnGreen.style.padding = '15px 30px';
turnGreen.style.borderRadius = '15px';
turnGreen.style.cursor = 'pointer';



// querySelcetorAll: It will give all element

//here we get NodeList
const tempLiList = document.querySelectorAll('li'); //It will give all li available in the html page in the form of NodeList.(Its looks like array but it is not an array)

//tempLiList.style.color = 'red'; //we cannot target NOdeList element like this.
tempLiList[0].style.color = 'red'; //we have to specify which element is we are going to target.

// we can use methods of NodeList
tempLiList.forEach((list)=>{
    list.style.backgroundColor = 'red'
})
tempLiList.length;



// getElementByClassName()  : It will give you all element which has pass as a parameter


// It will give HTMLCollection. NOte: We cannot apply forEach on HTMLCollection
let list_item = document.getElementsByClassName('list-item'); 




// if we want to convert NodeList or HTMLCOllection to array

// Now we can apply all mehtods of array
const HtmlCollectionconvertToArr = Array.from(list_item);
const NOdeListconvertToArr = Array.from(tempLiList);

// HtmlCollectionconvertToArr.forEach((l)=>{
//     console.log(l);
// })
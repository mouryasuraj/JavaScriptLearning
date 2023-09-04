
// THis is not the optimized version because if we want to add li elements in bulk then there will be an optimize issue.
const addLanguage =(langName)=>{
    const li = document.createElement('li');
    li.innerHTML = langName;
    document.querySelector('.language').appendChild(li);
}
addLanguage('Python');
addLanguage('Java');


// This is optimed than above one because in this fucntion it doesn't need to travel through whole tree of DOM. Always use this.
const addOptimizeAddLanguage =(langName)=>{
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(langName))
    document.querySelector('.language').appendChild(li) 
}
addOptimizeAddLanguage('Golang');
addOptimizeAddLanguage('c++');




// How to edit any element

const secondLang = document.querySelector('li:nth-child(2)');
// console.log(secondLang);
//secondLang.innerHTML = 'Mojo' //This is not the preferred way
const newLi = document.createElement('li');
newLi.textContent = 'Mojo'
secondLang.replaceWith(newLi);

// second edit example
const firstLang = document.querySelector('li:first-child');
firstLang.outerHTML = '<li>TypeScript</li>';



// How to remove any element
const lastLang = document.querySelector('li:last-child')
lastLang.remove();
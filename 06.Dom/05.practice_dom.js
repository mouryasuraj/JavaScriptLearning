// const para = document.querySelectorAll('p')
// // console.log(para);
// para.forEach((e)=>{
//     console.log(e.addEventListener('click',()=>{
//         alert('p')
//     }));
// })

// Function to change the content of t2

// const modifyText =()=>{
//     const t2 = document.getElementById('t2');
//     const isNodeThree = t2.firstChild.nodeValue === 'three';
//     t2.firstChild.nodeValue = isNodeThree ? 'two' : 'three'
// }

// const even = document.querySelector('#outside');
// even.addEventListener('click', modifyText, false)





// // Add an abortable event listener to table
// const controller = new AbortController();
// const el = document.getElementById("outside");
// el.addEventListener("click", modifyText, { signal: controller.signal });

// // Function to change the content of t2
// function modifyText() {
//   const t2 = document.getElementById("t2");
//   if (t2.firstChild.nodeValue === "three") {
//     t2.firstChild.nodeValue = "two";
//   } else {
//     t2.firstChild.nodeValue = "three";
//     controller.abort(); // remove listener after value reaches "three"
//   }
// }



// function modifyText(new_text) {
//       const t2 = document.getElementById("t2");
//       t2.firstChild.nodeValue = new_text
//     }

// const el = document.getElementById("outside");
// el.addEventListener("click", ()=>{modifyText('four')});


// const tble = document.createElement('table')
// const tbody = document.createElement('tbody')

// const input = document.querySelector('input');
// input.addEventListener('click', ()=>{
//   for (let i = 1; i < 3; i++) {
//     const row = document.createElement('tr')
//     for (let j = 1; j < 3; j++) {
//       const cell = document.createElement('td');
//       const cellData = document.createTextNode(`row ${i} column${j}`)
//       cell.appendChild(cellData);
//       row.appendChild(cell);
//     }
//     tbody.appendChild(row)
//   }
//   tble.appendChild(tbody);
//   tble.setAttribute('border', 2)
//   document.body.appendChild(tble);

// })


  // const p =  document.querySelector('p');
  // myTextNode = document.createTextNode("Middle");
  // p.appendChild(myTextNode)


const el = document.querySelectorAll("p#main, p#basic, p#exclamation");
console.log(el);



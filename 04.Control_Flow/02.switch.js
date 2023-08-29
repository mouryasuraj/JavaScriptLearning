// switch

// syntax
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// const month = 'april';
// const month = 'fgds';
const month = 3;

switch(month){
    case 1:
        console.log('January');
        break;  //Break is used to break the control flow of switch. it means that if case is matched then the break keyword in that case will break the control so that further code will not execute
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March');
        break;
    case "april":
        console.log('4');
        break;
    default:
        console.log('default case match');
}
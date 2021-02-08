'use strict';


let username = prompt ('what is your name?');
alert('welcome ' + username);
let user2 = confirm('do you like university?')
if (user2 === true){
    alert('Hallo good student');
} else {
    alert('Hallo bad student');
}
let user1 = prompt('guess what is my name?')

console.log(user1.toLocaleLowerCase());
user1 = user1.toLocaleLowerCase();

if ( user1 === 'obada'){
    alert('welcome obada');
    console.log('welcome obada');
} else if(user1 === 'eshaq') {
    alert('welcome eshaq');
    console.log('welcome eshaq');
} else {
    alert('welcome mohammad');
    console.log('welcome mohammad')
}
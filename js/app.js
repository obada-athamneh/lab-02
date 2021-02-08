'use strict';

let user1 = 'obada';
let user2 = 'eshaq';
let username = prompt ('what is your name?')
console.log(username.toLocaleLowerCase());
username = username.toLocaleLowerCase();

if ( username === 'obada'){
    alert('welcome obada');
    console.log('welcome obada');
} else if(username === 'eshaq') {
    alert('welcome eshaq');
    console.log('welcome eshaq');
} else {
    alert('welcome mohammad');
    console.log('welcome mohammad')
}
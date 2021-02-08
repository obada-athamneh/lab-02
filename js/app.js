'use strict';

let w1 = prompt('do i like red color?')
w1 = w1.toLocaleLowerCase();

if (w1 === 'yes' || w1 === 'y'){
    alert(' yes i like red color');
} else {
    alert('no i like red color');
}


let w2 = prompt('do i like black color?')
w2 = w2.toLocaleLowerCase();

if (w2 === 'yes' || w2 === 'y'){
    alert(' yes i like black color');
} else {
    alert('no i like black color');
}

let w3 = prompt('do i like cake?')
w3 = w3.toLocaleLowerCase();

if (w3 === 'yes' || w3 === 'y'){
    alert(' yes i like  cake');
} else {
    alert('no i like cake');
}

let w4 = prompt('do i like shawerma?')
w4 = w4.toLocaleLowerCase();

if (w4 === 'yes' || w4 === 'y'){
    alert(' yes i like shawerma very much');
} else {
    alert('no i like shawerma');
}

let w5 = prompt('do i like programming?')
w5 = w5.toLocaleLowerCase();

if (w5 === 'yes' || w5 === 'y'){
    alert(' yes i like programming');
} else {
    alert('no i like programming');
}





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
    alert('yes my name is obada');
    console.log('yes my name is obada');
}  else {
    alert('No my name is obada');
    console.log('no my name is obada')
}
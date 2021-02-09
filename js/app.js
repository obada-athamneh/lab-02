'use strict';

let u1 = prompt('what is obada age ?')
u1 = parseInt(u1);
let score = 0;
for (let i = 2; i <= 4; i++) {
    if (u1 > 27) {
        alert('Too high');
        u1 = prompt('Enter the correct age ?')
        u1 = parseInt(u1)
        if (i === 4) {
            alert('correct answer is 27')
        }
    } else if (u1 < 27) {
        alert('Too low');
        u1 = prompt('Enter the correct age')
        u1 = parseInt(u1)
        if (i === 4) {
            alert('correct age is 27')

        }
    } else if (u1 === 27){
        alert('correct age'); 
        score++;
        i = 5;
        break;
    }
} 

let arr = ['Irbid' , 'Dubai' , 'paris' , 'barcelona'];

for (let j = 0; j < 6; j++) {
    let u2 = prompt('can you guess my best cities? ');
let u3 = u2.toLowerCase();
for(let a = 0 ; a < arr.length ; a++){
    if( u3 === arr[a]){
    score++;
    j = 6;
    break; }
     
}
if (j !== 6){ 
alert('wrong answer , try again')
} 


alert('write the correct new value');
}
alert('My best cities are Irbid , Dubai , Paris , Barcelona');
let w1 = prompt('do i like red color?')
w1 = w1.toLocaleLowerCase();

if (w1 === 'yes' || w1 === 'y') {
    alert(' yes i like red color');
    score++;
} else {
    alert('no i like red color');
}


let w2 = prompt('do i like black color?')
w2 = w2.toLocaleLowerCase();

if (w2 === 'yes' || w2 === 'y') {
    alert(' yes i like black color');
    score++;
} else {
    alert('no i like black color');
}

let w3 = prompt('do i like cake?')
w3 = w3.toLocaleLowerCase();

if (w3 === 'yes' || w3 === 'y') {
    alert(' yes i like  cake');
    score++;
} else {
    alert('no i like cake');
}

let w4 = prompt('do i like shawerma?')
w4 = w4.toLocaleLowerCase();

if (w4 === 'yes' || w4 === 'y') {
    alert(' yes i like shawerma very much');
    score++;
} else {
    alert('no i like shawerma');
}

let w5 = prompt('do i like programming?')
w5 = w5.toLocaleLowerCase();

if (w5 === 'yes' || w5 === 'y') {
    alert(' yes i like programming');
    score++;
} else {
    alert('no i like programming');
}





let username = prompt('what is your name?');
alert('welcome ' + username);
let user2 = confirm('do you like university?')
if (user2 === true) {
    alert('Hallo good student');
    score++;
} else {
    alert('Hallo bad student');
}
let user1 = prompt('guess what is my name?')

console.log(user1.toLocaleLowerCase());
user1 = user1.toLocaleLowerCase();

if (user1 === 'obada') {
    alert('yes my name is obada');
    console.log('yes my name is obada');
    score++;
} else {
    alert('No my name is obada');
    console.log('no my name is obada')
}

alert('your score is ' + score + 'out of 9');
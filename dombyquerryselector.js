// var header=document.querySelector('#main-header');
// header.style.borderBottom='solid 4px #ccc';


// var input=document.querySelector('input');
// input.value='hello';

// var submit=document.querySelector('input[type="submit"]');
// submit.value='ok';


// var item=document.querySelector('.list-group-item');
// item.style.color='red';

// var seconditem=document.querySelector('.list-group-item:nth-child(2)');
// seconditem.style.backgroundColor='green';

// var thirditem=document.querySelector('.list-group-item:nth-child(3');
// thirditem.style.visibility='hidden';



var title=document.querySelectorAll('.title');
console.log(title);
title[0].textContent='hello';
var seconditem=document.querySelectorAll('li');
seconditem[1].style.color='green';
 
var odd=document.querySelectorAll('li:nth-child(odd)');

for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';
}
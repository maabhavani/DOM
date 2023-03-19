var itemlist=document.querySelector('#items');
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemlist.parentNode.parentNode);



console.log(itemlist.parentElement);
itemlist.parentElement.style.backgroundColor='#f4f4f4';
console.log(itemlist.parentElement.parentElement);

//console.log(itemlist.childNodes);
console.log(itemlist.children);


console.log(itemlist.children[1]);

itemlist.children[1].style.backgroundColor='black';

console.log(itemlist.firstChild);
console.log(itemlist.firstElementChild);
itemlist.firstElementChild.textContent='hello';
console.log(itemlist.nextElementSibling);
console.log(itemlist.previousElementSibling);
itemlist.previousElementSibling.previousElementSibling.style.backgroundColor='green';

var newdiv=document.createElement('div');
newdiv.className='Hello'


newdiv.id='hello1';


newdiv.setAttribute('title','hellodiv');
var newdivtext=document.createTextNode('hello');

newdiv.appendChild(newdivtext);



var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');

console.log(newdiv);
container.insertBefore(newdiv, h1);





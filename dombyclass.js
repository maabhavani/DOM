var items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent="hello";
//items[1].style.fontWeight="bold";
for(var i=0;i<items.length;i++){
    items[i].style.backgroundColor="#f4f4f4";
}
items[2].style.backgroundColor="green";



for(var i=0;i<items.length;i++){
    items[i].style.fontWeight='bold';

}
for(var i=0;i<items.length;i++){
    items[i].style.color='#EF3024';
}

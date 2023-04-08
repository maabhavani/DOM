var form = document.getElementById('addForm');
var itemList=document.getElementById('items');
var filterItems=document.getElementById('filter');
//Form submit event

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeitem);
filter.addEventListener('keyup', filterItems);
//ADD itm
function addItem(e){
    e.preventDefault();

    //ger input valu
    var newItem= document.getElementById('item').value;

    //create element li
    var li=document.createElement('li');

    //add class
    li.className='list-group-item'; li.appendChild(document.createTextNode(newItem));
    var editbtn=document.createElement('button');
    editbtn.className='btn btn-danger btn-sm float-right delete';
    editbtn.appendChild(document.createTextNode('Edit'));

    li.append(editbtn);
    itemList.appendChild(li);
    li.appendChild(document.createTextNode(newItem));
    var deletebtn=document.createElement('button');
    deletebtn.className='btn btn-danger btn-sm float-right delete';
     deletebtn.appendChild(document.createTextNode('x'));
     li.append(deletebtn);
     itemList.appendChild(li);
   
    

    
}
function removeitem(e){
   // console.log(1);
if(e.target.classList.contains('delete')){
    //console.log(1);
if(confirm("are you sure")){
    var li =e.target.parentElement;
    itemList.removeChild(li);
}}
}

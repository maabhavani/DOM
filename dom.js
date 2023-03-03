//console.dir(document);
console.log(document.URL);
console.log(document.title);
console.log(document.doctype);
//document.title="123";//
console.log(document.head);
console.log(document.all[10]);
//document.all[10].textContent="hello";
console.log(document.forms);
console.log(document.getElementById('header-title'));
var headertitle=document.getElementById('header-title');
console.log(headertitle);
headertitle.innertext='<h3>hello</h3>';
headertitle.style.borderBottom='solid 3px #000';
headertitle.style.color='green';


var header=document.getElementById('main-header');
header.style.borderBottom='solid 3px #000';
//header.style.backgroundColor='white';


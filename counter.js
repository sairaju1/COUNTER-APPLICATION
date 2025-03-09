let a=document.getElementById("counterValue");
let c=document.getElementById("bt1");
let d=document.getElementById("bt2");
let b=document.getElementById("bt3");
function increase()
{
let val=parseInt(a.textContent);
val++;
a.textContent=val;
b.style.backgroundColor="green";
c.style.backgroundColor="#f1f5f8";
d.style.backgroundColor="#f1f5f8";
updatecolor();

}

function decrease()
{
let val=parseInt(a.textContent);
val--;
a.textContent=val;
b.style.backgroundColor="#f1f5f8";
c.style.backgroundColor="yellow";
d.style.backgroundColor="#f1f5f8";
updatecolor();
}

function reset()
{
let val=parseInt(a.textContent);
val=0;
a.textContent=val;
b.style.backgroundColor="#f1f5f8";
c.style.backgroundColor="#f1f5f8";
d.style.backgroundColor="red";
updatecolor();
}

function updatecolor()
{
let val=parseInt(a.textContent);
if(val>0)
{
  a.style.backgroundColor="green";
}
else if(val<0)
{
a.style.backgroundColor="orange";
}
else{
  a.style.backgroundColor="red";
}
}
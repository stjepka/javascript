var b = document.querySelector("#body"); 
var h = document.createElement("h1");
b.insertBefore(h, b.firstChild);
// ovo se moglo i sa prepend funkcijom
h.innerText = "Jako smo pametni!!!!!!!!!";

var f = document.querySelector("#footer")
var div2 = document.createElement("div2");
b.insertBefore(div2, f);

div2.classList.add('info');

var list = document.querySelector("#ul");
var li = document.querySelector("#li");

for (let i=0; i<3; i++){
    const li = document.createElement("li");
    list.appendChild(li);
}

console.log(b);
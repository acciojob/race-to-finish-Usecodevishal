window.promises = [promise1, promise2, promise3, promise4, promise5];
let outputDiv = document.getElementById("output");
let promise1 = new Promise((req, res) => setTimeput(() => 
	res(outputDiv.innerText = `resolved Prom 1`),(Math.random()+1)*5000));
let promise2 = new Promise((req, res) => setTimeput(() => 
	res(outputDiv.innerText = `resolved Prom 2`),(Math.random()+1)*5000));
let promise3 = new Promise((req, res) => setTimeput(() => 
	res(outputDiv.innerText = `resolved Prom 3`),(Math.random()+1)*5000));
let promise4 = new Promise((req, res) => setTimeput(() => 
	res(outputDiv.innerText = `resolved Prom 4`),(Math.random()+1)*5000));
let promise5 = new Promise((req, res) => setTimeput(() => 
	res(outputDiv.innerText = `resolved Prom 5`),(Math.random()+1)*5000));

Promise.race(window.promises).then((value) => console.log(value)).catch(err => alert("error>>>", err));


// Do not change the code above this
// add your promises to the array `promises`

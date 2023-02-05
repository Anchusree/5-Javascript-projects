const body = document.querySelector('body')

const btnid = document.getElementById('colorchange');

const colors = ['brown','yellow','red','green','violet','orange','grey','blue']

body.style.backgroundColor="white"

const changeColor = ()=>{
 let colorIndex = parseInt(Math.random()*colors.length);
 body.style.backgroundColor = colors[colorIndex]

}
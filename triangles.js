// triangles
let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");
ctx.fillStyle = "red";
ctx.beginPath();
ctx.moveTo(100, 100)
ctx.lineTo(150, 15)
ctx.lineTo(200, 100)
ctx.lineTo(100, 100)
ctx.fill();
ctx.fillStyle = "blue";
ctx.beginPath();
ctx.moveTo(80, 80)
ctx.lineTo(120, 12)
ctx.lineTo(180, 80)
ctx.lineTo(80, 80)
ctx.fill();
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.moveTo(90, 70)
ctx.lineTo(80, 7)
ctx.lineTo(156, 56)
ctx.lineTo(90, 70)
ctx.fill();

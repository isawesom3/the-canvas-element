// circle
let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");
ctx.fillStyle = "green";
ctx.beginPath();
ctx.arc(150, 100, 50, 0, Math.PI * 2, false);
ctx.fill();

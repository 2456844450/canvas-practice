import { inherits } from "util"

const canvas = document.getElementById('tutorial')
var ctx = canvas.getContext('2d')
canvas.width = 200
canvas.height = 200

ctx.fillStyle = 'rgb(200, 0, 0)'
ctx.fillRect(85,85,30,30)

ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
ctx.fillRect(100, 100, 30, 30);

function init() {
  window.requestAnimationFrame(draw)
}

function draw() {
  ctx.translate(100, 100)
  ctx.rotate(5*Math.PI/180)
  ctx.translate(-100,100)
  window.requestAnimationFrame(draw)
}



init()



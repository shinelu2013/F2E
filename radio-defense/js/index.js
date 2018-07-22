//環境變數
var updateFPS = 30;
var showMouse = true;
var time = 0;
var bgColor = "#001D2E";

const Vec2 = require('./utils/vec2.js');
console.log('******************')
//----------------------------

//----------------------------

var canvas;
var ctx;
var ww = 0, wh = 0;
var degToPi = Math.PI / 180;
var nowStage = "startStage";
var stageList = ["startStage","playStage"];
var stageRender = {};



//canvas設定
function initCanvas() {
    canvas = document.getElementById("mycanvas");
    ctx = canvas.getContext("2d");

    ctx.circle = function (v, r) {
        ctx.arc(v.x, v.y, r, 0, Math.PI * 2);
    }
    ctx.line = function (v1, v2) {
        ctx.moveTo(v1.x, v1.y);
        ctx.lineTo(v2.x, v2.y);
    }

    ww = canvas.width = window.innerWidth;
    wh = canvas.height = window.innerHeight;

    canvas.removeEventListener("stageChange", stageChange);
    canvas.addEventListener("stageChange", stageChange)
}

//邏輯初始化
function init() {
    stageList.forEach(page=>{
        console.log('./stages/' + page + '.js')
        let stage = require(`./stages/${page}.js`);
        stageRender[page] = stage;
        stageRender[page].initCanvas(canvas);
        console.log(`page:${page} `, stageRender[page]);
    })
}

//遊戲邏輯更新
function update() {
    time++;
}

//畫面更新
function draw() {
    //清空背景
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, ww, wh);

    //-------------------------
    // 在這裡繪製
    ctx.save();
    stageRender[nowStage].draw(ctx);
    ctx.restore();
    //     //計算滑鼠座標
    //     let delta = mousePos.sub(new Vec2(ww/2,wh/2));
    //     let mouseAngle = delta.angle;
    //     let mouseDistance = delta.length;
    
    //-------------------------
    //滑鼠
    // ctx.fillStyle = "red";
    // ctx.beginPath();
    // ctx.circle(mousePos, 3)
    // ctx.fill();

    // drawMouseCursor(ctx);

    requestAnimationFrame(draw);
}
let i = 0;
function stageChange(evt){
    i++;
    console.log(`call stageChange:${i}`);
    evt.stopPropagation();
    switch(nowStage){
        case "startStage":
            nowStage = "playStage";
            break;
    }
}

function drawGridLine(ctx){
    ctx.save();
    ctx.beginPath();
    for(x=0;x<ww;x+=50){
        ctx.moveTo(x,0);
        ctx.fillStyle = "white";
        ctx.fillText(x,x+5,10);
        ctx.lineTo(x,wh);
        ctx.strokeStyle = "rgba(255,255,255,0)";
        ctx.stroke();
    }
    for(y=0;y<wh;y+=50){
        ctx.moveTo(0,y);
        ctx.fillStyle = "white";
        ctx.fillText(y,5,y+10);
        ctx.lineTo(ww,y);
        ctx.strokeStyle = "rgba(255,255,255,0)";
        ctx.stroke();
    }
    ctx.restore();
}
function drawMouseCursor(ctx){
    ctx.save();
    ctx.beginPath();
    ctx.translate(mousePos.x, mousePos.y);
    ctx.strokeStyle = "red";
    let len = 20;
    ctx.line(new Vec2(-len, 0), new Vec2(len, 0));
    ctx.font = "20px Arial";
    ctx.fillStyle = "red";
    ctx.fillText(mousePos, 10, -10);
    ctx.rotate(Math.PI / 2);
    ctx.line(new Vec2(-len, 0), new Vec2(len, 0));
    ctx.stroke();
    ctx.restore();
}

//載入
function loaded() {
    console.log(`loaded`)
    initCanvas();
    init();
    requestAnimationFrame(draw);
    setInterval(update, 1000 / updateFPS);
}

//視窗事件與滑鼠事件
window.addEventListener("load", loaded);
window.addEventListener("resize", initCanvas);
// //mouse event
var mousePos = new Vec2(0, 0);
var mousePosDown = new Vec2(0, 0);
var mousePosUp = new Vec2(0, 0);

window.addEventListener("mousemove", mousemove);
window.addEventListener("mousedown", mousedown);
window.addEventListener("mouseup", mouseup);

function mousemove(evt) {
    mousePos.set(evt.x, evt.y);
    // console.log(mousePos);   
}
function mousedown(evt) {
    mousePos.set(evt.x, evt.y);
    mousePosDown = mousePos.clone();
}
function mouseup(evt) {
    mousePos.set(evt.x, evt.y);
    mousePosUp = mousePos.clone();
}


window.addEventListener('keydown', keyDown,true);
window.addEventListener('keyup', keyUp,true);

function keyDown(evt){
    var keyID = evt.keyCode ? evt.keyCode :evt.which;
    console.log(`KeyDown: ${keyID}`);
}
function keyUp(evt){
    var keyID = evt.keyCode ? evt.keyCode :evt.which;
    console.log(`KeyUP: ${keyID}`);
}
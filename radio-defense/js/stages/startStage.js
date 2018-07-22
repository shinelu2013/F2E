const Vec2 = require('../utils/vec2.js');
const base = require('./baseStage.js');

module.exports = {        
    initCanvas: function(canvas){
        Object.assign(this, base);
        this.initBase(canvas);
        
        images = {
            logo: new Image(),
            background: new Image()
        };
        time = 0;
        images.logo.src = "./assets/logo.png";
        images.background.src = "./assets/background.png";
        
        btnColor= "#001D2E";
        btnTextColor="white";

        this.canvas.addEventListener("mousemove",(evt)=>{
            this.objectList.forEach(obj=>{
                if(obj.onmousemove){
                    obj.onmousemove.call(this, evt);
                }
            })           
        })
        this.canvas.addEventListener("mousedown",(evt)=>{            
            this.objectList.forEach(obj=>{
                if(obj.onmousedown){
                    obj.onmousedown.call(this, evt);
                }
            })           
        })

        let border = {
            x: 120,
            y: 40,
            w: 120,
            h: 40
        }
        let startButton = {
            border:{
                x: 120,
                y: 40,
                w: 120,
                h: 40
            },
            x1:centerX-border.x-border.h,
            y1:centerY+150-border.y,
            x2:centerX + border.w + border.h,
            y2:centerY+150-border.y + border.h*2,
            isInPath: function(mousePos){
                if(mousePos.x >= this.x1 && mousePos.x <= this.x2 &&
                    mousePos.y >= this.y1 && mousePos.y <= this.y2){
                        return true;
                }else{
                    return false;
                }    
            },
            onmousedown: function(evt){
                let mousePos = new Vec2(evt.x,evt.y);
                if(startButton.isInPath(mousePos)){
                    var event = new Event('stageChange');
                    this.canvas.dispatchEvent(event);
                }   
            },
            onmousemove: function(evt){
                let mousePos = new Vec2(evt.x,evt.y);
                if(startButton.isInPath(mousePos)){
                    this.btnColor = "white";
                    this.btnTextColor = "black";
                }else{
                    this.btnColor = "#001D2E";      
                    this.btnTextColor = "white";
                } 
            }
        }
        
        this.objectList.push(startButton);
    },
    draw: function(ctx){                
        time++;   
        this.drawBackground(ctx);
        this.drawLogo(ctx);
        this.drawStartGame(ctx);

        // this.drawText(ctx);

        //draw wave
        this.drawWave(ctx,time);
        if(time%350 > 100){
            this.drawWave(ctx,time-100);
        }
        if(time%350 > 200){
            this.drawWave(ctx,time-200);
        }    
    },
    
    drawLogo: function(ctx){
        ctx.save();
        ctx.translate(centerX, centerY);
        // ctx.beginPath();
        ctx.drawImage(images.logo, -150,-200);
        ctx.fill();
        ctx.restore();
    },
    drawStartGame: function(ctx){
        ctx.save();
        ctx.translate(centerX, centerY + 150);
        //繪製start game邊框
        let border = {
            x: 120,
            y: 40,
            w: 120,
            h: 40
        }       
        ctx.moveTo(-border.x, -border.y);
        ctx.lineTo(border.w, -border.y);
        ctx.arc(border.x, 0, border.h, -90 * degToPi, 90 * degToPi);
        ctx.lineTo(-border.w, border.y);
        ctx.arc(-border.x, 0, border.h, 90 * degToPi, -90 * degToPi);
        ctx.fillStyle = this.btnColor;
        ctx.fill();

        //文字
        ctx.fillStyle = this.btnTextColor;
        ctx.font = "50px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("Start Game", 0, 0);

        ctx.strokeStyle = "white";
        ctx.stroke();
        ctx.restore();

        
    },
    drawText: function(ctx){
        ctx.save();
        ctx.translate(60,750);
        ctx.fillStyle = "white";
        ctx.font = "36px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("你身負著運送能量電池的任務", 0, 0);
        ctx.fillText("卻遭到幾何星人的埋伏", 0, 50);
        ctx.fillText("請協助從他們的手中奪回能量電池", 0, 100);
        ctx.restore();
    },
    drawBackground: function(ctx){
        ctx.save();
        ctx.beginPath();
        ctx.drawImage(images.background, 0,0,ww,wh);
        ctx.fill();
        ctx.restore();
    },
    drawWave: function(ctx,time){
        ctx.beginPath();
        let maxr = 350;
        let step = time*2%maxr;
        let r = 200 + step;
        let alpha = 1- step/maxr;
        ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
        ctx.arc(centerX,centerY , r, 0, Math.PI*2);
        ctx.stroke();
    }
};
const Vec2 = require('../utils/vec2.js');
const base = require('./baseStage.js');

module.exports = {        
    initCanvas: function(canvas){
        Object.assign(this, base);
        this.initBase(canvas);        
    },
    draw: function(ctx){                
        time++;
   
        ctx.save();
        ctx.translate(centerX,centerY);
        ctx.fillStyle = "white";
        ctx.font = "50px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("Coming Soon??", 0, 0);        
        ctx.restore();
    },   
};
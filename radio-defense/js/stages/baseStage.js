module.exports = {
    ww: 0,
    wh: 0,
    centerX:0,
    centerY:0,
    time: 0,
    canvas: undefined,
    ctx: undefined,
    images:{},
    degToPi:0,
    objectList:[],
    initBase: function(canvas){
        degToPi = Math.PI / 180;   
        this.canvas = canvas;
        ww = canvas.width;
        wh = canvas.height;
        centerX = ww/2;
        centerY = wh/2;
    }
}
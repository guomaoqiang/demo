;(function(w){
	var data = [Math.random() * 300];
    for (var i = 1; i < 50; i++) { //按照echarts
        data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
    }
    option = {
        canvas:{
            id: 'canvas'
        },
        series: {
            name: '模拟数据',
            itemStyle: {
                color: 'rgb(255, 70, 131)'
            },
            areaStyle: {
                color: 'rgb(255, 158, 68)'
            },
            data: data
        }
    };
    function LinearGradient(option) {
	    this.canvas = document.getElementById(option.canvas.id)
	    this.ctx = this.canvas.getContext('2d')
	    this.width = this.canvas.width
	    this.height = this.canvas.height
	    this.tooltip = option.tooltip
	    this.title = option.text
	    this.series = option.series //存放模拟数据
	};
	LinearGradient.prototype.draw1 = function() { //折线参考线
    //要考虑到canvas中的原点是左上角，
    //所以下面要做一些换算，
    //diff为x,y轴被数据最大值和最小值的取值范围所平分的等份。
	//核心实现
	this.series.data.forEach(function(item, index) { //找到前一个点到下一个点中间的控制点
	    var scale = 0.1 //分别对于ab控制点的一个正数，可以分别自行调整
	    var last1X = diffX * (index - 1),
	        last1Y = Math.floor(self.height - diffY * (self.series.data[index - 1] - dataMin)),
	        //前一个点坐标
	        last2X = diffX * (index - 2),
	        last2Y = Math.floor(self.height - diffY * (self.series.data[index - 2] - dataMin)),
	        //前两个点坐标
	        nowX = diffX * (index),
	        nowY = Math.floor(self.height - diffY * (self.series.data[index] - dataMin)),
	        //当期点坐标
	        nextX = diffX * (index + 1),
	        nextY = Math.floor(self.height - diffY * (self.series.data[index + 1] - dataMin)),
	        //下一个点坐标
	        cAx = last1X + (nowX - last2X) * scale,
	        cAy = last1Y + (nowY - last2Y) * scale,
	        cBx = nowX - (nextX - last1X) * scale,
	        cBy = nowY - (nextY - last1Y) * scale 
	    if(index === 0) {
	        self.ctx.lineTo(nowX, nowY)
	        return
	    } else if(index ===1) {
	        cAx = last1X + (nowX - 0) * scale
	        cAy = last1Y + (nowY - self.height) * scale 
	    } else if(index === self.series.data.length - 1) {
	        cBx = nowX - (nowX - last1X) * scale
	        cBy = nowY - (nowY - last1Y) * scale
	    } 
	        self.ctx.bezierCurveTo(cAx, cAy, cBx, cBy, nowX, nowY);
	        //绘制出上一个点到当前点的贝塞尔曲线
	    })	
	}	
	w.LinearGradient = LinearGradient;

}(window))
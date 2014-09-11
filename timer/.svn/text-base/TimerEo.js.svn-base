/**
 * @author Sky Version 1.0
 */

// 导入Timer.js
document.write('<script src="./Timer.js"></script>');

// 定义TimerEo类
if (typeof TimerEo == 'undefined') {
	function TimerEo() {
		TimerEo.prototype.timer = new Timer();
		TimerEo.prototype.isCount = null;
	}
}

TimerEo.prototype.pause = function() {
	if(TimerEo.prototype.isCount){
		clearTimeout(TimerEo.prototype.isCount);
	}
};

TimerEo.prototype.initTimer = function() {
	TimerEo.prototype.timer.hour = 0;
	TimerEo.prototype.timer.minute = 0;
	TimerEo.prototype.timer.second = 0;
};

TimerEo.prototype.countDown = function() {
	
	if (TimerEo.prototype.timer.second != 0 || TimerEo.prototype.timer.minute != 0
			|| TimerEo.prototype.timer.hour != 0) {
		countTime();
		TimerEo.prototype.timer.second = TimerEo.prototype.timer.second - 1;

		if (TimerEo.prototype.timer.second == -1) {
			TimerEo.prototype.timer.second = 59;
			TimerEo.prototype.timer.minute = TimerEo.prototype.timer.minute - 1;
		}
		if (TimerEo.prototype.timer.minute == -1) {
			TimerEo.prototype.timer.minute = 59;
			TimerEo.prototype.timer.hour = TimerEo.prototype.timer.hour - 1;
		}

		TimerEo.prototype.isCount = setTimeout(TimerEo.prototype.countDown ,1000);
	}else{
		// 播放音乐
		newContent = new Audio("./music/song.mp3");
		//newContent = new Audio("./music/song.ogg");
		newContent.play();
	}
};

TimerEo.prototype.changeTimer = function(temphour, tempminute, tempsecond) {
	if (typeof temphour != "number" || temphour < 0 || temphour > 23) {
		TimerEo.prototype.timer.hour = 0;
	} else {
		TimerEo.prototype.timer.hour = temphour;
	}

	if (typeof tempminute != "number" || tempminute < 0 || tempminute > 59) {
		TimerEo.prototype.timer.minute = 0;
	} else {
		TimerEo.prototype.timer.minute = tempminute;
	}

	if (typeof tempsecond != "number" || tempsecond < 0 || tempsecond > 59) {
		TimerEo.prototype.timer.second = 0;
	} else {
		TimerEo.prototype.timer.second = tempsecond;
	}
};

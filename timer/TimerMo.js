/**
 * @author Sky
 * Version 1.0
 */

//����Timer.js
document.write('<script src="./Timer.js"></script>');
//����TimerEo.js
document.write('<script src="./TimerEo.js"></script>');

// ����TimerMo��
if (typeof TimerMo == 'undefined') {
	function TimerMo() {
		this.timerEo = new TimerEo();
	}
}

TimerMo.prototype.initTimer = function() {
	this.timerEo.initTimer();
};

TimerMo.prototype.pause = function() {
	this.timerEo.pause();
};

TimerMo.prototype.countDown = function() {
	this.timerEo.countDown();
};

TimerMo.prototype.editTimer = function(temphour, tempminute, tempsecond) {
	this.timerEo.changeTimer(temphour, tempminute, tempsecond);
};

TimerMo.prototype.resetTimer = function() {
	this.timerEo.changeTimer(0, 0, 0);
};

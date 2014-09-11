/**
 * @author Sky
 * Version 1.0
 */

//导入TimerEo.js
document.write('<script src="./TimerEo.js"></script>');
//导入TimerMo.js
document.write('<script src="./TimerMo.js"></script>');
//导入Timer.js
document.write('<script src="./Timer.js"></script>');

//定义TimerDo类
if (typeof TimerDo == 'undefined') {
	function TimerDo() {
		this.timerMo = new TimerMo();
	}
}

TimerDo.prototype.execute = function(command, temphour, tempminute, tempsecond) {
	if (command == "initTimer") {
		this.timerMo.initTimer();
	} else if (command == "pause") {
		this.timerMo.pause();
	} else if (command == "countDown") {
		this.timerMo.countDown();
	} else if (command == "editTimer") {
		this.timerMo.editTimer(temphour, tempminute, tempsecond);
	} else if (command == "resetTimer") {
		this.timerMo.resetTimer();
	}
};
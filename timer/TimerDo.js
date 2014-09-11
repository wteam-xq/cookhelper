/**
 * @author Sky
 * Version 1.0
 */

//����TimerEo.js
document.write('<script src="./TimerEo.js"></script>');
//����TimerMo.js
document.write('<script src="./TimerMo.js"></script>');
//����Timer.js
document.write('<script src="./Timer.js"></script>');

//����TimerDo��
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
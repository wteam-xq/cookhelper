// 定义MenuMo类
if (typeof MenuMo == 'undefined') {
	function MenuMo() {
		this.menuEo = new MenuEo();
	}
}

MenuMo.prototype.initMenu = function() {
	var fun = function(result) {
		$('#logo').fadeOut('slow', function() {
			$('#logo').css("display", "none");
			$("#time").css("display","inline");
			$('#body').css("display", "inline");
			inittopCanvas(result);
			initbottomLeftCanvas(result);
			initbottomMiddleCanvas(result);
			initbottomRightCanvas();
		});
	}
	this.menuEo.initMenu(fun);
};

MenuMo.prototype.getDish = function(index) {
	var fun = function(result) {
		clearbottomRightCanvas();
		if (topDivSign == true) {
			if (bottomLeftSign == false && bottomMiddleSign == false) {
				drowbottomRightDivStretch(false, result);
			} else {
				drowbottomRightDivSystole(false, result);
			}
		} else if (topDivSign == false) {
			if (bottomLeftSign == false && bottomMiddleSign == false) {
				drowbottomRightDivStretch(true, result);
			} else {
				drowbottomRightDivSystole(true, result);
			}
		}
	};
	this.menuEo.getDish(fun, index);
};

MenuMo.prototype.sortMenu = function(type) {
	var fun = function(result) {
		clearbottomMiddleCanvas();
		if (topDivSign == true) {
			if (bottomMiddleSign == true) {
				drowbottomMiddleDivStretch(false, result);
			} else {
				drowbottomMiddleDivSystole(false, result);
			}
		} else {
			if (bottomMiddleSign == true) {
				drowbottomMiddleDivStretch(true, result);
			} else {
				drowbottomMiddleDivSystole(true, result);
			}
		}

		clearbottomLeftCanvas();
		if (topDivSign == true) {
			drowbottomLeftDivStretch(false, result);
		} else if (topDivSign == false) {
			drowbottomLeftDivStretch(true, result);
		}
	};
	this.menuEo.sortMenu(fun, type);
};

MenuMo.prototype.randomDish = function() {
	var fun = function(result) {
		clearbottomRightCanvas();
		if (topDivSign == true) {
			if (bottomLeftSign == false && bottomMiddleSign == false) {
				drowbottomRightDivStretch(false, result);
			} else {
				drowbottomRightDivSystole(false, result);
			}
		} else {
			if (bottomLeftSign == false && bottomMiddleSign == false) {
				drowbottomRightDivStretch(true, result);
			} else {
				drowbottomRightDivSystole(true, result);
			}
		}
	};
	this.menuEo.randomDish(fun);
};

MenuMo.prototype.pull = function(type) {
	try {
		
		if (type != "middle" && type != "left" && type != "top") {
			throw "type_err";
		}
		
		var result = null;
		
		result = this.menuEo.pull();

		if (type == "middle") {
			movebottomMiddleDiv(result);
		} else if (type == "left") {
			movebottomLeftDiv(result);
		} else if (type == "top") {
			movetopDiv(result);
		}
	} catch (e) {
		if (e == "type_err") {
			alert("传入的类型错误");
		}
	}
}

MenuMo.prototype.getContentChild = function(title) {
	var result = this.menuEo.getContentChild(title);
	clearbottomMiddleCanvas();
	if (topDivSign == true) {
		if (bottomMiddleSign == false) {
			drowbottomMiddleDivSystole(false, result);
		} else {
			drowbottomMiddleDivStretch(false, result);
		}
	} else {
		if (bottomMiddleSign == false) {
			drowbottomMiddleDivSystole(true, result);
		} else {
			drowbottomMiddleDivStretch(true, result);
		}
	}
}
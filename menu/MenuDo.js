// ∂®“ÂMenuDo¿‡
if (typeof MenuDo == 'undefined') {
	function MenuDo() {
		this.menuMo = new MenuMo();
	}
}

MenuDo.prototype.execute = function(command, otherParame) {
	if (command == "initMenu") {
		this.menuMo.initMenu();
	} else if (command == "getDish") {
		this.menuMo.getDish(otherParame);
	} else if (command == "sort") {
		this.menuMo.sortMenu(otherParame);
	} else if (command == "randomDish") {
		this.menuMo.randomDish();
	} else if (command == "pull") {
		this.menuMo.pull(otherParame);
	} else if (command == "getContentChild") {
		this.menuMo.getContentChild(otherParame);
	}

};
// 定义MenuEo类
if (typeof MenuEo == 'undefined') {
	function MenuEo() {
		this.menuDaoProxy = new MenuDaoProxy();
		MenuEo.prototype.content = null;
		MenuEo.prototype.contentIndex = null;
		MenuEo.prototype.contentChildTitle = null;
		MenuEo.prototype.randomArray = new Array(10); //存放随机产生的菜式的数组
	}
}

MenuEo.prototype.initMenu = function(callBackFun) {
	var fun = function(result) {
		MenuEo.prototype.content = result;
		callBackFun(result);
	};
	this.menuDaoProxy.initDB(fun);
};

MenuEo.prototype.getDish = function(callBackFun, index) {
	try {
		
		var tempIndex = "";
		if (MenuEo.prototype.contentChildTitle) {
			var tempContentChildTitle = MenuEo.prototype.contentChildTitle;

			var i = 0;
			for (i = 0; i < MenuEo.prototype.content.length - 1; i++) {
				if (MenuEo.prototype.content[i] == tempContentChildTitle) {
					break;
				}
			}
			
			if (MenuEo.prototype.content[i + index].dishid == null) {
				throw "index_err";
			}
			tempIndex = i + index;
		} else {
			if (index < 0 || index > MenuEo.prototype.content.length - 1) {
				throw "index_err";
			} else if (MenuEo.prototype.content[index].dishid == null) {
				throw "indexTitle_err";
			}
			tempIndex = index;
		}

		MenuEo.prototype.contentIndex = tempIndex;

		var tempDish = MenuEo.prototype.content[tempIndex];
		var backDish = new Dish();
		backDish.dishid = tempDish.dishid;
		backDish.cuisinename = tempDish.cuisinename;
		backDish.cookingmethodname = tempDish.cookingmethodname;
		backDish.tastename = tempDish.tastename;
		backDish.dishname = tempDish.dishname;
		backDish.ingredientslist = tempDish.ingredientslist;
		backDish.condimentlist = tempDish.condimentlist;
		backDish.directions = tempDish.directions;
		backDish.tips = tempDish.tips;
		backDish.mainingredientsArray = tempDish.mainingredientsArray;
		backDish.seasonArray = tempDish.seasonArray;
		backDish.imageArray = tempDish.imageArray;
		backDish.ingredientslist = backDish.ingredientslist.split("、");
		backDish.condimentlist = backDish.condimentlist.split("、");
		backDish.directions = backDish.directions.split("；");
		backDish.tips = backDish.tips.split("；");
		callBackFun(backDish);

	} catch (e) {
		if (e == "index_err") {
			alert("传入的目录数组下标错误");
		} else if (e == "indexTitle_err") {
			alert("传入的目录数组下标为标题项");
		}
		alert(e.message);
	}
};

MenuEo.prototype.sortMenu = function(callBackFun, type) {
	var fun = function(result) {
		if (MenuEo.prototype.contentIndex) {
			var tempDish = MenuEo.prototype.content[MenuEo.prototype.contentIndex];
			var i = 0;
			for (i = 0; i < result.length; i++) {
				if (tempDish.dishid == result[i].dishid) {
					break;
				}
			}
			MenuEo.prototype.contentIndex = i;
		}
		MenuEo.prototype.content = result;
		MenuEo.prototype.contentChildTitle = null;
		callBackFun(result);
	};
	this.menuDaoProxy.sort(fun, type);
};

MenuEo.prototype.randomDish = function(callBackFun) {
	var arraySub = null;
	do {
		//产生随机数,范围为0-(MenuEo.prototype.content.length-1)
		arraySub = Math.floor(Math.random() * MenuEo.prototype.content.length);
	} while (!MenuEo.prototype.content[arraySub].dishid);
	MenuEo.prototype.contentIndex = arraySub;

	var tempDish = MenuEo.prototype.content[arraySub];
	var backDish = new Dish();
	backDish.dishid = tempDish.dishid;
	backDish.cuisinename = tempDish.cuisinename;
	backDish.cookingmethodname = tempDish.cookingmethodname;
	backDish.tastename = tempDish.tastename;
	backDish.dishname = tempDish.dishname;
	backDish.ingredientslist = tempDish.ingredientslist;
	backDish.condimentlist = tempDish.condimentlist;
	backDish.directions = tempDish.directions;
	backDish.tips = tempDish.tips;
	backDish.mainingredientsArray = tempDish.mainingredientsArray;
	backDish.seasonArray = tempDish.seasonArray;
	backDish.imageArray = tempDish.imageArray;
	backDish.ingredientslist = backDish.ingredientslist.split("、");
	backDish.condimentlist = backDish.condimentlist.split("、");
	backDish.directions = backDish.directions.split("；");
	backDish.tips = backDish.tips.split("；");

	if (MenuEo.prototype.randomArray.length < 10) {
		MenuEo.prototype.randomArray.push(backDish);
	} else {
		MenuEo.prototype.randomArray.shift();
		MenuEo.prototype.randomArray.push(backDish);
	}

	callBackFun(backDish);
};

MenuEo.prototype.pull = function() {
	var result = new Object();
	result.content = MenuEo.prototype.content;

	if (MenuEo.prototype.contentIndex) {
		var tempDish = MenuEo.prototype.content[MenuEo.prototype.contentIndex];
		var backDish = new Dish();
		backDish.dishid = tempDish.dishid;
		backDish.cuisinename = tempDish.cuisinename;
		backDish.cookingmethodname = tempDish.cookingmethodname;
		backDish.tastename = tempDish.tastename;
		backDish.dishname = tempDish.dishname;
		backDish.ingredientslist = tempDish.ingredientslist;
		backDish.condimentlist = tempDish.condimentlist;
		backDish.directions = tempDish.directions;
		backDish.tips = tempDish.tips;
		backDish.mainingredientsArray = tempDish.mainingredientsArray;
		backDish.seasonArray = tempDish.seasonArray;
		backDish.imageArray = tempDish.imageArray;
		backDish.ingredientslist = backDish.ingredientslist.split("、");
		backDish.condimentlist = backDish.condimentlist.split("、");
		backDish.directions = backDish.directions.split("；");
		backDish.tips = backDish.tips.split("；");
		result.dish = backDish;
	} else {
		result.dish = null;
	}
	
	return result;
};

MenuEo.prototype.getContentChild = function(title) {
	var content = MenuEo.prototype.content;
	var result = new Array();
	result.push(title);
	var isTarget = false;

	for ( var i = 0; i < content.length; i++) {
		if (isTarget == true && content[i].dishid == null) {
			isTarget = false;
			break;
		} else if (isTarget == true && content[i].dishid != null) {
			result.push(content[i]);
		}

		if (content[i].dishid == null && content[i] == title) {
			isTarget = true;
		}
	}
	MenuEo.prototype.contentChildTitle = title;

	return result;
};
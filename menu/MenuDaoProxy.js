// 定义MenuDaoProxy类
if (typeof MenuDaoProxy == 'undefined') {
	function MenuDaoProxy() {
		this.menuDao = new MenuDao();
	}
}

var menuDaoProxy_initDB_CallBackFun = null;
MenuDaoProxy.prototype.initDB = function(callBackFun) {
	menuDaoProxy_initDB_CallBackFun = callBackFun;
	var initfun = function() {
		var tempmenuDaoProxy = new MenuDaoProxy();
		var tempfun = function(result) {
			menuDaoProxy_initDB_CallBackFun(result);
		};
		tempmenuDaoProxy.sort(tempfun, "alpha");
	};
	this.menuDao.initDB(initfun);
};

MenuDaoProxy.prototype.sort = function(callBackFun, type) {
	try {
		if (type != "mainingredients" && type != "season" && type != "cuisine"
				&& type != "cookingmethod" && type != "taste"
				&& type != "alpha") {
			throw "type_err";
		}

		var dealSort = function(result) {
			var dishArray = new Array();
			var tempArray = new Array();
			if (type == "alpha") {
				for ( var i = 0; i < result.length; i++) {
					var j = 0;
					for (j = 0; j < tempArray.length; j++) {
						if (pinyin(result[i].dishname) < pinyin(tempArray[j].dishname)) {
							break;
						}
					}
					if (j == 0) {
						tempArray.unshift(result[i]);
					} else if (j == tempArray.length) {
						tempArray.push(result[i]);
					} else {
						var tempstartArray = tempArray.slice(0, j);
						tempstartArray.push(result[i]);
						var tempendArray = tempArray.slice(j);
						for ( var k = 0; k < tempendArray.length; k++) {
							tempstartArray.push(tempendArray[k]);
						}
						tempArray = tempstartArray;
					}
				}
				var firstLetter = pinyin(tempArray[0].dishname).slice(0, 1)
						.toUpperCase();
				dishArray.push(firstLetter);
				dishArray.push(tempArray[0]);
				for ( var l = 1; l < tempArray.length; l++) {
					if (firstLetter != pinyin(tempArray[l].dishname)
							.slice(0, 1).toUpperCase()) {
						firstLetter = pinyin(tempArray[l].dishname).slice(0, 1)
								.toUpperCase();
						dishArray.push(firstLetter);
					}
					dishArray.push(tempArray[l]);
				}
			} else if (type == "mainingredients" || type == "season") {
				var target = type + "Array";
				for ( var i = 0; i < result.length; i++) {
					for ( var j = 0; j < result[i][target].length; j++) {
						var k = 0;
						for (k = 0; k < tempArray.length; k++) {
							if (result[i][target][j] == tempArray[k]) {
								break;
							}
						}
						if (k == tempArray.length) {
							tempArray.push(result[i][target][j]);
						}
					}
				}
				for ( var i = 0; i < tempArray.length; i++) {
					dishArray.push(tempArray[i]);
					for ( var j = 0; j < result.length; j++) {
						for ( var k = 0; k < result[j][target].length; k++) {
							if (tempArray[i] == result[j][target][k]) {
								dishArray.push(result[j]);
								break;
							}
						}
					}
				}
			} else {
				var target = type + "name";
				for ( var i = 0; i < result.length; i++) {
					var j = 0;
					for (j = 0; j < tempArray.length; j++) {
						if (result[i][target] == tempArray[j]) {
							break;
						}
					}
					if (j == tempArray.length) {
						tempArray.push(result[i][target]);
					}
				}
				for ( var i = 0; i < tempArray.length; i++) {
					dishArray.push(tempArray[i]);
					for ( var j = 0; j < result.length; j++) {
						if (tempArray[i] == result[j][target]) {
							dishArray.push(result[j]);
						}
					}
				}
			}
			return dishArray;
		};

		var fun = function(result) {
			callBackFun(dealSort(result));
		};
		this.menuDao.search(fun);
	} catch (e) {
		if (e == "type_err") {
			alert("所输入的排序形式错误");
		}
	}
};
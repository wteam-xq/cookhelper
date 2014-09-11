//定义DBHelper类
if (typeof DBHelper == 'undefined') {
	function DBHelper() {
		this.connection = null;
		while (!this.connection) {
			this.connection = window.openDatabase("Menu", "1.0",
					"dataBase used for user Menu", 2 * 1024 * 1024);
		}
	}
}

// 添加方法executeQuery(String sql, function callBackFun)
// sql为要执行的sql语句
// callBackFun为查询完之后要执行的语句，如不是查询语句则可以忽略
DBHelper.prototype.executeSQL = function(sql, successCallBackFun,
		failureCallBackFun) {
	this.connection.transaction(function(tx) {
		tx.executeSql(sql, [], function(text, result) {
			var rutArray = new Array();
			for ( var i = 0; i < result.rows.length; i++) {
				rutArray.push(result.rows.item(i).dishid);
				rutArray.push(result.rows.item(i).cuisinename);
				rutArray.push(result.rows.item(i).cookingmethodname);
				rutArray.push(result.rows.item(i).tastename);
				rutArray.push(result.rows.item(i).dishname);
				rutArray.push(result.rows.item(i).ingredientslist);
				rutArray.push(result.rows.item(i).condimentlist);
				rutArray.push(result.rows.item(i).directions);
				rutArray.push(result.rows.item(i).tips);
				rutArray.push(result.rows.item(i).mainingredientsname);
				rutArray.push(result.rows.item(i).seasonname);
				rutArray.push(result.rows.item(i).address);
			}
			;
			if (successCallBackFun) {
				successCallBackFun(rutArray);
			}
		}, function(text, result) {
			if (failureCallBackFun) {
				failureCallBackFun(result);
			}
		});
	});
};
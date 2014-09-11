//����DBHelper��
if (typeof DBHelper == 'undefined') {
	function DBHelper() {
		this.connection = null;
		while (!this.connection) {
			this.connection = window.openDatabase("Menu", "1.0",
					"dataBase used for user Menu", 2 * 1024 * 1024);
		}
	}
}

// ��ӷ���executeQuery(String sql, function callBackFun)
// sqlΪҪִ�е�sql���
// callBackFunΪ��ѯ��֮��Ҫִ�е���䣬�粻�ǲ�ѯ�������Ժ���
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
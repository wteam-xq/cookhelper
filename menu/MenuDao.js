// ����MenuDao��
if (typeof MenuDao == 'undefined') {
	function MenuDao() {
		this.dbHelper = new DBHelper();
	}
}

MenuDao.prototype.initDB = function(callBackFun) {
	var finishFun = function() {
		callBackFun();
	};
	// ����mainingredients��
	var create_mainingredients_sql = "CREATE TABLE IF NOT EXISTS MAININGREDIENTS (mainingredientsid unique, dishid, mainingredientsname)";
	this.dbHelper.executeSQL(create_mainingredients_sql);
	// ����cuisine��
	var create_cuisine_sql = "CREATE TABLE IF NOT EXISTS CUISINE (cuisineid unique, cuisinename)";
	this.dbHelper.executeSQL(create_cuisine_sql);
	// ����cookingmethod��
	var create_cookingmethod_sql = "CREATE TABLE IF NOT EXISTS COOKINGMETHOD (cookingmethodid unique, cookingmethodname)";
	this.dbHelper.executeSQL(create_cookingmethod_sql);
	// ����taste��
	var create_taste_sql = "CREATE TABLE IF NOT EXISTS TASTE (tasteid unique, tastename)";
	this.dbHelper.executeSQL(create_taste_sql);
	// ����season��
	var create_season_sql = "CREATE TABLE IF NOT EXISTS SEASON (seasonid unique, dishid, seasonname)";
	this.dbHelper.executeSQL(create_season_sql);
	// ����image��
	var create_image_sql = "CREATE TABLE IF NOT EXISTS IMAGE (imageid unique, dishid, address)";
	this.dbHelper.executeSQL(create_image_sql);
	// ����dish��
	var create_dish_sql = "CREATE TABLE IF NOT EXISTS DISH (dishid unique, cuisineid, cookingmethodid, tasteid, dishname, ingredientslist, condimentlist, directions, tips)";
	this.dbHelper.executeSQL(create_dish_sql);
	// ����mainingredients���ʼ������
	this.dbHelper
			.executeSQL("INSERT INTO MAININGREDIENTS (mainingredientsid, dishid, mainingredientsname) VALUES (1, 1, '�ڹǼ�')");
	this.dbHelper
			.executeSQL("INSERT INTO MAININGREDIENTS (mainingredientsid, dishid, mainingredientsname) VALUES (2, 2, '����')");
	this.dbHelper
			.executeSQL("INSERT INTO MAININGREDIENTS (mainingredientsid, dishid, mainingredientsname) VALUES (3, 3, '�ڲ�')");
	this.dbHelper
			.executeSQL("INSERT INTO MAININGREDIENTS (mainingredientsid, dishid, mainingredientsname) VALUES (4, 3, '����')");
	this.dbHelper
			.executeSQL("INSERT INTO MAININGREDIENTS (mainingredientsid, dishid, mainingredientsname) VALUES (5, 4, '����')");
	this.dbHelper
			.executeSQL("INSERT INTO MAININGREDIENTS (mainingredientsid, dishid, mainingredientsname) VALUES (6, 4, '������')");
	this.dbHelper
			.executeSQL("INSERT INTO MAININGREDIENTS (mainingredientsid, dishid, mainingredientsname) VALUES (7, 5, '����')");
	this.dbHelper
			.executeSQL("INSERT INTO MAININGREDIENTS (mainingredientsid, dishid, mainingredientsname) VALUES (8, 5, '�����')");
	this.dbHelper
			.executeSQL("INSERT INTO MAININGREDIENTS (mainingredientsid, dishid, mainingredientsname) VALUES (9, 6, '�����')");
	this.dbHelper
			.executeSQL("INSERT INTO MAININGREDIENTS (mainingredientsid, dishid, mainingredientsname) VALUES (10, 6, '�廨��')");
	this.dbHelper
			.executeSQL("INSERT INTO MAININGREDIENTS (mainingredientsid, dishid, mainingredientsname) VALUES (11, 6, '����')");
	this.dbHelper
			.executeSQL("INSERT INTO MAININGREDIENTS (mainingredientsid, dishid, mainingredientsname) VALUES (12, 7, '�����')");
	this.dbHelper
			.executeSQL("INSERT INTO MAININGREDIENTS (mainingredientsid, dishid, mainingredientsname) VALUES (13, 7, 'ź')");
	this.dbHelper
			.executeSQL("INSERT INTO MAININGREDIENTS (mainingredientsid, dishid, mainingredientsname) VALUES (14, 8, 'ź')");
	this.dbHelper
			.executeSQL("INSERT INTO MAININGREDIENTS (mainingredientsid, dishid, mainingredientsname) VALUES (15, 8, '������')");
	this.dbHelper
			.executeSQL("INSERT INTO MAININGREDIENTS (mainingredientsid, dishid, mainingredientsname) VALUES (16, 9, 'ź')");
	// ����cuisine���ʼ������
	this.dbHelper
			.executeSQL("INSERT INTO CUISINE (cuisineid, cuisinename) VALUES (1, '������ϵ')");
	this.dbHelper
			.executeSQL("INSERT INTO CUISINE (cuisineid, cuisinename) VALUES (2, '���')");
	this.dbHelper
			.executeSQL("INSERT INTO CUISINE (cuisineid, cuisinename) VALUES (3, '���')");
	this.dbHelper
			.executeSQL("INSERT INTO CUISINE (cuisineid, cuisinename) VALUES (4, '�人��')");
	this.dbHelper
			.executeSQL("INSERT INTO CUISINE (cuisineid, cuisinename) VALUES (5, '����')");
	// ����cookingmethod���ʼ������
	this.dbHelper
			.executeSQL("INSERT INTO COOKINGMETHOD (cookingmethodid, cookingmethodname) VALUES (1, '��')");
	this.dbHelper
			.executeSQL("INSERT INTO COOKINGMETHOD (cookingmethodid, cookingmethodname) VALUES (2, '��')");
	this.dbHelper
			.executeSQL("INSERT INTO COOKINGMETHOD (cookingmethodid, cookingmethodname) VALUES (3, '��')");
	this.dbHelper
			.executeSQL("INSERT INTO COOKINGMETHOD (cookingmethodid, cookingmethodname) VALUES (4, '��')");
	this.dbHelper
			.executeSQL("INSERT INTO COOKINGMETHOD (cookingmethodid, cookingmethodname) VALUES (5, 'ը')");
	// ����taste���ʼ������
	this.dbHelper
			.executeSQL("INSERT INTO TASTE (tasteid, tastename) VALUES (1, '����')");
	this.dbHelper
			.executeSQL("INSERT INTO TASTE (tasteid, tastename) VALUES (2, '����')");
	this.dbHelper
			.executeSQL("INSERT INTO TASTE (tasteid, tastename) VALUES (3, '����')");
	// ����season���ʼ������
	this.dbHelper
			.executeSQL("INSERT INTO SEASON (seasonid, dishid, seasonname) VALUES (1, 2, '��')");
	this.dbHelper
			.executeSQL("INSERT INTO SEASON (seasonid, dishid, seasonname) VALUES (2, 1, '��')");
	this.dbHelper
			.executeSQL("INSERT INTO SEASON (seasonid, dishid, seasonname) VALUES (3, 1, '��')");
	this.dbHelper
			.executeSQL("INSERT INTO SEASON (seasonid, dishid, seasonname) VALUES (4, 3, '��')");
	this.dbHelper
			.executeSQL("INSERT INTO SEASON (seasonid, dishid, seasonname) VALUES (5, 4, '��')");
	this.dbHelper
			.executeSQL("INSERT INTO SEASON (seasonid, dishid, seasonname) VALUES (6, 5, '�ļ�')");
	this.dbHelper
			.executeSQL("INSERT INTO SEASON (seasonid, dishid, seasonname) VALUES (7, 6, '��')");
	this.dbHelper
			.executeSQL("INSERT INTO SEASON (seasonid, dishid, seasonname) VALUES (8, 6, '��')");
	this.dbHelper
			.executeSQL("INSERT INTO SEASON (seasonid, dishid, seasonname) VALUES (9, 7, '��')");
	this.dbHelper
			.executeSQL("INSERT INTO SEASON (seasonid, dishid, seasonname) VALUES (10, 8, '�ļ�')");
	this.dbHelper
			.executeSQL("INSERT INTO SEASON (seasonid, dishid, seasonname) VALUES (11, 9, '��')");
	this.dbHelper
			.executeSQL("INSERT INTO SEASON (seasonid, dishid, seasonname) VALUES (12, 9, '��')");
	// ����image���ʼ������
	this.dbHelper
			.executeSQL("INSERT INTO IMAGE (imageid, dishid, address) VALUES (1, 1, '1.jpg')");
	this.dbHelper
			.executeSQL("INSERT INTO IMAGE (imageid, dishid, address) VALUES (2, 2, '2.jpg')");
	this.dbHelper
			.executeSQL("INSERT INTO IMAGE (imageid, dishid, address) VALUES (3, 3, '3.jpg')");
	this.dbHelper
			.executeSQL("INSERT INTO IMAGE (imageid, dishid, address) VALUES (4, 4, '4.jpg')");
	this.dbHelper
			.executeSQL("INSERT INTO IMAGE (imageid, dishid, address) VALUES (5, 5, '5.jpg')");
	this.dbHelper
			.executeSQL("INSERT INTO IMAGE (imageid, dishid, address) VALUES (6, 6, '6.jpg')");
	this.dbHelper
			.executeSQL("INSERT INTO IMAGE (imageid, dishid, address) VALUES (7, 7, '7.jpg')");
	this.dbHelper
			.executeSQL("INSERT INTO IMAGE (imageid, dishid, address) VALUES (8, 8, '8.jpg')");
	this.dbHelper
			.executeSQL("INSERT INTO IMAGE (imageid, dishid, address) VALUES (9, 9, '9.jpg')");
	// ����dish���ʼ������
	// ���������ڼ���
	var import_ingredientslist = "�ڹǼ�500�ˡ����㹽2�������ɹ�50�ˡ����40��";
	var import_condimentlist = "ʳ������������������������";
	var import_directions = "1�������ס����������ˮ�׿����жΣ�2���㹽ϴ������Ƭ��3���ڼ�ϴ����ն�飬��ˮ�¹�����ˮ��4���ڼ�����ɰ���У�����������ˮ���ٷ������ס���⡢�㹽��5��������У���Ƭ������տ���תС����2Сʱ���ң����ε�ζ��������";
	var import_tips = "�ڼ���ˮʱ���뼸����������ȥ���ڼ�����ζ";
	this.dbHelper
			.executeSQL("INSERT INTO DISH (dishid, cuisineid, cookingmethodid, tasteid, dishname, ingredientslist, condimentlist, directions, tips) VALUES (1, 1, 1, 1, '�����ڼ���', '"
					+ import_ingredientslist
					+ "', '"
					+ import_condimentlist
					+ "', '" + import_directions + "', '" + import_tips + "')");
	// �������˴���
	import_ingredientslist = "����3��";
	import_condimentlist = "ɫ����������ʳ����������2�ˡ��ϳ������ʱ�¶����������1����";
	import_directions = "1������ϴ���õ��ı����������жΣ�2��������Щ�����Ⱥ󣬷��봺���𷭳��������߰˷�������һ����ϳ飬һ�����ǣ�3���ٵ��������ʱ�¶���ʣ������̵��������ټ������ε�ζ����������������켴��";
	import_tips = "";
	this.dbHelper
			.executeSQL("INSERT INTO DISH (dishid, cuisineid, cookingmethodid, tasteid, dishname, ingredientslist, condimentlist, directions, tips) VALUES (2, 2, 2, 2, '���˴���', '"
					+ import_ingredientslist
					+ "', '"
					+ import_condimentlist
					+ "', '" + import_directions + "', '" + import_tips + "')");
	// �������˶���
	import_ingredientslist = "�ڲ���������������";
	import_condimentlist = "ɫ����������ʳ����������������";
	import_directions = "1������ȥ����Ƭ��2��������ȥ������ϴ��������ˮ�֣�3��������ˮ������һ��������ɣ�4���������ͣ��������˳���5�����붬�񣬿��ٷ���һ�����6�����������Σ�7������һ����ǣ����ȼ���";
	import_tips = "1��������Ҫ��ˮ�����̹���ʹ�ã���ȥ��ɬζ��2��������ǣ�������Ҫ�Եó���ζ��������һ��㼴�ɣ����Լ����ŵ�����ζ��";
	this.dbHelper
			.executeSQL("INSERT INTO DISH (dishid, cuisineid, cookingmethodid, tasteid, dishname, ingredientslist, condimentlist, directions, tips) VALUES (3, 1, 3, 2, '���˶���', '"
					+ import_ingredientslist
					+ "', '"
					+ import_condimentlist
					+ "', '" + import_directions + "', '" + import_tips + "')");
	// ���붬�񶹸���
	import_ingredientslist = "������180�ˡ�����50�ˡ�Ϻ��10�ˡ��Ͳ�6�á�����50�ˡ�ľ����ˮ����28��";
	import_condimentlist = "ʳ�ΰ�С�ס��Ͼ�1��ס�ϸ���1�á�ˮ����";
	import_directions = "1��ԭ��ϴ����Ϻ������ˮ�ݷ��������г�Լ1���׺�4���׼����Ĵ�Ƭ������ȥƤȥ�ϸ����б�Ƭ�������д�Ƭ���ݷ��õ�ľ��ȥ�٣�˺С�䡣����гɴл���������Ҫ���϶�����Ҳ���Ǳ��������ʵرȽ��ͣ��������飩��2�������տ�ˮ���������Σ��Ŷ���Ƭ��һ���̳���ȥɬζ��3�������������������������ˮ����������ȡ�Ϻ�ף�����տ��������Ͼƣ���С������30���ӣ��Ȱ����Ⱥ�Ϻ�׿��Խ�ʳ�ĵ���ζɢ��������4�����붬��Ƭ��ľ����������10���ӣ������Ͳ����죬�����κʹл�����";
	import_tips = "";
	this.dbHelper
			.executeSQL("INSERT INTO DISH (dishid, cuisineid, cookingmethodid, tasteid, dishname, ingredientslist, condimentlist, directions, tips) VALUES (4, 1, 4, 1, '���񶹸���', '"
					+ import_ingredientslist
					+ "', '"
					+ import_condimentlist
					+ "', '" + import_directions + "', '" + import_tips + "')");
	// �������������
	import_ingredientslist = "����1�á������500�˽𻪻���300��";
	import_condimentlist = "��1С�顢С��5�ˡ��׺������ס��ƾ�1���ס�ˮ����";
	import_directions = "1���𻪻����к�Ƭ�����б�Ƭ�������ȥ��Ƥ��Ƭ��2���Ź�ϴ�����ȹ���ˮ��ȥѪˮ���ٳ�ϴ������ˮ�֣�����Ҳ���·�ˮ���ɣ�3����������Źǣ�����Ƭ����Ƭһ�����緹��������������ˮ��ˮû������ʳ��1�ƿ����緹��2Сʱ��������4��Լ50���Ӻ�Ʋȥ���ϸ�ĭ��������Ƭ�ʹ�װ��5������������Ҫ�Һ�ʱ����ƾƣ��׺����ۺ����С�μ��ɡ�����ʱ�䣬�Ӹ��Ե緹�����ܶ�����ֻ����Ҫ�ҳ���ɫ";
	import_tips = "";
	this.dbHelper
			.executeSQL("INSERT INTO DISH (dishid, cuisineid, cookingmethodid, tasteid, dishname, ingredientslist, condimentlist, directions, tips) VALUES (5, 2, 1, 1, '����������', '"
					+ import_ingredientslist
					+ "', '"
					+ import_condimentlist
					+ "', '" + import_directions + "', '" + import_tips + "')");
	// ����������
	import_ingredientslist = "�����500�ˡ��廨�⣨�̣�250�ˡ�����250��";
	import_condimentlist = "ʳ��������������������";
	import_directions = "1������ϴ�ɾ����п���ɰ����������ˮ�н����Ͼƣ��տ���Ʋȥ��ĭ��2�����ϸ��ӣ�תС����2��Сʱ���ɼܸ����ӷ��磬�ڼ��۲죬�����ո��ˣ���3����������кã���������ˮ��2��Сʱ���������ס10���Ӽ���";
	import_tips = "1�����ⲻҪ��̫���ˣ���Ȼ����̵ģ��ټ�ˮ�Ļ��Ͳ��ó��ˣ����������յ��㣬���˿����ټ��Ρ����ⲿ�ֿ��Է����ӡ��廨����ӹǵȴ��棬���ⲿ�ֿ��ԷŻ��������2������ʱ��ˮһ��Ҫһ�μ��㣬�ɼӵ�ɰ�������ˮλ�ߵģ�3����Ƥ����ͬ���Ӱ��ζ��";
	this.dbHelper
			.executeSQL("INSERT INTO DISH (dishid, cuisineid, cookingmethodid, tasteid, dishname, ingredientslist, condimentlist, directions, tips) VALUES (6, 3, 1, 1, '������', '"
					+ import_ingredientslist
					+ "', '"
					+ import_condimentlist
					+ "', '" + import_directions + "', '" + import_tips + "')");
	// �����Ź���ź��
	import_ingredientslist = "�����700�ˡ�ź2��";
	import_condimentlist = "ʳ����������5�ˡ���1��";
	import_directions = "1������ˢ�ɾ���ȥƤ����Ƭ��Ƥ��Ҫ����������ˮ�á�������Ƥ���Ź�һ��������ˮ���У��󿪺���������ķ��ӣ����Ź��������ɣ�ˮ�ͽ�Ƥ�͵��������ˣ�2�����̹�ˮ���ŹǺ�����Ƭ�Ž�ɰ�����У������㹻������ˮ��ˮ��Ҫû���Źǻ��Ը�1cm���ҡ���Ϊ�����Ĺ��̻���ʧ��һС����ˮ�֣�����ˮҪһ�μ��㣻3���տ���Ӹ�תС����1Сʱ���ң�4����źȥƤ���й����飬���������Σ����ΰ��ȣ���10�������ң�5������ź���������У�����С����1Сʱ��6������ź��֮ʱ���������Σ�ת�л������10�������ң����ϴл�����";
	import_tips = "ϲ���Է�ź�Ŀ�����ź��ϲ����һ��ڸеľ���һ����";
	this.dbHelper
			.executeSQL("INSERT INTO DISH (dishid, cuisineid, cookingmethodid, tasteid, dishname, ingredientslist, condimentlist, directions, tips) VALUES (7, 4, 1, 1, '�Ź���ź��', '"
					+ import_ingredientslist
					+ "', '"
					+ import_condimentlist
					+ "', '" + import_directions + "', '" + import_tips + "')");
	// ����ըź��
	import_ingredientslist = "ź1�ڡ�������200�ˡ�С������������������������1�����մ������";
	import_condimentlist = "ɫ����������ʳ��4�ˡ���5�ˡ���5�ˡ��Ͼ�5�ˡ�����5��";
	import_directions = "1����źȥƤϴ�����г�����Ƭ��2�������������н����Σ����飬�Ͼ���һ��������Ͼ���3���Ѱ�õ�������������źƬ�м䣬�������ᰴƽ��4����ȡһ��С�룬����ۣ����ۣ��������Σ�һ������մ�۵��������5�����кõ�ź�����ϱ���һ��ɵ���ٹ��������6������������ʱ�¹�ը�������Ƽ���";
	import_tips = "1����ź�кú���뵭��ˮ�н��ݲ��ױ�ڣ�2�����õ�������ÿ��������������ߡ�������ղ��õĻ��������ȷ�һ���������ԣ����õ�ź������ȫ�����ס�ֿ��õ�ź����ã�3���մ��û�пɲ���";
	this.dbHelper
			.executeSQL("INSERT INTO DISH (dishid, cuisineid, cookingmethodid, tasteid, dishname, ingredientslist, condimentlist, directions, tips) VALUES (8, 3, 5, 1, 'ըź��', '"
					+ import_ingredientslist
					+ "', '"
					+ import_condimentlist
					+ "', '" + import_directions + "', '" + import_tips + "')");
	// ��������ź��
	import_ingredientslist = "ź1�ڡ����ܲ�1�����ƹ�1��";
	import_condimentlist = "ʳ������������������������������������ֲ������������������";
	import_directions = "1����źϴ����ȥƤ���ж����ƹ�ϴ�����ж������ܲ�ϴ�����ж���2�������顢�ס��Ρ����ǽ�����ȣ��Ƴɵ�ζ֭��3�������û��ϣ���������5���ȣ�������������㣻4�����η�����ܲ�������ź�����ƹ϶��������ζ֭���������ȼ���";
	import_tips = "";
	this.dbHelper
			.executeSQL(
					"INSERT INTO DISH (dishid, cuisineid, cookingmethodid, tasteid, dishname, ingredientslist, condimentlist, directions, tips) VALUES (9, 5, 3, 3, '����ź��', '"
							+ import_ingredientslist
							+ "', '"
							+ import_condimentlist
							+ "', '"
							+ import_directions
							+ "', '" + import_tips + "')", finishFun, finishFun);
};

var dealresult = function(result) {
	var dish = new Dish();
	var dishArray = new Array();
	for ( var i = 0; i < result.length; i = i + 12) {
		var j = 0;
		for (j = 0; j < dishArray.length; j++) {
			if (dishArray[j].dishid == result[i]) {
				break;
			}
		}
		if (j == dishArray.length) {
			dish.setDish(result[i], result[i + 1], result[i + 2],
					result[i + 3], result[i + 4], result[i + 5], result[i + 6],
					result[i + 7], result[i + 8], result[i + 9],
					result[i + 10], result[i + 11]);
			dishArray.push(dish);
			dish = new Dish();
		} else {
			var mainingredientsOfDish = dishArray[j].mainingredientsArray;
			var seasonOfDish = dishArray[j].seasonArray;
			var imageOfDish = dishArray[j].imageArray;
			if (mainingredientsOfDish.slice(mainingredientsOfDish.length - 1) != result[i + 9]) {
				mainingredientsOfDish.push(result[i + 9]);
			} else if (seasonOfDish.slice(seasonOfDish.length - 1) != result[i + 10]) {
				seasonOfDish.push(result[i + 10]);
			} else if (imageOfDish.slice(imageOfDish.length - 1) != result[i + 11]) {
				imageOfDish.push(result[i + 11]);
			}
		}
	}
	return dishArray;
};

MenuDao.prototype.search = function(callBackFun) {

	var fun = function(result) {
		callBackFun(dealresult(result));
	};
	this.dbHelper
			.executeSQL(
					"SELECT * FROM DISH, CUISINE, COOKINGMETHOD, TASTE, MAININGREDIENTS, SEASON, IMAGE WHERE CUISINE.cuisineid = DISH.cuisineid AND COOKINGMETHOD.cookingmethodid = DISH.cookingmethodid AND TASTE.tasteid = DISH.tasteid AND MAININGREDIENTS.dishid = DISH.dishid AND SEASON.dishid = DISH.dishid AND IMAGE.dishid = DISH.dishid",
					fun);
};
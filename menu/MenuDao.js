// 定义MenuDao类
if (typeof MenuDao == 'undefined') {
	function MenuDao() {
		this.dbHelper = new DBHelper();
	}
}

MenuDao.prototype.initDB = function(callBackFun) {
	var finishFun = function() {
		callBackFun();
	};
	// 创建mainingredients表
	var create_mainingredients_sql = "CREATE TABLE IF NOT EXISTS MAININGREDIENTS (mainingredientsid unique, dishid, mainingredientsname)";
	this.dbHelper.executeSQL(create_mainingredients_sql);
	// 创建cuisine表
	var create_cuisine_sql = "CREATE TABLE IF NOT EXISTS CUISINE (cuisineid unique, cuisinename)";
	this.dbHelper.executeSQL(create_cuisine_sql);
	// 创建cookingmethod表
	var create_cookingmethod_sql = "CREATE TABLE IF NOT EXISTS COOKINGMETHOD (cookingmethodid unique, cookingmethodname)";
	this.dbHelper.executeSQL(create_cookingmethod_sql);
	// 创建taste表
	var create_taste_sql = "CREATE TABLE IF NOT EXISTS TASTE (tasteid unique, tastename)";
	this.dbHelper.executeSQL(create_taste_sql);
	// 创建season表
	var create_season_sql = "CREATE TABLE IF NOT EXISTS SEASON (seasonid unique, dishid, seasonname)";
	this.dbHelper.executeSQL(create_season_sql);
	// 创建image表
	var create_image_sql = "CREATE TABLE IF NOT EXISTS IMAGE (imageid unique, dishid, address)";
	this.dbHelper.executeSQL(create_image_sql);
	// 创建dish表
	var create_dish_sql = "CREATE TABLE IF NOT EXISTS DISH (dishid unique, cuisineid, cookingmethodid, tasteid, dishname, ingredientslist, condimentlist, directions, tips)";
	this.dbHelper.executeSQL(create_dish_sql);
	// 导入mainingredients表初始化数据
	this.dbHelper
			.executeSQL("INSERT INTO MAININGREDIENTS (mainingredientsid, dishid, mainingredientsname) VALUES (1, 1, '乌骨鸡')");
	this.dbHelper
			.executeSQL("INSERT INTO MAININGREDIENTS (mainingredientsid, dishid, mainingredientsname) VALUES (2, 2, '春笋')");
	this.dbHelper
			.executeSQL("INSERT INTO MAININGREDIENTS (mainingredientsid, dishid, mainingredientsname) VALUES (3, 3, '乌菜')");
	this.dbHelper
			.executeSQL("INSERT INTO MAININGREDIENTS (mainingredientsid, dishid, mainingredientsname) VALUES (4, 3, '冬笋')");
	this.dbHelper
			.executeSQL("INSERT INTO MAININGREDIENTS (mainingredientsid, dishid, mainingredientsname) VALUES (5, 4, '冬笋')");
	this.dbHelper
			.executeSQL("INSERT INTO MAININGREDIENTS (mainingredientsid, dishid, mainingredientsname) VALUES (6, 4, '北豆腐')");
	this.dbHelper
			.executeSQL("INSERT INTO MAININGREDIENTS (mainingredientsid, dishid, mainingredientsname) VALUES (7, 5, '竹笋')");
	this.dbHelper
			.executeSQL("INSERT INTO MAININGREDIENTS (mainingredientsid, dishid, mainingredientsname) VALUES (8, 5, '猪大排')");
	this.dbHelper
			.executeSQL("INSERT INTO MAININGREDIENTS (mainingredientsid, dishid, mainingredientsname) VALUES (9, 6, '猪大排')");
	this.dbHelper
			.executeSQL("INSERT INTO MAININGREDIENTS (mainingredientsid, dishid, mainingredientsname) VALUES (10, 6, '五花肉')");
	this.dbHelper
			.executeSQL("INSERT INTO MAININGREDIENTS (mainingredientsid, dishid, mainingredientsname) VALUES (11, 6, '春笋')");
	this.dbHelper
			.executeSQL("INSERT INTO MAININGREDIENTS (mainingredientsid, dishid, mainingredientsname) VALUES (12, 7, '猪大排')");
	this.dbHelper
			.executeSQL("INSERT INTO MAININGREDIENTS (mainingredientsid, dishid, mainingredientsname) VALUES (13, 7, '藕')");
	this.dbHelper
			.executeSQL("INSERT INTO MAININGREDIENTS (mainingredientsid, dishid, mainingredientsname) VALUES (14, 8, '藕')");
	this.dbHelper
			.executeSQL("INSERT INTO MAININGREDIENTS (mainingredientsid, dishid, mainingredientsname) VALUES (15, 8, '猪肉馅')");
	this.dbHelper
			.executeSQL("INSERT INTO MAININGREDIENTS (mainingredientsid, dishid, mainingredientsname) VALUES (16, 9, '藕')");
	// 导入cuisine表初始化数据
	this.dbHelper
			.executeSQL("INSERT INTO CUISINE (cuisineid, cuisinename) VALUES (1, '其他菜系')");
	this.dbHelper
			.executeSQL("INSERT INTO CUISINE (cuisineid, cuisinename) VALUES (2, '浙菜')");
	this.dbHelper
			.executeSQL("INSERT INTO CUISINE (cuisineid, cuisinename) VALUES (3, '泸菜')");
	this.dbHelper
			.executeSQL("INSERT INTO CUISINE (cuisineid, cuisinename) VALUES (4, '武汉菜')");
	this.dbHelper
			.executeSQL("INSERT INTO CUISINE (cuisineid, cuisinename) VALUES (5, '川菜')");
	// 导入cookingmethod表初始化数据
	this.dbHelper
			.executeSQL("INSERT INTO COOKINGMETHOD (cookingmethodid, cookingmethodname) VALUES (1, '煲')");
	this.dbHelper
			.executeSQL("INSERT INTO COOKINGMETHOD (cookingmethodid, cookingmethodname) VALUES (2, '焖')");
	this.dbHelper
			.executeSQL("INSERT INTO COOKINGMETHOD (cookingmethodid, cookingmethodname) VALUES (3, '炒')");
	this.dbHelper
			.executeSQL("INSERT INTO COOKINGMETHOD (cookingmethodid, cookingmethodname) VALUES (4, '煮')");
	this.dbHelper
			.executeSQL("INSERT INTO COOKINGMETHOD (cookingmethodid, cookingmethodname) VALUES (5, '炸')");
	// 导入taste表初始化数据
	this.dbHelper
			.executeSQL("INSERT INTO TASTE (tasteid, tastename) VALUES (1, '咸鲜')");
	this.dbHelper
			.executeSQL("INSERT INTO TASTE (tasteid, tastename) VALUES (2, '鲜甜')");
	this.dbHelper
			.executeSQL("INSERT INTO TASTE (tasteid, tastename) VALUES (3, '酸辣')");
	// 导入season表初始化数据
	this.dbHelper
			.executeSQL("INSERT INTO SEASON (seasonid, dishid, seasonname) VALUES (1, 2, '春')");
	this.dbHelper
			.executeSQL("INSERT INTO SEASON (seasonid, dishid, seasonname) VALUES (2, 1, '秋')");
	this.dbHelper
			.executeSQL("INSERT INTO SEASON (seasonid, dishid, seasonname) VALUES (3, 1, '冬')");
	this.dbHelper
			.executeSQL("INSERT INTO SEASON (seasonid, dishid, seasonname) VALUES (4, 3, '冬')");
	this.dbHelper
			.executeSQL("INSERT INTO SEASON (seasonid, dishid, seasonname) VALUES (5, 4, '冬')");
	this.dbHelper
			.executeSQL("INSERT INTO SEASON (seasonid, dishid, seasonname) VALUES (6, 5, '四季')");
	this.dbHelper
			.executeSQL("INSERT INTO SEASON (seasonid, dishid, seasonname) VALUES (7, 6, '春')");
	this.dbHelper
			.executeSQL("INSERT INTO SEASON (seasonid, dishid, seasonname) VALUES (8, 6, '夏')");
	this.dbHelper
			.executeSQL("INSERT INTO SEASON (seasonid, dishid, seasonname) VALUES (9, 7, '夏')");
	this.dbHelper
			.executeSQL("INSERT INTO SEASON (seasonid, dishid, seasonname) VALUES (10, 8, '四季')");
	this.dbHelper
			.executeSQL("INSERT INTO SEASON (seasonid, dishid, seasonname) VALUES (11, 9, '夏')");
	this.dbHelper
			.executeSQL("INSERT INTO SEASON (seasonid, dishid, seasonname) VALUES (12, 9, '秋')");
	// 导入image表初始化数据
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
	// 导入dish表初始化数据
	// 导入松茸乌鸡汤
	var import_ingredientslist = "乌骨鸡500克、干香菇2个、干松菇50克、笋干40克";
	var import_condimentlist = "食盐适量、姜适量、花椒少许";
	var import_directions = "1、干松茸、干笋尖用温水抛开，切段；2、香菇洗净，切片；3、乌鸡洗净，斩块，冷水下锅，焯水；4、乌鸡放入砂锅中，加入适量清水，再放入松茸、笋尖、香菇；5、放入香葱，姜片，大火烧开，转小火，煲2小时左右，放盐调味出锅即可";
	var import_tips = "乌鸡焯水时放入几粒花椒，可去除乌鸡的腥味";
	this.dbHelper
			.executeSQL("INSERT INTO DISH (dishid, cuisineid, cookingmethodid, tasteid, dishname, ingredientslist, condimentlist, directions, tips) VALUES (1, 1, 1, 1, '松茸乌鸡汤', '"
					+ import_ingredientslist
					+ "', '"
					+ import_condimentlist
					+ "', '" + import_directions + "', '" + import_tips + "')");
	// 导入油焖春笋
	import_ingredientslist = "春笋3根";
	import_condimentlist = "色拉油适量、食盐少许、鸡精2克、老抽少许、鲜贝露适量、白糖1汤匙";
	import_directions = "1、春笋洗净用到拍扁切条，再切段；2、锅里多放些油烧热后，放入春笋大火翻炒，炒至七八分熟后调入一点点老抽，一汤勺糖；3、再倒入适量鲜贝露增鲜，尝尝咸淡，不够再加少许盐调味，最后撒少许鸡精炒熟即可";
	import_tips = "";
	this.dbHelper
			.executeSQL("INSERT INTO DISH (dishid, cuisineid, cookingmethodid, tasteid, dishname, ingredientslist, condimentlist, directions, tips) VALUES (2, 2, 2, 2, '油焖春笋', '"
					+ import_ingredientslist
					+ "', '"
					+ import_condimentlist
					+ "', '" + import_directions + "', '" + import_tips + "')");
	// 导入塌菜冬笋
	import_ingredientslist = "乌菜适量、冬笋适量";
	import_condimentlist = "色拉油适量、食盐适量、白糖少许";
	import_directions = "1、冬笋去壳切片；2、塌菜切去根部后洗净，沥干水分；3、冬笋在水中汆烫一会儿，沥干；4、锅内热油，加入塌菜抄软；5、加入冬笋，快速翻炒一会儿；6、加入适量盐；7、加入一点点糖，炒匀即可";
	import_tips = "1、冬笋需要在水中汆烫过再使用，以去其涩味；2、这里的糖，并非需要吃得出甜味的用量，一点点即可，可以激发才的鲜甜味道";
	this.dbHelper
			.executeSQL("INSERT INTO DISH (dishid, cuisineid, cookingmethodid, tasteid, dishname, ingredientslist, condimentlist, directions, tips) VALUES (3, 1, 3, 2, '塌菜冬笋', '"
					+ import_ingredientslist
					+ "', '"
					+ import_condimentlist
					+ "', '" + import_directions + "', '" + import_tips + "')");
	// 导入冬笋豆腐煲
	import_ingredientslist = "北豆腐180克、冬笋50克、虾米10克、油菜6棵、火腿50克、木耳（水发）28克";
	import_condimentlist = "食盐半小匙、料酒1大匙、细香葱1棵、水适量";
	import_directions = "1、原料洗净。虾米用温水泡发。豆腐切成约1厘米厚，4厘米见方的大片。冬笋去皮去老根，切薄片。火腿切大片。泡发好的木耳去蒂，撕小朵。香葱切成葱花。（豆腐要用老豆腐，也就是北豆腐，质地比较韧，不容易碎）；2、锅中烧开水，放少量盐，放冬笋片煮一下捞出，去涩味；3、另起汤锅，放入高汤（或清水），放入火腿、虾米，大火烧开，倒入料酒，调小火慢熬30分钟（先熬火腿和虾米可以将食材的鲜味散出来）；4、放入冬笋片、木耳、豆腐煮10分钟，放入油菜烫熟，调入盐和葱花即可";
	import_tips = "";
	this.dbHelper
			.executeSQL("INSERT INTO DISH (dishid, cuisineid, cookingmethodid, tasteid, dishname, ingredientslist, condimentlist, directions, tips) VALUES (4, 1, 4, 1, '冬笋豆腐煲', '"
					+ import_ingredientslist
					+ "', '"
					+ import_condimentlist
					+ "', '" + import_directions + "', '" + import_tips + "')");
	// 导入火腿鲜笋汤
	import_ingredientslist = "竹笋1棵、猪大排500克金华火腿300克";
	import_condimentlist = "姜1小块、小葱5克、白胡椒半茶匙、黄酒1汤匙、水适量";
	import_directions = "1、金华火腿切厚片，姜切薄片，鲜笋剥去外皮切片；2、排骨洗净，先过沸水汆去血水，再冲洗，沥干水分，火腿也过下沸水沥干；3、处理过的排骨，火腿片，姜片一起放入电饭锅，加入适量的水，水没过所有食材1掌宽，按电饭锅2小时煲汤键；4、约50分钟后，撇去汤上浮沫，加入笋片和袋装笋；5、接着炖，快要煲好时调入黄酒，白胡椒粉和香葱小段即可。煲汤时间，视各自电饭锅性能而定，只是汤要煲出白色";
	import_tips = "";
	this.dbHelper
			.executeSQL("INSERT INTO DISH (dishid, cuisineid, cookingmethodid, tasteid, dishname, ingredientslist, condimentlist, directions, tips) VALUES (5, 2, 1, 1, '火腿鲜笋汤', '"
					+ import_ingredientslist
					+ "', '"
					+ import_condimentlist
					+ "', '" + import_directions + "', '" + import_tips + "')");
	// 导入腌笃鲜
	import_ingredientslist = "猪大排500克、五花肉（咸）250克、春笋250克";
	import_condimentlist = "食盐少许、葱适量、姜适量";
	import_directions = "1、将肉洗干净，切块入砂锅，加入冷水葱姜和料酒，烧开后撇去浮沫；2、盖上盖子，转小火炖2个小时（可架根筷子放溢，期间多观察，当心烧干了）；3、将笋滚刀切好，将笋焯下水，2个小时候加入笋，再住10分钟即可";
	import_tips = "1、咸肉不要放太多了，不然会很咸的，再加水的话就不好吃了，所以宁可烧淡点，大不了可以再加盐。鲜肉部分可以放肘子、五花肉或杂骨等代替，咸肉部分可以放火腿肉代；2、煲汤时，水一定要一次加足，可加到砂锅的最高水位线的；3、猪皮与肉同煮会影响味道";
	this.dbHelper
			.executeSQL("INSERT INTO DISH (dishid, cuisineid, cookingmethodid, tasteid, dishname, ingredientslist, condimentlist, directions, tips) VALUES (6, 3, 1, 1, '腌笃鲜', '"
					+ import_ingredientslist
					+ "', '"
					+ import_condimentlist
					+ "', '" + import_directions + "', '" + import_tips + "')");
	// 导入排骨莲藕汤
	import_ingredientslist = "猪大排700克、藕2节";
	import_condimentlist = "食盐适量、葱5克、姜1块";
	import_directions = "1、生姜刷干净，去皮，切片。皮不要丢，留着焯水用。将生姜皮和排骨一起下入清水锅中，煮开后继续煮三四分钟，讲排骨捞起沥干，水和姜皮就倒掉不用了；2、将焯过水的排骨和生姜片放进砂锅煲中，加入足够量的清水，水量要没过排骨还略高1cm左右。因为煲汤的过程会流失掉一小部分水分，所以水要一次加足；3、烧开后加盖转小火炖1小时左右；4、莲藕去皮，切滚刀块，撒上少许盐，用盐拌匀，腌10分钟左右；5、将莲藕下乳汤煲中，继续小火炖1小时；6、肉烂藕粉之时，加适量盐，转中火滚开煮10分钟左右，撒上葱花即可";
	import_tips = "喜欢吃粉藕的可早下藕，喜欢脆一点口感的就晚一点下";
	this.dbHelper
			.executeSQL("INSERT INTO DISH (dishid, cuisineid, cookingmethodid, tasteid, dishname, ingredientslist, condimentlist, directions, tips) VALUES (7, 4, 1, 1, '排骨莲藕汤', '"
					+ import_ingredientslist
					+ "', '"
					+ import_condimentlist
					+ "', '" + import_directions + "', '" + import_tips + "')");
	// 导入炸藕夹
	import_ingredientslist = "藕1节、猪肉馅200克、小麦面粉适量、淀粉适量、鸡蛋1个、苏打粉适量";
	import_condimentlist = "色拉油适量、食盐4克、葱5克、姜5克、料酒5克、生抽5克";
	import_directions = "1、莲藕去皮洗净，切成连刀片；2、猪肉馅里加入葱姜，盐，生抽，料酒沿一个方向搅上劲；3、把拌好的肉馅填入连刀藕片中间，用手轻轻按平；4、另取一个小碗，用面粉，生粉，鸡蛋，盐，一丁点的苏打粉调成面糊；5、将夹好的藕夹拍上薄薄一层干淀粉再挂上面糊；6、油温六成热时下锅炸至两面金黄即可";
	import_tips = "1、莲藕切好后放入淡盐水中浸泡不易变黑；2、调好的面糊，用筷子挑起能流成线。这个把握不好的话，可以先放一个锅里试试，扎好的藕夹以完全被面糊住又看得到藕孔最好；3、苏打粉没有可不加";
	this.dbHelper
			.executeSQL("INSERT INTO DISH (dishid, cuisineid, cookingmethodid, tasteid, dishname, ingredientslist, condimentlist, directions, tips) VALUES (8, 3, 5, 1, '炸藕夹', '"
					+ import_ingredientslist
					+ "', '"
					+ import_condimentlist
					+ "', '" + import_directions + "', '" + import_tips + "')");
	// 导入酸辣藕丁
	import_ingredientslist = "藕1节、胡萝卜1根、黄瓜1根";
	import_condimentlist = "食盐少许、醋适量、干辣椒适量、生抽适量、植物油适量、白糖少许";
	import_directions = "1、莲藕洗净，去皮，切丁。黄瓜洗净，切丁。胡萝卜洗净，切丁；2、把生抽、醋、盐、白糖搅拌均匀，制成调味汁；3、炒锅置火上，放油烧至5成热，放入干辣椒爆香；4、依次放入胡萝卜丁、莲藕丁、黄瓜丁，倒入调味汁，翻炒均匀即可";
	import_tips = "";
	this.dbHelper
			.executeSQL(
					"INSERT INTO DISH (dishid, cuisineid, cookingmethodid, tasteid, dishname, ingredientslist, condimentlist, directions, tips) VALUES (9, 5, 3, 3, '酸辣藕丁', '"
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
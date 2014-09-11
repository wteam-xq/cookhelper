//topCanvas
// 时间变量
var hour = 0;
var minute = 0;
var second = 0;
var time = 0;

// 状态变量 0:可编辑且全零；-1：计时状态；1：可编辑非全零
var timeSign = 0;

// 画topCanvas展开态
drowtopDivStretch = function() {
	var img_x = 220;
	var img_y = 4;

	var imgBottom = new Image();
	var imgRestart = new Image();
	var imgStart = new Image();
	var imgPause = new Image();
	var imgRandom = new Image();

	imgBottom.onload = function() {
		topCanvasContext.drawImage(imgBottom, 0, 0);

		topCanvasContext.drawImage(imgRestart, img_x, img_y);
		topCanvasContext.drawImage(imgStart, img_x + 95, img_y);
		topCanvasContext.drawImage(imgPause, img_x + 190, img_y);
		topCanvasContext.drawImage(imgRandom, 880, img_y);
	}

	imgBottom.src = "./view/images/top_bg.png ";
	imgRestart.src = "./view/images/restartButton.png";
	imgStart.src = "./view/images/startButton.png";
	imgPause.src = "./view/images/pauseButton.png";
	imgRandom.src = "./view/images/randomButton.png";
	// topCanvasContext.fillStyle = '#FF0000';
	// topCanvasContext.fillRect(0, 0, 1024, 10);
}

// 画topCanvas收起态
drowtopDivSystole = function() {

}

// topCanvas拉动事件响应
eventTopCanvasPull = function(event) {
}

// topCanvas拖动事件响应
eventTopCanvasDrag = function(event) {
}

// topCanvas拖动结束事件响应
eventTopCanvasDragEnd = function(event) {
	alert("拖动结束上canvas");
}

// topCanvas点击事件响应
eventTopCanvasClick = function(event) {
	// 归零
	if (event.endX >= 220 && event.endX <= 300
			&& event.endY <= (90 - CODING_OFFSET)) {
		if (timeSign == 1) {
			editTime();
			timerDo.execute("resetTimer");
			writeTime("0", "0", "0");
			timeSign = 0;
		}
	}
	// 开始
	else if (event.endX >= 315 && event.endX <= 395
			&& event.endY <= (90 - CODING_OFFSET)) {
		if (timeSign == 1) {
			editTime();
			changeInput();
			timerDo.execute("countDown");
			timeSign = -1;
		}
	}
	// 暂停
	else if (event.endX >= 410 && event.endX <= 490
			&& event.endY <= (90 - CODING_OFFSET)) {
		if (timeSign == -1) {
			timerDo.execute("pause");
			timeSign = 1;
			changeDiv();
			writeTime(hour, minute, second);
		}
	}
	// 随机
	else if (event.endX >= 880 && event.endX <= 1060
			&& event.endY <= (90 - CODING_OFFSET)) {
		menuDo.execute("randomDish");
	} else {
		menuDo.execute("pull", "top");
	}
}

// 倒计时的一些方法
// 组合时间
function changeInput() {
	if (hour < 10) {
		hour = "0" + parseInt(hour);
	}

	if (minute < 10) {
		minute = "0" + parseInt(minute);
	}

	if (second < 10) {
		second = "0" + second;
	}

	document.getElementById("time").innerHTML = "<div id='all'><div name='hour' id='hour' value='"
			+ hour
			+ "'>"
			+ hour
			+ ":</div><div name='minute' id='minute' value='"
			+ minute
			+ "'>"
			+ minute
			+ ":</div><div name='second' id='second' value='"
			+ second
			+ "'>" + second + "</div></div>";

}

// 改变div标签
function changeDiv() {
	document.getElementById("time").innerHTML = "<input type='number' min='0' max='24' step='1' value='0' name='hour' onchange='editTimer();'>:<input type='number' min='0' max='59' value='0' step='1' name='minute' onchange='editTimer();'>:<input type='number' min='0' max='59' value='0' step='1' name='second' onchange='editTimer();'>";
}

// 与后台时间同步
function editTimer() {

	editTime();
	timerDo.execute("editTimer", parseInt(hour), parseInt(minute),
			parseInt(second));
	if (hour == "0" && minute == "0" && second == "0") {
		timeSign = 0;
	} else {
		timeSign = 1;
	}
}

// 获取设置时间
function editTime() {
	hour = $("input[name='hour']").attr("value");
	minute = $("input[name='minute']").attr("value");
	second = $("input[name='second']").attr("value");
}

// 倒计时
function countTime() {

	if (hour != "00" || minute != "00" || second != "00") {

		second = second - 1;
		if (second <= 0) {
			if (minute >= 1) {
				minute = minute - 1;
				second = 59;
			} else {
				second = 0;
			}
		}

		if (minute <= 0) {
			if (hour >= 1) {
				hour = hour - 1;
				minute = 59;
				second = 59;
			} else {
				minute = 0;
			}
		}
		if (hour <= 0) {
			hour = 0;
		}

		changeInput();

		if (hour == "00" && minute == "00" && second == "00") {
			timeSign = 0;
			changeDiv();
		}
	}
}

// 把时间写到页面上
function writeTime(hour, minute, second) {

	$("Input[name='hour']").attr("value", hour);
	$("Input[name='minute']").attr("value", minute);
	$("Input[name='second']").attr("value", second);

}

// bottomLeftCanvas
// 用户点击筛选方式编号
var bold_num = 0;
// 点击编号获得的结果
var sorts_values = [];
var dishs = [];
var contract_dishs = [];
// 判断点击子项
var point_box_name = "";
// 画bottomLeftCanvas展开态
drowbottomLeftDivStretch = function(heightModel, result) {
	// var alps = new Array("","","","","","",);
	if (heightModel == true) {
		bottomLeftCanvasContext.fillStyle = '#3d1518';
		bottomLeftCanvasContext.fillRect(0, 0, 60, 600);
		// drawAlphs(22, result);
		eventExecute(result);
		drawSearchMode(bold_num);
	} else if (heightModel == false) {
		bottomLeftCanvasContext.fillStyle = '#3d1518';
		bottomLeftCanvasContext.fillRect(0, 0, 60, 540);
		// drawAlphs(22, result);
		eventExecute(result);
		drawSearchMode(bold_num);
	}
}

// 画bottomLeftCanvas收起态
drowbottomLeftDivSystole = function(heightModel, result) {
	if (heightModel == true) {
		bottomLeftCanvasContext.fillStyle = '#3d1518';
		bottomLeftCanvasContext.fillRect(0, 0, 60, 600);
		// drawAlphs(22, result);
		eventExecute(result);
		drawSearchMode(bold_num);
	} else if (heightModel == false) {
		bottomLeftCanvasContext.fillStyle = '#3d1518';
		bottomLeftCanvasContext.fillRect(0, 0, 60, 540);
		// drawAlphs(22, result);
		eventExecute(result);
		drawSearchMode(bold_num);
	}
}
// 绘制26个字母
function drawAlphs(start_y) {
	var alp = null;
	var font_x = 20;
	var font_y = start_y;
	// 字体颜色
	bottomLeftCanvasContext.fillStyle = '#A79D9D';
	bottomLeftCanvasContext.font = "bold 23px Times New Roman";
	for ( var i = 65; i < 91; i++) {
		alp = String.fromCharCode(i);
		bottomLeftCanvasContext.fillText(alp, font_x, font_y);
		font_y = font_y + 23;
	}
}

// 绘制筛选方式
function drawSearchMode(bold_num) {
	bottomLeftCanvasContext.fillStyle = "#3E1719";
	var img_x = 65;
	var img_selector_y = 0;
	var img_green_y = 60;
	var img_selector = new Image();
	var img_green = new Image();
	var mode_fonts = new Array("首字母", "食材", "菜系", "烹调方式", "适宜季节", "口味");
	bottomLeftCanvasContext.font = "bold 22px Times New Roman";
	img_selector.onload = function() {
		bottomLeftCanvasContext.drawImage(img_selector, img_x,
				img_selector_y + 5);
		bottomLeftCanvasContext.fillText("筛选方式", 102, img_selector_y + 36);
		for ( var i = 0; i < mode_fonts.length; i++) {
			if (i == bold_num) {
				bottomLeftCanvasContext.font = "bold 25px Times New Roman";
				bottomLeftCanvasContext
						.drawImage(img_green, img_x, img_green_y);
				bottomLeftCanvasContext.fillText(mode_fonts[i], img_x + 20,
						img_green_y + 15);
				img_green_y = img_green_y + 55;
				bottomLeftCanvasContext.font = "22px Times New Roman";
				continue;
			}
			bottomLeftCanvasContext.font = "22px Times New Roman";
			bottomLeftCanvasContext.drawImage(img_green, img_x, img_green_y);
			bottomLeftCanvasContext.fillText(mode_fonts[i], img_x + 20,
					img_green_y + 15);
			img_green_y = img_green_y + 55;
		}
	}
	img_selector.src = "./view/images/magnifier.png";
	img_green.src = "./view/images/greenPoint.png";
}
// 计算eventExecute函数返回的y值
function accoutnEventExecuteY(result) {
	var interval = 40;
	var font_x = 0;
	var font_y = 70;

	// 绘制左侧文字
	sorts_values = [];
	var j = 0;
	var sub_string = "";
	for ( var i = 0; i < result.length; i++) {
		if (result[i].dishid == null) {
			font_y = font_y + interval;
		}
	}
	return font_y;
}// end function accoutnEventExecuteY

// 点击筛选后时间响应
function eventExecute(result) {
	var interval = 40;
	var font_x = 0;
	var font_y = 70;

	var canvas_height = accoutnEventExecuteY(result);
	if (canvas_height < 600) {
		if (topDivSign) {
			canvas_height = 540;
		} else {
			canvas_height = 600;
		}
	}
	bottomLeftCanvas.attr("height", 600 + "px");

	bottomLeftCanvasContext.fillStyle = '#3d1518';
	bottomLeftCanvasContext.fillRect(0, 0, 60, 600);

	// 菜式的Y轴坐标
	var img_top = new Image();
	switch (bold_num) {
	case 0:
		img_top.src = "./view/images/sortascend.png";
		break;
	case 1:
		img_top.src = "./view/images/ingredients.png";
		break;
	case 2:
		img_top.src = "./view/images/cuisine.png";
		break;
	case 3:
		img_top.src = "./view/images/cookingmethod.png";
		break;
	case 4:
		img_top.src = "./view/images/season.png";
		break;
	case 5:
		img_top.src = "./view/images/taste.png";
		break;
	default:
		img_top.src = "./view/images/sortascend.png";
		;
	}
	img_top.onload = function() {
		bottomLeftCanvasContext.drawImage(img_top, 13, 5);
	}
	// 创建正则表达式
	var reg = /^[a-zA-Z]/;
	// 判断非菜式第一个字符是否为字母
	for ( var i = 0; i < result.length; i++) {
		if (result[i].dishid == null) {
			if (reg.test(result[i])) {
				font_x = 20;
				// interval = 23;
			}
			break;
		}
	}

	// 字体颜色
	bottomLeftCanvasContext.fillStyle = '#A79D9D';
	bottomLeftCanvasContext.font = "bold 23px Times New Roman";
	// 绘制左侧文字
	sorts_values = [];
	var j = 0;
	var sub_string = "";
	for ( var i = 0; i < result.length; i++) {
		if (result[i].dishid == null) {
			// 获得排序值
			var json_result = {
				"name" : result[i],
				"y" : font_y
			};
			sorts_values[j] = json_result;
			j++;
			// 截断长度大于2的字符串
			if (result[i].length > 2) {
				sub_string = result[i].substring(0, 2);
				bottomLeftCanvasContext.fillText(sub_string, font_x, font_y);
			} else {
				bottomLeftCanvasContext.fillText(result[i], font_x, font_y);
			}

			font_y = font_y + interval;
		}
	}
}

// bottomLeftCanvas拉动事件响应
eventBottomLeftCanvasPull = function(event) {
	if (event.direction == "left" && bottomLeftSign == true) {
		menuDo.execute("pull", "left");
	} else if (event.direction == "right" && bottomLeftSign == false) {
		menuDo.execute("pull", "left");
	} else if (event.direction == "right" && bottomLeftSign == true
			&& bottomMiddleSign == false) {
		menuDo.execute("pull", "middle");
	} else if (event.direction == "left" && bottomLeftSign == false
			&& bottomMiddleSign == true) {
		menuDo.execute("pull", "middle");
	} else if (event.direction == "up" && topDivSign == true) {
		menuDo.execute("pull", "top");
	} else if (event.direction == "down" && topDivSign == false) {
		menuDo.execute("pull", "top");
	}
}

var leftSortName = null;
// bottomLeftCanvas拖动事件响应
eventBottomLeftCanvasDrag = function(event) {
	// 点击左左侧页面的事件响应
	showBox(event);
}

// bottomLeftCanvas拖动结束事件响应
eventBottomLeftCanvasDragEnd = function(event) {
	var box_dom = $("#left_prompt_box");
	box_dom.fadeOut('slow');
}

// bottomLeftCanvas点击事件响应
eventBottomLeftCanvasClick = function(event) {
	if (eventSign == false) {
		var x = 60;
		var y = 140 - CODING_OFFSET;
		var mode_fonts = new Array("首字母", "食材", "菜系", "烹调方式", "适宜季节", "口味");
		var font_length = 0;
		var max_y = y + 35;
		var max_x = 204;
		// 上侧div收起，坐标x,y对应的变化
		if (!topDivSign) {
			y = 80 - CODING_OFFSET;
			max_y = y + 35;
		}
		// alert("X:"+ event.endX + ",Y:" + event.endY);
		for ( var i = 0; i < mode_fonts.length; i++) {
			font_length = mode_fonts[i].length;
			if (event.endX > x && event.endX < max_x && event.endY > y
					&& event.endY < max_y) {
				// alert(mode_fonts[i]);
				// 取消显示单样菜式
				point_box_name = "";

				bottomLeftCanvasContext.fillStyle = "#D7B7B9";
				bottomLeftCanvasContext.clearRect(65, 0, 123, 600);
				switch (i) {
				case 0:
					// drawSearchMode(0);
					bold_num = 0;
					menuDo.execute("sort", "alpha");
					return;
				case 1:
					// drawSearchMode(1);
					bold_num = 1;
					menuDo.execute("sort", "mainingredients");
					return;
				case 2:
					// drawSearchMode(2);
					bold_num = 2;
					menuDo.execute("sort", "cuisine");
					return;
				case 3:
					// drawSearchMode(3);
					bold_num = 3;
					menuDo.execute("sort", "cookingmethod");
					return;
				case 4:
					// drawSearchMode(4);
					bold_num = 4;
					menuDo.execute("sort", "season");
					return;
				case 5:
					// drawSearchMode(5);
					bold_num = 5;
					menuDo.execute("sort", "taste");
					return;
				default:
					return;
				}
			}
			y = y + 54;
			max_y = y + 35;
		}

		// 点击左左侧页面的事件响应
		showBox(event);
		$("#left_prompt_box").fadeOut('slow');
	}
}

// 左左侧页面的事件响应（拖动及点击）
function showBox(event) {
	var g_x = event.endX;
	var g_y = event.endY;
	var sort_name = "";
	var y = 0;
	var max_y = 0;

	for ( var i = 0; i < sorts_values.length; i++) {
		sort_name = sorts_values[i].name;
		if (topDivSign) {
			y = sorts_values[i].y + 60 - 23 - 5 - CODING_OFFSET;
			max_y = sorts_values[i].y + 60 + 30 - CODING_OFFSET;
		} else {
			y = sorts_values[i].y - 23 - 5 - CODING_OFFSET;
			max_y = sorts_values[i].y + 30 - CODING_OFFSET;
		}

		if (g_x > 0 && g_x < 60 && g_y > y && g_y < max_y) {
			if (leftSortName != sort_name) {
				var box_dom = $("#left_prompt_box");
				var box_y = max_y - 30;
				box_dom.css("display", "none");
				box_dom.css("top", box_y + "px");
				box_dom.css("left", "60px");
				box_dom.css("display", "inline");
				box_dom.get(0).innerHTML = sort_name;
				point_box_name = sort_name;
				leftSortName = sort_name;
			}
			break;
		}
	}
	menuDo.execute("getContentChild", sort_name);
}// end funciton showBox()

// bottomMiddleCanvas
// 画bottomMiddleCanvas展开态
drowbottomMiddleDivStretch = function(heightModel, result) {
	// 获得菜式名
	getDishs(result);
	if (heightModel == true) {
		/*
		 * bottomMiddleCanvasContext.fillStyle = '#E4C7C8';
		 * bottomMiddleCanvasContext.fillRect(0, 0, 180, 600);
		 */
		drawDishs();
	} else if (heightModel == false) {
		/*
		 * bottomMiddleCanvasContext.fillStyle = '#E4C7C8';
		 * bottomMiddleCanvasContext.fillRect(0, 0, 180, 600);
		 */
		drawDishs();
	}
}

// 画bottomMiddleCanvas收起态
drowbottomMiddleDivSystole = function(heightModel, result) {
	// 获得菜式名
	getDishs(result);
	getContractDishs(result);
	if (heightModel == true) {
		drawPartDishs();
	} else if (heightModel == false) {
		drawPartDishs();
	}
}

// 获得菜式json
function getDishs(result) {
	dishs = [];
	var dish_font_y = 37;
	var k = 0;

	// 单击筛选中某个子项，如“首字母”按字母排列中单击了“S”
	if (point_box_name != "") {
		// 获得菜式名
		for ( var i = 0; i < result.length; i++) {
			if (result[i] != null && result[i] == point_box_name) {
				var json_dish = {
					"title" : result[i],
					"y" : dish_font_y
				};
				dishs[k] = json_dish;
				k++;
				dish_font_y = dish_font_y + 23 + 10;

				for ( var j = i + 1; j < result.length; j++) {
					if (result[j].dishname != null) {
						var json_dish = {
							"name" : result[j].dishname,
							"y" : dish_font_y,
							"taste" : result[j].tastename,
							"cuisinename" : result[j].cuisinename,
							"cookingmethodname" : result[j].cookingmethodname
						};
						dishs[k] = json_dish;
						k++;
						dish_font_y = dish_font_y + 10 * 3 + 23 * 2 + 25;
					} else {
						break;
					}
				}
				// 找到并存储单一菜式名推出循环
				break;
			} else {
				continue;
			}

		}// end for loop
	} else {
		// 获得菜式名
		for ( var i = 0; i < result.length; i++) {
			if (result[i].dishname != null) {
				var json_dish = {
					"name" : result[i].dishname,
					"y" : dish_font_y,
					"taste" : result[i].tastename,
					"cuisinename" : result[i].cuisinename,
					"cookingmethodname" : result[i].cookingmethodname
				};
				dishs[k] = json_dish;
				k++;
				dish_font_y = dish_font_y + 10 * 3 + 23 * 2 + 25;
			} else {
				var json_dish = {
					"title" : result[i],
					"y" : dish_font_y
				};
				dishs[k] = json_dish;
				k++;
				dish_font_y = dish_font_y + 23 + 10;
			}
		}// end for loop
	}

}

// 获得收缩版菜式json
function getContractDishs(result) {
	contract_dishs = [];
	var k = 0;
	var y = 37;
	// 单击筛选中某个子项，如“首字母”按字母排列中单击了“S”
	if (point_box_name != "") {
		for ( var i = 0; i < result.length; i++) {
			if (result[i] != null && result[i] == point_box_name) {
				var json_dish = {
					"title" : result[i],
					"y" : y
				};
				contract_dishs[k] = json_dish;
				k++;
				y = y + 23 + 10;

				for ( var j = i + 1; j < result.length; j++) {
					if (result[j].dishname != null) {
						var json_dish = {
							"name" : result[i].dishname,
							"y" : y
						};
						contract_dishs[k] = json_dish;
						k++;
						y = y + 10 + 23;
					} else {
						break;
					}
				}
				// 找到并存储单一菜式名推出循环
				break;
			} else {
				continue;
			}
		}// end for loop
	} else {
		for ( var i = 0; i < result.length; i++) {
			if (result[i].dishname != null) {
				var json_dish = {
					"name" : result[i].dishname,
					"y" : y
				};
				contract_dishs[k] = json_dish;
				k++;
				y = y + 10 + 23;
			} else {
				var json_dish = {
					"title" : result[i],
					"y" : y
				};
				contract_dishs[k] = json_dish;
				k++;
				y = y + 10 + 23;
			}
		}// end for loop
	}
}

// 绘制菜式
function drawDishs() {
	var x = 5;
	var y = 0;

	if (point_box_name != "") {
		// 拉伸canvas高度
		var canvas_height = dishs[dishs.length - 1].y + 70;
		if (canvas_height < 600) {
			canvas_height = 600;
		}
		bottomMiddleCanvas.attr("height", canvas_height + "px");

		// 循环查询输出点击菜式
		for ( var i = 0; i < dishs.length; i++) {
			if (dishs[i].title != null && dishs[i].title == point_box_name) {
				y = 37;
				bottomMiddleCanvasContext.fillStyle = "#3E1719";
				bottomMiddleCanvasContext.font = "bold 23px Times New Roman";
				bottomMiddleCanvasContext.fillText(dishs[i].title, x, y);

				y = y + 10 + 23;
				for ( var j = i + 1; j < dishs.length; j++) {
					if (dishs[j].title == null) {
						bottomMiddleCanvasContext.fillStyle = "#85585A";
						bottomMiddleCanvasContext.font = "bold 23px Times New Roman";
						bottomMiddleCanvasContext.fillText(dishs[j].name, x, y);
						bottomMiddleCanvasContext.font = "15px Times New Roman";
						y = y + 10 + 23;
						bottomMiddleCanvasContext.fillText("口味:"
								+ dishs[j].taste, x, y);
						x = x + 80;
						bottomMiddleCanvasContext.fillText("菜系:"
								+ dishs[j].cuisinename, x, y);
						y = y + 10 + 23;
						x = x - 80;
						bottomMiddleCanvasContext.fillText("烹饪方式:"
								+ dishs[j].cookingmethodname, x, y);
						y = y + 10 + 23;
					} else {
						// 遇到下一个菜式单元跳出循环
						break;
					}
				}
				// 输出点击菜式后跳出循环
				break;
			} else {
				continue;
			}
		}// end for loop
	} else {
		// 拉伸canvas高度
		var canvas_height = dishs[dishs.length - 1].y + 70;
		if (canvas_height < 600) {
			if (topDivSign) {
				canvas_height = 540;
			} else {
				canvas_height = 600;
			}
		}
		bottomMiddleCanvas.attr("height", canvas_height + "px");

		// 循环绘制一份菜式
		for ( var i = 0; i < dishs.length; i++) {
			if (dishs[i].title == null) {
				y = dishs[i].y;
				bottomMiddleCanvasContext.fillStyle = "#85585A";
				bottomMiddleCanvasContext.font = "bold 23px Times New Roman";
				bottomMiddleCanvasContext.fillText(dishs[i].name, x, y);
				bottomMiddleCanvasContext.font = "15px Times New Roman";
				y = y + 10 + 23;
				bottomMiddleCanvasContext
						.fillText("口味:" + dishs[i].taste, x, y);
				x = x + 80;
				bottomMiddleCanvasContext.fillText(
						"菜系:" + dishs[i].cuisinename, x, y);
				y = y + 10 + 23;
				x = x - 80;
				bottomMiddleCanvasContext.fillText("烹饪方式:"
						+ dishs[i].cookingmethodname, x, y);
			} else {
				bottomMiddleCanvasContext.fillStyle = "#3E1719";
				bottomMiddleCanvasContext.font = "bold 23px Times New Roman";
				bottomMiddleCanvasContext.fillText(dishs[i].title, x,
						dishs[i].y);
			}
		}
	}

}

// 绘制部分菜式
function drawPartDishs() {
	var x = 5;
	var y = 37;

	// 拉伸canvas高度
	var canvas_height = contract_dishs[contract_dishs.length - 1].y + 5;
	if (canvas_height < 600) {
		if (topDivSign) {
			canvas_height = 540;
		} else {
			canvas_height = 600;
		}

	}
	bottomMiddleCanvas.attr("height", canvas_height + "px");

	if (point_box_name != "") {

		// 循环查询输出点击菜式
		for ( var i = 0; i < dishs.length; i++) {
			if (dishs[i].title != null && dishs[i].title == point_box_name) {
				y = 37;
				bottomMiddleCanvasContext.fillStyle = "#3E1719";
				bottomMiddleCanvasContext.font = "bold 23px Times New Roman";
				bottomMiddleCanvasContext.fillText(dishs[i].title, x, y);

				y = y + 10 + 23;
				for ( var j = i + 1; j < dishs.length; j++) {
					if (dishs[j].title == null) {
						var dish_font = dishs[j].name;
						bottomMiddleCanvasContext.fillStyle = "#85585A";
						bottomMiddleCanvasContext.font = "bold 23px Times New Roman";
						if (dish_font.length > 2) {
							dish_font = dish_font.substring(0, 2);
						}
						bottomMiddleCanvasContext.fillText(dish_font, x, y);
						y = y + 10 + 23;
					} else {
						// 遇到下一个菜式单元跳出循环
						break;
					}
				}
				// 输出点击菜式后跳出循环
				break;
			} else {
				continue;
			}
		}// end for loop
	} else {
		// 循环绘制一份菜式
		for ( var i = 0; i < dishs.length; i++) {
			if (dishs[i].title == null) {
				var dish_font = dishs[i].name;
				bottomMiddleCanvasContext.fillStyle = "#85585A";
				bottomMiddleCanvasContext.font = "bold 23px Times New Roman";
				if (dish_font.length > 2) {
					dish_font = dish_font.substring(0, 2);
				}
				bottomMiddleCanvasContext.fillText(dish_font, x, y);
				y = y + 10 + 23;
			} else {
				bottomMiddleCanvasContext.fillStyle = "#3E1719";
				bottomMiddleCanvasContext.font = "bold 23px Times New Roman";
				bottomMiddleCanvasContext.fillText(dishs[i].title, x, y);
				y = y + 10 + 23;
			}
		}
	}

}

// bottomMiddleCanvas拉动事件响应
eventBottomMiddleCanvasPull = function(event) {
	if (event.direction == "left" && bottomMiddleSign == true) {
		menuDo.execute("pull", "middle");
	} else if (event.direction == "right" && bottomMiddleSign == false) {
		menuDo.execute("pull", "middle");
	} else if (event.direction == "right" && bottomMiddleSign == true
			&& bottomLeftSign == false) {
		menuDo.execute("pull", "left");
	} else if (event.direction == "left" && bottomMiddleSign == false
			&& bottomLeftSign == true) {
		menuDo.execute("pull", "left");
	} else if (event.direction == "up" && topDivSign == true) {
		menuDo.execute("pull", "top");
	} else if (event.direction == "down" && topDivSign == false) {
		menuDo.execute("pull", "top");
	}
}

// bottomMiddleCanvas点击事件响应
eventBottomMiddleCanvasClick = function(event) {
	if (eventSign == false) {
		var g_x = event.layerX;
		var g_y = event.layerY;

		var x = 0;
		var max_x = 200;
		/* var min_y = 95 - CODING_OFFSET; */
		var max_y = 0;

		// 中部canvas非展开状态
		if (!bottomMiddleSign) {
			// alert("进入非展开状态");
			for ( var i = 0; i < contract_dishs.length; i++) {
				if (contract_dishs[i].title == null) {
					y = contract_dishs[i].y - 23;
					max_y = y + 23;
					if (g_x > x && g_x < max_x && g_y > y && g_y < max_y) {
						eventSign = true;
						menuDo.execute("getDish", i);
						eventSign = false;
						break;
					}
				}
				y = 0;
			}// end for loop
		} else {
			for ( var i = 0; i < dishs.length; i++) {
				if (dishs[i].title == null) {
					y = dishs[i].y - 23;
					max_y = y + 23 + 10 * 2 + 15 * 2;
					if (g_x > x && g_x < max_x && g_y > y && g_y < max_y) {
						eventSign = true;
						menuDo.execute("getDish", i);
						eventSign = false;
						break;
					}
				}
				y = 0;
			}// end for loop
		}
	}
}

// bottomRightCanvas
// 画bottomRightCanvas展开态
indexResultDish = null;
drowbottomRightDivStretch = function(heightModel, result) {
	if (result) {
		// alert(result.dishname);
		drawExtendDishDetail(result);
		indexResultDish = result;
	}
	if (heightModel == true) {
		// bottomRightCanvasContext.fillStyle = '#12345F';
		// bottomRightCanvasContext.fillRect(0, 0, 10, 600);
		drawMainCanvas(60, 65, result);
	} else if (heightModel == false) {
		// bottomRightCanvasContext.fillStyle = '#12345F';
		// bottomRightCanvasContext.fillRect(0, 0, 10, 540);
		drawMainCanvas(60, 65, result);
	}
}

// 画bottomRightCanvas收起态
drowbottomRightDivSystole = function(heightModel, result) {
	if (result) {
		// alert(result.dishname);
		drawDishDetail(result);
		indexResultDish = result;
	}
	if (heightModel == true) {
		// bottomRightCanvasContext.fillStyle = '#12345F';
		// bottomRightCanvasContext.fillRect(0, 0, 10, 600);
		drawMainCanvas(0, 65, result);
	} else if (heightModel == false) {
		// bottomRightCanvasContext.fillStyle = '#12345F';
		// bottomRightCanvasContext.fillRect(0, 0, 10, 540);
		drawMainCanvas(0, 65, result);
	}
}
function drawMainCanvas(x, y, result) {
	if (result == null) {
		var cover_img = new Image();
		cover_img.onload = function() {
			bottomRightCanvasContext.drawImage(cover_img, x, y);
		}
		cover_img.src = "./view/images/welcome.png";
	}
}

// 计算绘制一个详细页面的高度
function account_y_height(result) {
	var x = 10;
	var y = 16;
	var temp_y = 0;
	var DISHIMGHEIGHT = 408;
	var DISHIMGWIDTH = 660;

	y = y + 36 + 5;
	// 绘制矩形框块
	y = y + 22;
	temp_y = y + 7;
	for ( var i = 0; i < 14; i++) {
		y = y + 30;
	}

	y = y + 5 + 30;

	// 材料
	y = account_partDish_height(y, result.ingredientslist, "材料");
	// 调料
	y = account_partDish_height(y, result.condimentlist, "调料");
	// 操作
	y = account_partDish_height(y, result.directions, "操作");
	// 提示
	y = account_partDish_height(y, result.tips, "提示");

	return y;
}

// 计算绘制一个页面块的高度
function account_partDish_height(y, part_dish, part_dish_name) {
	var iframe_font = "";
	var iframe_font_num = 0;
	var sub_string = "";

	y = y + 36 + 5;
	// 绘制矩形框块

	y = y + 22;
	if (part_dish_name == "操作" || part_dish_name == "贴士") {
		if (part_dish == null) {
			y = y + 30;
		} else {
			for ( var i = 0; i < part_dish.length; i++) {
				iframe_font = part_dish[i];
				while (iframe_font.length >= iframe_font_num + 29) {
					iframe_font_num = iframe_font_num + 29;
					y = y + 30;
				}
				y = y + 30;
				iframe_font_num = 0;
			}// end for loop
			y = y + 30 + 5;
			y = y + 10;
		}

	} else {
		if (part_dish == null) {
			y = y + 30;
		} else {
			for ( var i = 0; i < part_dish.length; i++) {
				if (i == 0) {
					iframe_font = iframe_font + part_dish[i];
				} else {
					iframe_font = iframe_font + "、" + part_dish[i];
				}
				if (iframe_font.length > iframe_font_num + 29) {
					// 根据相差值绘制换行规则
					sub_string = iframe_font.substring(iframe_font_num,
							iframe_font_num + 29);
					iframe_font_num = iframe_font_num + 29;
					y = y + 30;
				}
				// 绘制剩下不足29个的文字
				if (i == part_dish.length - 1) {
					sub_string = iframe_font.substring(iframe_font_num);
					y = y + 30;
				}
			}// end for loop
		}// end if
	}

	y = y + 5 + 30;
	return y;
}

// 绘制详细菜式内容
function drawDishDetail(result) {
	var x = 10;
	var y = 16;
	var list_img = new Image();
	var list_icon = new Image();
	var top_border = new Image();
	var middle_border = new Image();
	var bottom_boder = new Image();

	var temp_y = 0;
	var dish_img = new Image();
	var DISHIMGHEIGHT = 408;
	var DISHIMGWIDTH = 660;

	// 拉伸canvas高度
	var canvas_height = account_y_height(result);
	if (canvas_height < 600) {
		if (topDivSign) {
			canvas_height = 540;
		} else {
			canvas_height = 600;
		}
	}
	bottomRightCanvas.attr("height", canvas_height + "px");

	bottomRightCanvasContext.fillStyle = "#fff";
	bottomRightCanvasContext.font = "bold 23px Times New Roman";

	dish_img.onload = function() {
		bottomRightCanvasContext.drawImage(list_img, x, y);
		bottomRightCanvasContext.fillText(result.dishname, x + 37, y + 27);
		y = y + 36 + 5;
		// 绘制矩形框块
		bottomRightCanvasContext.drawImage(top_border, x, y);
		y = y + 22;
		temp_y = y + 7;
		for ( var i = 0; i < 14; i++) {
			bottomRightCanvasContext.drawImage(middle_border, x, y);
			y = y + 30;
		}
		bottomRightCanvasContext.drawImage(bottom_boder, x, y);
		bottomRightCanvasContext.drawImage(dish_img, x + 40, temp_y,
				DISHIMGWIDTH, DISHIMGHEIGHT);
		y = y + 5 + 30;

		// 材料
		y = drawPartDish(x, y, result.ingredientslist, "材料", list_icon,
				top_border, middle_border, bottom_boder);
		// 调料
		y = drawPartDish(x, y, result.condimentlist, "调料", list_icon,
				top_border, middle_border, bottom_boder);
		// 操作
		y = drawPartDish(x, y, result.directions, "操作", list_icon, top_border,
				middle_border, bottom_boder);
		// 提示
		y = drawPartDish(x, y, result.tips, "贴士", list_icon, top_border,
				middle_border, bottom_boder);

	}

	top_border.src = "./view/images/topborder.png";
	middle_border.src = "./view/images/middleborder.png";
	bottom_boder.src = "./view/images/bottomborder.png";

	list_icon.src = "./view/images/dishicon.png";
	list_img.src = "./view/images/longicon.png";
	dish_img.src = "./dishimage/" + result.imageArray[0];
}

// 绘制一份菜式块
function drawPartDish(x, y, part_dish, part_dish_name, list_icon, top_border,
		middle_border, bottom_boder) {
	var iframe_font = "";
	var iframe_font_num = 0;
	var sub_string = "";

	bottomRightCanvasContext.drawImage(list_icon, x, y);
	bottomRightCanvasContext.fillText(part_dish_name, x + 37, y + 27);
	bottomRightCanvasContext.fillStyle = "#000";

	y = y + 36 + 5;
	// 绘制矩形框块
	bottomRightCanvasContext.drawImage(top_border, x, y);
	y = y + 22;
	if (part_dish_name == "操作" || part_dish_name == "贴士") {
		if (part_dish == null) {
			bottomRightCanvasContext.drawImage(middle_border, x, y);
			bottomRightCanvasContext.fillText("暂无", x + 20, y + 27);
			y = y + 30;
		} else {
			for ( var i = 0; i < part_dish.length; i++) {
				iframe_font = part_dish[i];
				while (iframe_font.length >= iframe_font_num + 29) {
					bottomRightCanvasContext.drawImage(middle_border, x, y);
					sub_string = part_dish[i].substring(iframe_font_num,
							iframe_font_num + 29);
					iframe_font_num = iframe_font_num + 29;
					bottomRightCanvasContext.fillText(sub_string, x + 20,
							y + 27);
					y = y + 30;
				}
				bottomRightCanvasContext.drawImage(middle_border, x, y);
				sub_string = iframe_font.substring(iframe_font_num);
				bottomRightCanvasContext.fillText(sub_string, x + 20, y + 27);
				y = y + 30;
				iframe_font_num = 0;
			}// end for loop
		}

	} else {
		if (part_dish == null) {
			bottomRightCanvasContext.drawImage(middle_border, x, y);
			bottomRightCanvasContext.fillText("暂无", x + 20, y + 27);
			y = y + 30;
		} else {
			for ( var i = 0; i < part_dish.length; i++) {
				if (i == 0) {
					iframe_font = iframe_font + part_dish[i];
				} else {
					iframe_font = iframe_font + "、" + part_dish[i];
				}
				if (iframe_font.length > iframe_font_num + 29) {
					bottomRightCanvasContext.drawImage(middle_border, x, y);
					// 根据相差值绘制换行规则
					sub_string = iframe_font.substring(iframe_font_num,
							iframe_font_num + 29);
					iframe_font_num = iframe_font_num + 29;
					bottomRightCanvasContext.fillText(sub_string, x + 20,
							y + 27);
					y = y + 30;
				}
				// 绘制剩下不足29个的文字
				if (i == part_dish.length - 1) {
					bottomRightCanvasContext.drawImage(middle_border, x, y);
					sub_string = iframe_font.substring(iframe_font_num);
					bottomRightCanvasContext.fillText(sub_string, x + 20,
							y + 27);
					y = y + 30;
				}
			}// end for loop
		}// end if
	}

	bottomRightCanvasContext.drawImage(bottom_boder, x, y);
	y = y + 5 + 30;
	bottomRightCanvasContext.fillStyle = "#fff";
	return y;
}

// 计算drawExtendDishDetail（）的高度
function accountDrawExtendDishDetailY(result) {
	var x = 10;
	var y = 16;

	// 材料
	y = accountDrawExtendPartDish(y, result.ingredientslist, "材料");
	// 调料
	y = accountDrawExtendPartDish(y, result.condimentlist, "调料");
	// 操作
	y = accountDrawExtendPartDish(y, result.directions, "操作");
	// 提示
	y = accountDrawExtendPartDish(y, result.tips, "贴士");

	return y;
}

// 计算绘制展开版大图高度
function accountDrawBigImg(y) {
	var DISHIMGHEIGHT = 221;
	var DISHIMGWIDTH = 357;
	var temp_y = 0;

	y = y + 36 + 5;
	y = y + 22;

	for ( var i = 0; i < 8; i++) {
		y = y + 30;
	}
	y = y + 5 + 30;
	return y;
}

// 计算绘制展开版菜式块高度
function accountDrawExtendPartDish(y, part_dish, part_dish_name) {
	var iframe_font = "";
	var iframe_font_num = 0;
	var sub_string = "";

	y = y + 36 + 5;
	// 绘制矩形框块
	y = y + 22;

	if (part_dish_name == "操作" || part_dish_name == "贴士") {
		if (part_dish == null) {
			y = y + 30;
		} else {
			for ( var i = 0; i < part_dish.length; i++) {
				iframe_font = part_dish[i];
				while (iframe_font.length >= iframe_font_num + 17) {
					iframe_font_num = iframe_font_num + 17;
					y = y + 30;
				}
				y = y + 30;
				iframe_font_num = 0;
			}// end for loop
		}
	} else {
		if (part_dish == null) {
			y = y + 30;
		} else {
			for ( var i = 0; i < part_dish.length; i++) {
				if (i == 0) {
					iframe_font = iframe_font + part_dish[i];
				} else {
					iframe_font = iframe_font + "、" + part_dish[i];
				}
				if (iframe_font.length >= iframe_font_num + 17) {
					// 根据相差值绘制换行规则
					iframe_font_num = iframe_font_num + 17;
					y = y + 30;
				}
				// 绘制最后的文字
				if (i == part_dish.length - 1) {
					while (iframe_font.length >= iframe_font_num + 17) {
						iframe_font_num = iframe_font_num + 17;
						y = y + 30;
					}
					y = y + 30;
				}
			}
		}// end else
	}// end else
	y = y + 5 + 30;
	return y;
}

// 绘制展开详细菜式内容
function drawExtendDishDetail(result) {
	var x = 10;
	var y = 16;
	var list_img = new Image();
	var list_icon = new Image();
	var top_border = new Image();
	var middle_border = new Image();
	var bottom_boder = new Image();

	var temp_y = 0;
	var dish_img = new Image();

	var canvas_height = accountDrawExtendDishDetailY(result);
	if (canvas_height < 600) {
		if (topDivSign) {
			canvas_height = 540;
		} else {
			canvas_height = 600;
		}
	}
	bottomRightCanvas.attr("height", canvas_height);

	bottomRightCanvasContext.fillStyle = "#fff";
	bottomRightCanvasContext.font = "bold 23px Times New Roman";

	dish_img.onload = function() {
		temp_y = drawBigImg(x + 10 + 437 + 10, y, list_img, result, top_border,
				middle_border, bottom_boder, dish_img);

		// 材料
		y = drawExtendPartDish(x, y, result.ingredientslist, "材料", list_icon,
				top_border, middle_border, bottom_boder);
		// 调料
		y = drawExtendPartDish(x, y, result.condimentlist, "调料", list_icon,
				top_border, middle_border, bottom_boder);
		// 操作
		y = drawExtendPartDish(x, y, result.directions, "操作", list_icon,
				top_border, middle_border, bottom_boder);
		// 提示
		y = drawExtendPartDish(x, y, result.tips, "贴士", list_icon, top_border,
				middle_border, bottom_boder);
	}

	top_border.src = "./view/images/topborder2.png";
	middle_border.src = "./view/images/middleborder2.png";
	bottom_boder.src = "./view/images/bottomborder2.png";

	list_icon.src = "./view/images/dishicon.png";
	list_img.src = "./view/images/longicon.png";
	dish_img.src = "./dishimage/" + result.imageArray[0];
}

// 绘制展开版菜式块
function drawExtendPartDish(x, y, part_dish, part_dish_name, list_icon,
		top_border, middle_border, bottom_boder) {
	var iframe_font = "";
	var iframe_font_num = 0;
	var sub_string = "";

	bottomRightCanvasContext.drawImage(list_icon, x, y);
	bottomRightCanvasContext.fillText(part_dish_name, x + 37, y + 27);
	bottomRightCanvasContext.fillStyle = "#000";

	y = y + 36 + 5;
	// 绘制矩形框块
	bottomRightCanvasContext.drawImage(top_border, x, y);
	y = y + 22;

	if (part_dish_name == "操作" || part_dish_name == "贴士") {
		if (part_dish == null) {
			bottomRightCanvasContext.drawImage(middle_border, x, y);
			bottomRightCanvasContext.fillText("暂无", x + 20, y + 27);
			y = y + 30;
		} else {
			for ( var i = 0; i < part_dish.length; i++) {
				iframe_font = part_dish[i];
				while (iframe_font.length >= iframe_font_num + 17) {
					bottomRightCanvasContext.drawImage(middle_border, x, y);
					sub_string = part_dish[i].substring(iframe_font_num,
							iframe_font_num + 17);
					iframe_font_num = iframe_font_num + 17;
					bottomRightCanvasContext.fillText(sub_string, x + 20,
							y + 27);
					y = y + 30;
				}
				bottomRightCanvasContext.drawImage(middle_border, x, y);
				sub_string = iframe_font.substring(iframe_font_num) + "。";
				bottomRightCanvasContext.fillText(sub_string, x + 20, y + 27);
				y = y + 30;
				iframe_font_num = 0;
			}// end for loop
		}
	} else {
		if (part_dish == null) {
			bottomRightCanvasContext.drawImage(middle_border, x, y);
			bottomRightCanvasContext.fillText("暂无", x + 20, y + 27);
			y = y + 30;
		} else {
			for ( var i = 0; i < part_dish.length; i++) {
				if (i == 0) {
					iframe_font = iframe_font + part_dish[i];
				} else {
					iframe_font = iframe_font + "、" + part_dish[i];
				}
				if (iframe_font.length >= iframe_font_num + 17) {
					bottomRightCanvasContext.drawImage(middle_border, x, y);
					// 根据相差值绘制换行规则
					sub_string = iframe_font.substring(iframe_font_num,
							iframe_font_num + 17);
					iframe_font_num = iframe_font_num + 17;
					bottomRightCanvasContext.fillText(sub_string, x + 20,
							y + 27);
					y = y + 30;
				}
				// 绘制最后的文字
				if (i == part_dish.length - 1) {
					while (iframe_font.length >= iframe_font_num + 17) {
						bottomRightCanvasContext.drawImage(middle_border, x, y);
						// 根据相差值绘制换行规则
						sub_string = iframe_font.substring(iframe_font_num,
								iframe_font_num + 17);
						iframe_font_num = iframe_font_num + 17;
						bottomRightCanvasContext.fillText(sub_string, x + 20,
								y + 27);
						y = y + 30;
					}
					bottomRightCanvasContext.drawImage(middle_border, x, y);
					sub_string = iframe_font.substring(iframe_font_num);
					bottomRightCanvasContext.fillText(sub_string, x + 20,
							y + 27);
					y = y + 30;
				}
			}
		}// end else
	}// end else

	bottomRightCanvasContext.drawImage(bottom_boder, x, y);
	y = y + 5 + 30;
	bottomRightCanvasContext.fillStyle = "#fff";
	return y;
}

// 绘制展开版大图
function drawBigImg(x, y, list_img, result, top_border, middle_border,
		bottom_boder, dish_img) {
	var DISHIMGHEIGHT = 221;
	var DISHIMGWIDTH = 357;
	var temp_y = 0;

	bottomRightCanvasContext.drawImage(list_img, x, y);
	bottomRightCanvasContext.fillText(result.dishname, x + 37, y + 27);
	y = y + 36 + 5;
	// 绘制矩形框块
	bottomRightCanvasContext.drawImage(top_border, x, y);
	y = y + 22;
	temp_y = y + 10;
	for ( var i = 0; i < 8; i++) {
		bottomRightCanvasContext.drawImage(middle_border, x, y);
		y = y + 30;
	}
	bottomRightCanvasContext.drawImage(bottom_boder, x, y);
	bottomRightCanvasContext.drawImage(dish_img, x + 40, temp_y, DISHIMGWIDTH,
			DISHIMGHEIGHT);
	y = y + 5 + 30;

	return y;
}

// bottomRightCanvas拉动事件响应
eventBottomRightCanvasPull = function(event) {
	if (event.direction == "left" && bottomMiddleSign == true) {
		menuDo.execute("pull", "middle");
	} else if (event.direction == "right" && bottomMiddleSign == false) {
		menuDo.execute("pull", "middle");
	} else if (event.direction == "right" && bottomMiddleSign == true
			&& bottomLeftSign == false) {
		menuDo.execute("pull", "left");
	} else if (event.direction == "left" && bottomMiddleSign == false
			&& bottomLeftSign == true) {
		menuDo.execute("pull", "left");
	}
//	else if (event.direction == "up" && topDivSign == true) {
//		menuDo.execute("pull", "top");
//	} else if (event.direction == "down" && topDivSign == false) {
//		menuDo.execute("pull", "top");
//	}
}

// bottomRightCanvas点击事件响应
eventBottomRightCanvasClick = function(event) {
	if (eventSign == false) {
		menuDo.execute("pull", "top");
	}
}
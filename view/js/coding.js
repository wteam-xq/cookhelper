//topCanvas
// ʱ�����
var hour = 0;
var minute = 0;
var second = 0;
var time = 0;

// ״̬���� 0:�ɱ༭��ȫ�㣻-1����ʱ״̬��1���ɱ༭��ȫ��
var timeSign = 0;

// ��topCanvasչ��̬
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

// ��topCanvas����̬
drowtopDivSystole = function() {

}

// topCanvas�����¼���Ӧ
eventTopCanvasPull = function(event) {
}

// topCanvas�϶��¼���Ӧ
eventTopCanvasDrag = function(event) {
}

// topCanvas�϶������¼���Ӧ
eventTopCanvasDragEnd = function(event) {
	alert("�϶�������canvas");
}

// topCanvas����¼���Ӧ
eventTopCanvasClick = function(event) {
	// ����
	if (event.endX >= 220 && event.endX <= 300
			&& event.endY <= (90 - CODING_OFFSET)) {
		if (timeSign == 1) {
			editTime();
			timerDo.execute("resetTimer");
			writeTime("0", "0", "0");
			timeSign = 0;
		}
	}
	// ��ʼ
	else if (event.endX >= 315 && event.endX <= 395
			&& event.endY <= (90 - CODING_OFFSET)) {
		if (timeSign == 1) {
			editTime();
			changeInput();
			timerDo.execute("countDown");
			timeSign = -1;
		}
	}
	// ��ͣ
	else if (event.endX >= 410 && event.endX <= 490
			&& event.endY <= (90 - CODING_OFFSET)) {
		if (timeSign == -1) {
			timerDo.execute("pause");
			timeSign = 1;
			changeDiv();
			writeTime(hour, minute, second);
		}
	}
	// ���
	else if (event.endX >= 880 && event.endX <= 1060
			&& event.endY <= (90 - CODING_OFFSET)) {
		menuDo.execute("randomDish");
	} else {
		menuDo.execute("pull", "top");
	}
}

// ����ʱ��һЩ����
// ���ʱ��
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

// �ı�div��ǩ
function changeDiv() {
	document.getElementById("time").innerHTML = "<input type='number' min='0' max='24' step='1' value='0' name='hour' onchange='editTimer();'>:<input type='number' min='0' max='59' value='0' step='1' name='minute' onchange='editTimer();'>:<input type='number' min='0' max='59' value='0' step='1' name='second' onchange='editTimer();'>";
}

// ���̨ʱ��ͬ��
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

// ��ȡ����ʱ��
function editTime() {
	hour = $("input[name='hour']").attr("value");
	minute = $("input[name='minute']").attr("value");
	second = $("input[name='second']").attr("value");
}

// ����ʱ
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

// ��ʱ��д��ҳ����
function writeTime(hour, minute, second) {

	$("Input[name='hour']").attr("value", hour);
	$("Input[name='minute']").attr("value", minute);
	$("Input[name='second']").attr("value", second);

}

// bottomLeftCanvas
// �û����ɸѡ��ʽ���
var bold_num = 0;
// �����Ż�õĽ��
var sorts_values = [];
var dishs = [];
var contract_dishs = [];
// �жϵ������
var point_box_name = "";
// ��bottomLeftCanvasչ��̬
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

// ��bottomLeftCanvas����̬
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
// ����26����ĸ
function drawAlphs(start_y) {
	var alp = null;
	var font_x = 20;
	var font_y = start_y;
	// ������ɫ
	bottomLeftCanvasContext.fillStyle = '#A79D9D';
	bottomLeftCanvasContext.font = "bold 23px Times New Roman";
	for ( var i = 65; i < 91; i++) {
		alp = String.fromCharCode(i);
		bottomLeftCanvasContext.fillText(alp, font_x, font_y);
		font_y = font_y + 23;
	}
}

// ����ɸѡ��ʽ
function drawSearchMode(bold_num) {
	bottomLeftCanvasContext.fillStyle = "#3E1719";
	var img_x = 65;
	var img_selector_y = 0;
	var img_green_y = 60;
	var img_selector = new Image();
	var img_green = new Image();
	var mode_fonts = new Array("����ĸ", "ʳ��", "��ϵ", "�����ʽ", "���˼���", "��ζ");
	bottomLeftCanvasContext.font = "bold 22px Times New Roman";
	img_selector.onload = function() {
		bottomLeftCanvasContext.drawImage(img_selector, img_x,
				img_selector_y + 5);
		bottomLeftCanvasContext.fillText("ɸѡ��ʽ", 102, img_selector_y + 36);
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
// ����eventExecute�������ص�yֵ
function accoutnEventExecuteY(result) {
	var interval = 40;
	var font_x = 0;
	var font_y = 70;

	// �����������
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

// ���ɸѡ��ʱ����Ӧ
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

	// ��ʽ��Y������
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
	// �����������ʽ
	var reg = /^[a-zA-Z]/;
	// �жϷǲ�ʽ��һ���ַ��Ƿ�Ϊ��ĸ
	for ( var i = 0; i < result.length; i++) {
		if (result[i].dishid == null) {
			if (reg.test(result[i])) {
				font_x = 20;
				// interval = 23;
			}
			break;
		}
	}

	// ������ɫ
	bottomLeftCanvasContext.fillStyle = '#A79D9D';
	bottomLeftCanvasContext.font = "bold 23px Times New Roman";
	// �����������
	sorts_values = [];
	var j = 0;
	var sub_string = "";
	for ( var i = 0; i < result.length; i++) {
		if (result[i].dishid == null) {
			// �������ֵ
			var json_result = {
				"name" : result[i],
				"y" : font_y
			};
			sorts_values[j] = json_result;
			j++;
			// �ضϳ��ȴ���2���ַ���
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

// bottomLeftCanvas�����¼���Ӧ
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
// bottomLeftCanvas�϶��¼���Ӧ
eventBottomLeftCanvasDrag = function(event) {
	// ��������ҳ����¼���Ӧ
	showBox(event);
}

// bottomLeftCanvas�϶������¼���Ӧ
eventBottomLeftCanvasDragEnd = function(event) {
	var box_dom = $("#left_prompt_box");
	box_dom.fadeOut('slow');
}

// bottomLeftCanvas����¼���Ӧ
eventBottomLeftCanvasClick = function(event) {
	if (eventSign == false) {
		var x = 60;
		var y = 140 - CODING_OFFSET;
		var mode_fonts = new Array("����ĸ", "ʳ��", "��ϵ", "�����ʽ", "���˼���", "��ζ");
		var font_length = 0;
		var max_y = y + 35;
		var max_x = 204;
		// �ϲ�div��������x,y��Ӧ�ı仯
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
				// ȡ����ʾ������ʽ
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

		// ��������ҳ����¼���Ӧ
		showBox(event);
		$("#left_prompt_box").fadeOut('slow');
	}
}

// �����ҳ����¼���Ӧ���϶��������
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
// ��bottomMiddleCanvasչ��̬
drowbottomMiddleDivStretch = function(heightModel, result) {
	// ��ò�ʽ��
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

// ��bottomMiddleCanvas����̬
drowbottomMiddleDivSystole = function(heightModel, result) {
	// ��ò�ʽ��
	getDishs(result);
	getContractDishs(result);
	if (heightModel == true) {
		drawPartDishs();
	} else if (heightModel == false) {
		drawPartDishs();
	}
}

// ��ò�ʽjson
function getDishs(result) {
	dishs = [];
	var dish_font_y = 37;
	var k = 0;

	// ����ɸѡ��ĳ������硰����ĸ������ĸ�����е����ˡ�S��
	if (point_box_name != "") {
		// ��ò�ʽ��
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
				// �ҵ����洢��һ��ʽ���Ƴ�ѭ��
				break;
			} else {
				continue;
			}

		}// end for loop
	} else {
		// ��ò�ʽ��
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

// ����������ʽjson
function getContractDishs(result) {
	contract_dishs = [];
	var k = 0;
	var y = 37;
	// ����ɸѡ��ĳ������硰����ĸ������ĸ�����е����ˡ�S��
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
				// �ҵ����洢��һ��ʽ���Ƴ�ѭ��
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

// ���Ʋ�ʽ
function drawDishs() {
	var x = 5;
	var y = 0;

	if (point_box_name != "") {
		// ����canvas�߶�
		var canvas_height = dishs[dishs.length - 1].y + 70;
		if (canvas_height < 600) {
			canvas_height = 600;
		}
		bottomMiddleCanvas.attr("height", canvas_height + "px");

		// ѭ����ѯ��������ʽ
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
						bottomMiddleCanvasContext.fillText("��ζ:"
								+ dishs[j].taste, x, y);
						x = x + 80;
						bottomMiddleCanvasContext.fillText("��ϵ:"
								+ dishs[j].cuisinename, x, y);
						y = y + 10 + 23;
						x = x - 80;
						bottomMiddleCanvasContext.fillText("��⿷�ʽ:"
								+ dishs[j].cookingmethodname, x, y);
						y = y + 10 + 23;
					} else {
						// ������һ����ʽ��Ԫ����ѭ��
						break;
					}
				}
				// ��������ʽ������ѭ��
				break;
			} else {
				continue;
			}
		}// end for loop
	} else {
		// ����canvas�߶�
		var canvas_height = dishs[dishs.length - 1].y + 70;
		if (canvas_height < 600) {
			if (topDivSign) {
				canvas_height = 540;
			} else {
				canvas_height = 600;
			}
		}
		bottomMiddleCanvas.attr("height", canvas_height + "px");

		// ѭ������һ�ݲ�ʽ
		for ( var i = 0; i < dishs.length; i++) {
			if (dishs[i].title == null) {
				y = dishs[i].y;
				bottomMiddleCanvasContext.fillStyle = "#85585A";
				bottomMiddleCanvasContext.font = "bold 23px Times New Roman";
				bottomMiddleCanvasContext.fillText(dishs[i].name, x, y);
				bottomMiddleCanvasContext.font = "15px Times New Roman";
				y = y + 10 + 23;
				bottomMiddleCanvasContext
						.fillText("��ζ:" + dishs[i].taste, x, y);
				x = x + 80;
				bottomMiddleCanvasContext.fillText(
						"��ϵ:" + dishs[i].cuisinename, x, y);
				y = y + 10 + 23;
				x = x - 80;
				bottomMiddleCanvasContext.fillText("��⿷�ʽ:"
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

// ���Ʋ��ֲ�ʽ
function drawPartDishs() {
	var x = 5;
	var y = 37;

	// ����canvas�߶�
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

		// ѭ����ѯ��������ʽ
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
						// ������һ����ʽ��Ԫ����ѭ��
						break;
					}
				}
				// ��������ʽ������ѭ��
				break;
			} else {
				continue;
			}
		}// end for loop
	} else {
		// ѭ������һ�ݲ�ʽ
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

// bottomMiddleCanvas�����¼���Ӧ
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

// bottomMiddleCanvas����¼���Ӧ
eventBottomMiddleCanvasClick = function(event) {
	if (eventSign == false) {
		var g_x = event.layerX;
		var g_y = event.layerY;

		var x = 0;
		var max_x = 200;
		/* var min_y = 95 - CODING_OFFSET; */
		var max_y = 0;

		// �в�canvas��չ��״̬
		if (!bottomMiddleSign) {
			// alert("�����չ��״̬");
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
// ��bottomRightCanvasչ��̬
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

// ��bottomRightCanvas����̬
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

// �������һ����ϸҳ��ĸ߶�
function account_y_height(result) {
	var x = 10;
	var y = 16;
	var temp_y = 0;
	var DISHIMGHEIGHT = 408;
	var DISHIMGWIDTH = 660;

	y = y + 36 + 5;
	// ���ƾ��ο��
	y = y + 22;
	temp_y = y + 7;
	for ( var i = 0; i < 14; i++) {
		y = y + 30;
	}

	y = y + 5 + 30;

	// ����
	y = account_partDish_height(y, result.ingredientslist, "����");
	// ����
	y = account_partDish_height(y, result.condimentlist, "����");
	// ����
	y = account_partDish_height(y, result.directions, "����");
	// ��ʾ
	y = account_partDish_height(y, result.tips, "��ʾ");

	return y;
}

// �������һ��ҳ���ĸ߶�
function account_partDish_height(y, part_dish, part_dish_name) {
	var iframe_font = "";
	var iframe_font_num = 0;
	var sub_string = "";

	y = y + 36 + 5;
	// ���ƾ��ο��

	y = y + 22;
	if (part_dish_name == "����" || part_dish_name == "��ʿ") {
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
					iframe_font = iframe_font + "��" + part_dish[i];
				}
				if (iframe_font.length > iframe_font_num + 29) {
					// �������ֵ���ƻ��й���
					sub_string = iframe_font.substring(iframe_font_num,
							iframe_font_num + 29);
					iframe_font_num = iframe_font_num + 29;
					y = y + 30;
				}
				// ����ʣ�²���29��������
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

// ������ϸ��ʽ����
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

	// ����canvas�߶�
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
		// ���ƾ��ο��
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

		// ����
		y = drawPartDish(x, y, result.ingredientslist, "����", list_icon,
				top_border, middle_border, bottom_boder);
		// ����
		y = drawPartDish(x, y, result.condimentlist, "����", list_icon,
				top_border, middle_border, bottom_boder);
		// ����
		y = drawPartDish(x, y, result.directions, "����", list_icon, top_border,
				middle_border, bottom_boder);
		// ��ʾ
		y = drawPartDish(x, y, result.tips, "��ʿ", list_icon, top_border,
				middle_border, bottom_boder);

	}

	top_border.src = "./view/images/topborder.png";
	middle_border.src = "./view/images/middleborder.png";
	bottom_boder.src = "./view/images/bottomborder.png";

	list_icon.src = "./view/images/dishicon.png";
	list_img.src = "./view/images/longicon.png";
	dish_img.src = "./dishimage/" + result.imageArray[0];
}

// ����һ�ݲ�ʽ��
function drawPartDish(x, y, part_dish, part_dish_name, list_icon, top_border,
		middle_border, bottom_boder) {
	var iframe_font = "";
	var iframe_font_num = 0;
	var sub_string = "";

	bottomRightCanvasContext.drawImage(list_icon, x, y);
	bottomRightCanvasContext.fillText(part_dish_name, x + 37, y + 27);
	bottomRightCanvasContext.fillStyle = "#000";

	y = y + 36 + 5;
	// ���ƾ��ο��
	bottomRightCanvasContext.drawImage(top_border, x, y);
	y = y + 22;
	if (part_dish_name == "����" || part_dish_name == "��ʿ") {
		if (part_dish == null) {
			bottomRightCanvasContext.drawImage(middle_border, x, y);
			bottomRightCanvasContext.fillText("����", x + 20, y + 27);
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
			bottomRightCanvasContext.fillText("����", x + 20, y + 27);
			y = y + 30;
		} else {
			for ( var i = 0; i < part_dish.length; i++) {
				if (i == 0) {
					iframe_font = iframe_font + part_dish[i];
				} else {
					iframe_font = iframe_font + "��" + part_dish[i];
				}
				if (iframe_font.length > iframe_font_num + 29) {
					bottomRightCanvasContext.drawImage(middle_border, x, y);
					// �������ֵ���ƻ��й���
					sub_string = iframe_font.substring(iframe_font_num,
							iframe_font_num + 29);
					iframe_font_num = iframe_font_num + 29;
					bottomRightCanvasContext.fillText(sub_string, x + 20,
							y + 27);
					y = y + 30;
				}
				// ����ʣ�²���29��������
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

// ����drawExtendDishDetail�����ĸ߶�
function accountDrawExtendDishDetailY(result) {
	var x = 10;
	var y = 16;

	// ����
	y = accountDrawExtendPartDish(y, result.ingredientslist, "����");
	// ����
	y = accountDrawExtendPartDish(y, result.condimentlist, "����");
	// ����
	y = accountDrawExtendPartDish(y, result.directions, "����");
	// ��ʾ
	y = accountDrawExtendPartDish(y, result.tips, "��ʿ");

	return y;
}

// �������չ�����ͼ�߶�
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

// �������չ�����ʽ��߶�
function accountDrawExtendPartDish(y, part_dish, part_dish_name) {
	var iframe_font = "";
	var iframe_font_num = 0;
	var sub_string = "";

	y = y + 36 + 5;
	// ���ƾ��ο��
	y = y + 22;

	if (part_dish_name == "����" || part_dish_name == "��ʿ") {
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
					iframe_font = iframe_font + "��" + part_dish[i];
				}
				if (iframe_font.length >= iframe_font_num + 17) {
					// �������ֵ���ƻ��й���
					iframe_font_num = iframe_font_num + 17;
					y = y + 30;
				}
				// ������������
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

// ����չ����ϸ��ʽ����
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

		// ����
		y = drawExtendPartDish(x, y, result.ingredientslist, "����", list_icon,
				top_border, middle_border, bottom_boder);
		// ����
		y = drawExtendPartDish(x, y, result.condimentlist, "����", list_icon,
				top_border, middle_border, bottom_boder);
		// ����
		y = drawExtendPartDish(x, y, result.directions, "����", list_icon,
				top_border, middle_border, bottom_boder);
		// ��ʾ
		y = drawExtendPartDish(x, y, result.tips, "��ʿ", list_icon, top_border,
				middle_border, bottom_boder);
	}

	top_border.src = "./view/images/topborder2.png";
	middle_border.src = "./view/images/middleborder2.png";
	bottom_boder.src = "./view/images/bottomborder2.png";

	list_icon.src = "./view/images/dishicon.png";
	list_img.src = "./view/images/longicon.png";
	dish_img.src = "./dishimage/" + result.imageArray[0];
}

// ����չ�����ʽ��
function drawExtendPartDish(x, y, part_dish, part_dish_name, list_icon,
		top_border, middle_border, bottom_boder) {
	var iframe_font = "";
	var iframe_font_num = 0;
	var sub_string = "";

	bottomRightCanvasContext.drawImage(list_icon, x, y);
	bottomRightCanvasContext.fillText(part_dish_name, x + 37, y + 27);
	bottomRightCanvasContext.fillStyle = "#000";

	y = y + 36 + 5;
	// ���ƾ��ο��
	bottomRightCanvasContext.drawImage(top_border, x, y);
	y = y + 22;

	if (part_dish_name == "����" || part_dish_name == "��ʿ") {
		if (part_dish == null) {
			bottomRightCanvasContext.drawImage(middle_border, x, y);
			bottomRightCanvasContext.fillText("����", x + 20, y + 27);
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
				sub_string = iframe_font.substring(iframe_font_num) + "��";
				bottomRightCanvasContext.fillText(sub_string, x + 20, y + 27);
				y = y + 30;
				iframe_font_num = 0;
			}// end for loop
		}
	} else {
		if (part_dish == null) {
			bottomRightCanvasContext.drawImage(middle_border, x, y);
			bottomRightCanvasContext.fillText("����", x + 20, y + 27);
			y = y + 30;
		} else {
			for ( var i = 0; i < part_dish.length; i++) {
				if (i == 0) {
					iframe_font = iframe_font + part_dish[i];
				} else {
					iframe_font = iframe_font + "��" + part_dish[i];
				}
				if (iframe_font.length >= iframe_font_num + 17) {
					bottomRightCanvasContext.drawImage(middle_border, x, y);
					// �������ֵ���ƻ��й���
					sub_string = iframe_font.substring(iframe_font_num,
							iframe_font_num + 17);
					iframe_font_num = iframe_font_num + 17;
					bottomRightCanvasContext.fillText(sub_string, x + 20,
							y + 27);
					y = y + 30;
				}
				// ������������
				if (i == part_dish.length - 1) {
					while (iframe_font.length >= iframe_font_num + 17) {
						bottomRightCanvasContext.drawImage(middle_border, x, y);
						// �������ֵ���ƻ��й���
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

// ����չ�����ͼ
function drawBigImg(x, y, list_img, result, top_border, middle_border,
		bottom_boder, dish_img) {
	var DISHIMGHEIGHT = 221;
	var DISHIMGWIDTH = 357;
	var temp_y = 0;

	bottomRightCanvasContext.drawImage(list_img, x, y);
	bottomRightCanvasContext.fillText(result.dishname, x + 37, y + 27);
	y = y + 36 + 5;
	// ���ƾ��ο��
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

// bottomRightCanvas�����¼���Ӧ
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

// bottomRightCanvas����¼���Ӧ
eventBottomRightCanvasClick = function(event) {
	if (eventSign == false) {
		menuDo.execute("pull", "top");
	}
}
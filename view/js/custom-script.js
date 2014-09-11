//���峣��
var CODING_OFFSET = 30;

// Div
// topDiv
var topDiv = null;
// bottomDiv
var bottomDiv = null;
// bottomLeftDiv
var bottomLeftDiv = null;
// bottomMiddleDiv
var bottomMiddleDiv = null;
// bottomRightDiv
var bottomRightDiv = null;

// Canvas
// topCanvas
var topCanvas = null;
// bottomLeftCanvas
var bottomLeftCanvas = null;
// bottomMiddleCanvas
var bottomMiddleCanvas = null;
// bottomRightCanvas
var bottomRightCanvas = null;

// Context
// topCanvasContext
var topCanvasContext = null;
// bottomLeftCanvasContext
var bottomLeftCanvasContext = null;
// bottomMiddleCanvasContext
var bottomMiddleCanvasContext = null;
// bottomRightCanvasContext
var bottomRightCanvasContext = null;

// ��־
// topDiv
var topDivSign = true;
// ʱ����ʾ״̬
var clockSign = false;
// bottomLeftDiv
var bottomLeftSign = false;
// bottomMiddleDiv
var bottomMiddleSign = true;
// �¼���Ӧ
var eventSign = false;
// ����Ƿ�ס
var mousedownSign = false;

// ͨ����
// �¼���Ӧ����������
if (typeof EventData == 'undefined') {
	function EventData() {
		this.startX = null;
		this.startY = null;
		this.endX = null;
		this.endY = null;
		this.lastX = null;
		this.lastY = null;
		this.time = null;
		this.direction = null;
		this.distance = null;
	}
}

// topCanvas
// ��ʼ��topCanvas
inittopCanvas = function(result) {
	topCanvas = $("#topCanvas");
	topCanvasContext = topCanvas.get(0).getContext('2d');
	topDiv = $("#top");
	cleartopCanvas();
	drowtopDivStretch();
	topCanvas.get(0).addEventListener("touchstart", eventTopCanvasTouchStart,
			false);
	topCanvas.get(0).addEventListener("touchmove", eventTopCanvasTouchMove,
			false);
	topCanvas.get(0)
			.addEventListener("touchend", eventTopCanvasTouchEnd, false);

	topCanvas.get(0).addEventListener("mousedown", eventTopCanvasMouseStart,
			false);
	topCanvas.get(0).addEventListener("mousemove", eventTopCanvasMouseMove,
			false);
	topCanvas.get(0).addEventListener("mouseup", eventTopCanvasMouseEnd, false);
	topCanvas.get(0)
			.addEventListener("mouseout", eventTopCanvasMouseEnd, false);
}

// ����topCanvas������С
edittopCanvasSize = function(width, height) {
	if (width) {
		topCanvas.attr("width", width);
	}
	if (height) {
		topCanvas.attr("height", height);
	}
}

// ���topCanvas����
cleartopCanvas = function() {
	edittopCanvasSize(topCanvas.attr("width"), topCanvas.attr("height"));
}

// չ��topDiv
stretchtopDiv = function(result) {
	var fun = function() {
		clearbottomLeftCanvas();
		if (bottomLeftSign == true) {
			drowbottomLeftDivStretch(false, result.content);
		} else if (bottomLeftSign == false) {
			drowbottomLeftDivSystole(false, result.content);
		}
		clearbottomMiddleCanvas();
		if (bottomMiddleSign == true) {
			drowbottomMiddleDivStretch(false, result.content);
		} else if (bottomMiddleSign == false) {
			drowbottomMiddleDivSystole(false, result.content);
		}
		clearbottomRightCanvas();
		if (bottomMiddleSign == false && bottomLeftSign == false) {
			drowbottomRightDivStretch(false, result.dish);
		} else {
			drowbottomRightDivSystole(false, result.dish);
		}
		eventSign = false;
		$("#time").css("display", "inline");
	}
	edittopCanvasSize(null, "60");
	drowtopDivStretch();
	topDivSign = true;
	topDiv.animate({
		height : "60px"
	}, {
		queue : false
	});
	bottomDiv.animate({
		height : "540px"
	}, fun);
}

// ����topDiv
systoletopDiv = function(result) {
	var fun = function() {
		cleartopCanvas();
		drowtopDivSystole();
		topDivSign = false;
		eventSign = false;
	}

	editbottomLeftCanvasSize(null, "600px");
	if (bottomLeftSign == true) {
		drowbottomLeftDivStretch(true, result.content);
	} else if (bottomLeftSign == false) {
		drowbottomLeftDivSystole(true, result.content);
	}
	editbottomMiddleCanvasSize(null, "600px");
	if (bottomMiddleSign == true) {
		drowbottomMiddleDivStretch(true, result.content);
	} else if (bottomMiddleSign == false) {
		drowbottomMiddleDivSystole(true, result.content);
	}
	editbottomRightCanvasSize(null, "600px");
	if (bottomLeftSign == false && bottomMiddleSign == false) {
		drowbottomRightDivStretch(true, result.dish);
	} else {
		drowbottomRightDivSystole(true, result.dish);
	}

	topDiv.animate({
		height : "0px"
	}, {
		queue : false
	});
	bottomDiv.animate({
		height : "600px"
	}, fun);
}

// topDiv��С�任�¼�
movetopDiv = function(result) {
	if (eventSign == false) {
		eventSign = true;
		if (topDivSign == true) {
			$("#time").css("display", "none");
			systoletopDiv(result);// ����
		} else if (topDivSign == false) {
			stretchtopDiv(result);// �쿪
			topDivSign = true;
		}
	}
}

// topCanvasTouchStart�¼���Ӧ
var topStartX = null;
var topStartY = null;
var topStartTime = null;
var topLastX = null;
var topLastY = null;
var topStartSetTimeoutId = null;
var topStartSetTimeout = function() {
	var eventData = new EventData();
	eventData.startX = topStartX;
	eventData.startY = topStartY;
	eventData.endX = topStartX;
	eventData.endY = topStartY;
	eventData.lastX = null;
	eventData.lastY = null;
	eventData.time = 300;
	eventData.direction = null;
	eventData.distance = 0;
	eventTopCanvasDrag(eventData);
	topLastX = topStartX;
	topLastY = topStartY;
}
eventTopCanvasTouchStart = function(event) {
	if (eventSign == false) {
		var topStartDate = new Date();
		topStartTime = topStartDate.getTime();
		event.preventDefault();
		var touch = event.changedTouches[0];
		topStartX = touch.pageX;
		topStartY = touch.pageY;
		topStartSetTimeoutId = setTimeout("topStartSetTimeout();", 300);
	}
}

// topCanvasTouchMove�¼���Ӧ
var topMoveX = null;
var topMoveY = null;
var topDirection = null;
var topMoveTime = null;
eventTopCanvasTouchMove = function(event) {
	if (eventSign == false) {
		if (topStartSetTimeoutId) {
			clearTimeout(topStartSetTimeoutId);
		}
		var topMoveDate = new Date();
		topMoveTime = topMoveDate.getTime();
		event.preventDefault();
		var touch = event.changedTouches[0];
		var testdiv = $("#test");
		topMoveX = touch.pageX;
		topMoveY = touch.pageY;
		var topOffsetX = topMoveX - topStartX;
		var topOffsetY = topMoveY - topStartY;
		var topMoveDistance = Math.sqrt((topOffsetX * topOffsetX)
				+ (topOffsetY * topOffsetY));
		// ˮƽ�����ƶ�
		if (Math.abs(topOffsetX) > Math.abs(topOffsetY)) {
			if (topOffsetX >= 0) {
				topDirection = "right";
			} else if (topOffsetX < 0) {
				topDirection = "left";
			}
		} // ��ֱ�����ƶ�
		else if (Math.abs(topOffsetX) <= Math.abs(topOffsetY)) {
			if (topOffsetY >= 0) {
				topDirection = "down";
			} else if (topOffsetY < 0) {
				topDirection = "up";
			}
		}
		// �϶��¼�
		if ((topMoveTime - topStartTime) > 300) {
			var eventData = new EventData();
			eventData.startX = topStartX;
			eventData.startY = topStartY;
			eventData.endX = topMoveX;
			eventData.endY = topMoveY;
			eventData.lastX = topLastX;
			eventData.lastY = topLastY;
			eventData.time = topMoveTime - topStartTime;
			eventData.direction = topDirection;
			eventData.distance = topMoveDistance;
			eventTopCanvasDrag(eventData);
			topLastX = topMoveX;
			topLastY = topMoveY;
		}
		testdiv.html("��CanvasMoveX:" + topMoveX + " ��CanvasMoveY:" + topMoveY);
	}
}

// topCanvasTouchEnd�¼���Ӧ
var topEndX = null;
var topEndY = null;
var topEndTime = null;
eventTopCanvasTouchEnd = function(event) {
	if (eventSign == false) {
		if (topStartSetTimeoutId) {
			clearTimeout(topStartSetTimeoutId);
		}
		var topEndDate = new Date();
		topEndTime = topEndDate.getTime();
		event.preventDefault();
		var touch = event.changedTouches[0];
		topEndX = touch.pageX;
		topEndY = touch.pageY;
		var topDistanceX = topEndX - topStartX;
		var topDistanceY = topEndY - topStartY;
		var topDistance = Math.sqrt((topDistanceX * topDistanceX)
				+ (topDistanceY * topDistanceY));
		// �����¼�
		if ((topEndTime - topStartTime) < 300 && topDistance > 30) {
			var eventData = new EventData();
			eventData.startX = topStartX;
			eventData.startY = topStartY;
			eventData.endX = topEndX;
			eventData.endY = topEndY;
			eventData.time = topEndTime - topStartTime;
			eventData.direction = topDirection;
			eventData.distance = topDistance;
			eventTopCanvasPull(eventData);
		}
		// ����¼�
		if ((topEndTime - topStartTime) < 300 && topDistance < 30) {
			var eventData = new EventData();
			eventData.startX = topStartX;
			eventData.startY = topStartY;
			eventData.endX = topEndX;
			eventData.endY = topEndY;
			eventData.time = topEndTime - topStartTime;
			eventData.direction = topDirection;
			eventData.distance = topDistance;
			eventTopCanvasClick(eventData);
		}

		// �϶������¼�
		if ((topEndTime - topStartTime) > 300) {
			var eventData = new EventData();
			eventData.startX = topStartX;
			eventData.startY = topStartY;
			eventData.endX = topEndX;
			eventData.endY = topEndY;
			eventData.lastX = topLastX;
			eventData.lastY = topLastY;
			eventData.time = topEndTime - topStartTime;
			eventData.direction = topDirection;
			eventData.distance = topDistance;
			eventTopCanvasDragEnd(eventData);
		}
	}
}

// topCanvasMouseStart�¼���Ӧ
var topMouseStartX = null;
var topMouseStartY = null;
var topMouseLastX = null;
var topMouseLastY = null;
var topMouseStartTime = null;
var topMouseStartSetTimeoutId = null;
var topMouseStartSetTimeout = function() {
	var eventData = new EventData();
	eventData.startX = topMouseStartX;
	eventData.startY = topMouseStartY;
	eventData.endX = topMouseStartX;
	eventData.endY = topMouseStartY;
	eventData.lastX = null;
	eventData.lastY = null;
	eventData.time = 300;
	eventData.direction = null;
	eventData.distance = 0;
	eventTopCanvasDrag(eventData);
	topMouseLastX = topMouseStartX;
	topMouseLastY = topMouseStartY;
}
eventTopCanvasMouseStart = function(event) {
	if (eventSign == false) {
		var topMouseStartDate = new Date();
		topMouseStartTime = topMouseStartDate.getTime();
		topMouseStartX = event.screenX;
		topMouseStartY = event.screenY;
		mousedownSign = true;
		topMouseStartSetTimeoutId = setTimeout("topMouseStartSetTimeout();",
				300);
	}
}

// topCanvasMouseMove�¼���Ӧ
var topMouseMoveX = null;
var topMouseMoveY = null;
var topMouseDirection = null;
var topMouseMoveTime = null;
eventTopCanvasMouseMove = function(event) {
	if (eventSign == false && mousedownSign == true) {
		if (topStartSetTimeoutId) {
			clearTimeout(topMouseStartSetTimeoutId);
		}
		var topMouseMoveDate = new Date();
		topMouseMoveTime = topMouseMoveDate.getTime();
		var testdiv = $("#test");
		topMouseMoveX = event.screenX;
		topMouseMoveY = event.screenY;
		var topMouseOffsetX = topMouseMoveX - topMouseStartX;
		var topMouseOffsetY = topMouseMoveY - topMouseStartY;
		var topMouseMoveDistance = Math
				.sqrt((topMouseOffsetX * topMouseOffsetX)
						+ (topMouseOffsetY * topMouseOffsetY));
		// ˮƽ�����ƶ�
		if (Math.abs(topMouseOffsetX) > Math.abs(topMouseOffsetY)) {
			if (topMouseOffsetX >= 0) {
				topMouseDirection = "right";
			} else if (topMouseOffsetX < 0) {
				topMouseDirection = "left";
			}
		} // ��ֱ�����ƶ�
		else if (Math.abs(topMouseOffsetX) <= Math.abs(topMouseOffsetY)) {
			if (topMouseOffsetY >= 0) {
				topMouseDirection = "down";
			} else if (topMouseOffsetY < 0) {
				topMouseDirection = "up";
			}
		}
		// �϶��¼�
		if ((topMouseMoveTime - topMouseStartTime) > 300) {
			var eventData = new EventData();
			eventData.startX = topMouseStartX;
			eventData.startY = topMouseStartY;
			eventData.endX = topMouseMoveX;
			eventData.endY = topMouseMoveY;
			eventData.lastX = topMouseLastX;
			eventData.lastY = topMouseLastY;
			eventData.time = topMouseMoveTime - topMouseStartTime;
			eventData.direction = topMouseDirection;
			eventData.distance = topMouseMoveDistance;
			eventTopCanvasDrag(eventData);
			topMouseLastX = topMouseMoveX;
			topMouseLastY = topMouseMoveY;
		}
		testdiv.html("��CanvasMoveX:" + topMouseMoveX + " ��CanvasMoveY:"
				+ topMouseMoveY);
	}
}

// topCanvasMouseEnd�¼���Ӧ
var topMouseEndX = null;
var topMouseEndY = null;
var topMouseEndTime = null;
eventTopCanvasMouseEnd = function(event) {
	if (eventSign == false && mousedownSign == true) {
		if (topStartSetTimeoutId) {
			clearTimeout(topMouseStartSetTimeoutId);
		}
		mousedownSign = false;
		var topMouseEndDate = new Date();
		topMouseEndTime = topMouseEndDate.getTime();
		topMouseEndX = event.screenX;
		topMouseEndY = event.screenY;
		var topMouseDistanceX = topMouseEndX - topMouseStartX;
		var topMouseDistanceY = topMouseEndY - topMouseStartY;
		var topMouseDistance = Math
				.sqrt((topMouseDistanceX * topMouseDistanceX)
						+ (topMouseDistanceY * topMouseDistanceY));
		// �����¼�
		if ((topMouseEndTime - topMouseStartTime) < 300
				&& topMouseDistance > 30) {
			var eventData = new EventData();
			eventData.startX = topMouseStartX;
			eventData.startY = topMouseStartY;
			eventData.endX = topMouseEndX;
			eventData.endY = topMouseEndY;
			eventData.time = topMouseEndTime - topMouseStartTime;
			eventData.direction = topMouseDirection;
			eventData.distance = topMouseDistance;
			eventTopCanvasPull(eventData);
		}
		// ����¼�
		if ((topMouseEndTime - topMouseStartTime) < 300
				&& topMouseDistance < 30) {
			var eventData = new EventData();
			eventData.startX = topMouseStartX;
			eventData.startY = topMouseStartY;
			eventData.endX = topMouseEndX;
			eventData.endY = topMouseEndY;
			eventData.time = topMouseEndTime - topMouseStartTime;
			eventData.direction = topMouseDirection;
			eventData.distance = topMouseDistance;
			eventTopCanvasClick(eventData);
		}
		// �϶������¼�
		if ((topMouseEndTime - topMouseStartTime) > 300) {
			var eventData = new EventData();
			eventData.startX = topMouseStartX;
			eventData.startY = topMouseStartY;
			eventData.lastX = topMouseLastX;
			eventData.lastY = topMouseLastY;
			eventData.endX = topMouseEndX;
			eventData.endY = topMouseEndY;
			eventData.time = topMouseEndTime - topMouseStartTime;
			eventData.direction = topMouseDirection;
			eventData.distance = topMouseDistance;
			eventTopCanvasDragEnd(eventData);
		}
	}
}

// bottomLeftCanvas
// ��ʼ��bottomLeftCanvas
initbottomLeftCanvas = function(result) {
	bottomLeftCanvas = $("#bottomLeftCanvas");
	bottomLeftCanvasContext = bottomLeftCanvas.get(0).getContext('2d');
	bottomDiv = $("#bottom");
	bottomLeftDiv = $("#bottomLeft");
	bottomRightDiv = $("#bottomRight");
	clearbottomLeftCanvas();
	drowbottomLeftDivSystole(false, result);
	bottomLeftCanvas.get(0).addEventListener("touchstart",
			eventBottomLeftCanvasTouchStart, false);
	bottomLeftCanvas.get(0).addEventListener("touchmove",
			eventBottomLeftCanvasTouchMove, false);
	bottomLeftCanvas.get(0).addEventListener("touchend",
			eventBottomLeftCanvasTouchEnd, false);

	bottomLeftCanvas.get(0).addEventListener("mousedown",
			eventbottomLeftCanvasMouseStart, false);
	bottomLeftCanvas.get(0).addEventListener("mousemove",
			eventbottomLeftCanvasMouseMove, false);
	bottomLeftCanvas.get(0).addEventListener("mouseup",
			eventbottomLeftCanvasMouseEnd, false);
	bottomLeftCanvas.get(0).addEventListener("mouseout",
			eventbottomLeftCanvasMouseEnd, false);
}

// ����bottomLeftCanvas������С
editbottomLeftCanvasSize = function(width, height) {
	if (width) {
		bottomLeftCanvas.attr("width", width);
	}
	if (height) {
		bottomLeftCanvas.attr("height", height);
	}
}

// ���bottomLeftCanvas����
clearbottomLeftCanvas = function() {
	editbottomLeftCanvasSize(bottomLeftCanvas.attr("width"), bottomLeftCanvas
			.attr("height"));
}

// չ��bottomLeftDiv
stretchbottomLeftDiv = function(result) {
	editbottomLeftCanvasSize("204px");
	if (topDivSign == true) {
		drowbottomLeftDivStretch(false, result.content);
	} else if (topDivSign == false) {
		drowbottomLeftDivStretch(true, result.content);
	}
	if (bottomMiddleSign == true) {
		var fun = function() {
			editbottomRightCanvasSize("616px");
			if (topDivSign == true) {
				drowbottomRightDivSystole(false, result.dish);
			} else if (topDivSign == false) {
				drowbottomRightDivSystole(true, result.dish);
			}
			eventSign = false;
		}
		bottomLeftDiv.animate({
			width : "204px"
		}, {
			queue : false
		});
		bottomRightDiv.animate({
			width : "616px"
		}, fun);
	} else if (bottomMiddleSign == false) {
		var fun = function() {
			editbottomRightCanvasSize("760");
			if (topDivSign == true) {
				drowbottomRightDivSystole(false, result.dish);
			} else if (topDivSign == false) {
				drowbottomRightDivSystole(true, result.dish);
			}
			eventSign = false;
		}
		bottomLeftDiv.animate({
			width : "204px"
		}, {
			queue : false
		});
		bottomRightDiv.animate({
			width : "760px"
		}, fun);
	}
}

// ����bottomLeftDiv
systolebottomLeftDiv = function(result) {
	var fun = function() {
		editbottomLeftCanvasSize("60px");
		if (topDivSign == true) {
			drowbottomLeftDivSystole(false, result.content);
		} else if (topDivSign == false) {
			drowbottomLeftDivSystole(true, result.content);
		}
		bottomLeftSign = false;
		eventSign = false;
	}
	if (bottomMiddleSign == true) {
		editbottomRightCanvasSize("760px");
		if (topDivSign == true) {
			drowbottomRightDivSystole(false, result.dish);
		} else if (topDivSign == false) {
			drowbottomRightDivSystole(true, result.dish);
		}
		bottomLeftDiv.animate({
			width : "60px"
		}, {
			queue : false
		});
		bottomRightDiv.animate({
			width : "760px"
		}, fun);
	} else if (bottomMiddleSign == false) {
		editbottomRightCanvasSize("904px");
		if (topDivSign == true) {
			drowbottomRightDivStretch(false, result.dish);
		} else if (topDivSign == false) {
			drowbottomRightDivStretch(true, result.dish);
		}
		bottomLeftDiv.animate({
			width : "60px"
		}, {
			queue : false
		});
		bottomRightDiv.animate({
			width : "904px"
		}, fun);
	}

}

// bottomLeftDiv��С�任�¼�
movebottomLeftDiv = function(result) {
	if (eventSign == false) {
		eventSign = true;
		if (bottomLeftSign == true) {
			systolebottomLeftDiv(result);
		} else if (bottomLeftSign == false) {
			stretchbottomLeftDiv(result);
			bottomLeftSign = true;
		}
	}
}

// bottomLeftCanvasTouchStart�¼���Ӧ
var leftStartX = null;
var leftStartY = null;
var leftStartTime = null;
var leftLastX = null;
var leftLastY = null;
var leftStartSetTimeoutId = null;
var leftStartSetTimeout = function() {
	var eventData = new EventData();
	eventData.startX = leftStartX;
	eventData.startY = leftStartY;
	eventData.endX = leftStartX;
	eventData.endY = leftStartY;
	eventData.lastX = null;
	eventData.lastY = null;
	eventData.time = 300;
	eventData.direction = null;
	eventData.distance = 0;
	eventBottomLeftCanvasDrag(eventData);
	leftLastX = leftStartX;
	leftLastY = leftStartY;
}
eventBottomLeftCanvasTouchStart = function(event) {
	if (eventSign == false) {
		var leftStartDate = new Date();
		leftStartTime = leftStartDate.getTime();
		event.preventDefault();
		var touch = event.changedTouches[0];
		leftStartX = touch.pageX;
		leftStartY = touch.pageY;
		leftStartSetTimeoutId = setTimeout("leftStartSetTimeout();", 300);
	}
}

// bottomLeftCanvasTouchMove�¼���Ӧ
var leftMoveX = null;
var leftMoveY = null;
var leftDirection = null;
var leftMoveTime = null;
eventBottomLeftCanvasTouchMove = function(event) {
	if (eventSign == false) {
		if (leftStartSetTimeoutId) {
			clearTimeout(leftStartSetTimeoutId);
		}
		var leftMoveDate = new Date();
		leftMoveTime = leftMoveDate.getTime();
		event.preventDefault();
		var touch = event.changedTouches[0];
		var testdiv = $("#test");
		leftMoveX = touch.pageX;
		leftMoveY = touch.pageY;
		var leftOffsetX = leftMoveX - leftStartX;
		var leftOffsetY = leftMoveY - leftStartY;
		var leftMoveDistance = Math.sqrt((leftOffsetX * leftOffsetX)
				+ (leftOffsetY * leftOffsetY));
		// ˮƽ�����ƶ�
		if (Math.abs(leftOffsetX) > Math.abs(leftOffsetY)) {
			if (leftOffsetX >= 0) {
				leftDirection = "right";
			} else if (leftOffsetX < 0) {
				leftDirection = "left";
			}
		} // ��ֱ�����ƶ�
		else if (Math.abs(leftOffsetX) <= Math.abs(leftOffsetY)) {
			if (leftOffsetY >= 0) {
				leftDirection = "down";
			} else if (leftOffsetY < 0) {
				leftDirection = "up";
			}
		}
		// �϶��¼�
		if ((leftMoveTime - leftStartTime) > 300) {
			var eventData = new EventData();
			eventData.startX = leftStartX;
			eventData.startY = leftStartY;
			eventData.endX = leftMoveX;
			eventData.endY = leftMoveY;
			eventData.lastX = leftLastX;
			eventData.lastY = leftLastY;
			eventData.time = leftMoveTime - leftStartTime;
			eventData.direction = leftDirection;
			eventData.distance = leftMoveDistance;
			eventBottomLeftCanvasDrag(eventData);
			leftLastX = leftMoveX;
			leftLastY = leftMoveY;
		}
		testdiv
				.html("��CanvasMoveX:" + leftMoveX + " ��CanvasMoveY:"
						+ leftMoveY);
	}
}

// bottomLeftCanvasTouchEnd�¼���Ӧ
var leftEndX = null;
var leftEndY = null;
var leftEndTime = null;
eventBottomLeftCanvasTouchEnd = function(event) {
	if (eventSign == false) {
		if (leftStartSetTimeoutId) {
			clearTimeout(leftStartSetTimeoutId);
		}
		var leftEndDate = new Date();
		leftEndTime = leftEndDate.getTime();
		event.preventDefault();
		var touch = event.changedTouches[0];
		leftEndX = touch.pageX;
		leftEndY = touch.pageY;
		var leftDistanceX = leftEndX - leftStartX;
		var leftDistanceY = leftEndY - leftStartY;
		var leftDistance = Math.sqrt((leftDistanceX * leftDistanceX)
				+ (leftDistanceY * leftDistanceY));
		// �����¼�
		if ((leftEndTime - leftStartTime) < 300 && leftDistance > 30) {
			var eventData = new EventData();
			eventData.startX = leftStartX;
			eventData.startY = leftStartY;
			eventData.endX = leftEndX;
			eventData.endY = leftEndY;
			eventData.time = leftEndTime - leftStartTime;
			eventData.direction = leftDirection;
			eventData.distance = leftDistance;
			eventBottomLeftCanvasPull(eventData);
		}
		// ����¼�
		if ((leftEndTime - leftStartTime) < 300 && leftDistance < 30) {
			var eventData = new EventData();
			eventData.startX = leftStartX;
			eventData.startY = leftStartY;
			eventData.endX = leftEndX;
			eventData.endY = leftEndY;
			eventData.time = leftEndTime - leftStartTime;
			eventData.direction = leftDirection;
			eventData.distance = leftDistance;
			eventBottomLeftCanvasClick(eventData);
		}
		// �϶������¼�
		if ((leftEndTime - leftStartTime) > 300) {
			var eventData = new EventData();
			eventData.startX = leftStartX;
			eventData.startY = leftStartY;
			eventData.endX = leftEndX;
			eventData.endY = leftEndY;
			eventData.lastX = leftLastX;
			eventData.lastY = leftLastY;
			eventData.time = leftEndTime - leftStartTime;
			eventData.direction = leftDirection;
			eventData.distance = leftDistance;
			eventBottomLeftCanvasDragEnd(eventData);
		}
	}
}

// bottomLeftCanvasMouseStart�¼���Ӧ
var bottomLeftMouseStartX = null;
var bottomLeftMouseStartY = null;
var bottomLeftMouseStartTime = null;
var bottomLeftMouseLastX = null;
var bottomLeftMouseLastY = null;
var bottomLeftMouseStartSetTimeoutId = null;
var bottomLeftMouseStartSetTimeout = function() {
	var eventData = new EventData();
	eventData.startX = bottomLeftMouseStartX;
	eventData.startY = bottomLeftMouseStartY;
	eventData.endX = bottomLeftMouseStartX;
	eventData.endY = bottomLeftMouseStartY;
	eventData.lastX = null;
	eventData.lastY = null;
	eventData.time = 300;
	eventData.direction = null;
	eventData.distance = 0;
	eventBottomLeftCanvasDrag(eventData);
	bottomLeftMouseLastX = bottomLeftMouseStartX;
	bottomLeftMouseLastY = bottomLeftMouseStartY;
}
eventbottomLeftCanvasMouseStart = function(event) {
	if (eventSign == false) {
		var bottomLeftMouseStartDate = new Date();
		bottomLeftMouseStartTime = bottomLeftMouseStartDate.getTime();
		bottomLeftMouseStartX = event.screenX;
		bottomLeftMouseStartY = event.screenY;
		mousedownSign = true;
		bottomLeftMouseStartSetTimeoutId = setTimeout(
				"bottomLeftMouseStartSetTimeout();", 300);
	}
}

// bottomLeftCanvasMouseMove�¼���Ӧ
var bottomLeftMouseMoveX = null;
var bottomLeftMouseMoveY = null;
var bottomLeftMouseDirection = null;
var bottomLeftMouseMoveTime = null;
eventbottomLeftCanvasMouseMove = function(event) {
	if (eventSign == false && mousedownSign == true) {
		if (bottomLeftMouseStartSetTimeoutId) {
			clearTimeout(bottomLeftMouseStartSetTimeoutId);
		}
		var bottomLeftMouseMoveDate = new Date();
		bottomLeftMouseMoveTime = bottomLeftMouseMoveDate.getTime();
		var testdiv = $("#test");
		bottomLeftMouseMoveX = event.screenX;
		bottomLeftMouseMoveY = event.screenY;
		var bottomLeftMouseOffsetX = bottomLeftMouseMoveX
				- bottomLeftMouseStartX;
		var bottomLeftMouseOffsetY = bottomLeftMouseMoveY
				- bottomLeftMouseStartY;
		var bottomLeftMouseMoveDistance = Math
				.sqrt((bottomLeftMouseOffsetX * bottomLeftMouseOffsetX)
						+ (bottomLeftMouseOffsetY * bottomLeftMouseOffsetY));
		// ˮƽ�����ƶ�
		if (Math.abs(bottomLeftMouseOffsetX) > Math.abs(bottomLeftMouseOffsetY)) {
			if (bottomLeftMouseOffsetX >= 0) {
				bottomLeftMouseDirection = "right";
			} else if (bottomLeftMouseOffsetX < 0) {
				bottomLeftMouseDirection = "left";
			}
		} // ��ֱ�����ƶ�
		else if (Math.abs(bottomLeftMouseOffsetX) <= Math
				.abs(bottomLeftMouseOffsetY)) {
			if (bottomLeftMouseOffsetY >= 0) {
				bottomLeftMouseDirection = "down";
			} else if (bottomLeftMouseOffsetY < 0) {
				bottomLeftMouseDirection = "up";
			}
		}
		// �϶��¼�
		if ((bottomLeftMouseMoveTime - bottomLeftMouseStartTime) > 300) {
			var eventData = new EventData();
			eventData.startX = bottomLeftMouseStartX;
			eventData.startY = bottomLeftMouseStartY;
			eventData.endX = bottomLeftMouseMoveX;
			eventData.endY = bottomLeftMouseMoveY;
			eventData.lastX = bottomLeftMouseLastX;
			eventData.lastY = bottomLeftMouseLastY;
			eventData.time = bottomLeftMouseMoveTime - bottomLeftMouseStartTime;
			eventData.direction = bottomLeftMouseDirection;
			eventData.distance = bottomLeftMouseMoveDistance;
			eventBottomLeftCanvasDrag(eventData);
			bottomLeftMouseLastX = bottomLeftMouseMoveX;
			bottomLeftMouseLastY = bottomLeftMouseMoveY;
		}
		testdiv.html("��CanvasMoveX:" + bottomLeftMouseMoveX + " ��CanvasMoveY:"
				+ bottomLeftMouseMoveY);
	}
}

// bottomLeftCanvasMouseEnd�¼���Ӧ
var bottomLeftMouseEndX = null;
var bottomLeftMouseEndY = null;
var bottomLeftMouseEndTime = null;
eventbottomLeftCanvasMouseEnd = function(event) {
	if (eventSign == false && mousedownSign == true) {
		if (bottomLeftMouseStartSetTimeoutId) {
			clearTimeout(bottomLeftMouseStartSetTimeoutId);
		}
		mousedownSign = false;
		var bottomLeftMouseEndDate = new Date();
		bottomLeftMouseEndTime = bottomLeftMouseEndDate.getTime();
		bottomLeftMouseEndX = event.screenX;
		bottomLeftMouseEndY = event.screenY;
		var bottomLeftMouseDistanceX = bottomLeftMouseEndX
				- bottomLeftMouseStartX;
		var bottomLeftMouseDistanceY = bottomLeftMouseEndY
				- bottomLeftMouseStartY;
		var bottomLeftMouseDistance = Math
				.sqrt((bottomLeftMouseDistanceX * bottomLeftMouseDistanceX)
						+ (bottomLeftMouseDistanceY * bottomLeftMouseDistanceY));
		// �����¼�
		if ((bottomLeftMouseEndTime - bottomLeftMouseStartTime) < 300
				&& bottomLeftMouseDistance > 30) {
			var eventData = new EventData();
			eventData.startX = bottomLeftMouseStartX;
			eventData.startY = bottomLeftMouseStartY;
			eventData.endX = bottomLeftMouseEndX;
			eventData.endY = bottomLeftMouseEndY;
			eventData.time = bottomLeftMouseEndTime - bottomLeftMouseStartTime;
			eventData.direction = bottomLeftMouseDirection;
			eventData.distance = bottomLeftMouseDistance;
			eventBottomLeftCanvasPull(eventData);
		}
		// ����¼�
		if ((bottomLeftMouseEndTime - bottomLeftMouseStartTime) < 300
				&& bottomLeftMouseDistance < 30) {
			var eventData = new EventData();
			eventData.startX = bottomLeftMouseStartX;
			eventData.startY = bottomLeftMouseStartY;
			eventData.endX = bottomLeftMouseEndX;
			eventData.endY = bottomLeftMouseEndY;
			eventData.time = bottomLeftMouseEndTime - bottomLeftMouseStartTime;
			eventData.direction = bottomLeftMouseDirection;
			eventData.distance = bottomLeftMouseDistance;
			eventBottomLeftCanvasClick(eventData);
		}
		// �϶������¼�
		if ((bottomLeftMouseEndTime - bottomLeftMouseStartTime) > 300) {
			var eventData = new EventData();
			eventData.startX = bottomLeftMouseStartX;
			eventData.startY = bottomLeftMouseStartY;
			eventData.endX = bottomLeftMouseEndX;
			eventData.endY = bottomLeftMouseEndY;
			eventData.lastX = bottomLeftMouseLastX;
			eventData.lastY = bottomLeftMouseLastY;
			eventData.time = bottomLeftMouseEndTime - bottomLeftMouseStartTime;
			eventData.direction = bottomLeftMouseDirection;
			eventData.distance = bottomLeftMouseDistance;
			eventBottomLeftCanvasDragEnd(eventData);
		}
	}
}

// bottomMiddleCanvas
// ��ʼ��bottomMiddleCanvas
initbottomMiddleCanvas = function(result) {
	bottomMiddleCanvas = $('#bottomMiddleCanvas');
	bottomMiddleCanvasContext = bottomMiddleCanvas.get(0).getContext('2d');
	bottomMiddleDiv = $('#bottomMiddle');
	clearbottomMiddleCanvas();
	drowbottomMiddleDivStretch(false, result);
	bottomMiddleCanvas.get(0).addEventListener("touchstart",
			eventBottomMiddleCanvasTouchStart, false);
	bottomMiddleCanvas.get(0).addEventListener("touchmove",
			eventBottomMiddleCanvasTouchMove, false);
	bottomMiddleCanvas.get(0).addEventListener("touchend",
			eventBottomMiddleCanvasTouchEnd, false);
	/*bottomMiddleCanvas.get(0).addEventListener("click",
			eventBottomMiddleCanvasClick, false);*/
	document.getElementById("bottomMiddleCanvas").addEventListener("click",
			eventBottomMiddleCanvasClick, false);

	bottomMiddleCanvas.get(0).addEventListener("mousedown",
			eventbottomMiddleCanvasMouseStart, false);
	bottomMiddleCanvas.get(0).addEventListener("mousemove",
			eventbottomMiddleCanvasMouseMove, false);
	bottomMiddleCanvas.get(0).addEventListener("mouseup",
			eventbottomMiddleCanvasMouseEnd, false);
	bottomMiddleCanvas.get(0).addEventListener("mouseout",
			eventbottomMiddleCanvasMouseEnd, false);
}

// ����bottomMiddleCanvas������С
editbottomMiddleCanvasSize = function(width, height) {
	if (width) {
		bottomMiddleCanvas.attr("width", width);
	}
	if (height) {
		bottomMiddleCanvas.attr("height", height);
	}
}

// ���bottomMiddleCanvas����
clearbottomMiddleCanvas = function() {
	/*editbottomMiddleCanvasSize(bottomMiddleCanvas.attr("width"),
			bottomMiddleCanvas.attr("height"));*/
}

// չ��bottomMiddleDiv
stretchbottomMiddleDiv = function(result) {
	editbottomMiddleCanvasSize("204px");
	if (topDivSign == true) {
		drowbottomMiddleDivStretch(false, result.content);
	} else if (topDivSign == false) {
		drowbottomMiddleDivStretch(true, result.content);
	}
	if (bottomLeftSign == true) {
		var fun = function() {
			editbottomRightCanvasSize("616px");
			if (topDivSign == true) {
				drowbottomRightDivSystole(false, result.dish);
			} else if (topDivSign == false) {
				drowbottomRightDivSystole(true, result.dish);
			}
			bottomMiddleSign = true;
			eventSign = false;
		}
		bottomMiddleDiv.animate({
			width : "204px"
		}, {
			queue : false
		});
		bottomRightDiv.animate({
			width : "616px"
		}, fun);
	} else if (bottomLeftSign == false) {
		var fun = function() {
			editbottomRightCanvasSize("760px");
			if (topDivSign == true) {
				drowbottomRightDivSystole(false, result.dish);
			} else if (topDivSign == false) {
				drowbottomRightDivSystole(true, result.dish);
			}
			bottomMiddleSign = true;
			eventSign = false;
		}
		bottomMiddleDiv.animate({
			width : "204px"
		}, {
			queue : false
		});
		bottomRightDiv.animate({
			width : "760px"
		}, fun);
	}
}

// ����bottomMiddleDiv
systolebottomMiddleDiv = function(result) {
	var fun = function() {
		//editbottomMiddleCanvasSize("60px");
		if (topDivSign == true) {
			drowbottomMiddleDivSystole(false, result.content);
		} else if (topDivSign == false) {
			drowbottomMiddleDivSystole(true, result.content);
		}
		bottomMiddleSign = false;
		eventSign = false;
	}
	if (bottomLeftSign == true) {
		editbottomRightCanvasSize("760px");
		if (topDivSign == true) {
			drowbottomRightDivSystole(false, result.dish);
		} else if (topDivSign == false) {
			drowbottomRightDivSystole(true, result.dish);
		}
		bottomMiddleDiv.animate({
			width : "60px"
		}, {
			queue : false
		});
		bottomRightDiv.animate({
			width : "760px"
		}, fun);
	} else if (bottomLeftSign == false) {
		editbottomRightCanvasSize("904px");
		if (topDivSign == true) {
			drowbottomRightDivStretch(false, result.dish);
		} else if (topDivSign == false) {
			drowbottomRightDivStretch(true, result.dish);
		}
		bottomMiddleDiv.animate({
			width : "60px"
		}, {
			queue : false
		});
		bottomRightDiv.animate({
			width : "904px"
		}, fun);
	}
}

// bottomMiddleDiv��С�任�¼�
movebottomMiddleDiv = function(result) {
	if (eventSign == false) {
		eventSign = true;
		if (bottomMiddleSign == true) {
			systolebottomMiddleDiv(result);
		} else if (bottomMiddleSign == false) {
			stretchbottomMiddleDiv(result);
			bottomMiddleSign = true;
		}
	}
}

// bottomMiddleCanvasTouchStart�¼���Ӧ
var middleStartX = null;
var middleStartY = null;
var middleStartTime = null;
var middleLastX = null;
var middleLastY = null;
eventBottomMiddleCanvasTouchStart = function(event) {
	if (eventSign == false) {
		var middleStartDate = new Date();
		middleStartTime = middleStartDate.getTime();
		var touch = event.changedTouches[0];
		middleStartX = touch.pageX;
		middleStartY = touch.pageY;
	}
}

// bottomMiddleCanvasTouchMove�¼���Ӧ
var middleMoveX = null;
var middleMoveY = null;
var middleDirection = null;
var middleMoveTime = null;
eventBottomMiddleCanvasTouchMove = function(event) {
	if (eventSign == false) {
		var middleMoveDate = new Date();
		middleMoveTime = middleMoveDate.getTime();
		var touch = event.changedTouches[0];
		middleMoveX = touch.pageX;
		middleMoveY = touch.pageY;
		var middleOffsetX = middleMoveX - middleStartX;
		var middleOffsetY = middleMoveY - middleStartY;
		var middleMoveDistance = Math.sqrt((middleOffsetX * middleOffsetX)
				+ (middleOffsetY * middleOffsetY));
		// ˮƽ�����ƶ�
		if (Math.abs(middleOffsetX) > Math.abs(middleOffsetY)) {
			if (middleOffsetX >= 0) {
				middleDirection = "right";
			} else if (middleOffsetX < 0) {
				middleDirection = "left";
			}
		} // ��ֱ�����ƶ�
		else if (Math.abs(middleOffsetX) <= Math.abs(middleOffsetY)) {
			if (middleOffsetY >= 0) {
				middleDirection = "down";
			} else if (middleOffsetY < 0) {
				middleDirection = "up";
			}
		}
		var tempMiddleSpeed = middleMoveDistance
				/ (middleMoveTime - middleStartTime);
		// �����¼�����ֹĬ�϶���
		if (tempMiddleSpeed > 0.1) {
			if (middleDirection == "up" && topDivSign == true) {
				event.preventDefault();
			} else if (middleDirection == "down" && topDivSign == false) {
				event.preventDefault();
			} else if (middleDirection == "left"
					&& (bottomLeftSign == true || bottomMiddleSign == true)) {
				event.preventDefault();
			} else if (middleDirection == "right"
					&& (bottomLeftSign == false || bottomMiddleSign == false)) {
				event.preventDefault();
			}
		}
	}
}

// bottomMiddleCanvasTouchEnd�¼���Ӧ
var middleEndX = null;
var middleEndY = null;
var middleEndTime = null;
eventBottomMiddleCanvasTouchEnd = function(event) {
	if (eventSign == false) {
		var middleEndDate = new Date();
		middleEndTime = middleEndDate.getTime();
		var touch = event.changedTouches[0];
		middleEndX = touch.pageX;
		middleEndY = touch.pageY;
		var middleDistanceX = middleEndX - middleStartX;
		var middleDistanceY = middleEndY - middleStartY;
		var middleDistance = Math.sqrt((middleDistanceX * middleDistanceX)
				+ (middleDistanceY * middleDistanceY));
		// �����¼�
		var eventData = new EventData();
		eventData.startX = middleStartX;
		eventData.startY = middleStartY;
		eventData.endX = middleEndX;
		eventData.endY = middleEndY;
		eventData.time = middleEndTime - middleStartTime;
		eventData.direction = middleDirection;
		eventData.distance = middleDistance;
		eventBottomMiddleCanvasPull(eventData);
	}
}

// bottomMiddleCanvasMouseStart�¼���Ӧ
var bottomMiddleMouseStartX = null;
var bottomMiddleMouseStartY = null;
var bottomMiddleMouseStartTime = null;
var bottomMiddleMouseLastX = null;
var bottomMiddleMouseLastY = null;
eventbottomMiddleCanvasMouseStart = function(event) {
	if (eventSign == false) {
		var bottomMiddleMouseStartDate = new Date();
		bottomMiddleMouseStartTime = bottomMiddleMouseStartDate.getTime();
		bottomMiddleMouseStartX = event.screenX;
		bottomMiddleMouseStartY = event.screenY;
		mousedownSign = true;
	}
}

// bottomMiddleCanvasMouseMove�¼���Ӧ
var bottomMiddleMouseMoveX = null;
var bottomMiddleMouseMoveY = null;
var bottomMiddleMouseDirection = null;
var bottomMiddleMouseMoveTime = null;
eventbottomMiddleCanvasMouseMove = function(event) {
	if (eventSign == false && mousedownSign == true) {
		var bottomMiddleMouseMoveDate = new Date();
		bottomMiddleMouseMoveTime = bottomMiddleMouseMoveDate.getTime();
		var testdiv = $("#test");
		bottomMiddleMouseMoveX = event.screenX;
		bottomMiddleMouseMoveY = event.screenY;
		var bottomMiddleMouseOffsetX = bottomMiddleMouseMoveX
				- bottomMiddleMouseStartX;
		var bottomMiddleMouseOffsetY = bottomMiddleMouseMoveY
				- bottomMiddleMouseStartY;
		var bottomMiddleMouseMoveDistance = Math
				.sqrt((bottomMiddleMouseOffsetX * bottomMiddleMouseOffsetX)
						+ (bottomMiddleMouseOffsetY * bottomMiddleMouseOffsetY));
		// ˮƽ�����ƶ�
		if (Math.abs(bottomMiddleMouseOffsetX) > Math
				.abs(bottomMiddleMouseOffsetY)) {
			if (bottomMiddleMouseOffsetX >= 0) {
				bottomMiddleMouseDirection = "right";
			} else if (bottomMiddleMouseOffsetX < 0) {
				bottomMiddleMouseDirection = "left";
			}
		} // ��ֱ�����ƶ�
		else if (Math.abs(bottomMiddleMouseOffsetX) <= Math
				.abs(bottomMiddleMouseOffsetY)) {
			if (bottomMiddleMouseOffsetY >= 0) {
				bottomMiddleMouseDirection = "down";
			} else if (bottomMiddleMouseOffsetY < 0) {
				bottomMiddleMouseDirection = "up";
			}
		}

		var tempMiddleMouseSpeed = bottomMiddleMouseMoveDistance
				/ (bottomMiddleMouseMoveTime - bottomMiddleMouseStartTime);
		// �����¼�����ֹĬ�϶���
		if (tempMiddleMouseSpeed > 0.1) {
			if (bottomMiddleMouseDirection == "up" && topDivSign == true) {
				event.preventDefault();
			} else if (bottomMiddleMouseDirection == "down"
					&& topDivSign == false) {
				event.preventDefault();
			} else if (bottomMiddleMouseDirection == "left"
					&& (bottomLeftSign == true || bottomMiddleSign == true)) {
				event.preventDefault();
			} else if (bottomMiddleMouseDirection == "right"
					&& (bottomLeftSign == false || bottomMiddleSign == false)) {
				event.preventDefault();
			}
		}
	}
}

// bottomMiddleCanvasMouseEnd�¼���Ӧ
var bottomMiddleMouseEndX = null;
var bottomMiddleMouseEndY = null;
var bottomMiddleMouseEndTime = null;
eventbottomMiddleCanvasMouseEnd = function(event) {
	if (eventSign == false && mousedownSign == true) {
		mousedownSign = false;
		var bottomMiddleMouseEndDate = new Date();
		bottomMiddleMouseEndTime = bottomMiddleMouseEndDate.getTime();
		bottomMiddleMouseEndX = event.screenX;
		bottomMiddleMouseEndY = event.screenY;
		var bottomMiddleMouseDistanceX = bottomMiddleMouseEndX
				- bottomMiddleMouseStartX;
		var bottomMiddleMouseDistanceY = bottomMiddleMouseEndY
				- bottomMiddleMouseStartY;
		var bottomMiddleMouseDistance = Math
				.sqrt((bottomMiddleMouseDistanceX * bottomMiddleMouseDistanceX)
						+ (bottomMiddleMouseDistanceY * bottomMiddleMouseDistanceY));
		// �����¼�
		if ((bottomMiddleMouseEndTime - bottomMiddleMouseStartTime) < 300
				&& bottomMiddleMouseDistance > 30) {
			var eventData = new EventData();
			eventData.startX = bottomMiddleMouseStartX;
			eventData.startY = bottomMiddleMouseStartY;
			eventData.endX = bottomMiddleMouseEndX;
			eventData.endY = bottomMiddleMouseEndY;
			eventData.time = bottomMiddleMouseEndTime
					- bottomMiddleMouseStartTime;
			eventData.direction = bottomMiddleMouseDirection;
			eventData.distance = bottomMiddleMouseDistance;
			eventBottomMiddleCanvasPull(eventData);
		}
	}
}

// bottomRightCanvas
// ��ʼ��bottomRightCanvas
initbottomRightCanvas = function() {
	bottomRightCanvas = $("#bottomRightCanvas");
	bottomRightCanvasContext = bottomRightCanvas.get(0).getContext('2d');
	clearbottomRightCanvas();
	drowbottomRightDivSystole(false);
	bottomRightCanvas.get(0).addEventListener("touchstart",
			eventBottomRightCanvasTouchStart, false);
	bottomRightCanvas.get(0).addEventListener("touchmove",
			eventBottomRightCanvasTouchMove, false);
	bottomRightCanvas.get(0).addEventListener("touchend",
			eventBottomRightCanvasTouchEnd, false);

	bottomRightCanvas.get(0).addEventListener("mousedown",
			eventbottomRightCanvasMouseStart, false);
	bottomRightCanvas.get(0).addEventListener("mousemove",
			eventbottomRightCanvasMouseMove, false);
	bottomRightCanvas.get(0).addEventListener("mouseup",
			eventbottomRightCanvasMouseEnd, false);
	bottomRightCanvas.get(0).addEventListener("mouseout",
			eventbottomRightCanvasMouseEnd, false);

	bottomRightCanvas.get(0).addEventListener("click",
			eventBottomRightCanvasClick, false);
}

// ����bottomRightCanvas������С
editbottomRightCanvasSize = function(width, height) {
	if (width) {
		bottomRightCanvas.attr("width", width);
	}
	if (height) {
		bottomRightCanvas.attr("height", height);
	}
}

// ���bottomRightCanvas����
clearbottomRightCanvas = function() {
	editbottomRightCanvasSize(bottomRightCanvas.attr("width"),
			bottomRightCanvas.attr("height"));
}

// չ��bottomRightDiv
stretchbottomRightDiv = function() {

}

// ����bottomRightDiv
systolebottomRightDiv = function() {

}

// bottomRightCanvasTouchStart�¼���Ӧ
var rightStartX = null;
var rightStartY = null;
var rightStartTime = null;
var rightLastX = null;
var rightLastY = null;
eventBottomRightCanvasTouchStart = function(event) {
	if (eventSign == false) {
		var rightStartDate = new Date();
		rightStartTime = rightStartDate.getTime();
		/* event.preventDefault(); */
		var touch = event.changedTouches[0];
		rightStartX = touch.pageX;
		rightStartY = touch.pageY;
	}
}

// bottomRightCanvasTouchMove�¼���Ӧ
var rightMoveX = null;
var rightMoveY = null;
var rightDirection = null;
var rightMoveTime = null;
eventBottomRightCanvasTouchMove = function(event) {
	if (eventSign == false) {
		var rightMoveDate = new Date();
		rightMoveTime = rightMoveDate.getTime();
		/* event.preventDefault(); */
		var touch = event.changedTouches[0];
		var testdiv = $("#test");
		rightMoveX = touch.pageX;
		rightMoveY = touch.pageY;
		var rightOffsetX = rightMoveX - rightStartX;
		var rightOffsetY = rightMoveY - rightStartY;
		var rightMoveDistance = Math.sqrt((rightOffsetX * rightOffsetX)
				+ (rightOffsetY * rightOffsetY));
		// ˮƽ�����ƶ�
		if (Math.abs(rightOffsetX) > Math.abs(rightOffsetY)) {
			if (rightOffsetX >= 0) {
				rightDirection = "right";
			} else if (rightOffsetX < 0) {
				rightDirection = "left";
			}
		} // ��ֱ�����ƶ�
		else if (Math.abs(rightOffsetX) <= Math.abs(rightOffsetY)) {
			if (rightOffsetY >= 0) {
				rightDirection = "down";
			} else if (rightOffsetY < 0) {
				rightDirection = "up";
			}
		}

		var tempspeed = rightMoveDistance / (rightMoveTime - rightStartTime);
		// �����¼�����ֹĬ�϶���
		if (tempspeed > 0.1) {
//			if (rightDirection == "up" && topDivSign == true) {
//				event.preventDefault();
//			} else if (rightDirection == "down" && topDivSign == false) {
//				event.preventDefault();
//			} else 
				if (rightDirection == "left"
					&& (bottomLeftSign == true || bottomMiddleSign == true)) {
				event.preventDefault();
			} else if (rightDirection == "right"
					&& (bottomLeftSign == false || bottomMiddleSign == false)) {
				event.preventDefault();
			}
		}
	}
}

// bottomRightCanvasTouchEnd�¼���Ӧ
var rightEndX = null;
var rightEndY = null;
var rightEndTime = null;
eventBottomRightCanvasTouchEnd = function(event) {
	if (eventSign == false) {
		var rightEndDate = new Date();
		rightEndTime = rightEndDate.getTime();
		var touch = event.changedTouches[0];
		rightEndX = touch.pageX;
		rightEndY = touch.pageY;
		var rightDistanceX = rightEndX - rightStartX;
		var rightDistanceY = rightEndY - rightStartY;
		var rightDistance = Math.sqrt((rightDistanceX * rightDistanceX)
				+ (rightDistanceY * rightDistanceY));

		// �����¼�
		var eventData = new EventData();
		eventData.startX = rightStartX;
		eventData.startY = rightStartY;
		eventData.endX = rightEndX;
		eventData.endY = rightEndY;
		eventData.time = rightEndTime - rightStartTime;
		eventData.direction = rightDirection;
		eventData.distance = rightDistance;
		eventBottomRightCanvasPull(eventData);
	}
}

// bottomRightCanvasMouseStart�¼���Ӧ
var bottomRightMouseStartX = null;
var bottomRightMouseStartY = null;
var bottomRightMouseStartTime = null;
var bottomRightMouseLastX = null;
var bottomRightMouseLastY = null;
eventbottomRightCanvasMouseStart = function(event) {
	if (eventSign == false) {
		var bottomRightMouseStartDate = new Date();
		bottomRightMouseStartTime = bottomRightMouseStartDate.getTime();
		bottomRightMouseStartX = event.screenX;
		bottomRightMouseStartY = event.screenY;
		mousedownSign = true;
	}
}

// bottomRightCanvasMouseMove�¼���Ӧ
var bottomRightMouseMoveX = null;
var bottomRightMouseMoveY = null;
var bottomRightMouseDirection = null;
var bottomRightMouseMoveTime = null;
eventbottomRightCanvasMouseMove = function(event) {
	if (eventSign == false && mousedownSign == true) {
		var bottomRightMouseMoveDate = new Date();
		bottomRightMouseMoveTime = bottomRightMouseMoveDate.getTime();
		var testdiv = $("#test");
		bottomRightMouseMoveX = event.screenX;
		bottomRightMouseMoveY = event.screenY;
		var bottomRightMouseOffsetX = bottomRightMouseMoveX
				- bottomRightMouseStartX;
		var bottomRightMouseOffsetY = bottomRightMouseMoveY
				- bottomRightMouseStartY;
		var bottomRightMouseMoveDistance = Math
				.sqrt((bottomRightMouseOffsetX * bottomRightMouseOffsetX)
						+ (bottomRightMouseOffsetY * bottomRightMouseOffsetY));
		// ˮƽ�����ƶ�
		if (Math.abs(bottomRightMouseOffsetX) > Math
				.abs(bottomRightMouseOffsetY)) {
			if (bottomRightMouseOffsetX >= 0) {
				bottomRightMouseDirection = "right";
			} else if (bottomRightMouseOffsetX < 0) {
				bottomRightMouseDirection = "left";
			}
		} // ��ֱ�����ƶ�
		else if (Math.abs(bottomRightMouseOffsetX) <= Math
				.abs(bottomRightMouseOffsetY)) {
			if (bottomRightMouseOffsetY >= 0) {
				bottomRightMouseDirection = "down";
			} else if (bottomRightMouseOffsetY < 0) {
				bottomRightMouseDirection = "up";
			}
		}
		var tempMouseSpeed = bottomRightMouseMoveDistance
				/ (bottomRightMouseMoveDistance - bottomRightMouseStartTime);
		// �����¼�����ֹĬ�϶���
		if (tempMouseSpeed > 0.1) {
//			if (bottomRightMouseDirection == "up" && topDivSign == true) {
//				event.preventDefault();
//			} else if (bottomRightMouseDirection == "down"
//					&& topDivSign == false) {
//				event.preventDefault();
//			} else 
				if (bottomRightMouseDirection == "left"
					&& (bottomLeftSign == true || bottomMiddleSign == true)) {
				event.preventDefault();
			} else if (bottomRightMouseDirection == "right"
					&& (bottomLeftSign == false || bottomMiddleSign == false)) {
				event.preventDefault();
			}
		}
	}
}

// bottomRightCanvasMouseEnd�¼���Ӧ
var bottomRightMouseEndX = null;
var bottomRightMouseEndY = null;
var bottomRightMouseEndTime = null;
eventbottomRightCanvasMouseEnd = function(event) {
	if (eventSign == false && mousedownSign == true) {
		mousedownSign = false;
		var bottomRightMouseEndDate = new Date();
		bottomRightMouseEndTime = bottomRightMouseEndDate.getTime();
		bottomRightMouseEndX = event.screenX;
		bottomRightMouseEndY = event.screenY;
		var bottomRightMouseDistanceX = bottomRightMouseEndX
				- bottomRightMouseStartX;
		var bottomRightMouseDistanceY = bottomRightMouseEndY
				- bottomRightMouseStartY;
		var bottomRightMouseDistance = Math
				.sqrt((bottomRightMouseDistanceX * bottomRightMouseDistanceX)
						+ (bottomRightMouseDistanceY * bottomRightMouseDistanceY));
		// �����¼�
		if ((bottomRightMouseEndTime - bottomRightMouseStartTime) < 300
				&& bottomRightMouseDistance > 30) {
			var eventData = new EventData();
			eventData.startX = bottomRightMouseStartX;
			eventData.startY = bottomRightMouseStartY;
			eventData.endX = bottomRightMouseEndX;
			eventData.endY = bottomRightMouseEndY;
			eventData.time = bottomRightMouseEndTime
					- bottomRightMouseStartTime;
			eventData.direction = bottomRightMouseDirection;
			eventData.distance = bottomRightMouseDistance;
			eventBottomRightCanvasPull(eventData);
		}
	}
}
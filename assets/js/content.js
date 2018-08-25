( function ( $ ) {
	"use strict";
	$("#index").click(function() {
		$('#content').attr("src","index-right.html");
		$('#mini-menu').attr("style","display:none");
	});

	$("#task").click(function() {
		$('#content').attr("src","task.html");
		$('#mini-menu').attr("style","");
		$('#mini-menu-content').empty();
		$('#mini-menu-content').append('<a class="dropdown-item" href="#" id="new-task">新建任务</a><a class="dropdown-item" href="#">新建文件夹</a><a class="dropdown-item" href="#">导入报告</a>');
	});

	$("#attack-reports").click(function() {
		$('#content').attr("src","honeypot.html");
		$('#mini-menu').attr("style","");
		$('#mini-menu-content').empty();
		$('#mini-menu-content').append('<a class="dropdown-item" href="#" id="new-task">新建蜜罐</a><a class="dropdown-item" href="#">导入蜜罐</a>');
	});
	
	$(document).on('click', '#new-task', function() {
		$('#content').attr("src","task-new.html");
	});

} )( jQuery );
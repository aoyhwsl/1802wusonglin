(function() {
	function createCode() {
		code = "";
		var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
			's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
		for(var i = 0; i < 4; i++) {
			var index = Math.floor(Math.random() * 36)
			code += random[index];
		}
		return code;
	}

	function dom(dom) {
		dom.focus(function(event) {
			$(this).parent().find('span').eq(0).show();
			$(this).parent().find('span').eq(1).hide();
		});
		dom.blur(function(event) {
			$(this).parent().find('span').eq(0).hide();
		});
	}

	function bur(dom) {
		dom.blur(function(event) {
			if(!$(this).val()) {
				$(this).parent().find('span').eq(1).show();
				$(this).addClass('on');
			}
		})
	}
	bur($(".yzmbox input"));
	bur($(".userbox input"));
	bur($(".xymbox input"));
	bur($(".passbox input"));
	bur($(".surebox input"));
	dom($(".userbox input"));
	dom($(".xymbox input"));
	dom($(".passbox input"));
	dom($(".surebox input"));
	var reg = /^[1][3,4,5,7,8][0-9]{9}$/;
	$(".userbox input").change(function() {
		if(reg.test($(this).val())) {
			$(this).parent().find('i').eq(1).css({
				backgroundPosition: '-139px 0'
			}).addClass('display-block').removeClass('display-none');
			$(this).parent().find('span').eq(1).addClass('display-none');
			$(this).removeClass('on');
		} else {
			$(this).parent().find('span').eq(1).addClass('display-block');
			$(this).parent().find('i').eq(1).css({
				backgroundPosition: '-162px 0'
			}).addClass('display-block');
		}
	});
	$(".yzmbox").find('em').html(createCode());
	$(".yzmbox input").on("input", function() {
		if($(".yzmbox input").val() != $(".yzmbox").find('em').html()) {
			$(this).parent().find('span').eq(1).addClass('display-block').removeClass('display-none');
		} else {
			$(this).parent().find('span').eq(1).addClass('display-none').removeClass('display-block');
			$(this).removeClass('on');
		}
	});
	var reg1 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
	$(".passbox input").on("input", function() {
		if(reg1.test($(this).val())) {
			$(this).parent().find('i').eq(1).css({
				backgroundPosition: '-139px 0'
			}).addClass('display-block').removeClass('display-none');
			$(this).parent().find('span').eq(1).addClass('display-none');
			$(this).removeClass('on');
		} else {
			$(this).parent().find('span').eq(1).addClass('display-block');
			$(this).parent().find('i').eq(1).css({
				backgroundPosition: '-162px 0'
			}).addClass('display-block');
		}
	})
	$(".surebox input").on("input", function() {
		if($(".surebox input").val() == $(".passbox input").val()) {
			$(this).parent().find('i').eq(1).css({
				backgroundPosition: '-139px 0'
			}).addClass('display-block').removeClass('display-none');
			$(this).parent().find('span').eq(1).addClass('display-none');
			$(this).removeClass('on');
		} else {
			$(this).parent().find('span').eq(1).addClass('display-block');
			$(this).parent().find('i').eq(1).css({
				backgroundPosition: '-162px 0'
			}).addClass('display-block');
		}
	});
	$(".footreg input").click(function() {
		if(!$(".checkbox input").is(":checked")) {
			console.log(!$(".morechoice input").is(":checked"))
			alert("请阅读并且同意协议");
			return false;
		} else {
			$.ajax({
				url: 'php/reg.php',
				type: 'post',
				data: {
					username: $(".user input").val(),
					password: $(".pass input").val()
				},
				success: function(data) {
					if(!data) {
						alert("登录失败")
					} else {
						if($(".morechoice input").is(":checked")) {
							$.cookie("username", $(".user input").val(), {
								expires: 7
							});
							$.cookie("password", $(".pass input").val(), {
								expires: 7
							});
							$(window).attr('location', 'http://localhost/my/');
						} else {
							$.cookie("username", "", {
								expires: -1
							});
							$.cookie("password", "", {
								expires: -1
							});
						}
					}
				}
			})
		}
	})
})()
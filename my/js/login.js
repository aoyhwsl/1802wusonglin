(function() {
	$(".logincon-title-mobile").click(function() {
		$(".logincon-mobile").addClass('display-block').removeClass('display-none');
		$(".logincon-login").addClass('display-none').removeClass('display-block');
		$(this).addClass("aon").siblings().removeClass('aon');
	});
	$(".logincon-title-login").click(function() {
		$(".logincon-mobile").addClass('display-none').removeClass('display-block');
		$(".logincon-login").addClass('display-block').removeClass('display-none');
		$(this).addClass("aon").siblings().removeClass('aon');
	})
	$(".csan-head").hover(function() {
		$(this).stop(true).animate({
				left: -80
			},
			400,
			function() {
				$(".csan-img").css({
					display: 'block'
				})
			})
	}, function() {
		$(".csan-img").css({
			display: 'none'
		});
		$(this).stop(true).animate({
			left: 0
		}, 400)
	});
	$(".code").click(function(event) {
		$(this).addClass('display-none').removeClass('display-block');
		$(".login-img").addClass('display-block').removeClass('display-none');
		$(".ewcon").addClass('display-block').removeClass('display-none');
		$(".logincon").addClass('display-none').removeClass('display-block');
	});
	$(".login-img").click(function(event) {
		$(this).addClass('display-none').removeClass('display-block');
		$(".code").addClass('display-block').removeClass('display-none');
		$(".ewcon").addClass('display-none').removeClass('display-block');
		$(".logincon").addClass('display-block').removeClass('display-none');
	});
	$(".head-list-ul").hover(function() {
		$(".head-list-ul ul").css({
			display: 'block'
		});
	}, function() {
		$(".head-list-ul ul").css({
			display: 'none'
		});
	})

	function reg(node) {
		$(node).blur(function(event) {
			if(!!$(this).val()) {
				$(this).removeClass('on').parent().find('div').hide();
			} else {
				$(this).addClass('on').parent().find('div').show();
			}
		});
	}

	function reg1(node) {
		$(node).focus(function(event) {
			$(this).removeClass('on').parent().find('div').hide();
		});
	}
	reg($(".user input"));
	reg($(".pass input"));
	reg($(".ucode input"));
	reg1($(".user input"));
	reg1($(".pass input"));
	reg1($(".ucode input"));

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
	$(".ucode input").focus(function(event) {
		$(this).parent().find("span").html(createCode).show();
	});
	$(".sublogin input").click(function(event) {

		if(!$(".user input").val()) {
			alert("请输入用户名");
			return false;
		} else if(!$(".pass input").val()) {
			alert("请输入密码");
			return false;
		} else if(!$(".ucode input").val()) {
			alert("请输入验证码");
			return false;
		} else if($(".ucode input").val() != $(".ucode input").parent().find("span").html()) {
			alert("验证码错误");
		}

		$.ajax({
			url: 'php/login.php',
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
	});
})();
(function() {
	function xiala(index, value) {
		$(index).hover(function() {
			$(this).children(value).show();
		}, function() {
			$(this).children(value).hide();
		});
	}
	var $li = $(".head-top-right>ul>li");
	xiala($li[0], "ul");
	xiala($li[7], "ul");
	xiala($li[6], "ul");
	xiala($li[5], "div");
})();
(function() {
	var $bannerli = $(".banner-ul");
	$.ajax({
		url: "php/banner.php",
		success: function(result) {
			var $banner = JSON.parse(result);
			var $str = "";
			for(var i = 0; i < $banner.src.length; i++) {
				$str += `<li style="background:url('${$banner.src[i]}')center no-repeat";>
        	<div>
        	<div>
        	<a href="#" style="background:url('${$banner.li1[i]}')center no-repeat";></a>
        	<a href="#" style="background:url('${$banner.li2[i]}')center no-repeat";></a>
        	<a href="#" style="background:url('${$banner.li3[i]}')center no-repeat";></a>
        	</div></div>
        	</li>`;
			}
			$bannerli.html($str);
			$bannerli.children().hide().first().show();;
			(function() {
				var $bannerulli = $(".banner-ul");
				var $bannerli = $(".banner-ul").children();
				var $bannerolli = $(".banner-ol");
				var $str1 = "";
				for(var i = 0; i < $bannerli.length; i++) {
					$str1 += `<li>${i+1}</li>`;
				}
				$bannerolli.html($str1);
				var $bannerdivolli = $bannerolli.children();
				var $index = 0;
				$bannerdivolli.eq($index).addClass('banner-ol-bg');
				$bannerdivolli.on("mouseover", (function() {
					$index = $(this).index()
					$bannerli.stop(true).fadeOut(400).eq($index).stop(true).fadeIn(400);
					$bannerdivolli.eq($index).addClass('banner-ol-bg').siblings().removeClass('banner-ol-bg');
				}));

				function autoplay() {
					timer = setInterval(function() {
						$index++;
						if($index > $bannerli.length - 1) {
							$index = 0;
						}
						$bannerdivolli.eq($index).addClass('banner-ol-bg').siblings().removeClass('banner-ol-bg');
						$bannerli.stop(true).fadeOut(400).eq($index).stop(true).fadeIn(400);
					}, 2000);
				}
				autoplay();
				$bannerulli.on("mouseover", (function() {
					clearInterval(timer);
				}));
				$(".banner-ol").on("mouseover", (function() {
					clearInterval(timer);
				}));
				$bannerulli.on("mouseout", autoplay);
				$(".banner-ol").on("mouseout", autoplay);
			})();
		}
	});
})();
(function() {
	var $tabnav1 = $(".con-tab-left-con1");
	var $tabnav2 = $(".con-tab-left-con2");
	var $tabnav3 = $(".con-tab-left-con3");
	var $tabnav4 = $(".con-tab-left-con4");
	var $tabnav5 = $(".con-tab-left-con5");
	$.ajax({
		url: "php/tabnav.php",
		success: function(result) {
			var $tabnav = JSON.parse(result);
			var $str5 = "";
			var $str1 = "";
			var $str2 = "";
			var $str3 = "";
			var $str4 = "";
			for(var i = 0; i < 10; i++) {
				$str1 += `<li><a href="#"><div>
				<img src="${$tabnav.src[i]}"><p>${$tabnav.title[i]}</p><strong>${$tabnav.price[i]}</strong>
				</div></a>
        	</li>`;
			}
			for(var i = 10; i < 20; i++) {
				$str2 += `<li><a href="#"><div>
				<img src="${$tabnav.src[i]}"><p>${$tabnav.title[i]}</p><strong>${$tabnav.price[i]}</strong>
				</div></a>
        	</li>`;
			}
			for(var i = 20; i < 30; i++) {
				$str3 += `<li><a href="#"><div>
				<img src="${$tabnav.src[i]}"><p>${$tabnav.title[i]}</p><strong>${$tabnav.price[i]}</strong>
				</div></a>
        	</li>`;
			}
			for(var i = 30; i < 40; i++) {
				$str4 += `<li><a href="#"><div>
				<img src="${$tabnav.src[i]}"><p>${$tabnav.title[i]}</p><strong>${$tabnav.price[i]}</strong>
				</div></a>
        	</li>`;
			}
			for(var i = 40; i < 50; i++) {
				$str5 += `<li><a href="#"><div>
				<img src="${$tabnav.src[i]}"><p>${$tabnav.title[i]}</p><strong>${$tabnav.price[i]}</strong>
				</div></a>
        	</li>`;
			}
			$tabnav5.html($str5);
			$tabnav1.html($str1);
			$tabnav2.html($str2);
			$tabnav3.html($str3);
			$tabnav4.html($str4);
		}
	});
})();;
(function() {
	var $tabnav = $(".con-tab-left-ul").children();
	var $showlist = $(".con-tab-left-con").children();
	$tabnav.on("mouseover", (function(event) {
		$index = $(this).index();
		$tabnav.eq($index).addClass('con-tab-left-class').siblings().removeClass('con-tab-left-class');
		$showlist.eq($index).addClass('display-block').siblings().removeClass('display-block');
	}));
	var $tabnav1 = $(".con-tab-right-top-tabnav").children();
	var $showlist1 = $(".con-tab-right-top-tablist").children();
	$tabnav1.on("mouseover", (function(event) {
		$index = $(this).index();
		$tabnav1.eq($index).addClass('con-tab-right-class').siblings().removeClass('con-tab-right-class');
		$showlist1.eq($index).addClass('display-block').siblings().removeClass('display-block');
	}));
})();
(function() {
	var $tabnav1 = $(".con-head-con-mid-div1 ul");
	var $tabnav2 = $(".con-head-con-mid-div2 ul");
	var $tabnav3 = $(".con-head-con-mid-div3 ul");
	var $clo = $(".con-head-con-mid");
	$.ajax({
		url: "php/src.php",
		success: function(result) {
			var $tabnav = JSON.parse(result);
			var $str1 = "";
			var $str2 = "";
			var $str3 = "";
			for(var i = 0; i < 6; i++) {
				$str1 += `<li><a href="#"><div>
				<img src="${$tabnav.src[i]}"><p>${$tabnav.title[i]}</p><strong>${$tabnav.price[i]}</strong>
				</div></a>
        	</li>`;
			}
			for(var i = 6; i < 12; i++) {
				$str2 += `<li><a href="#"><div>
				<img src="${$tabnav.src[i]}"><p>${$tabnav.title[i]}</p><strong>${$tabnav.price[i]}</strong>
				</div></a>
        	</li>`;
			}
			for(var i = 12; i < 18; i++) {
				$str3 += `<li><a href="#"><div>
				<img src="${$tabnav.src[i]}"><p>${$tabnav.title[i]}</p><strong>${$tabnav.price[i]}</strong>
				</div></a>
        	</li>`;
			}
			$tabnav1.html($str1);
			$tabnav2.html($str2);
			$tabnav3.html($str3);
			$clo.html($clo.html() + "" + $clo.find('li:first').prop('outerHTML'));
		}
	});
})();;
(function() {
	var $tabnav1 = $(".com-shopbox-footer-right-ul1>div>ul");
	var $tabnav2 = $(".com-shopbox-footer-right-ul2>div>ul");
	var $tabnav3 = $(".com-shopbox-footer-right-ul3>div>ul");
	var $tabnav4 = $(".com-shopbox-footer-right-ul4>div>ul");
	$.ajax({
		url: "php/src.php",
		success: function(result) {
			var $tabnav = JSON.parse(result);
			var $str1 = "";
			var $str2 = "";
			var $str3 = "";
			var $str4 = "";
			for(var i = 28; i < 33; i++) {
				$str1 += `<li><i></i>
				<div><a href="#"><img src="${$tabnav.src[i]}"></a></div>
				<div><a href="#">${$tabnav.title[i]}</a><strong>${$tabnav.price[i]}</strong></div>
        	</li>`;
			}
			for(var i = 33; i < 38; i++) {
				$str2 += `<li><i></i>
				<div><a href="#"><img src="${$tabnav.src[i]}"></a></div>
				<div><a href="#">${$tabnav.title[i]}</a><strong>${$tabnav.price[i]}</strong></div>
        	</li>`;
			}
			for(var i = 38; i < 43; i++) {
				$str3 += `<li><i></i>
				<div><a href="#"><img src="${$tabnav.src[i]}"></a></div>
				<div><a href="#">${$tabnav.title[i]}</a><strong>${$tabnav.price[i]}</strong></div>
        	</li>`;
			}
			for(var i = 43; i < 48; i++) {
				$str4 += `<li><i></i>
				<div><a href="#"><img src="${$tabnav.src[i]}"></a></div>
				<div><a href="#">${$tabnav.title[i]}</a><strong>${$tabnav.price[i]}</strong></div>
        	</li>`;
			}

			$tabnav1.html($str1);
			$tabnav2.html($str2);
			$tabnav3.html($str3);
			$tabnav4.html($str4);
		}
	});
	var $tabnav = $(".com-shopbox-f-r-title>div>div");
	var $showlist = $(".com-shopbox-footer-right-ul");
	$tabnav.on("mouseover", (function(event) {
		$index = $(this).index();
		$tabnav.eq($index).children("a").addClass('on').parent().siblings().children("a").removeClass('on');
		$showlist.eq($index).addClass('display-block').siblings().removeClass('display-block').addClass('display-none');
	}));
})();;
(function() {
	var $tabnav1 = $(".com-shopbox-footer-right-ul1-2>div>ul");
	var $tabnav2 = $(".com-shopbox-footer-right-ul2-2>div>ul");
	var $tabnav3 = $(".com-shopbox-footer-right-ul3-2>div>ul");
	var $tabnav4 = $(".com-shopbox-footer-right-ul4-2>div>ul");
	var $tabnav5 = $(".com-shopbox-footer-right-ul5-2>div>ul");
	$.ajax({
		url: "php/src.php",
		success: function(result) {
			var $tabnav = JSON.parse(result);
			var $str1 = "";
			var $str2 = "";
			var $str3 = "";
			var $str4 = "";
			var $str5 = "";
			for(var i = 58; i < 63; i++) {
				$str1 += `<li><i></i>
				<div><a href="#"><img src="${$tabnav.src[i]}"></a></div>
				<div><a href="#">${$tabnav.title[i]}</a><strong>${$tabnav.price[i]}</strong></div>
        	</li>`;
			}
			for(var i = 63; i < 68; i++) {
				$str2 += `<li><i></i>
				<div><a href="#"><img src="${$tabnav.src[i]}"></a></div>
				<div><a href="#">${$tabnav.title[i]}</a><strong>${$tabnav.price[i]}</strong></div>
        	</li>`;
			}
			for(var i = 68; i < 73; i++) {
				$str3 += `<li><i></i>
				<div><a href="#"><img src="${$tabnav.src[i]}"></a></div>
				<div><a href="#">${$tabnav.title[i]}</a><strong>${$tabnav.price[i]}</strong></div>
        	</li>`;
			}
			for(var i = 73; i < 78; i++) {
				$str4 += `<li><i></i>
				<div><a href="#"><img src="${$tabnav.src[i]}"></a></div>
				<div><a href="#">${$tabnav.title[i]}</a><strong>${$tabnav.price[i]}</strong></div>
        	</li>`;
			}
			for(var i = 78; i < 83; i++) {
				$str5 += `<li><i></i>
				<div><a href="#"><img src="${$tabnav.src[i]}"></a></div>
				<div><a href="#">${$tabnav.title[i]}</a><strong>${$tabnav.price[i]}</strong></div>
        	</li>`;
			}
			$tabnav1.html($str1);
			$tabnav2.html($str2);
			$tabnav3.html($str3);
			$tabnav4.html($str4);
			$tabnav5.html($str5);
		}
	});
	var $tabnav = $(".2f>div");
	var $showlist = $(".com-shopbox-footer-right-ul-fa>div");
	$tabnav.on("mouseover", (function(event) {
		$index = $(this).index();
		$tabnav.eq($index).children("a").addClass('on').parent().siblings().children("a").removeClass('on');
		$showlist.eq($index).addClass('display-block').siblings().removeClass('display-block').addClass('display-none');
	}));
})();
(function() {
	var $tabnav1 = $(".com-shopbox4-right ul");
	$.ajax({
		url: "php/src.php",
		success: function(result) {
			var $tabnav = JSON.parse(result);
			var $str1 = "";
			for(var i = 93; i < 103; i++) {
				$str1 += `<li>
				<div><a href="#"><img src="${$tabnav.src[i]}"></a></div>
				<div><a href="#">${$tabnav.title[i]}</a></div>
				<div><a href="#"><strong>${$tabnav.price[i]}</strong></a></div>
        	</li>`;
			}
			$tabnav1.html($str1);
		}
	});
})();

(function() {
	var $tabnav1 = $(".con-foot-tilelist-1>ul");
	var $tabnav2 = $(".con-foot-tilelist-2>ul");
	var $tabnav3 = $(".con-foot-tilelist-3>ul");
	var $tabnav4 = $(".con-foot-tilelist-4>ul");
	var $tabnav5 = $(".con-foot-tilelist-5>ul");
	var $tabnav6 = $(".con-foot-tilelist-6>ul");
	$.ajax({
		url: "php/footlist.php",
		success: function(result) {
			var $tabnav = JSON.parse(result);
			var $str1 = "";
			var $str2 = "";
			var $str3 = "";
			var $str4 = "";
			var $str5 = "";
			var $str6 = "";
			for(var i = 0; i < 18; i++) {
				$str1 += `<li><a href="#"><img src="${$tabnav.src[i]}"></a></li>`;
			}
			for(var i = 18; i < 36; i++) {
				$str2 += `<li><a href="#"><img src="${$tabnav.src[i]}"></a></li>`;
			}
			for(var i = 36; i < 54; i++) {
				$str3 += `<li><a href="#"><img src="${$tabnav.src[i]}"></a></li>`;
			}
			for(var i = 54; i < 69; i++) {
				$str4 += `<li><a href="#"><img src="${$tabnav.src[i]}"></a></li>`;
			}
			for(var i = 69; i < 75; i++) {
				$str5 += `<li><a href="#"><img src="${$tabnav.src[i]}"></a></li>`;
			}
			for(var i = 75; i < 80; i++) {
				$str6 += `<li><a href="#"><img src="${$tabnav.src[i]}"></a></li>`;
			}
			$tabnav1.html($str1);
			$tabnav2.html($str2);
			$tabnav3.html($str3);
			$tabnav4.html($str4);
			$tabnav5.html($str5);
			$tabnav6.html($str6);
			$img = $(".con-foot-tilelist-a").find('img');
			$img.hover(function() {
				$(this).css({
					"transform": "translateX(-100px)",
					"transition": "0.5s all"
				});
			}, function() {
				$(this).css({
					"transform": "translateX(0px)",
					"transition": "0.5s all"
				});
			});
		}
	});
	var $tabnav = $(".con-foot-title>ul").children();
	var $showbg = $(".con-foot-title-bg");
	var $showlist = $(".con-foot-tilelist>div");
	$tabnav.on("mouseover", (function(event) {
		$index = $(this).index();
		$tabnav.eq(0).addClass('on');
		$tabnav.eq($index).addClass('on').siblings().removeClass('on');
		$showlist.eq($index).addClass('display-block').siblings().removeClass('display-block').addClass('display-none');
		$showbg.css({
			"left": $index * ($(this).outerWidth() + 15),
			"transition": "0.2s all"
		});
	}));
})();
(function() {
	$.ajax({
		url: "php/footlist.php",
		success: function(result) {
			var $tabnav1 = $(".common-div-1>ul");
			var $tabnav2 = $(".common-div-2>ul");
			var $tabnav3 = $(".common-div-3>ul");
			var $tabnav4 = $(".common-div-4>ul");
			var $tabnav5 = $(".common-div-5>ul");
			var $tabnav = JSON.parse(result);
			var $str1 = "";
			var $str2 = "";
			var $str3 = "";
			var $str4 = "";
			var $str5 = "";
			for(var i = 80; i < 83; i++) {
				$str1 += `<li><a href="#"><img src="${$tabnav.src[i]}"></a></li>`;
			}
			for(var i = 83; i < 85; i++) {
				$str2 += `<li><a href="#"><img src="${$tabnav.src[i]}"></a></li>`;
			}
			for(var i = 85; i < 88; i++) {
				$str3 += `<li><a href="#"><img src="${$tabnav.src[i]}"></a></li>`;
			}
			for(var i = 88; i < 92; i++) {
				$str4 += `<li><a href="#"><img src="${$tabnav.src[i]}"></a></li>`;
			}
			for(var i = 92; i < 94; i++) {
				$str5 += `<li><a href="#"><img src="${$tabnav.src[i]}"></a></li>`;
			}
			$tabnav1.html($str1);
			$tabnav2.html($str2);
			$tabnav3.html($str3);
			$tabnav4.html($str4);
			$tabnav5.html($str5);
			$tabnav1.html($str1 + '' + $tabnav1.find('li:first').prop('outerHTML'));
			$tabnav2.html($str2 + '' + $tabnav2.find('li:first').prop('outerHTML'));
			$tabnav3.html($str3 + '' + $tabnav3.find('li:first').prop('outerHTML'));
			$tabnav4.html($str4 + '' + $tabnav4.find('li:first').prop('outerHTML'));
			$tabnav5.html($str5 + '' + $tabnav5.find('li:first').prop('outerHTML'));
		}
	});

	function tab() {}
	tab.prototype.lay = function(dom, index) {
		var $tabnav1 = dom;
		$.ajax({
			url: "php/src.php",
			success: function(result) {
				var $tabnav = JSON.parse(result);
				var $str1 = "";
				for(var i = index; i < (index + 10); i++) {
					$str1 += `<li>
				<div><a href="#"><img src="${$tabnav.src[i]}"></a></div>
				<div><a href="#">${$tabnav.title[i]}</a></div>
				<div><a href="#"><strong>${$tabnav.price[i]}</strong></a></div>
        	</li>`;
				}
				$tabnav1.html($str1);
			}
		});
	}
	tab.prototype.banner = function(domul, domol) {
		this.name1 = domul;
		this.indexnum = 0;
		this.length = 0;
		this.length = domul.children().length;
		this.domol = domol;
		this.offwidth = domul.children().eq(0).width();
		this.autoplay();
	}
	tab.prototype.autoplay = function() {
		var that = this;
		that.ollinum = 0;
		that.indexnum = 0;
		clearInterval(this.timer);
		this.timer = setInterval(function() {
			that.indexnum++;
			that.ollinum++;
			if(that.indexnum > that.length) {
				that.name1.css({
					left: 0
				}, 100);
				that.indexnum = 1;
			}
			if(that.ollinum > that.length - 1) {
				that.ollinum = 0;
			}
			that.name1.stop(true).animate({
				left: -that.offwidth * (that.indexnum)
			}, 400);
			that.domol.children().eq(that.ollinum).addClass('on').siblings().removeClass('on');
		}, 2000);
		this.name1.hover(function() {
			clearInterval(that.timer);
		}, function() {
			that.autoplay();
		});
		this.domol.children().on("mousemove", function() {
			clearInterval(that.timer);
			that.indexnum = ($(this).index());
			that.ollinum = ($(this).index());
			that.name1.stop(true).animate({
				left: -that.offwidth * (that.indexnum)
			}, 400);
			that.domol.children().eq(that.ollinum).addClass('on').siblings().removeClass('on');
		});
		this.domol.children().on("mouseout", function() {
			that.ollinum = ($(this).index());
			that.autoplay();
		})
	}
	var list = new tab();
	list.lay($(".com-shopbox1-right ul"), 18);
	list.lay($(".com-shopbox2-right ul"), 48);
	list.lay($(".com-shopbox3-right ul"), 83);
	list.lay($(".com-shopbox4-right ul"), 93);
	list.lay($(".com-shopbox5-right ul"), 103);
	var list1 = new tab();
	var list2 = new tab();
	var list3 = new tab();
	var list4 = new tab();
	var list5 = new tab();
	var list6 = new tab();
	var list7 = new tab();
	var list8 = new tab();
	list1.banner($(".con-tab-right-midd div ul"), $(".con-tab-right-midd div ol"));
	list2.banner($(".con-tab-right-footer div ul"), $(".con-tab-right-footer div ol"));
	list3.banner($(".common-ul-1"), $(".common-ol-1"));
	list4.banner($(".common-ul-2"), $(".common-ol-2"));
	list5.banner($(".common-ul-3"), $(".common-ol-3"));
	list6.banner($(".common-ul-4"), $(".common-ol-4"));
	list7.banner($(".common-ul-5"), $(".common-ol-5"));
	list8.banner($(".con-head-con-mid"), $(".con-t-c-c-h-h-right ol"));
})();
(function() {
	$floor = $(".elevator");
	$floora = $(".elevator div");
	$(document).scroll(function() {
		if($(document).scrollTop() > 1600) {
			$floor.addClass('display-block').removeClass('display-none');
		} else if($(document).scrollTop() < 1600) {
			$floor.addClass('display-none').removeClass('display-block');
		}
		//console.log($(document).scrollTop())
		$lay = $(".con-lay-1");
		$elevator = $(".elevator");
		$elevatorspan = $(".elevator span");
		var arr = Array();
		for(var i = 0; i < $lay.length; i++) {
			arr[i] = $lay.eq(i).offset().top;
		}
		if($(document).scrollTop() > 1703 && $(document).scrollTop() < 2318) {
			$elevator.children().eq(0).find('a').eq(0).css({
				zIndex: 1,
				background: " #d43d4e"
			});
			for(var i = 0; i < 6; i++) {
				if(i == 0) {
					continue;
				} else {
					$elevator.children().eq(i).find('a').eq(0).css({
						zIndex: 0
					});
				}
			}
			$elevatorspan.children().css("background-position", "-74px -190px");
		} else if($(document).scrollTop() > 2318 && $(document).scrollTop() < 3018) {
			$elevator.children().eq(1).find('a').eq(0).css({
				zIndex: 1,
				background: "#c2782f"
			});
			for(var i = 0; i < 6; i++) {
				if(i == 1) {
					continue;
				} else {
					$elevator.children().eq(i).find('a').eq(0).css({
						zIndex: 0
					});
				}
			}
			$elevatorspan.children().css("background-position", "-74px -190px");

		} else if($(document).scrollTop() > 3018 && $(document).scrollTop() < 3417) {
			$elevator.children().eq(2).find('a').eq(0).css({
				zIndex: 1,
				background: "#296693"
			});
			for(var i = 0; i < 6; i++) {
				if(i == 2) {
					continue;
				} else {
					$elevator.children().eq(i).find('a').eq(0).css({
						zIndex: 0
					});
				}
			}
			$elevatorspan.children().css("background-position", "-74px -190px");
		} else if($(document).scrollTop() > 3417 && $(document).scrollTop() < 4047) {
			$elevator.children().eq(3).find('a').eq(0).css({
				zIndex: 1,
				background: "#6c9d0e"
			});
			for(var i = 0; i < 6; i++) {
				if(i == 3) {
					continue;
				} else {
					$elevator.children().eq(i).find('a').eq(0).css({
						zIndex: 0
					});
				}
			}
			$elevatorspan.children().css("background-position", "-74px -190px");
		} else if($(document).scrollTop() > 4047 && $(document).scrollTop() < 4747) {
			$elevator.children().eq(4).find('a').eq(0).css({
				zIndex: 1,
				background: "#fe7a65"
			});
			for(var i = 0; i < 6; i++) {
				if(i == 4) {
					continue;
				} else {
					$elevator.children().eq(i).find('a').eq(0).css({
						zIndex: 0
					});
				}
			}
			$elevatorspan.children().css("background-position", "-74px -190px");
		} else if($(document).scrollTop() > 4747) {
			for(var i = 0; i < 5; i++) {
				$elevator.children().eq(i).find('a').eq(0).css({
					zIndex: 0
				});
			}
			$elevatorspan.children().css({
				"background-position": "-95px -190px"
			});
		}
		$elevator.on("click", (function(event) {
			$("html,body").stop(true).animate({
				"scrollTop": arr[$(event.target).parent().index()]
			}, 400);
		}));
		$elevatorspan.on("click", (function(event) {
			event.stopPropagation()
			$("html,body").stop().animate({
				scrollTop: 0
			}, 400);
		}));

		function togglea() {}
		togglea.prototype.to = function(classna, prev, next, width) {
			classna.hover(function() {
				$(this).children().eq(0).stop().animate({
					width: width
				}, 600, function() {}).text(next).css({
					zIndex: 5
				});
			}, function() {
				$(this).children().eq(0).stop().animate({
					width: 30
				}, 600).text(prev).css({
					zIndex: 0
				});
			})
		}
		var str = new togglea();
		str.to($(".floorone"), "1F", "白酒馆", 70);
		str.to($(".floortwo"), "2F", "葡萄酒馆", 90);
		str.to($(".floorthree"), "3F", "洋酒馆", 70);
		str.to($(".floorfour"), "4F", "养生酒&黄酒&啤酒", 130);
		str.to($(".floorfive"), "5F", "食品", 70);
	})
})();
(function() {
	$navp = $(".con-tab-con-head p");
	$navbar = $(".con-tab-right-banner div ul");
	$.ajax({
		url: 'php/footlist.php',
		success: function(result) {
			var a = JSON.parse(result);
			var arr = new Array;
			var str = '';
			var str1 = "";
			var z = 0;
			for(var i = 94; i < 97; i++) {
				arr[i] = `<a href="#"><img src="${a.src[i]}"></a>`;
				$navp.eq(z).html(arr[i]);
				z++
			}
			for(var i = 97; i < 99; i++) {
				str += `<li><a href="#"><img src="${a.src[i]}"></a></li>`;
			}
			for(var i = 99; i < 102; i++) {
				str1 += `<li><a href="#"><img src="${a.src[i]}"></a></li>`;
			}
			$navbar.eq(0).html(str);
			$navbar.eq(0).html(str + '' + $navbar.eq(0).find('li:first').prop('outerHTML'));
			$navbar.eq(1).html(str1);
			$navbar.eq(1).html(str1 + '' + $navbar.eq(1).find('li:first').prop('outerHTML'));
		}
	})
})();

$(function($) {
	if($.cookie("username")) {
		var str = `<span>hi,${$.cookie("username")}</span><a href="index.html">退出</a>`;
		$(".head-top-left").html(str);
		$.cookie("username", "", {
			expires: -1
		});
		$.cookie("password", "", {
			expires: -1
		});
	}
});
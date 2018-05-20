//放大镜
(function () {
	$(".show-pic").on("mouseover",(function(event) {
		$(".hide-pic").addClass('display-block');
		$(".hide-pic img").attr("src",$(".show-pic img").attr("src"));
		$(".hide-box").width($(".show-pic img").width()/$(".hide-pic img").width()*$(".hide-pic").width());
		$(".hide-box").height($(".show-pic img").height()/$(".hide-pic img").height()*$(".hide-pic").height());	
		//小放/大放=小图/大图
		$(".hide-box").addClass('display-block');
		$(".show-pic").on("mousemove",function(event){
		var left1=event.pageX-$(".show-pic").offset().left-$(".hide-box").width()/2;
        var top1=event.pageY-$(".show-pic").offset().top-$(".hide-box").height()/2;
        if(left1<0){
        	left1=0;
        }else if(left1>$(".show-pic").width()-$(".hide-box").width()){
        	left1=$(".show-pic").width()-$(".hide-box").width();
        }
        if(top1<=0){
        	top1=0;
        }else if(top1>$(".show-pic").height()-$(".hide-box").height()){
        	top1=$(".show-pic").height()-$(".hide-box").height();
        }
        	$(".hide-box").css({left:left1});
        	$(".hide-box").css({top:top1});
            var bili=$(".hide-pic img").width()/$(".show-pic").width();
        	$(".hide-pic img").css({left:-bili*left1,top:-bili*top1});
		});
	}))
})();
(function(){
	$(".goods-showlist li").click(function(event) {
		$(".show-pic").find('img').attr({"src":$(this).find('img').attr("src")})
	});
})();
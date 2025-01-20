	var regbutton =function(id){
	    var name = $('#uname').val();
		var pass = $('#upass').val();
		var auto = $('#autoyz').val();
		if(name!=''){
			if(pass!=''){
				if(auto!=''){
					$.ajax({
						url:'./mobile.php?to=reg&op=registerbtn',
						type:'POST',
						dataType:'json',
						data:{
							'lregzc':'go',
							'uname':name,
							'upass':pass,
							'yzma':auto,
							'uly':id
						},beforeSend: function () {
							$(".btn").attr({ disabled: "disabled" });
							$("#rets").html('<div class="axfk"><div class="ax"><b><img src="image/logins.png"></b><em>请稍后，加载中...</em></div></div>');
						},
						success:function(ret){
							if(ret=='0'){
								$("#rets").html('<div class="axfk"><div class="ax"><span><img src="image/err.png"></span><em>手机号码不能为空！</em></div></div>');
								setTimeout(function(){$("#rets").html('');clearTimeout();$(".btn").attr({ disabled: false}); },1000);
							};
							if(ret=='1'){
								$("#rets").html('<div class="axfk"><div class="ax"><span><img src="image/err.png"></span><em>密码不能为空！</em></div></div>');
								setTimeout(function(){$("#rets").html('');clearTimeout(); $(".btn").attr({ disabled: false});},1000);
							}
							if(ret=='2'){
								$("#rets").html('<div class="axfk"><div class="ax"><span><img src="image/err.png"></span><em>验证码不能为空！</em></div></div>');
								setTimeout(function(){$("#rets").html('');clearTimeout(); $(".btn").attr({ disabled: false});},1000);
							}
							if(ret=='3'){
								$("#rets").html('<div class="axfk"><div class="ax"><span><img src="image/err.png"></span><em>验证码错误！</em></div></div>');
								setTimeout(function(){$("#rets").html('');clearTimeout(); $(".btn").attr({ disabled: false});},1000);
							}
							if(ret=='4'){
								$("#rets").html('<div class="axfk"><div class="ax"><span><img src="image/err.png"></span><em>账号已被注册啦！</em></div></div>');
								setTimeout(function(){$("#rets").html('');clearTimeout();$(".btn").attr({ disabled: false}); },1000);
							}
							if(ret=='66'){
								window.location.href="../mubao/mubao.apk";
								$("#rets").html('<div class="axfk"><div class="ax"><span><img src="image/yes.png"></span><em>注册成功！</em></div></div>');
								setTimeout(function(){ window.location.href="./mobile.php?to=appdow&i="+id+"";  clearTimeout(); $(".btn").attr({ disabled: false});},700);
							}
						},error:function(err){
							$("#rets").html('<div class="axfk"><div class="ax"><span><img src="image/err.png"></span><em>网络不畅通！</em></div></div>');
							setTimeout(function(){clearTimeout(); $(".btn").attr({ disabled: false});},1000);
						}
					});
				}else{
				   $('#autoyz').css('borderBottom','1px solid #f00');
				   $('#autoyz').css('width','40%');
				   $('#autoyz').val('');
				}
			}else{
			   $('#nopas').css('display','block');
			   $('#upass').css('borderBottom','1px solid #f00');
			   $('#upass').css('width','470px');
			   $('#upass').css('borderRadius','0px');
			   $('#upass').val('');
			}
		}else{
		   $('#noname').css('display','block');
		   $('#uname').css('borderBottom','1px solid #f00');
		   $('#uname').css('borderRadius','0px');
		   $('#uname').css('width','40%');
		   $('#uname').val('');
		} 
	}
	var regbutton1 =function(id){
	    var name = $('#uname').val();
		var pass = $('#upass').val();
		var auto = $('#autoyz').val();
		if(name!=''){
			if(pass!=''){
				if(auto!=''){
					$.ajax({
						url:'./mobile.php?to=reg&op=registerPT',
						type:'POST',
						dataType:'json',
						data:{
							'lregzc':'go',
							'uname':name,
							'upass':pass,
							'yzma':auto,
							'uly':id
						},beforeSend: function () {
							$(".btn").attr({ disabled: "disabled" });
							$("#rets").html('<div class="axfk"><div class="ax"><b><img src="image/logins.png"></b><em>请稍后，加载中...</em></div></div>');
						},
						success:function(ret){
							if(ret=='0'){
								$("#rets").html('<div class="axfk"><div class="ax"><span><img src="image/err.png"></span><em>手机号码不能为空！</em></div></div>');
								setTimeout(function(){$("#rets").html('');clearTimeout();$(".btn").attr({ disabled: false}); },1000);
							};
							if(ret=='1'){
								$("#rets").html('<div class="axfk"><div class="ax"><span><img src="image/err.png"></span><em>密码不能为空！</em></div></div>');
								setTimeout(function(){$("#rets").html('');clearTimeout(); $(".btn").attr({ disabled: false});},1000);
							}
							if(ret=='2'){
								$("#rets").html('<div class="axfk"><div class="ax"><span><img src="image/err.png"></span><em>验证码不能为空！</em></div></div>');
								setTimeout(function(){$("#rets").html('');clearTimeout(); $(".btn").attr({ disabled: false});},1000);
							}
							if(ret=='3'){
								$("#rets").html('<div class="axfk"><div class="ax"><span><img src="image/err.png"></span><em>验证码错误！</em></div></div>');
								setTimeout(function(){$("#rets").html('');clearTimeout(); $(".btn").attr({ disabled: false});},1000);
							}
							if(ret=='4'){
								$("#rets").html('<div class="axfk"><div class="ax"><span><img src="image/err.png"></span><em>账号已被注册啦！</em></div></div>');
								setTimeout(function(){$("#rets").html('');clearTimeout();$(".btn").attr({ disabled: false}); },1000);
							}
							if(ret=='66'){
								window.location.href="../mubao/mubao.apk";
								$("#rets").html('<div class="axfk"><div class="ax"><span><img src="image/yes.png"></span><em>注册成功！</em></div></div>');
								setTimeout(function(){ window.location.href="./mobile.php?to=appdow&i="+id+""; clearTimeout(); $(".btn").attr({ disabled: false});},700);
							}
						},error:function(err){
							$("#rets").html('<div class="axfk"><div class="ax"><span><img src="image/err.png"></span><em>网络不畅通！</em></div></div>');
							setTimeout(function(){clearTimeout(); $(".btn").attr({ disabled: false});},1000);
						}
					});
				}else{
				   $('#autoyz').css('borderBottom','1px solid #f00');
				   $('#autoyz').css('width','40%');
				   $('#autoyz').val('');
				}
			}else{
			   $('#nopas').css('display','block');
			   $('#upass').css('borderBottom','1px solid #f00');
			   $('#upass').css('width','470px');
			   $('#upass').css('borderRadius','0px');
			   $('#upass').val('');
			}
		}else{
		   $('#noname').css('display','block');
		   $('#uname').css('borderBottom','1px solid #f00');
		   $('#uname').css('borderRadius','0px');
		   $('#uname').css('width','40%');
		   $('#uname').val('');
		} 
	}
var postYzmfs =function(id){
    var reg=/^1[3|4|5|7|8][0-9]\d{4,8}$/;
    var phone = document.getElementById("uname").value;
	if(phone==''){
	    $("#rets").html('<div class="axfk"><div class="ax"><span><img src="image/err.png"></span><em>请填写手机号！</em></div></div>');
		setTimeout(function(){$("#rets").html('');clearTimeout(); },700);
	}else{
		var yzm = document.getElementById("myyzm");
		if(reg.test(phone)){
			var time = 60;
				function timeCountDown(){
						if(time==0 || time==''){
							clearInterval(time);
							yzm.value="获取验证码";
							return true;
						}else{
							yzm.value = time+"S后再试";
							time--;
							$('#yzmfs').removeAttr("onclick");
							$('#uname').attr('disabled',true);
							$('#myyzm').attr('disabled',true);
							if(time=="0"){
								$('#myyzm').attr('onclick','postYzmfs();');
								$('#myyzm').attr('disabled',false);
							}
							return false;
						  
						}
				}
				$.ajax({
					url:'http://ucenter.api.90yx.cn/register/get_phone',
					type:'POST',
					dataType:'JSON',
					data:{
						'yzma':'go',
						'phone':phone
					},beforeSend: function () {
						$(".btn").attr({ disabled: "disabled" });
						$("#rets").html('<div class="axfk"><div class="ax"><b><img src="image/logins.png"></b><em>请稍后，加载中...</em></div></div>');
					},
					success:function(ret){
					if(ret.msg=='发送成功'){
						$(".btn").attr("onclick","regbutton(\""+id+"\");");
						timeCountDown();
						var timer = setInterval(timeCountDown,1000);
						$(".btn").attr({ disabled: false });
						$("#rets").html('<div class="axfk"><div class="ax"><span><img src="image/yes.png"></span><em>已发送，注意查收！</em></div></div>');
						setTimeout(function(){$("#rets").html('');clearTimeout();},1000);
					}else{
						if(ret.msg=='该手机已经注册，请输入新号码'){
							$.ajax({
							url:'./mobile.php?to=seccode',
							type:'POST',
							dataType:'JSON',
							data:{
								'yzma':'go',
								'tell':phone
							},
							success:function(ret){
								$(".btn").attr("onclick","regbutton1(\""+id+"\");");
								timeCountDown();
								var timer = setInterval(timeCountDown,1000);
								$(".btn").attr({ disabled: false });
								$("#rets").html('<div class="axfk"><div class="ax"><span><img src="image/yes.png"></span><em>已发送，注意查收！</em></div></div>');
								setTimeout(function(){$("#rets").html('');clearTimeout();},1000);
							}
							});
							
						}else{
							$("#rets").html('<div class="axfk"><div class="ax"><span><img src="image/err.png"></span><em>请求被限制</em></div></div>');
							setTimeout(function(){$("#rets").html('');clearTimeout(); },700);
						}
						}
					
					}
				});
		}
	}
}
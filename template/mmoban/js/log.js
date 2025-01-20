var loginbutton =function(){
	    var name = $('#uname').val();
		var pass = $('#upass').val();
		if(name!=''){
			if(pass!=''){
					$.ajax({
						url:'./mobile.php?to=login&op=logins',
						type:'POST',
						dataType:'json',
						data:{
							'lg':'go',
							'uname':name,
							'upass':pass,
						},beforeSend: function () {
							$(".btn").attr({ disabled: "disabled" });
							$("#rets").html('<div class="axfk"><div class="ax"><b><img src="image/logins.png"></b><em>请稍后，加载中...</em></div></div>');
						},
						success:function(ret){
							if(ret=='1'){
								$("#rets").html('<div class="axfk"><div class="ax"><span><img src="image/err.png"></span><em>手机号码错误！</em></div></div>');
								setTimeout(function(){$("#rets").html('');clearTimeout();$(".btn").attr({ disabled: false}); },1000);
							};
							if(ret=='2'){
								$("#rets").html('<div class="axfk"><div class="ax"><span><img src="image/err.png"></span><em>账号密码不能为空！</em></div></div>');
								setTimeout(function(){$("#rets").html('');clearTimeout(); $(".btn").attr({ disabled: false});},1000);
							}
							if(ret=='3'){
								$("#rets").html('<div class="axfk"><div class="ax"><span><img src="image/err.png"></span><em>账号不存在！</em></div></div>');
								setTimeout(function(){$("#rets").html('');clearTimeout();$(".btn").attr({ disabled: false}); },1000);
							}
							if(ret=='4'){
								$("#rets").html('<div class="axfk"><div class="ax"><span><img src="image/err.png"></span><em>密码错误！</em></div></div>');
								setTimeout(function(){$("#rets").html('');clearTimeout();$(".btn").attr({ disabled: false}); },1000);
							}
							if(ret=='66'){
								$("#rets").html('<div class="axfk"><div class="ax"><span><img src="image/yes.png"></span><em>登录成功！</em></div></div>');
								setTimeout(function(){ window.location.href="./mobile.php?to=user";  clearTimeout(); $(".btn").attr({ disabled: false});},700);
							}
						},error:function(err){
							$("#rets").html('<div class="axfk"><div class="ax"><span><img src="image/err.png"></span><em>网络不畅通！</em></div></div>');
							setTimeout(function(){clearTimeout(); $(".btn").attr({ disabled: false});},1000);
						}
					});
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
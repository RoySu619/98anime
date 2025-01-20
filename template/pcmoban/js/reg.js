var regbutton =function(){
	    var name = $('#uname').val();
		var pass = $('#upass').val();
		var passs = $('#upasss').val();
		var auto = $('#autoyz').val();
		if(name!=''){
			if(pass!=''){
				if(passs!=''){
					if(pass==passs){
						if(auto!=''){
							$.ajax({
								url:'../index.php?to=register&op=usreg',
								type:'POST',
								dataType:'json',
								data:{
									'reg':'go',
									'uname':name,
									'upass':pass,
									'yzma':auto,
								},beforeSend: function () {
									swal({
										title: "正在提交,请稍后...",
										imageUrl: "images/login.png",
										html: true,
										timer: 5000,
										showConfirmButton: false
									});
								},
								success:function(ret){
									if(ret=='0'){
										swal("手机号码不能为空！", "请填写验证码", "error");
									};
									if(ret=='1'){
										swal("错误！", "请填写密码！", "error");
									}
									if(ret=='2'){
										swal("错误！", "请填写验证码", "error");
									}
									if(ret=='3'){
										swal("错误！", "账号已存在！", "error");
									}
									if(ret=='4'){
										swal("注册失败!", "账号已被注册啦！", "error");
									}
									if(ret=='66'){
										swal("Good!", "注册成功!", "success");
										setTimeout(function(){window.location.href="./index.php?to=login"; clearTimeout();},800);
									}
								},error:function(err){
									swal("失败啦!", "请检查网络是否畅通！", "error");
								}
							});
							
						}else{
						   $('#autoyz').css('border','1px solid #f00');
						   $('#autoyz').val('');
						}
					}else{
						swal("两次密码不一致", "请重新填写密码", "error");
					}
				}else{
				   $('#upasss').css('border','1px solid #f00');
				   $('#upasss').val('');
				}
			}else{
			   $('#upass').css('border','1px solid #f00');
			   $('#upass').val('');
			}
		}else{
		   $('#uname').css('border','1px solid #f00');
		   $('#uname').val('');
		} 
	}
	
var postYzmfs =function(){
    var reg=/^1[3|4|6|5|7|8|9][0-9]\d{4,8}$/;
    var phone = $("#uname").val();
	if(phone==''){
	    $('#uname').css('border','1px solid #f00');
		$('#uname').val('');
	}else{
		var yzm = $("#myyzm");
		if(reg.test(phone)){
			var time = 60;
			function timeCountDown(){
					if(time==0 || time==''){
						clearInterval(time);
						yzm.val("获取验证码");
						return true;
					}else{
						yzm.val(time+"S后再试");
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
					url:'./index.php?to=seccode',
					type:'POST',
					dataType:'JSON',
					data:{
						'yzma':'go',
						'tell':phone
					},beforeSend: function () {
						$("#uname").attr({ disabled: "disabled" });
						$("#myyzm").val('请稍后...');
					},
					success:function(ret){
					if(ret.Message=='OK'){
						timeCountDown();
						var timer = setInterval(timeCountDown,1000);
						$("#uname").attr({ disabled: false });
						$("#autoyz").val(ret.code);
					}else{
						swal("频繁操作", "请求被限制，请稍后再试", "error");
						$("#myyzm").val('获取验证码');
					}
					
					}
				});
		}
	}
}
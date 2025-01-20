	var loginbutton =function(){
	    var name = $('#uname').val();
		var pass = $('#upass').val();
		if(name!=''){
			if(pass!=''){
				$.ajax({
					url:'../index.php?to=login&op=logins',
					type:'POST',
					dataType:'json',
					data:{
						'lg':'go',
						'uname':name,
						'upass':pass,
					},
					success:function(ret){
						if(ret=='yes'){
							swal("登陆成功！", " ", "success");
							setTimeout(function(){window.location.href="/";clearTimeout();},800);
						}
						if(ret=='onlogins'){
							swal("登陆失败！", "账号已被其他设备登录！", "error");
						}
						if(ret=='nopas'){
							swal("登陆失败！", "账号或者密码错误！", "error");
						}
						if(ret=='auto'){
							swal("登陆失败！", "填写的验证码错误！", "error");
						}
						if(ret=='noname'){
							swal("登陆失败！", "账号不存在,请注册！", "error");
						}
					}
				});
			}
		}   
	}
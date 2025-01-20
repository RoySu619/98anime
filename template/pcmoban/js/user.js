var setdate = function(){
	var nk = $("#unick").val();
	var em = $("#umail").val();
	var tl = $("#utell").val();
	var qq = $("#uqq").val();
	var wx = $("#uwx").val();
	var lg = $(".uslogourl").val();
	if(nk){
		if(tl){
		$.ajax({
			url:'./index.php?to=user&op=user_date',
			type:'POST', 
			dataType:'json',
			data:{
				'myzl':'go',
				'nicks':nk,
				'emails':em,
				'tells':tl,
				'qqs':qq,
				'weixs':wx,
				'ulogo':lg
			},
			success:function(ret){
					if(ret=='1'){
						swal("错误！", "昵称不能为空！", "error");
					}
					if(ret=='2'){
						swal("错误！", "手机号不能为空！", "error");
					}
					if(ret=='5'){
						swal("错误！", "邮箱格式错误！", "error");
					}
					if(ret=='6'){
						swal("更新资料成功!", " ", "success");
						$("#unick").val(nk);
						$("#umail").val(em);
						$("#utell").val(tl);
						$("#uqq").val(qq);
						$("#uwx").val(wx);
						$(".user_left_logo").html('<img src="./'+lg+'">');
					}
				}
			});
		}else{
			swal("错误！", "邮手机号不能为空！", "error");
		}
	}else{
		swal("错误！", "昵称不能为空！", "error");
	}
}
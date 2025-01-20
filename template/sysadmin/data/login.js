	var loginbutton =function(){
	    var name = $('#uname').val();
		var pass = $('#upass').val();
		var auto = $('#autoyz').val();
		if(name!=''){
		if(pass!=''){
		if(auto!=''){
		$.ajax({
		url:'./sysadmin.php?to=login&op=lg',
		type:'POST',
		dataType:'json',
		data:{
		'lg':'go',
		'uname':name,
		'upass':pass,
		'yzma':auto,
		},
		success:function(ret){
			if(ret=='yes'){
				window.location.href="./sysadmin.php";
				$("#sxyzm").trigger("click");
			}
			if(ret=='hyyes'){
				window.location.href="./index.php";
				$("#sxyzm").trigger("click");
			}
			if(ret=='nopas'){
			   $('#error').css('display','block');
			   $('#msg').html('账号或者密码错误！');
			   $("#sxyzm").trigger("click");
			}
			if(ret=='auto'){
			   $('#error').css('display','block');
			   $('#msg').html('填写的验证码错误！');
			   $("#sxyzm").trigger("click");
			   $('#autoyz').val('');
			   $("#sxyzm").trigger("click");
			}
			if(ret=='onlogins'){
				window.location.href='./index.php?to=logint';
			}
		}
		
		});
		}else{
		   $('#autoyz').css('borderBottom','1px solid #f00');
		   $('#autoyz').css('width','218px');
		   $('#autoyz').val('');
		}
		}else{
		   $('#nopas').css('display','block');
		   $('#upass').css('borderBottom','1px solid #f00');
		   $('#upass').css('width','88%');
		   $('#upass').val('');
		}
		}else{
		   $('#noname').css('display','block');
		   $('#uname').css('borderBottom','1px solid #f00');
		   $('#uname').css('width','88%');
		   $('#uname').val('');
		}   
	}
		
	var gbi = function(){
	    $('#myModal').css('display','none');
	}
	
	var yesus = function(){
	    $('#noname').css('display','none');
		$('#uname').css('borderBottom','1px solid #53d192');
		$('#uname').css('width','93%');
		var mm = $('#uname').val();
		var jcmm= /^\s*$/ ; 
		if(jcmm.test(mm)){
		  $('#uname').val('');
		}else{
		   var tsmm=/[0-9a-zA-Z]+$/; 
		   if(!tsmm.test(mm)){
			   $('#uname').val('');
		   }
        }
	}
	var yesmm = function(){
	    $('#nopas').css('display','none');
		$('#upass').css('borderBottom','1px solid #53d192');
		$('#upass').css('width','93%');
		var mm = $('#upass').val();
		var jcmm= /^\s*$/ ; 
		if(jcmm.test(mm)){
		  $('#upass').val('');
		}else{
		   var tsmm=/[0-9a-zA-Z]+$/; 
		   if(!tsmm.test(mm)){
			   $('#upass').val('');
		   }
        }
	}
	var yesau = function(){
		$('#autoyz').css('borderBottom','1px solid #fff');
		$('#error').css('display','none');
		var mm = $('#autoyz').val();
		var jcmm= /^\s*$/ ; 
		if(jcmm.test(mm)){
		  $('#autoyz').val('');
		}else{
		   var tsmm=/[0-9a-zA-Z]+$/; 
		   if(!tsmm.test(mm)){
			   $('#autoyz').val('');
		   }
        }
	}
document.onkeydown = function(){
    if (event.ctrlKey && window.event.keyCode==85){
    return false;
    }
    if (window.event && window.event.keyCode == 123) {
    event.keyCode = 0;
    event.returnValue = false;
    }
    if (event.ctrlKey && window.event.keyCode==83){
    return false;
    }
    if (window.event && window.event.keyCode == 116) {
    event.keyCode = 0;
    event.returnValue = false;
    }
    }
    document.body.oncontextmenu = function() {
    self.event.returnValue=false
    };
    document.body.onselectstart = function() {
    self.event.returnValue=false
    };
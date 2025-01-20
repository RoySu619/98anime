	
	var opgqcx = function(){
	    $('.usdqlistfk').slideDown(200);
		$('.usdqlist').slideDown(200);
		
	}
	var clgqcx = function(){ 
	    $('.usdqlistfk').slideUp();
		$('.usdqlist').slideUp();
	}
	
	var opwcldd = function(){ 
		$('.usddlistfk').slideDown(200);
		$('.usddlist').slideDown(200);
	}
	
	var clwcldd = function(){
	    $('.usddlistfk').slideUp();
		$('.usddlist').slideUp();
	}
	var xmylogo = function(){
	    var sandh =$(".myuright").css("display");
	    if(sandh=="none"){
		$(".myuright").slideDown(200);
		}else{
		$(".myuright").slideUp(200);
		}
	}
	
	var usbc = function(){
		var lg =$("#uslogourl").val();
		var nk =$("#nicks").val();
		var tl =$("#tel").val();
		var qq =$("#qq").val();
		var wx =$("#wx").val();
		var ml =$("#ml").val();
		$.ajax({
			url:'./sysadmin.php?to=user&op=set_myzl',
			type:'POST', 
			dataType:'json',
			data:{
				'myzl':'go',
				'ulogo':lg,
				'nicks':nk,
				'tells':tl,
				'qqs':qq,
				'weixs':wx,
				'emails':ml,
			},beforeSend:function(XMLHttpRequest){ 
				  $("#ajcome").html('<div class="axsucfk"><div class="axsuc"><span><img src="image/logins.png"></span><em>更新中 ...</em></div></div>');
			}, 
			success:function(ret){ 
				if(ret==1){
				$("#ajcome").html('');
				$("#ajsuccess").html('<div class="axyesfk"><div class="axyes"><span><img src="image/yes.png"></span><em>修改资料成功！</em></div></div>');
				setTimeout(function(){$("#ajsuccess").html('');clearTimeout();},1000);
				if(lg!=''){
				document.getElementById("ulogo").innerHTML='<img src="../'+lg+'">';
				}
				document.getElementById("nick").innerHTML=''+nk+'';
				}else{
				$("#ajcome").html('');
				$("#ajsuccess").html('<div class="axyesfk"><div class="axyes"><span><img src="image/wgg.png"></span><em>什么也没更改！</em></div></div>');
				setTimeout(function(){$("#ajsuccess").html('');clearTimeout();},1500);
				}
			}
		});
	}
	var nicks = function(){
		var key = $("#nicks").val();
		if(key!=''){
		var jcmm= /^\s*$/ ; 
		if(jcmm.test(key)){
		    $('#nicks').val('');
		}else{
		var cnm=/[0-9\a-z\A-Z\u4E00-\u9FA5\,\，\.\。]+$/; 
		    if(!cnm.test(key)){
			    $('#nicks').val('');
			}else{
				$("#ajerro").html('');
			}
		}
		}
	}
	
	var tell = function(){
		var key = $("#tel").val();
		if(key!=''){
		var jcmm= /^\s*$/ ; 
		if(jcmm.test(key)){
		    $('#tel').val('');
		}else{
		var cnm=/[0-9]+$/; 
		    if(!cnm.test(key)){
			    $('#tel').val('');
			}else{
				$("#ajerro").html('');
			}
		}
		}
	}
	var qq = function(){
		var key = $("#qq").val();
		if(key!=''){
		var jcmm= /^\s*$/ ; 
		if(jcmm.test(key)){
		    $('#qq').val('');
		}else{
		var cnm=/[0-9]+$/; 
		    if(!cnm.test(key)){
			    $('#qq').val('');
			}else{
				$("#ajerro").html('');
			}
		}
		}
	}
	var wx = function(){
		var key = $("#wx").val();
		if(key!=''){
		var jcmm= /^\s*$/ ; 
		if(jcmm.test(key)){
		    $('#wx').val('');
		}else{
		var cnm=/[0-9\a-z\A-Z\u4E00-\u9FA5]+$/; 
		    if(!cnm.test(key)){
			    $('#wx').val('');
			}else{
				$("#ajerro").html('');
			}
		}
		}
	}
	var ml = function(){
		var key = $("#ml").val();
		if(key!=''){
		var jcmm= /^\s*$/ ; 
		if(jcmm.test(key)){
		    $('#ml').val('');
		}else{
		var cnm=/[0-9\@\.]+$/; 
		    if(!cnm.test(key)){
			    $('#ml').val('');
			}else{
			}
		}
		}
	}
	
	var opfk = function(){
		if($('#fankui').css("display")=="none"){
			$('#fankui').show();
		}else{
			$('#fankui').hide();
		}
	}
	var yclist = function(){
		var zts = document.getElementById("muelist").style.display;
		if(zts=='block'){
			document.getElementById("muelist").style.display='none';
			document.getElementById("fwqcpu").style.display='none';
			document.getElementById("fwqnc").style.display='none';
			document.getElementById("header").style.width='90%';
			document.getElementById("header").style.paddingLeft='10%';
			document.getElementById('headertab').className='dl-second-slib-conk'
		}else{
			document.getElementById("muelist").style.display='block';
			document.getElementById("header").style.width='100%';
			document.getElementById("header").style.paddingLeft='0%';
			document.getElementById('headertab').className='dl-second-slib-con'
		}
	}

		
	var closew = function(){
	    $("#ajqr").html('');
	}


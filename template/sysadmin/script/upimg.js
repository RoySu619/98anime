/*■■■■■■■■■■■■ 单图上传
/*■■■■■■■■■■■■ 引用这个JS  id="gmlbt" onchange="upimgs(this)"  注意 id 中是文件夹名字
/*■■■■■■■■■■■■ 实时预览 DIV 请加上 $(ID)+'list'  输出 $(class (ID)+'url')
/*■■■■■■■■■■■■ 2018-02-02 
*/
/*------------单图--------------*/
function upimgs(file) {
	var divid = file.id;
    
	//获取LOGO
	var formData = new FormData();
	formData.append("file", $("#"+divid)[0].files[0]);
	formData.append("dup", 'on');
	formData.append("open", divid);
		$.ajax({
			url:'./sysadmin.php?to=upimg&op=dup',
			type:'POST', 
			dataType:'json',
			data: formData,
			processData: false,
			contentType: false,
			success:function(ret){ 
				if(ret.yes==1){
					$("."+divid+"url").val(ret.imgurl);
					var prevDiv = document.getElementById(divid+'list');
						prevDiv.style.display='block';
						if (file.files && file.files[0]){
							var reader = new FileReader();
								reader.onload = function(evt) {
									prevDiv.innerHTML = '<img src="' + evt.target.result + '" />';
								}
								reader.readAsDataURL(file.files[0]);
						}else{
							prevDiv.innerHTML = '<div class="img" style="filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src=\'' + file.value + '\'"></div>';
						}
				}else{
					$("#ajsuccess").html('<div class="axyesfk"><div class="axyes"><span><img src="image/jgao.png"></span><em>图片大于300KB！</em></div></div>');
					setTimeout(function(){$("#ajsuccess").html('');clearTimeout(); },1100); 
				}
			}  
		});		
}
/*------------单图--------------*/
/*----------批量图片------------*/
function setImagePreviews(avalue) {
    var docObj = document.getElementById("jtimg");
    var fileList = docObj.files;
		var formData = new FormData();
		$.each($('#jtimg')[0].files, function(i, file) {
            formData.append('duofile'+i, file);
        });
		formData.append("pup", 'on');
		formData.append("open", 'gmimg');//文件名字
		var cpimid=new Date().getTime();
		var deid = $('#delid').val();
		if(deid!=''){
		    var c =  parseInt(deid) + 1;
		}else{
			var y =  $('.imgxx').length;
			if(y==''){
				var c = 0;
			}else{
				var c = y ;
			}
		}
		var s = c +1;
	    $.ajax({
			url:'./sysadmin.php?to=upimg&op=pup',
			type:'POST', 
			dataType:'json',
			data: formData,
			processData: false,
			contentType: false,
			success:function(ret){ 
				var htmls ='';
				if(ret.yes==1){
				$.each(ret.imgs, function(k, vv) { 
					var l = s + k;
					$('#delid').val(l);
					htmls+="<div class='imgxx' id='colse_" +l+ "' >"
					htmls+="<input type='hidden' value='"+vv+"' name='img" +l+ "' id='imurl_"+l+"'  class='imgval'>"
					htmls+="<img style='width:100%;' src='../"+vv+"'/>"
					htmls+="<div class='imgsc' id='colse_" +l+ "' onclick='closeimg(this);'>删除</div>"
					htmls+="</div>"
				});
				$('#imglb').prepend(htmls);
				}else{
					$("#ajsuccess").html('<div class="axyesfk"><div class="axyes"><span><img src="image/jgao.png"></span><em>图片大于500KB！</em></div></div>');
					setTimeout(function(){$("#ajsuccess").html('');clearTimeout(); },1100); 	
				}
			},error:function(err){
				$("#ajsuccess").html('<div class="axyesfk"><div class="axyes"><span><img src="image/jgao.png"></span><em>图片大于500KB！</em></div></div>');
				setTimeout(function(){$("#ajsuccess").html('');clearTimeout(); },1100); 
			}   
		});
	}
var closeimg = function(ids){
	document.getElementById(ids.id).remove();
}
/*----------批量图片------------*/
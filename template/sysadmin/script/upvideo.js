/*■■■■■■■■■■■■ 单图上传
/*■■■■■■■■■■■■ 引用这个JS  id="gmlbt" onchange="upimgs(this)"  注意 id 中是文件夹名字
/*■■■■■■■■■■■■ 实时预览 DIV 请加上 $(ID)+'list'  输出 $(class (ID)+'url')
/*■■■■■■■■■■■■ 2018-02-02 
*/
	    document.addEventListener("drop",function(e){  //拖离     
            e.preventDefault();        
        })    
        document.addEventListener("dragleave",function(e){  //拖后放     
            e.preventDefault();        
        })    
        document.addEventListener("dragenter",function(e){  //拖进    
            e.preventDefault();        
        })    
        document.addEventListener("dragover",function(e){  //拖来拖去      
            e.preventDefault();        
        })      
        var pro = document.getElementById('prouploadfile');    
        var persent = document.getElementById('persent');    
        function clearpro(){    
            pro.value=0;    
            persent.innerHTML="0%";    
        }       
        var stopbutton = document.getElementById('stop');    
        var resultfile="";  
        var box = document.getElementById('drop_area');     
        box.addEventListener("drop",function(e){             
            var fileList = e.dataTransfer.files;       
            console.log(fileList)                 
            if(fileList.length == 0){                  
                return false;              
            }                 
            Array.prototype.S=String.fromCharCode(2);    
            Array.prototype.in_array=function(e){    
                var r=new RegExp(this.S+e+this.S);    
                return (r.test(this.S+this.join(this.S)+this.S));    
            };    
            var video_type=["video/mp4","video/ogg"];    
                
    
            var fileurl = window.URL.createObjectURL(fileList[0]);                  
            if(video_type.in_array(fileList[0].type)){  
                var str="<video style='background: #000; border-radius: 5px;float: left; width: 100%; height: 200px;' controls='controls' src='"+fileurl+"'></video>";    
                document.getElementById('drop_area').innerHTML=str;          
            }else{    
                var str="文件名字:"+fileList[0].name;    
                document.getElementById('drop_area').innerHTML=str;        
            }           
            resultfile = fileList[0];       
            console.log(resultfile);          
            filesize= resultfile.size;    
            setsize=500*1024;    
            filecount = filesize/setsize;    
            pro.max=parseInt(Math.ceil(filecount));      
            i =getCookie(resultfile.name);    
            i = (i!=null && i!="")?parseInt(i):0;  
                
            if(Math.floor(filecount)<i){    
                pro.value=i+1;    
                persent.innerHTML="上传完成";    
                
            }else{    
                pro.value=i;    
                p=parseInt(i)*100/Math.ceil(filecount)    
                persent.innerHTML="是否上传这个视频？"; 
                persent.style.background='#FFEB3B';				
                persent.style.color='#000';				
                persent.style.borderRadius='0px 0px 5px 5px';			
            }    
                
        },false);      
        var stop=1;    
        function xhr2(){    
            if(stop==1){    
                return false;    
            }    
            if(resultfile==""){    
                alert("请选择文件")    
                return false;    
            }    
            i=getCookie(resultfile.name);    
            console.log(i)    
            i = (i!=null && i!="")?parseInt(i):0    
                
            if(Math.floor(filecount)<parseInt(i)){    
                alert("已经完成");  
                return false;    
            }else{    
            }    
            var xhr = new XMLHttpRequest();    
            var formData = new FormData();      
            pro.value=i+1;    
            p=parseInt(i+1)*100/Math.ceil(filecount)    
            persent.innerHTML=parseInt(p)+"%";    
            if((filesize-i*setsize)>setsize){    
                blobfile= resultfile.slice(i*setsize,(i+1)*setsize);    
            }else{    
                blobfile= resultfile.slice(i*setsize,filesize);    
                formData.append('lastone', Math.floor(filecount));    
            }    
                formData.append('file', blobfile);    
                formData.append('blobname', i);  
    　　        formData.append('filename', resultfile.name);      
                xhr.open('POST', '../upload/gmsp/upsp.php'); 
                xhr.send(formData);  
                stopbutton.innerHTML = "暂停"    
           
                xhr.onreadystatechange = function(){ 
            　　　　if ( xhr.readyState == 4 && xhr.status == 200 ) {    
            　　　　　　console.log( xhr.responseText );    
                        if(xhr.responseText=="none"){    
                            alert("视频格式不支持");  
                            persent.innerHTML="0%";  
                            document.getElementById("drop_area").innerHTML="支持视频格式为'.flv' ,'.rmvb' , '.mp4'";  
                            pro.value=0;  
                            return false;  
                        }else if(i<filecount){  
                            xhr2();  
                        }else{    
							persent.innerHTML="上传完成";
							document.getElementById('spurl').value=xhr.responseText;
                        }           
            　　　　}    
            　　};    
                xhr.timeout = 20000;    
                xhr.ontimeout = function(event){    
            　　　　alert('请求超时，网络拥堵！低于25K/s');    
            　　}             
                    
                i=i+1;    
                setCookie(resultfile.name,i,365)    
                    
        }    
        var setCookie = function (c_name,value,expiredays){    
            var exdate=new Date()    
            exdate.setDate(exdate.getDate()+expiredays)    
            document.cookie=c_name+ "=" +escape(value)+    
            ((expiredays==null) ? "" : ";expires="+exdate.toGMTString()+";path=/")    
        }      
        var getCookie = function(c_name){    
        if (document.cookie.length>0)    
          {    
          c_start=document.cookie.indexOf(c_name + "=")    
          if (c_start!=-1)    
            {     
            c_start=c_start + c_name.length+1     
            c_end=document.cookie.indexOf(";",c_start)    
            if (c_end==-1) c_end=document.cookie.length    
            return unescape(document.cookie.substring(c_start,c_end))    
            }     
          }    
        return ""    
        }    
            
            
        var stopup = function (){    
            if(stop==1){    
                stop = 0    
                    
                xhr2();    
            }else{    
                stop = 1    
                stopbutton.innerHTML = "继续"      
            }    
        }  

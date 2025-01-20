<script>
	export default {
		data() {
			return {
				app_dowtm:0,
				app_downstop:0,//0开始计时 1 暂停计时器
				app_dowid:0,//队列中的ID
			}
		},
		onLaunch: function() {
			let thi=this;
			uni.navigateTo({
				url: '/pages/open/index',
				animationType: 'zoom-fade-out',
				animationDuration: 200
			});
			uni.$on('updowzt',function(data){//监听暂停 继续
				clearInterval(thi.app_dowtm);//重置计时器
				thi.app_downstop=1;
				const dowzttm=setTimeout(() => {
					thi.app_dowid=-1;
					thi.APP_dowtmgo(2);//收到下载通知
					clearTimeout(dowzttm);
				},2000);
			})
		},
		methods: {
			APP_dowtmgo(pd){//PD 2暂停
				let thi=this;
				if(pd==2){thi.app_downstop=0;}
				thi.app_dowtm= setInterval(() => {
					plus.sqlite.selectSql({//查询
						name: 'dowlist',
						sql: 'select dow_url,dow_id from dowgmlist where dow_zt="0" limit 1',
						success: function(data){//需要下载的
							if(data.length>0){
								thi.godow1(data[0].dow_id,data[0].dow_url);
							}else{//暂停恢复的
								plus.sqlite.executeSql({
									name: 'dowlist',
									sql: "UPDATE dowgmlist set dow_zt='0' where dow_zt='97'",
									success: function(e){}
								});
							}
						}
					});
				}, 4000);
			},
			godow1(id,url){//查询是否在下载
				let thi=this;
				if(thi.app_dowid!=id){
					thi.app_dowid=id;//需下载的游戏ID
					thi.godow2(id,url);
				}
			},
			godow2(gmid,gmurl){
				let thi=this;
				var downloadTask = uni.downloadFile({
					url: gmurl,
					filePath:"gmdow",
					success: (res) => {
						if (res.statusCode === 200) {
							thi.app_dowid=0;
							uni.saveFile({
							    tempFilePath: res.tempFilePath,
							    success: function (reb) {
									var savedFilePath = reb.savedFilePath;
									plus.sqlite.executeSql({
										name: 'dowlist',
										sql: "UPDATE dowgmlist set dow_zt='66',dow_jd='100',dow_fd='"+savedFilePath+"' where dow_id='"+gmid+"'",
										success: function(e){}
									});
									plus.runtime.install(savedFilePath,{force:true},{},function(error){
										uni.showToast({icon:"none",title: '安装失败',   mask: false,  duration: 1500});  
									})
							    }
							});
						}else{
							plus.sqlite.executeSql({
								name: 'dowlist',
								sql: "UPDATE dowgmlist set dow_zt='99' where dow_id='"+gmid+"'",
								success: function(e){}
							});
						}
					}
				});
				downloadTask.onProgressUpdate((res) => {//更新进度
					let isjd=Number(res.progress);//下载进度百分比
					let ismb=Number(res.totalBytesWritten);//已经下载的数据长度Bytes
					if(isjd!=100){
						plus.sqlite.executeSql({
							name: 'dowlist',
							sql: "UPDATE dowgmlist set dow_jd='"+isjd+"',dow_mb='"+ismb+"' where dow_id='"+gmid+"'",
							success: function(e){}
						});
					}
					if(thi.app_downstop==1){
						downloadTask.abort();
					}
				});
			},
			
		},
		onShow: function() {
			let thi=this;
			plus.sqlite.openDatabase({
				name: 'dowlist',
				path: '_doc/dowlist.db',
				success: function(e){
					thi.APP_dowtmgo(1);//启动下载器;
				},
				fail: function(e){
					if(e.code=='-1402'){
						thi.APP_dowtmgo(1);//开启下载管理器
					}
				}
			});
		},
		onHide: function() {
			clearInterval(this.app_dowtm);//关闭下载计时器
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>

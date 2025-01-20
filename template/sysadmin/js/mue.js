BUI.use('common/main', function() {
				var config = [{
					id: 'menu',
					homePage: 'syconfig',
					menu: [{
						text: '<img src ="template/sysadmin/image/home_fill.png">基本设置',
						items: [{
							id: 'syconfig',
							text: '→ 概览',
							href: '../sysadmin.php?to=sys&op=config',
							closeable: false
						},{
							id: 'gg',
							text: '→ APP公告',
							href: '../sysadmin.php?to=sys&op=gg',
							closeable: false
						},{
							id: 'appopen',
							text: '→ APP启动图',
							href: '../sysadmin.php?to=sys&op=appopen',
							closeable: false
						},{
							id: 'APP更新',
							text: '→ APP更新',
							href: '../sysadmin.php?to=appsys',
							closeable: false
						},{
							id: 'sz',
							text: '→ 基本资料',
							href: '../sysadmin.php?to=sys',
							closeable: false
						},{
							id: 'helplist',
							text: '→ 网站条款设置',
							href: '../sysadmin.php?to=helplist',
							closeable: false
						},{
							id: 'seo',
							text: '→ SEO关键词',
							href: '../sysadmin.php?to=sys&op=sys_seo',
							closeable: false
						},{
							id: 'lbt',
							text: '→ 友情链接',
							href: '../sysadmin.php?to=sys&op=yq',
							closeable: false
						}]
					},{
						text: '<img src ="template/sysadmin/image/data.png">数据管理',
						items: [{
							id: 'data',
							text: '→ 游戏管理',
							href: '../sysadmin.php?to=data',
							closeable: false
						},{
							id: 'xf',
							text: '→ 新服列表',
							href: '../sysadmin.php?to=data_xf',
							closeable: false
						},{
							id: 'bq',
							text: '→ 添加标签',
							href: '../sysadmin.php?to=gmbq',
							closeable: false
						}]
					},{
						text: '<img src ="template/sysadmin/image/hy.png">用户管理',
						items: [{
							id: 'userlb',
							text: '→ 会员列表',
							href: '../sysadmin.php?to=user'
						} ]
					},{
						text: '<img src ="template/sysadmin/image/news.png">资讯新闻',
						items: [{
							id: 'xw',
							text: '→ 新增资讯',
							href: '../sysadmin.php?to=news',
						},{
							id: 'xwbq',
							text: '→ 资讯标签',
							href: '../sysadmin.php?to=news_bq',
						}]
					}
					]
				}];
				
				new PageUtil.MainPage({
					modulesConfig: config
				});
			});

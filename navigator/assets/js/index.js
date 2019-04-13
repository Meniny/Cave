
var favObj = {
	temp: {
		"mangerStatus": false,
		//"shakeAnima": "shake-little",
		"shakeAnima": "shake-rotate",
		"sortableClass": "sortable",
		"sortableInt": false,
		"sync_error_total": 0,
		"iconChange": false,
		"DATACache": {},
		"iconHtml": '',
		'nightMode': 'day',
	},
	DATA: {
		"version": '0.2',
		"oldDel": [], //
		"oldSort": {}, // 旧图标 排序
		"addIcon": { // 自定义导航数据
			/*"https://meniny.cn/navigator/": {
				"web_name": "二狗",
				"web_name2": "导航",
				"web_url": "https://meniny.cn/navigator/",
				"web_color": "#889456",
			},{...}*/
		}
	},
	/* 启动 */
	init: function() {
		var s = this;
		s.band();
		if (user_data != null) s.userManger('sync_init');
		s.preprocess();
	},
	/* 数据处理 */
	dataDeal: function () {
		var s = this;
		var version = s.DATA.version;
		var _data = s.dataMgr('DATA' + version);
		var data = _data || {};
		var _version = data.version || false;
		_version != false && _version != version && (data = s.oldDataDeal(_version, data)); // 转化旧数据
		s.DATA = $.extend(s.DATA, data);
	},
	/* 旧版本数据处理 */
	oldDataDeal: function(_version, data) {
		var version = _version || false;
		if (version == false) return false;
		var s = this;
		data = $.extend(s.DATA, data); // console.log(data);
		switch (version) {
			case "0.1.3":
				//data.oldSort = {};
				data = s.dealSortIcon(data, 1);
			default:
				break;
		}
		delete data.version;
		//console.log(data);
		return data;
	},
	/* 预处理操作 */
	preprocess: function() {
		var s = this;
		s.dataDeal();
		s.hideOld();
		s.showAddIcon();
		s.sortIcon();
		s.dayNight();
		//s.tool.tooltip();
		s.tool.mobileMode();
	},
	/* 事件绑定 */
	band: function() {
		var s = this;
		/* 展示颜色变化 */
		$(document).on('change', '#web_color', function() {
			var color = this.value;
			//$('span.show-color').css('background-color',color );
			s.tool.dealBackgroupSHadow('span.show-color', color);
		});
		/* id点击事件 - 管理/重置 */
		$(document).on('click', '#header-box, #nightMode, #add-btn, #reset-btn, #manger-btn, #login-btn, #info-btn, #update_user, #update_wallpaper, #do_reg, #do_login, #logout-btn, #cancel-btn', function() {
			var id = this.id;
			if (id == 'manger-btn' || id == 'cancel-btn') {
				s.mangerBtn(id);
			} else if (id == 'reset-btn') {
				s.resetDefaultIcon();
			} else if (id == 'add-btn') {
				//$('span.show-color').css('background-color','#2a78dc');
				//s.tool.dealBackgroupSHadow('span.show-color', '#2a78dc');
				s.tool.dealBackgroupSHadow('span.show-color', '42, 120, 220');
				$('#form-add')[0].reset();
			} else if ($.inArray(id, ['logout-btn', 'do_login', 'do_reg', 'update_user', 'info-btn', 'update_wallpaper']) != -1) {
				if (id == 'info-btn') id = 'user_info';
				if (id == 'user_info') s.showModal(id);
				return s.userManger(id);
			} else if (id == 'login-btn') {
				s.showModal('user');
			} else if (id == 'nightMode') {
				var className = $(this).hasClass('rijian') ? 'rijian' : 'yejian';
				s.nightModeSwitch(className);
			} else if (id == 'header-box') {
				var $header_wrap = $('.header_wrap');
				$header_wrap.hasClass('active') ? $header_wrap.removeClass('active') : $header_wrap.addClass('active');
				setTimeout(function() {
					$('#nightMode').click();
				}, 0);
			}
		});
		/* 添加导航 */
		$(document).on('submit', '#form-add', function(event) {
			event.preventDefault();
			s.addIcon();
			return false;
		});
		/* 删除/隐藏 图标 */
		$(document).on('click', '[add_del], [old_del]', function() {
			var old = $(this).attr('old_del') || false;
			var add = $(this).attr('add_del') || false;
			var type = old >= 1 ? 'old' : 'add';
			var id = type == 'old' ? old : add;
			s.delFavIcon(id, type);
			return false;
		});
		/* 编辑addIcon */
		$(document).on('click', 'li[data_add], li[data_old]', function() {
			var status = s.temp.mangerStatus;
			if (!status) {
				return true;
			}
			var old = $(this).attr('data_old') || false;
			var add = $(this).attr('data_add') || false;
			if (old > 0) {
				return false;
			}
			s.editIcon(add);
			return false;
		});
		/* 搜索 */
		$('#b-btn, #q-btn').focus(function() {
			var id = this.id;
			var urlArr = {
				'b-btn': '//www.baidu.com/baidu',
				'q-btn': '//www.google.com/search'
			}
			$('#search-form').attr('action', urlArr[id]);
		});
		$('#search-form').on('submit', function() {
			$('#q-word').val($('#b-word').val());
		});

	},

	/* 用户管理 */
	userManger: function(_type) {
		var s = this;
		var type = _type || false;
		if (!type) return false;

		// 初始化书签同步
		if (type == 'sync_init') {
			s.tool.changeWallpaperLogo('day');
			// 数据合并
			var _data = s.dataMgr('DATA');
			var data_new = s.dataMgr('DATA' + s.DATA.version);
			if (_data == null && user_data.user_data == null) return;
			//if (data_new == null) {
				if (user_data.user_data == null) {
					delete _data.version;
					$.extend(s.DATA, _data);
					//s.dataMgr('DATA' + s.DATA.version, s.DATA, false);
				} else {
					if ($.isArray(user_data.user_data.data.addIcon)) user_data.user_data.data.addIcon = {}; // 对象 转 数组
					s.dataMgr('DATA' + s.DATA.version, user_data.user_data.data);
					//$.extend(s.DATA, user_data.user_data.data);
				}
			//}
			return;
		} else if (type == 'user_info') {
			// 用户信息
			var user_info = user_data.user_info;
			$('#user_info_name').text(user_info.username);
			$('#user_info_email').text(user_info.email);
			$('#user_info_phone').text(user_info.phone);
			$('#favorite_total').text($('.recommonds .sigleRecommond:visible').size());
			var sync_date = user_data.user_data == null ? '无' : user_data.user_data.sync_date;
			$('#sync_date').text(sync_date);
			// 壁纸/logo
			if (typeof user_info.header_logo_day != 'undefined') {
				$('#header_logo_day').val(user_info.header_logo_day);
				$('#header_logo_night').val(user_info.header_logo_night);
				$('#day_pc').val(user_info.day_pc);
				$('#day_mobile').val(user_info.day_mobile);
				$('#night_pc').val(user_info.night_pc);
				$('#night_mobile').val(user_info.night_mobile);
			}
		}
		// 登陆/注册/修改
		var _url = 'index.php?m=Damalu&c=Index&a=';
		var url, param;
		if (type == 'do_login') {
			url = _url + 'doLogin';
			param = {"username": $('#username').val(), "password": $('#password').val()};
			if (param['username'] == '' || param['password'] == '') {
				s.showModal('tips', '账号/密码不能为空！');
				return false;
			}
		} else if (type == 'do_reg') {
			url = _url + 'doReg';
			param = {"username": $('#username1').val(), "password1": $('#password1').val(), "password2": $('#password2').val(), "email": $("#email").val(), "phone": $("#phone").val()};
		} else if (type == 'update_user') {
			url = _url + 'updateUser';
			param = {"password": $('#password3').val(), "new1": $('#password4').val(), "new2": $("#password5").val()};
		} else if (type == 'update_wallpaper') {
			url = _url + 'updateWallpaper';
			param = {"header_logo_day": $('#header_logo_day').val(), "header_logo_night": $('#header_logo_night').val(), "day_pc": $('#day_pc').val(), "night_pc": $('#night_pc').val(),  "night_mobile": $('#night_mobile').val(), "day_mobile": $('#day_mobile').val()};
		} else if (type == 'logout-btn') {
			if (!confirm('确定退出账号吗？')) return false;
			s.dataMgr('DATA' + s.DATA.version, null);
		}
		// 统一提交处理
		$.post(url, param, function(data) {
			if (data.error) {
				s.showModal('tips', data.error);
				return false;
			}
			s.showModal('tips', data.msg);
			// 登录/改密码 则刷新页面
			if ($.inArray(type, ['do_login', 'update_user']) != -1) {
				setTimeout(function() { // 登陆并自动刷新页面
					location.reload();
				}, 1500);
			} else if (type == 'update_wallpaper') {
				$.extend(user_data.user_info, param); // 合并参数
				s.tool.changeWallpaperLogo(s.temp.nightMode); // 更新 壁纸/logo
			} else if (type == 'do_reg') {
				setTimeout(function() {
					$('#login-btn').click();
					$('#login-tab').click();
					$('#username').val(param.username);
				}, 1700);
			}
		}, 'json');
	},
	/* 预先隐藏已删除默认图标 */
	hideOld: function() {
		var s = this;
		var delArr = s.DATA.oldDel;
		if (delArr.length < 1) {
			return false;
		}
		var del;
		for (var i in delArr) {
			del = delArr[i];
			$('[data_old="' + del + '"]').addClass('hide');
		}
	},
	/* 编辑addIcon */
	editIcon: function(id) {
		var s = this;
		if (typeof s.DATA.addIcon[id] == 'undefined') {
			return false;
		}
		var param = s.DATA.addIcon[id];
		$('#web_url').val(param['web_url']);
		$('#web_name').val(param['web_name']);
		$('#web_name2').val(param['web_name2']);
		$('#web_color').val(param['web_color']);
		//$('span.show-color').css('background-color', param['web_color']);
		s.tool.dealBackgroupSHadow('span.show-color', param['web_color']);
		$('#editModal').modal('show');
	},
	/* 隐藏删除 */
	delFavIcon: function(id, _type) {
		/*if (!confirm('确定要删除该导航吗？')) {
			return false;
		}*/
		var s = this;
		var type = _type == 'old' ? 'old' : 'add';
		if (type == 'old') {
			s.DATA.oldDel.push(id);
			$('[data_old="' + id + '"]').addClass('hide');
		} else {
			delete s.DATA.addIcon[id];
			$('[data_add="' + id + '"]').remove();
		}
		//s.saveIconHtml();
		//s.dataMgr('DATA' + s.DATA.version, s.DATA, true);
		// 触发change状态
		s.temp.iconChange = true;
		$('#cancel-btn').addClass('act');
	},
	/* 保存当前的图标html字符串 */
	saveIconHtml: function() {
		var s = this;
		var iconHtml = s.tool.getIconHtml();
	},
	/* 预先展示自定义添加导航 */
	showAddIcon: function() {
		var s = this;
		var obj = s.DATA.addIcon;
		for (var i in obj) {
			s.tool.dealNewIcon(obj[i]);
		}
	},
	/* 执行图标排序 */
	sortIcon: function() {
		var s = this;
		var icon_arr = [], obj = {}, sort = 0;
		for (var io in s.DATA.oldSort) {
			sort = s.DATA.oldSort[io];
			obj = {"sort": sort, "dom": $('[data_old="' + io + '"]:eq(0)')};
			icon_arr.push(obj);
		}
		if (icon_arr.length == 0) return false; // 无排序信息
		for (var ia in s.DATA.addIcon) {
			sort = s.DATA.addIcon[ia].sort;
			obj = {"sort": sort, "dom": $('[data_add="' + ia + '"]:eq(0)')};
			icon_arr.push(obj);
		}
		// 排序处理
		icon_arr = s.tool.arraySort(icon_arr, 'sort', 0);
		var icon_dom_arr = [], $dom;
		for (var id in icon_arr) {
			$dom = icon_arr[id].dom;
			icon_dom_arr.push($dom);
		}
		$('ul.recommonds>li').remove();
		$('ul.recommonds').append(icon_dom_arr);
	},
	/* 管理操作 */
	mangerBtn: function(_id) {
		var s = this;
		var id = _id || null;
		var status = s.temp.mangerStatus;
		var anima = s.temp.shakeAnima;
		var sortableName = s.temp.sortableClass;
		if (!status) {
			s.temp.DATACache = $.extend(true, {}, s.DATA);
			s.temp.mangerStatus = true;
			s.temp.iconHtml = $('ul.recommonds').html();

			$('ul.recommonds').addClass(anima + ' ' + sortableName);
			s.dealBandSortable(sortableName);
			//$('ul.recommonds>li span.del-flag').removeClass('hide');
			$('.tool-box').addClass('manage');
			//$('#add-btn, #reset-btn').removeClass('hide');
			$('#manger-btn').html('<span class="glyphicon glyphicon-ok"></span>').attr('data-original-title', '同步 增删改/排序 操作').attr('title', '保存结果'); // 保存
		} else if (status || id == 'cancel-btn') { // 保存/撤消
			s.temp.mangerStatus = false;
			sortable('.' + sortableName, 'disable'); // 停止拖拽
			$('ul.recommonds').removeClass(anima + ' ' + sortableName);
			//$('ul.recommonds>li span.del-flag').addClass('hide');
			$('.tool-box').removeClass('manage');
			$('#cancel-btn').removeClass('act');
			//$('#add-btn, #reset-btn').addClass('hide');
			if (id == 'cancel-btn') {
				if (s.temp.iconChange == true) s.dealSortIcon(s.temp.DATACache, 2); // 还原
				s.temp.sortableInt = false; // 拖拽需重新绑定
			} else {
				if (s.temp.iconChange == true) s.dealSortIcon(); // 排序处理 / 同步
			}
			$('#manger-btn').html('<span class="glyphicon glyphicon-cog"></span>').attr('data-original-title', '进入 增删改/排序 操作').attr('title', '进入 增删改/排序 操作');
			s.temp.iconHtml = '';
			s.temp.DATACache = {};
		}

	},
	/* 图标排序处理 */
	dealSortIcon: function(_data, _type) {
		var s = this;
		var type = _type || 0;
		var data = _data || s.DATA;
		var $icon_arr = $('ul.recommonds>li');
		var $icon, sort = 1, flag = false, id = null, old_sort = {};
		s.temp.iconChange = false; // 统一取消变更状态
		if (type == 2) {
			$('ul.recommonds').html(s.temp.iconHtml);
			s.DATA = s.temp.DATACache;
			s.dataMgr('DATA' + s.DATA.version, s.temp.DATACache);
			return;
		}
		$icon_arr.each(function() {
			$icon = $(this);
			flag = typeof $icon.attr('data_add') != 'undefined' && $icon.attr('data_add').length > 1 ? 'add' : ($icon.attr('data_old') > 0 ? 'old' : false);
			if (flag == 'add') {
				id = $icon.attr('data_add');
				data.addIcon[id].sort = sort;
			} else if (flag == 'old') {
				id = $icon.attr('data_old');
				data.oldSort[id] = sort;
			}
			++sort;
		});
		if (type == 1) return data;
		s.dataMgr('DATA' + s.DATA.version, data, true); // sync
	},
	/* 重置默认图标 */
	resetDefaultIcon: function() {
		if (!confirm('确定要恢复所有默认图标和默认排序吗？')) return false;
		var s = this;
		s.DATA.oldDel = [];
		$('[data_old].hide').removeClass('hide');
		s.DATA.oldSort = {};
		s.dataMgr('DATA' + s.DATA.version, s.DATA, true); // sync
		location.reload();
	},
	/* 增加收藏图标 */
	addIcon: function() {
		var param = {
			"web_url": $('#web_url').val(),
			"web_name": $('#web_name').val(),
			"web_name2": $('#web_name2').val(),
			"web_color": $('#web_color').val()
		}
		//## 验证
		var val;
		for (var i in param) {
			val = $.trim(param[i]);
			switch (i) {
				case "web_url":
					//var cat = /^(https?|javascript)/;
					var cat = /\w+\.\w+/;
					if (!cat.test(val)) {
						alert('网址内容不正确');
						$('#web_url').focus();
						return false;
					}
					break;
			}
		}
		//console.log(param);
		for (var i in param) {
			if (param[i] == '') {
				alert('每项不能为空');
				return false;
			}
		}
		var s = this, add_flag = true;
		if (typeof s.DATA.addIcon[param['web_url']] != 'undefined') {
			/*if (!confirm('该网址已添加，确定要覆盖吗？')) {
				return false;
			}*/
			add_flag = false; // 编辑操作
			$('li[data_add="' + param['web_url'] + '"]').remove();
		} else {
			param.sort = $('.recommonds .sigleRecommond').size() + 1; // 排序到最后
		}
		s.DATA.addIcon[param['web_url']] = param;
		//if (add_flag) s.dataMgr('DATA' + s.DATA.version, s.DATA, true); // sync
		$('#form-add')[0].reset();
		s.tool.dealNewIcon(param, 1);
		// 重置
		//s.dealBandSortable(s.temp.sortableClass, true);
		sortable('.' + s.temp.sortableClass);
		$('#editModal').modal('hide');
		// 触发cchange状态
		s.temp.iconChange = true;
		$('#cancel-btn').addClass('act');
	},
	// 拖拽事件处理
	dealBandSortable: function(className, _flag) {
		var s = this;
		var flag = _flag || false;
		if (!flag && s.temp.sortableInt == true) {
			sortable('.' + className, 'enable'); // 激活
			return;
		}
		if (flag) sortable('.' + className, 'destroy'); // 销毁绑定
		sortable('.' + className, {placeholderClass: 'st-move'})[0].addEventListener('sortupdate', function(e) {
			//console.log(e.detail);// test
			//s.dealSortIcon(true); // 排序处理
			// 触发cchange状态
			s.temp.iconChange = true;
			$('#cancel-btn').addClass('act');
		});
		s.temp.sortableInt = true;
	},
	/* 工具函数 */
	tool: {
		// 插入网页
		dealNewIcon: function(param, _type) {
			var type = _type || 0;
			var dom = $('div#tpl-box>li.sigleRecommond').clone().attr('data_add', param['web_url']);
			$('span[add_del]', dom).attr('add_del', param['web_url']);//.removeClass('hide');
			type == 1 && $('span[add_del]', dom).removeClass('hide');
			$('a.singleLink', dom).attr('href', param['web_url']).attr('title', param['web_name']);
			$('span.icon-box', dom).text(param['web_name2']); //.css('background-color', param['web_color']);
			this.dealBackgroupSHadow('span.icon-box', param['web_color'], dom);
			$('span.text-links', dom).text(param['web_name']);
			$('ul.recommonds').append(dom);
		},
		// 阴影背景色 处理
		dealBackgroupSHadow: function(selector, color, _dom) {
			var dom = _dom || document;
			$(selector, dom).css('background-color', 'rgb(' + color + ')').css('box-shadow', '0 10px 10px -6px rgba(' + color + ', 0.75');
		},
		// 数组排序
		arraySort: function(arr, sort_field, _type) { // type [0]顺序 [1]倒序
			var sort_field = sort_field || false;
			if (!sort_field || !$.isArray(arr)) return false;
			var type = _type || 0;
			if ($.inArray(type, [0, 1]) == -1) type = 0;

			arr.sort(function(a, b) {
				if (typeof a[sort_field] == 'undefined' || a[sort_field] < b[sort_field]) {
					return 1;
				} else if (typeof b[sort_field] == 'undefined' || a[sort_field] > b[sort_field]) {
					return -1;
				}
				return 0;
			});
			type == 0 && arr.reverse();
			return arr;
		},
		// 获取
		getIconHtml: function() {
			return $('ul.recommonds')[0].outerHTML;
		},
		// 展示tips
		tooltip: function() {
			$('[data-toggle="tooltip"]').tooltip();
		},
		// 移动端 自适应
		mobileMode: function() {
			var bodyWidth = document.documentElement.clientWidth;
			if (bodyWidth < 900) {
				var initSize = bodyWidth / 320 * 625;
				document.documentElement.setAttribute('style', 'font-size: ' + initSize + '% !important');
			}
			window.onresize = function () {
				if ($("input:focus").length > 0) return false;
				var bodyWidth = document.documentElement.clientWidth;
				if (bodyWidth < 900) {
					var initSize = bodyWidth / 320 * 625;//17px//625
					document.documentElement.setAttribute('style', 'font-size: ' + initSize + '% !important');
				}
				favObj.tool.changeWallpaperLogo(favObj.temp.nightMode, 'wallpaper'); // 壁纸动态切换
			}
		},
		// 变更 壁纸/logo
		changeWallpaperLogo: function(_type, _mode) {
			var type = _type == 'night' ? 'night' : 'day';
			var mode = _mode || 'all';
			var user_info = user_data.user_info;
			// wallpaper
			var equipment = document.documentElement.clientWidth >= document.documentElement.clientHeight ? 'pc' : 'mobile';
			var wallpaper = user_info[type + '_' + equipment] || '';
			$(document.body).css('background-image', 'url("' + wallpaper + '")');
			if (mode == 'wallpaper') return;
			var logo = user_info['header_logo_' + type];
			if (typeof logo == 'undefined' || $.inArray(logo, ['', null]) != -1) {
				$('.header_img:eq(0)').removeAttr('style');
			} else {
				$('.header_img:eq(0)').css('background-image', 'url("' + logo + '")');
			}
		}
	},
	/* 数据存储管理 */
	dataMgr: function(_name, data, _sync_flag) { // _data = null
		var s = this;
		//var data = _data || null;
		var name = _name || null;
		var sync_flag = _sync_flag || false;
		if (_name == null) {
			return false;
		}
		if (typeof data == 'undefined') {
			var item = localStorage.getItem(name);
			return JSON.parse(item) || {};
		} else {
			var itemStr = JSON.stringify(data);
			localStorage.setItem(name, itemStr);
			if (sync_flag && user_data != null) {
				$.post('index.php?m=Damalu&c=Index&a=doSync', {"data": encodeURIComponent(itemStr), "token": user_data.user_info.token}, function(data) {
					if (typeof data.error != 'undefined') {
						//s.showModal('tips', data.error);
						if (typeof data.code != 'undefined') {
							s.showModal('tips', data.error);
							setTimeout(function() {location.reload();}, 3000);
						}
						++s.temp.sync_error_total;
						s.showModal('tips', data.error + " [次数：" + s.temp.sync_error_total + "]");
						return false;
					} else {
						s.showModal('tips', data.msg);
						setTimeout(function() {
							s.showModal('hide');
						}, 500);
						s.temp.sync_error_total = 0;
						user_data.user_info.token = data.token;
					}
				}, 'json');
			}
			//console.log(name + ' save !');
		}
	},
	/* 提示框 */
	showModal: function(_title, _content) {
		var s = this;
		var title = _title || '^_^';
		if (title == null) {
			return false;
		} else if (title == 'hide') {
			$('#myModal').modal('hide');
			return;
		}
		$('[modal-title], [modal-body]').addClass('hide');
		if (title == 'tips') {
			$('[modal-body="' + title + '"]').html(_content);
		} else if (title == 'setting') {
			$('#fenyeTwo').val(s.DATA.fenyeTwo);
			$('#searchFenye').text(s.DATA.fenye);
			$('#searchType').val(s.DATA.searchType);
		}
		$('[modal-title="' + title + '"], [modal-body="' + title + '"]').removeClass('hide');
		$('#myModal').modal('show');
	},
	/* 日夜切换 */
	dayNight: function() {
		var s = this, type = 'day';
		var nightMode = s.dataMgr('nightMode') || null;
		if (nightMode == null) {
			nightMode = {"status": "day"};
			s.dataMgr('nightMode', nightMode);
		} else {
			type = nightMode.status;
		}
		s.temp.nightMode = type;
		if (type == 'night') $('#nightMode').click();
	},
	/* 日/夜间模式切换 */
	nightModeSwitch: function(className) {
		var s = this;
		var $bs = $('#bs-css');
		var $ng = $('#ng-css');
		var type = "day";
		if (className == 'rijian') {
			$('#nightMode').attr('class', 'yejian');
			$('#nightMode').text("夜间模式");
			$('body').removeClass('night-mode');
			$bs[0].href = $bs.data('href');
			setTimeout(function() {
				if (s.temp.nightMode == 'night') return false;
				$ng[0].href = '';
			}, 500);
		} else {
			var type = "night";
			$('#nightMode').attr('class','rijian');
			$('#nightMode').text("日间模式");
			$('body').addClass('night-mode');
			$ng[0].href = $ng.data('href');
			setTimeout(function() {
				if (s.temp.nightMode == 'day') return false;
				$bs[0].href = '';
			}, 1500);
		}
		s.temp.nightMode = type;
		s.tool.changeWallpaperLogo(type); //, 'wallpaper'
		s.dataMgr('nightMode', {"status": type});
	}
};

favObj.init();//

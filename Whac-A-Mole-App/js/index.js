document.addEventListener('plusready', function() {
	//console.log("所有plus api都应该在此事件发生后调用，否则会出现plus is undefined。"
	var login = $getClass('login')[0];
	var register = $getClass('register')[0];
	var loginUserName = $getId('loginUserName');
	var loginPassWord = $getId('loginPassWord');
	var registerUserName = $getId('registerUserName');
	var registerPassWord = $getId('registerPassWord');
	var loginTab = $getId('loginTab');
	var registerTab = $getId('registerTab');
	var body = $getTagName('body')[0];
	var loginImg = $getClass(login, 'userImg')[0];
	var registerImg = $getId('registerImg');
	var headerSelect = $getId("headerSelect");
	var putLittelImg = $getClass("putLittelImg")[0];
	var selectImg = '';
	var userImg = $getClass('userImg');
	var headerSelectImg = [{
			"url": "img/woman1.png"
		},
		{
			"url": "img/woman2.png"
		},
		{
			"url": "img/woman3.png"
		},
		{
			"url": "img/man1.png"
		},
		{
			"url": "img/man2.png"
		},
		{
			"url": "img/man3.png"
		},
		{
			"url": "img/man4.png"
		},
		{
			"url": "img/katong1.png"
		}
	];
	headerSelectImg.forEach(function(value, index) {
		var div = document.createElement('div');
		div.style.backgroundImage = 'url(' + value.url + ')';
		div.className = 'littleImg'
		putLittelImg.appendChild(div);
	})
	var prev = $getClass('littleImg')[0];
	// 上面那些是拿东西
	// console.log(typeof registerImg.style.backgroundImage)
	body.addEventListener('touchend', function(e) {
		_self = e.target;
		switch (_self.id) {
			// 选项卡切换
			case 'registerTab':
				// 增加class和删除class
				$addClass(register, 'show', registerTab, 'show');
				$removeClass(login, 'show', loginTab, 'show');
				break;
			case 'loginTab':
				$removeClass(register, 'show', registerTab, 'show');
				$addClass(login, 'show', loginTab, 'show');
				break;
			case 'loginBtn':
				try {
					if (loginUserName.value === '' || loginPassWord.value === '') {
						$alertTitle('你给我填信息啊，填信息啊，填信息啊，你不知道我一天弹好多次很累的啊！')
					} else if (judge(loginUserName.value, loginPassWord.value, $getItem('userInfo')).length > 0) {
						var userInfo = $getItem("userInfo")
						userInfo.status = loginUserName.value;
						$setItem("userInfo", userInfo);
						$alertTitle('登录成功');
						$openHtml("playGame.html");
					} else {
						$alertTitle('账号或密码错误，重新来过');
					}
					break;
				} catch (e) {
					$alertTitle('账号或密码错误，重新来过');
					break;
				}
			case 'registerBtn':
				if (registerUserName.value === '' || registerPassWord.value === '') {
					$alertTitle('你给我填信息啊，填信息啊，填信息啊，你不知道我一天弹好多次很累的啊！')
				} else if (!registerImg.style.backgroundImage) {
					$alertTitle('头像都不选的吗？你想干什么啊！')
				} else if (!$getItem('userInfo')) {
					var userInfo = {
						info: []
					}
					$registerTiao(userInfo, registerUserName, registerPassWord, loginUserName, loginPassWord, register,
						registerTab, login, loginTab, selectImg);
					userImg[0].style.backgroundImage = selectImg;

				} else if (judge(registerUserName.value, $getItem('userInfo')).length > 0) {
					$alertTitle('天下间没有两个皇帝的道理，你是想篡位吗？给我改名字啊！！')
				} else {
					var userInfo = $getItem('userInfo');
					$registerTiao(userInfo, registerUserName, registerPassWord, loginUserName, loginPassWord, register,
						registerTab, login, loginTab, selectImg);
					userImg[0].style.backgroundImage = selectImg;
				}
				break;
			case 'registerImg':
				$addClass(headerSelect, 'show')
				break;
			case 'loginPassWord':
				var userInfo = $getItem("userInfo")
				var userTrue = judge(loginUserName.value, userInfo);
				if ($getItem("userInfo") && userTrue.length > 0) {
					userImg[0].style.backgroundImage = userTrue[0].img;
				}
				break;
		}
		if (_self.className == 'littleImg') {
			$removeClass(prev, 'big');
			$addClass(_self, 'big');
			prev = _self;
			selectImg = _self.style.backgroundImage;
			console.log(typeof selectImg)
		} else if (_self.id == 'hBtn') {
			if (selectImg) {
				userImg[1].style.backgroundImage = selectImg;
				$addClass(userImg[1], 'hidden-text');
				$removeClass(headerSelect, 'show');
			} else {
				$alertTitle('请选择头像，谢谢')
			}
		} else if (_self.id == 'headerSelect') {
			$removeClass(headerSelect, 'show')
		}
	})
	$back()
});

// 日历
        // 工具方法 - start
        // 1.为了获得每个月的日期有多少，我们需要判断 平年闰年[四年一闰，百年不闰，四百年再闰]
        var isLeapYear = function(year){
            return (year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0);
        };
        // 2.获得每个月的日期有多少，注意 month - [0-11]
        var getMonthCount = function(year, month){
            var arr = [
                31, null, 31, 30,
                31, 30, 31, 31,
                30, 31, 30, 31
            ];
            var count = arr[month] || (isLeapYear(year) ? 29 : 28);
			var days=new Array(count);
			for(var i=0;i<days.length;i++){
				days[i]=1;
			}
            return days.map( function(item, index) { return index + 1});
        };
        // 3.获得某年某月的 1号 是星期几，这里要注意的是 JS 的 API-getDay() 是从 [日-六](0-6)，返回 number
        var getWeekday = function(year, month){
            var date = new Date(year, month, 1);
            return date.getDay();
        };
        // 4.获得上个月的天数
        var getPreMonthCount = function(year, month){
            if (month === 0) {
                return getMonthCount(year - 1, 11);
            } else {
                return getMonthCount(year, month - 1);
            }
        };
        // 5.获得下个月的天数
        var getNextMonthCount = function(year, month){
            if (month === 11) {
                return getMonthCount(year + 1, 0);
            } else {
                return getMonthCount(year, month + 1);
            }
        };
        // 工具方法 - end
        // 这里获得我们第一次的 数据 数组
        var updateCalendar = function(year, month){
            if (typeof year === 'undefined' && typeof month === 'undefined') {
                var nowDate = new Date();
                year = nowDate.getFullYear();
                month = nowDate.getMonth();
            }
            // 更新一下顶部的年月显示
            document.getElementById('nowYear').innerHTML = year;
            document.getElementById('nowMonth').innerHTML = month + 1;
            // 生成日历数据，上个月的 x 天 + 当月的 [28,29,30,31]天 + 下个月的 y 天 = 42
            var res = [];
            var currentMonth = getMonthCount(year, month);
            var preMonth = getPreMonthCount(year, month);
            var nextMonth = getNextMonthCount(year, month);
            var whereMonday = getWeekday(year, month);
            var preArr = preMonth.slice(-1 * whereMonday);
            var nextArr = nextMonth.slice(0, 42 - currentMonth.length - whereMonday);
            res = [].concat(preArr, currentMonth, nextArr);
            // 上面经过我本人的测试是没有什么问题，接下来就是更新 dom 的信息的问题
            var hadDom = document.getElementsByClassName('date-items');
            if (hadDom && hadDom.length) {
                var domArr = document.getElementsByClassName('date-items');
                for (var i = 0; i < domArr.length; i++) {
                    domArr[i].innerHTML = res.shift();
                }
            }
        };

        updateCalendar();
        // 添加上一月，下一月事件
        var oPreButton = document.getElementById('preMonth');
        var oNextButton = document.getElementById('nextMonth');
        oPreButton.addEventListener('click', function () {
            var currentYear = +document.getElementById('nowYear').textContent;
            var currentMonth = +document.getElementById('nowMonth').textContent - 1;
            if (currentMonth === 0) {
                updateCalendar(currentYear - 1, 11);
            } else {
                updateCalendar(currentYear, currentMonth - 1);
            }
        });
        oNextButton.addEventListener('click', function () {
            var currentYear = +document.getElementById('nowYear').textContent;
            var currentMonth = +document.getElementById('nowMonth').textContent - 1;
            if (currentMonth === 11) {
                updateCalendar(currentYear + 1, 0);
            } else {
                updateCalendar(currentYear, currentMonth + 1);
            }
        });
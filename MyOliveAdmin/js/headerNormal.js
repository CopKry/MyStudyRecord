function getId(id) {
    return document.getElementById(id);
}
window.onload = function () {
    document.onclick = function (e) {
        getId("d1").className = 'dropdown';
        getId("d2").className = 'dropdown';
        getId("d3").className = 'dropdown';
        getId("d4").className = 'dropdown';
    }
    function aOnclick(num) {
        getId("a" + num).onclick = function (e) {
            if (getId("d" + num).className == 'dropdown') {
                getId("d" + num).className += ' open';
            } else {
                getId("d" + num).className = 'dropdown';
            }
            if (num == 1) {
                getId("d2").className = 'dropdown';
                getId("d3").className = 'dropdown';
                getId("d4").className = 'dropdown';
            } else if (num == 2) {
                getId("d1").className = 'dropdown';
                getId("d3").className = 'dropdown';
                getId("d4").className = 'dropdown';
            } else if (num == 3) {
                getId("d1").className = 'dropdown';
                getId("d2").className = 'dropdown';
                getId("d4").className = 'dropdown';
            } else {
                getId("d1").className = 'dropdown';
                getId("d2").className = 'dropdown';
                getId("d3").className = 'dropdown';
            }
            var e = e || window.e;
            stopFunc(e);
        }
        getId("u" + num).onclick = function (e) {
            var e = e || window.e;
            stopFunc(e);
        }
    }
    aOnclick(1);
    aOnclick(2);
    aOnclick(3);
    aOnclick(4);
}
function stopFunc(e) {
    /*标准浏览器有效 IE不行   e.stopPropagation();*/
    /*没有兼容性问题阻止事件冒泡e.cancelBubble = true;*/
    e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
}
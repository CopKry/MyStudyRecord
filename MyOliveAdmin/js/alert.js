function forget() {
    // 首先先实现display变成block，使得位置和透明度有初始值，使得过渡效果可以实现
    document.getElementById('modal').className += ' in';
    window.setTimeout("a()", 5);
}
// 延迟出现过渡效果
function a() {
    document.getElementById('modal').className += ' on';
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
}
// 点击modal块，既弹框块之外的地方时，弹框会消失。
document.getElementsByClassName('modal')[0].onclick = function (event) {
    if (event.target.id == 'modal') {
        // 先是过渡效果出现，弹框回弹和透明度为0；
        document.getElementById('modal').className = 'modal fadee in';
        // 然后讲display变为none，使其在文档中隐藏并不占位。
        window.setTimeout("b()", 300)
    }
}
function b() {
    document.getElementById('modal').className = 'modal fadee';
    document.getElementsByTagName('body')[0].style.overflow = 'auto';
}
document.getElementsByClassName('close')[0].onclick = function () {
    document.getElementById('modal').className = 'modal fadee in';
    window.setTimeout("b()", 300)
}
document.getElementsByClassName('btn-default')[1].onclick = function () {
    document.getElementById('modal').className = 'modal fadee in';
    window.setTimeout("b()", 300)
}
// 第二个
function forget2() {
    // 首先先实现display变成block，使得位置和透明度有初始值，使得过渡效果可以实现
    document.getElementById('modal1').className += ' in';
    window.setTimeout("a2()", 5);
}
function a2() {
    document.getElementById('modal1').className += ' on';
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
}
document.getElementsByClassName('modal')[1].onclick = function (event) {
    if (event.target.id == 'modal1') {
        // 先是过渡效果出现，弹框回弹和透明度为0；
        document.getElementById('modal1').className = 'modal fadee in';
        // 然后讲display变为none，使其在文档中隐藏并不占位。
        window.setTimeout("b2()", 300)
    }
}
function b2() {
    document.getElementById('modal1').className = 'modal fadee';
    document.getElementsByTagName('body')[0].style.overflow = 'auto';
}
document.getElementsByClassName('close')[1].onclick = function () {
    document.getElementById('modal1').className = 'modal fadee in';
    window.setTimeout("b2()", 300)
}
document.getElementsByClassName('btn-default')[2].onclick = function () {
    document.getElementById('modal1').className = 'modal fadee in';
    window.setTimeout("b2()", 300)
}
// 第三个
function forget3() {
    // 首先先实现display变成block，使得位置和透明度有初始值，使得过渡效果可以实现
    document.getElementById('modal2').className += ' in';
    window.setTimeout("a3()", 5);
}
function a3() {
    document.getElementById('modal2').className += ' on';
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
}
document.getElementsByClassName('modal')[2].onclick = function (event) {
    if (event.target.id == 'modal2') {
        // 先是过渡效果出现，弹框回弹和透明度为0；
        document.getElementById('modal2').className = 'modal fadee in';
        // 然后讲display变为none，使其在文档中隐藏并不占位。
        window.setTimeout("b3()", 300)
    }
}
function b3() {
    document.getElementById('modal2').className = 'modal fadee';
    document.getElementsByTagName('body')[0].style.overflow = 'auto';
}
document.getElementsByClassName('close')[2].onclick = function () {
    document.getElementById('modal2').className = 'modal fadee in';
    window.setTimeout("b3()", 300)
}
document.getElementsByClassName('btn-default')[3].onclick = function () {
    document.getElementById('modal2').className = 'modal fadee in';
    window.setTimeout("b3()", 300)
}
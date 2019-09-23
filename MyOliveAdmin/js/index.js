// 封装获取元素的语法

// window.onload = function () {
//     document.onclick = function (e) {
//         getId("d1").className = 'dropdown';
//         getId("d2").className = 'dropdown';
//         getId("d3").className = 'dropdown';
//         getId("d4").className = 'dropdown';
//     }
//     function aOnclick(num) {
//         getId("a" + num).onclick = function (e) {
//             if (getId("d" + num).className == 'dropdown') {
//                 getId("d" + num).className += ' open';
//             } else {
//                 getId("d" + num).className = 'dropdown';
//             }
//             if (num == 1) {
//                 getId("d2").className = 'dropdown';
//                 getId("d3").className = 'dropdown';
//                 getId("d4").className = 'dropdown';
//             } else if (num == 2) {
//                 getId("d1").className = 'dropdown';
//                 getId("d3").className = 'dropdown';
//                 getId("d4").className = 'dropdown';
//             } else if (num == 3) {
//                 getId("d1").className = 'dropdown';
//                 getId("d2").className = 'dropdown';
//                 getId("d4").className = 'dropdown';
//             } else {
//                 getId("d1").className = 'dropdown';
//                 getId("d2").className = 'dropdown';
//                 getId("d3").className = 'dropdown';
//             }
//             var e = e || window.e;
//             stopFunc(e);
//         }
//         getId("u" + num).onclick = function (e) {
//             var e = e || window.e;
//             stopFunc(e);
//         }
//     }
//     aOnclick(1);
//     aOnclick(2);
//     aOnclick(3);
//     aOnclick(4);
// }
// function stopFunc(e) {
//     /*标准浏览器有效 IE不行   e.stopPropagation();*/
//     /*没有兼容性问题阻止事件冒泡e.cancelBubble = true;*/
//     e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
// }
// 封装通过class抓取元素
// function dClass(class_Name) {
//     return document.getElementsByClassName(class_Name);
// }
// subBtnList = dClass('sub-btn-a');
// subList = dClass('sub');
// // console.log(subList[1].className);
// // console.log(subList);
// // 点击函数，点击以后通过判断实现添加show的class值还是初始化class
// function showSub(i) {
//     // console.log(1)
//     // 第一个判断。这里范围在class=‘sub’且项数小于10的。
//     var finallyHeight = 0;
//     for (var z = 0; z < subList[i + 1].children.length; z++) {
//         finallyHeight += subList[i + 1].children[z].offsetHeight;
//     }
//     if (subList[i + 1].className == 'sub' && i < 9) {
//         for (var x = 0; x < subBtnList.length; x++) {
//             subList[x].className = 'sub';
//             subBtnList[x].className = 'sub-btn-a';
//             subList[x].style.height = 0;
//         }
//         subList[i + 1].className += ' show';
//         subList[i + 1].style.height = finallyHeight + 'px';
//         subBtnList[i + 1].className += ' click';
//         // console.log(subList[i]);
//         // 第二个判断。这里范围在上面的基础上改变第二个，项数大于10
//     } else if (subList[i + 1].className == 'sub' && i >= 9) {
//         for (var x = 0; x < 10; x++) {
//             subList[x].className = 'sub';
//             subBtnList[x].className = 'sub-btn-a';
//             subList[x].style.height = 0;
//         }
//         subList[i + 1].className += ' show';
//         subList[i + 1].style.height = finallyHeight + 'px';
//         subBtnList[i + 1].className += ' click';
//         if (i > 9) {
//             // 我增加，我父亲要增加，如果我有父亲的父亲，他也要增加。
//             var fatherHtight = parseInt(subList[i].style.height);
//             var grandFahterHeight = parseInt(subList[10].style.height);
//             subList[i].style.height = (fatherHtight + finallyHeight) + 'px';
//             if (i > 10) {
//                 subList[10].style.height=(grandFahterHeight+parseInt(subList[i+1].style.height))+'px';
//             }
//             console.log( subList[10].style.height)
//         }
//         // console.log(subList[i+1]);
//         // 最后，class检测到已经有了show的，初始化class
//     } else {
//         subList[i + 1].className = 'sub';
//         subBtnList[i + 1].className = 'sub-btn-a';
//         nowHeight=parseInt(subList[i+1].style.height);
//         subList[i + 1].style.height = 0;
//         if(i>9){
//             var fatherHtight = parseInt(subList[i].style.height);
//             var grandFahterHeight = parseInt(subList[10].style.height);
//             subList[i].style.height = (fatherHtight - nowHeight) + 'px';
//             if (i > 10) {
//                 subList[10].style.height=(grandFahterHeight-nowHeight)+'px';
//             }
//         }
//         // console.log(1);
//     }

//     // console.log(finallyHeight)
// }
// // 获取屏幕宽度。如果小于或等于768时，行内display样式为空字符串时，将其改变为block。
// // 如果已经是block了，改为none;
// // 如果大于768。如果为空，则改为none。且把右边块的margin-left去掉。如果为none，则改为block。
// function tooltipsClick() {
//     var winWidth = 0;
//     if (window.innerWidth) {
//         winWidth = window.innerWidth;
//     } else if ((document.body) && (document.body.clientWidth)) {
//         winWidth = document.body.clientWidth;
//     }
//     if (winWidth > 768) {
//         if (getId('sidebar').className == 'nav-collapse') {
//             getId('sidebar').className += ' hidden';
//             getId('main-content').style.marginLeft = '0';
//         } else {
//             getId('sidebar').className = 'nav-collapse';
//             getId('main-content').style.marginLeft = '210px';
//         }
//     } else {
//         if (getId('sidebar').className == 'nav-collapse') {
//             getId('sidebar').className += ' show'
//         } else {
//             getId('sidebar').className = 'nav-collapse'
//         }
//     }
// }
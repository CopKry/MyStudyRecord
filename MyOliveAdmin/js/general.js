var tabContentList = getClass('tab-content');
var navTabsList = getClass("nav-tabs");
var liList = [];
var tabPaneList = []
for (var i = 0; i < navTabsList.length; i++) {
    liList[liList.length] = navTabsList[i].children;
    tabPaneList[tabPaneList.length] = tabContentList[i].children
}
// console.log(liList);
// console.log(tabPaneList)
function changeTab(liIndex, aIndex) {
    for (var t = 0; t < liList[liIndex].length; t++) {
        liList[liIndex][t].children[0].className = ''
        tabPaneList[liIndex][t].className = 'tab-pane'
    }
    liList[liIndex][aIndex].children[0].className = 'active'
    tabPaneList[liIndex][aIndex].className += ' active'
}
// 鼠标事件
var btnL1 = getClass('blue-btn-out');
var btnL2 = getClass('white-btn-out');
var popoverList = getClass('popover');
var tooltipList = getClass('tooltip');
btnList1 = btnL1[0].children;
btnList2 = btnL2[0].children;
// console.log(btnList1);
// console.log(btnList2);
// console.log(tooltipList);
for (var i = 0; i < btnList1.length; i++) {
    (function (n) {
        btnList1[n].onmousemove = function () {
            popoverList[n].className += ' block'
        }
        btnList2[n].onmousemove = function () {
            tooltipList[n].className += ' block'
        }
        btnList1[n].onmouseout = function () {
            switch (n) {
                case 0:
                    popoverList[n].className = 'popover top'
                    break;
                case 1:
                    popoverList[n].className = 'popover bottom'
                    break;
                case 2:
                    popoverList[n].className = 'popover left'
                    break;
                case 3:
                    popoverList[n].className = 'popover right'
                    break;
                default:
                    break;
            }
        }
        btnList2[n].onmouseout = function () {
            switch (n) {
                case 0:
                    tooltipList[n].className = 'tooltip top'
                    break;
                case 1:
                    tooltipList[n].className = 'tooltip bottom'
                    break;
                case 2:
                    tooltipList[n].className = 'tooltip right'
                    break;
                case 3:
                    tooltipList[n].className = 'tooltip left'
                    break;
                default:
                    break;
            }
        }
    })(i)
}

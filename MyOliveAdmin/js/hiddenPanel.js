function getClass(className){
    return document.getElementsByClassName(className);
}
var panelList=getClass('panel-body');
var showPanelBtn=getClass('show-panel-btn');
// console.log(showPanelBtn)
// console.log(panelList[0].style.height);
// console.log(panelList)
function hiddenPanel(num){
    if(panelList[num].style.height==''||panelList[num].style.height!='0px'){
        panelList[num].style.height='0'
        panelList[num].style.padding='0px'
        showPanelBtn[num].children[0].className='fa fa-chevron-up'
    }else{
        finallyHeight=0;
        for (var z = 0; z < panelList[num].children.length; z++) {
            finallyHeight += panelList[num].children[z].offsetHeight+24;
        }
        panelList[num].style.height=finallyHeight+'px';
        panelList[num].style.padding='15px';
        showPanelBtn[num].children[0].className='fa fa-chevron-down';
    }
}
function deleteFather(abtn){
    abtn.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(abtn.parentNode.parentNode.parentNode.parentNode);
}

var alertList=getClass('alert');
function hiddenAlert(btn){
    btn.parentNode.className+=' out';
    btn.parentNode.parentNode.style.height='auto';
    setTimeout(function(){
        btn.parentNode.parentNode.removeChild(btn.parentNode)
    },200);
}
// ==UserScript==
// @name         超星课程资料下载
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  给超星中不能下载的文件添加下载按钮
// @author       jungtravor
// @match        *.chaoxing.com/coursedata*
// @match        *.chaoxing.com/mycourse/studentstudy*
// @icon         http://erya.mooc.chaoxing.com/assets/images/common/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const $ = window.jQuery;
    const dURL = 'https://cs-ans.chaoxing.com/download/';
    // 资料下载
    var zycCount = 0;
    $("div.ZYCon").find("tr").each(function(){
        console.log($(this)[0]);
        var objectID = $(this).attr("objectid");
        if(objectID && ($(this).find("a.fr.download").length===0)){
            $(this).find("div.fr.zybtn").prepend('<a href="'+dURL+objectID+'" class="fr download"></a>');
            zycCount++
        }
    });
    if(zycCount) console.log("总共更改"+zycCount+"处");
    // 课件下载
    var iframeCount = 0;
    var interval = setInterval(function(){
        if(!$("#qqqq")) clearInterval(interval);
        var a = $("#iframe").contents().find(".ans-attach-ct iframe").length;
        if(a==0) return;
        var count = 0;
        $("#iframe").contents().find(".ans-attach-ct iframe").each(function(){
            var data = JSON.parse($(this).attr('data'));
            var objectid = data.objectid;
            if(objectid&&$(this).parent().find("#hk4d").length==0){
                var bt = '<a id="hk4d" href="'+dURL+objectid+'"><button style="float:right;cursor:pointer;background-color: #7C98FF;color:#FFFFFF;border:none;height:2rem;width:5rem;margin-bottom:1rem;">下载</button></a>';
                $(this).before(bt);
                iframeCount++;
            }
        })
    }, 1000);
})();

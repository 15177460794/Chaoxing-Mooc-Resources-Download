// ==UserScript==
// @name         学习通资源下载
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  下载学习通“章节”模块中的视频、PPT等资源。
// @author       Reviona
// @match        *://*/mycourse/studentstudy?*
// @icon         https://www.google.com/s2/favicons?domain=chaoxing.com
// @grant        none
// ==/UserScript==

(function()
    {
    var download = utils_1.CssBtn(utils_2.createBtn("下载资源",, "cx-btn"));
    download.style.background = "#999999";
    download.onclick = function () {
        utils_2.get("https://cs-ans.chaoxing.com/download/" + _this.task.taskinfo.property.objectid, function (data) {
            var json = JSON.parse(data);
            prompt("如果打开下载失败，请复制下面链接手动下载", json.download);
            window.open(json.download);
        }).error(function () {
            alert("资源信息获取失败");
})();
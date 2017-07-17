/**
 * Created by wwb on 2017/5/18.
 */
var oLink_a = document.getElementById("link-a");
var oLink_b = document.getElementById("link-b");
oLink_a.onclick = function(){
    this.innerHTML = "我被点击了！"
    oLink_b.innerHTML = "盒子1被点击了"
};
oLink_a.onmouseout = function () {
    this.innerHTML = "我是盒子A"
    oLink_b.innerHTML = "我是盒子B"
};
oLink_b.onclick = function(){
    this.innerHTML = "我被点击了！"
    oLink_a.innerHTML = "盒子2被点击了"
};
oLink_b.onmouseout = function () {
    this.innerHTML = "我是盒子B"
    oLink_a.innerHTML = "我是盒子A"
};
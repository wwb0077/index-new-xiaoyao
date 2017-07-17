/**
 * Created by wwb on 2017/7/9.
 */
var aNumDiv = document.querySelectorAll("#time_roll ul li.num div"),
    aFirst = document.querySelectorAll("#time_roll ul li.num div span.first"),
    aSecond = document.querySelectorAll("#time_roll ul li.num div span.second"),
    length_r = aNumDiv.length,
    goudan = true,
    lastStr = "";
setInterval(fnb(),1000);
function fnb() {
    var nowTime = new Date(),//当前日期对象
        hh = nowTime.getHours(),//时
        mm = nowTime.getMinutes(), //分
        ss = nowTime.getSeconds();//秒
    //时间补0
    hh = toTwo(hh);
    mm = toTwo(mm);
    ss = toTwo(ss);
    var str = hh + mm + ss;//讲时分秒拼接成一个长度为 6 的字符串
    if ( goudan ){
        for (var i = 0; i < length_r; i++) {
            aNumDiv[i].i = i;
            aFirst[i].className = "first l"+str.charAt(i);
        }
        goudan = false;
    }else{
        for (i = 0; i < length_r; i++) {
            aSecond[i].className = "second l"+str.charAt(i);
        }
        for (i = 0; i < length_r; i++) {
            if ( lastStr.charAt(i) !== str.charAt(i) ){
                move( aNumDiv[i] , "top" , -60 , 5 , function () {
                    this.style.top = '0px';
                    aFirst[this.i].className = "first l"+str.charAt(this.i);
                }  );
            }
        }
    }
    lastStr = str;
    return fnb;
}
//运动框架
function move( obj , attr , endW , speed , callback ) {
    window.requestAnimationFrame = window.requestAnimationFrame || function (fn) {return setTimeout(fn , 1000/60)};
    window.cancelAnimationFrame = window.cancelAnimationFrame || clearTimeout;
    var cssJson = obj.currentStyle || getComputedStyle(obj);
    var startW = parseFloat(cssJson[attr]);
    var flag = startW > endW;
    if ( flag )speed = -speed;
    (function fn(){
        startW += speed;
        (flag?startW <= endW:startW >= endW)?startW = endW:requestAnimationFrame(fn);
        obj.style[attr] = startW+'px';
        if( startW === endW ){
            callback && callback.call(obj);
        }
    })();
}
//跳动的时间
var aNum = document.querySelectorAll("#time_Jumpy ul li.num"),
    length = aNum.length;
setInterval(fna(),1000);
function fna() {
    var nowTime = new Date(),//当前日期对象
        hh = nowTime.getHours(),//时
        mm = nowTime.getMinutes(), //分
        ss = nowTime.getSeconds();//秒
    //时间补0
    hh = toTwo(hh);
    mm = toTwo(mm);
    ss = toTwo(ss);
    var str = hh + mm + ss;//讲时分秒拼接成一个长度为 6 的字符串
    //循环，让str的每一位 对应 aNum的每一个
    for (var i = 0; i < length; i++) {
        //var index = str.charAt(i);//获取str的第i位的字符
        aNum[i].className = "num l"+str.charAt(i);
        //                console.log(aNum[i]);
    }
    return fna;
}
//倒计时
var endDate = new Date(2017,9);//目标时间，2017年10月01日 00:00:00
var oBox = document.getElementById("timer_end");
setInterval(function () {
    var nowDate = new Date();//当前时间
    var time = endDate - nowDate;//得到相差的毫秒数
    var dd = Math.floor(time/(1000*60*60*24));//天
    var hh = Math.floor(time/(1000*60*60)) % 24;//时
    var mm = Math.floor(time/(1000*60)) % 60;//分
    var ss = Math.floor(time/1000) % 60;//秒
    hh = toTwo(hh);
    mm = toTwo(mm);
    ss = toTwo(ss);
    oBox.innerHTML = "距离<span style='color: red'>国庆</span>还有"+dd+"天"+hh+"时"+mm+"分"+ss+"秒";
},1000);

//****//  公共函数 始终将时分秒保持2位数
function toTwo( n ) {
    return n<10?"0"+n:n+"";
}
//*****//
//世界世界
var aSpan = document.querySelectorAll("#time_box p span");
setInterval(fn(),1000);
function getDate( time ){
    var date = new Date( time );
    var MM = date.getMonth() + 1,
        DD = date.getDate(),
        hh = date.getHours(),
        mm = date.getMinutes(),
        ss = date.getSeconds();
    MM = toTwo(MM);
    DD = toTwo(DD);
    hh = toTwo(hh);
    mm = toTwo(mm);
    ss = toTwo(ss);
    return {
        YY : date.getFullYear(),
        MM : MM,
        DD : DD,
        hh : hh,
        mm : mm,
        ss : ss
    }
}
function fn() {
    var nowDate = new Date();
    var UTCDate = nowDate.getTime() + nowDate.getTimezoneOffset()*60*1000;
    var arr = [
        getDate(UTCDate + 8*60*60*1000),//北京
        getDate(UTCDate + -5*60*60*1000),//纽约
        getDate(UTCDate + 60*60*1000),//马德里
        getDate(UTCDate + 2*60*60*1000),//开罗
        getDate(UTCDate + 3*60*60*1000),//莫斯科
        getDate(UTCDate + 9*60*60*1000),//东京
        getDate(UTCDate + 10*60*60*1000)//悉尼
    ];
    for (var i = 0; i < 7; i++) {
        var data = arr[i];
        aSpan[i].innerHTML = data.YY+"年"+data.MM+"月"+data.DD+"日 "+data.hh+"时"+data.mm+"分"+data.ss+"秒";
    }
    return fn;
}
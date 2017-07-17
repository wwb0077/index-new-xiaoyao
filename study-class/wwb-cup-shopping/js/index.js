window.onload=function(){
    //获取按钮：
    var wrap_ol = document.getElementById('main-btn');
    //在文档中去获取元素，通过标签名方法('标签名')
    var aLi = wrap_ol.getElementsByTagName('li');
    //alert(aLi.length); 个数
    var num = 0;
    var oldLi = aLi[num];
    //获取图片 main-banner
    var wrap_banner = document.getElementById('main-banner');
    var list_img = wrap_banner.getElementsByTagName('li');
    var oldImg = list_img[num];
    var time;

    for (var i = 0; i < 3; i++) {//for循环 (初始值;判断;步幅)i++每次让i加1
        aLi[i].index = i; //自定义属性 索引值
        /**
         aLi[i].onclick = function(){//匿名函数
        **/
        aLi[i].onmouseover = function () {
            clearInterval(time);//清楚定时器；
            //alert(i);
            //this 谁触发此函数 this 就指向谁
            //aLi[2];
            num = this.index;
            run();
        };
        aLi[i].onmouseout = function () {
            autoPlay();
        }
    }
    function run() {//函数封装
        oldLi.className = '';
        aLi[num].className = 'active';
        oldLi = aLi[num];//更新 oldLi
        oldImg.className = '';//图片
        list_img[num].className = 'active';
        oldImg = list_img[num];//更新oldImg
    }
    //自动轮播
    autoPlay();
    function autoPlay() {
        time = setInterval(function () {
            run();
            num++;//每次让num加1
            if (num == 3) {
                num = 0;
            }//如果（）里面的内容是真的，才会执行{}里面的代码
        },1000);//设置定时器setInterval(函数,1000毫秒)每1000毫秒执行一次里面的函数
    }

    //////////////////////////////////b-wrap//////////////
    var left_time;
    var oWrap = document.getElementById('b-wrap');
    var	b_banner = document.getElementById('b-banner'),
        b_content = document.getElementById('b-content'),
        b_btn = oWrap.getElementsByTagName('a');
    var number = 0;
    function left_run(){
        number++;
        if (number > 0) {
            number = -5;
            b_content.style.transition = 'none';
            b_content.style.left = number*228+'px';

            setTimeout(function(){
                number = -4;
                b_content.style.transition = 1+'s';
                b_content.style.left = number*228+'px';
            },200)
        } else{
            setTimeout(function(){
                b_content.style.transition = 1+'s';
                b_content.style.left = number*228+'px';
            },200)
        }
    }
    function right_run(){
        number--;
        if(number<-5){
            number = 0;
            b_content.style.transition = 'none';
            b_content.style.left = number*228+'px';
            setTimeout(function(){
                number = -1;
                b_content.style.transition = 1+'s';
                b_content.style.left = number*228+'px';
            },200)
        }else {
            setTimeout(function(){
                b_content.style.transition = 1+'s';
                b_content.style.left = number*228+'px';
            },200)
        }
    }
    b_btn[0].onclick = function () {
        left_run();
    };
    b_btn[1].onclick = function () {
        right_run();
    };
    b_autoplay();
    function b_autoplay(){
        left_time = setInterval(function(){
            left_run();
        },1500);
    }
    //		right_time = setInterval(function(){
    //			right_run();
    //		},1500);
    //清楚定时器
    b_banner.onmouseover = function(){
        clearInterval(left_time);
    };
    b_banner.onmouseout = function(){
        b_autoplay();
    };
};